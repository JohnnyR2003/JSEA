import errors from "../../errors.mjs";
import * as mock_ticket from "./mock-ticketmaster.mjs"
import { randomUUID } from 'crypto'

export let USERS = [
    {
        id: 0,
        token: "14d72b99-48f6-48d3-94d3-5a4dcfd96c80",
        username: "first",
        groups: [{
            id: 0,
            name: "firstGroup",
            description: "just one thing",
            events: [{
                id: 0,
                name: "firstEvent",
                date: "2020-12-12",
                genre: "firstGenre",
                segment: "firstSegment"
            }]
        },
        {
            id: 1,
            name: "secondGroup",
            events: [{
                id: 1,
                name: "secondEvent",
                date: "2020-12-12",
                genre: "secondGenre",
                segment: "secondSegment"
            }]
        }]
    },
    {
        id: 1,
        token: "14d72b99-48f6-48d3-94d3-5a4dcfd96c81",
        username: "second",
        groups: []
    },
    {
        id: 2,
        token: "14d72b99-48f6-48d3-94d3-5a4dcfd96c82",
        username: "third",
        groups: []
    }
]

let NextId = USERS.length


export default function () {
    return {
        getEvents,
        getEventsByName,
        getGroups,
        getGroup,
        createGroup,
        editGroup,
        addEvent,
        deleteGroup,
        removeEventFromGroup,
        createUser
    }

    async function getEvents(limit, page){
        let listOfEvents= []
        limit = Number(limit)
        page = Number(page)
        if(limit < 1 || page < 1)
            throw errors.INVALID_ARGUMENT('limit is lower than 1 or page is lower than 1')
        
        let topEvents = mock_ticket.topEvents
        
        topEvents["_embedded"].events.forEach(event => listOfEvents.push({"Event id": event.id, "event name": event.name, "event date": event.dates['start'].localDate}));
        
        return listOfEvents
    }

    async function getEventsByName(limit, page, name){
        let eventsWithName = []
        limit = Number(limit)
        page = Number(page)
        if(limit < 1 || page < 1)
            throw errors.INVALID_ARGUMENT('limit is lower than 1 or page is lower than 1')
        
        let topEvents = mock_ticket.getEventName
        
        topEvents["_embedded"].events.forEach(event => eventsWithName.push({"Event id": event.id, "event name": event.name, "event date": event.dates['start'].localDate}));
        
        return eventsWithName
    }

    //criar funçao para o USERS.find()
    async function getGroups(token) {
        const user = searchUser(token)
        const groups = user.groups
        return groups
    }

    async function getGroup(token, idGroup) {
        let user = searchUser(token)
        let groups = user.groups
        let group = groups.find(group => group.id == idGroup)
        if (group == undefined) throw errors.NOT_FOUND('group')
        return group
    }

    async function createGroup(token, newGroup) {
        let user = searchUser(token)
        if (!isString(newGroup.name))
            throw errors.INVALID_ARGUMENT('name')

        let newId = NextGroupId(user)

        let addGroup = {
            id: newId,
            name: newGroup.name,
            description: newGroup.description,
            events: []
        }

        let groups = user.groups
        groups.push(addGroup)
        return addGroup
    }

    async function editGroup(token, idGroup, editedGroup) {
        /*let user = searchUser(token)
        let group = user.groups.find(group => group.id == idGroup)
        if(group == undefined) throw errors.NOT_FOUND('group')*/

        let group = await getGroup(token, idGroup)

        if (editedGroup.name != null)
            if (!isString(editedGroup.name))
                throw errors.INVALID_ARGUMENT('name')

        if (editedGroup.name == null)
            editedGroup.name = group.name
        if (editedGroup.description == null)
            editedGroup.description = group.description

        group['name'] = editedGroup.name
        group['description'] = editedGroup.description

        let editGroup = {
            id: group.id,
            name: editedGroup.name,
            description: editedGroup.description,
            events: group.events
        }

        return editGroup
    }

    async function addEvent(token, idGroup, eventToAdd) {

        let group = await getGroup(token, idGroup)

        let eventId = eventToAdd.eventId

        let eventDetails = mock_ticket.eventId

        let genre = eventDetails.classifications[0].genre
        let segment = eventDetails.classifications[0].segment

        let toAddGroup = {
            id: eventId,
            name: eventDetails.name,
            date: eventDetails.dates.start.localDate,
            genre: genre['name'],
            segment: segment['name']
        }

        group.events.push(toAddGroup)

        return toAddGroup
    }


    async function deleteGroup(token, idGroup) {
        //let groups = await getGroups(token)
        let group = await getGroup(token, idGroup)
        let user = searchUser(token)

        user.groups = user.groups.filter(group => group.id != idGroup)

        let deletedGroup = {
            id: group.id,
            name: group.name,
            description: group.description,
            events: group.events
        }

        return deletedGroup
    }

    async function removeEventFromGroup(token, idGroup, idEvent) {
        let group = await getGroup(token, idGroup)
        let events = group.events
        let event = events[idEvent]
        if (event == undefined) throw errors.NOT_FOUND('event')

        events.splice(idEvent, 1)

        let removedEvent = {
            id: event.id,
            name: event.name,
            date: event.date,
            genre: event.genre,
            segment: event.segment
        }

        return removedEvent
    }

    async function createUser(newUser) {
        if (!isString(newUser))
            throw errors.INVALID_ARGUMENT('username')
        let sameName = USERS.find(user => user.username == newUser)
        if (sameName != null) throw errors.SAME_USER()

        let newId = NextId;

        let createduser = {
            id: newId,
            token: randomUUID(),
            username: newUser,
            groups: []
        }

        USERS.push(createduser)
        return createduser
    }




    //Functions to help organize

    function isString(s) {
        return typeof s === 'string' && s != ""
    }

    function searchUser(token) {
        const user = USERS.find(user => user.token == token)
        if (!user) throw errors.USER_NOT_FOUND()
        return user
    }

    function NextGroupId(user) {
        let maxId = 0
        let group = user['groups'].length
        if (group == 0)
            return maxId
        else
            maxId = group
        return maxId
    }

}