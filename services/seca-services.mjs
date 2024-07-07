
import e from 'express'
import errors from '../errors.mjs'
//import * as secaApi from '../data/seca-data.mjs'

export default function(secaDatamem, secaUser, secaApi){
    if(!secaDatamem)
        throw new Error("secaDatamem is required")
    if(!secaUser)
        throw new Error("secaUser is required")
    if(!secaApi)
        throw new Error("secaApi is required")
    return {
        getEvents,
        getEventsByName,
        getGroups,
        getGroup,
        createGroup,
        editGroup,
        addEvent,
        getEventDetails,
        deleteGroup,
        removeEventFromGroup,
        createUser,
        tryLogin 
}

    async function tryLogin(name, pass){
        const user = await secaUser.GetUserForLogin(name, pass)
        if(!user) throw errors.USER_NOT_FOUND()
        return user
    }

    async function getEvents(limit, page){
        limit = Number(limit)
        page = Number(page)
        if(limit < 1 || page < 1)
            throw errors.INVALID_ARGUMENT('limit and/or page must be greater or equal to 1')
        let events = []
        await secaApi.makeRequest(events, secaApi.PopularEvents, limit, page)
        //console.log(events)
        return events
        //return secaDatamem.getEvents(limit, page)
    }

    async function getEventsByName(limit, page, name){
        limit = Number(limit)
        page = Number(page)
        if(limit < 1 || page < 1)
            throw errors.INVALID_ARGUMENT('limit and/or page must be greater or equal to 1')
        let event = []
        await secaApi.makeRequest(event, secaApi.getEventsByName, limit, page, 0, name)
        /*if(event.length == 0)
            throw errors.NOT_FOUND('event')*/
        return event
        //return secaDatamem.getEventsByName(limit, page, name)
    }

    async function getGroups(token){
        const user = await secaUser.GetUser(token)
        if(!user) throw errors.USER_NOT_FOUND()
        return secaDatamem.getGroups(user)
    }

    async function getGroup(token, id){
        const user = await secaUser.GetUser(token)
        if(!user) throw errors.USER_NOT_FOUND()
        return secaDatamem.getGroup(user, id)
    }

    async function createGroup(token, newGroup){
        const user = await secaUser.GetUser(token)
        //console.log(user)
        if(!user) throw errors.USER_NOT_FOUND()
        if(!isString(newGroup.name))
            throw errors.INVALID_ARGUMENT('name')

        const newGroupCreated = await secaDatamem.createGroup(user, newGroup)
        return newGroupCreated
    }

    async function addEvent(token, id, eventToAdd){
        const user = await secaUser.GetUser(token)
        //if(!user) throw errors.USER_NOT_FOUND()

        let group = await getGroup(token, id) //retorna o grupo

        let toAddGroup = {}

        let eventId = eventToAdd.eventId

        let eventDetails = await secaApi.makeRequest([], secaApi.getEventDetails, 0, 0, eventId)



        toAddGroup = {
            id: eventId,
            name: eventDetails.name,
            date: eventDetails.date,
            genre: eventDetails.genre,
            segment: eventDetails.segment,
            url: eventDetails.url
        }

        //group.events.push(toAddGroup)

        //const eventAdded = await secaDatamem.addEvent(user, group, toAddGroup)
        await secaDatamem.addEvent(user, group, toAddGroup)

        return toAddGroup
    }

    async function getEventDetails(eventId){
        //let group = await getGroup(token, id) //retorna o grupo

        let showDetails = {}

        //let event = group.events.find(event => event.id = eventId)

        //let eventName = event.name

        //let eventId = eventToAdd.eventId
        let eventDetails = await secaApi.makeRequest([], secaApi.getEventsNotById, undefined, undefined, eventId)
        console.log(eventDetails)

        showDetails = {
            id : eventDetails.id, 
            name: eventDetails.name, 
            date: eventDetails.date,
            genre: eventDetails.genre,
            subgenre: eventDetails.subgenre, 
            segment: eventDetails.segment,
            image: eventDetails.image,
            salesStart: eventDetails.salesStart,
            salesEnd: eventDetails.salesEnd,
            url: eventDetails.url
        }
        return showDetails
    }

    async function editGroup(token, id, newGroup){
        const user = await secaUser.GetUser(token)
        if(!user) throw errors.USER_NOT_FOUND()
        if(newGroup.name != '')
            if(!isString(newGroup.name))
                throw errors.INVALID_ARGUMENT('name')
        const groupEdited = await secaDatamem.editGroup(user, id, newGroup)
        return groupEdited
    }

    async function deleteGroup(token, id){
        const user = await secaUser.GetUser(token)
        if(!user) throw errors.USER_NOT_FOUND()
        const groupDeleted = await secaDatamem.deleteGroup(user, id)
        return groupDeleted
    }

    async function removeEventFromGroup(token, groupId, eventId){
        const user = await secaUser.GetUser(token)
        if(!user) throw errors.USER_NOT_FOUND()
        const eventRemoved = await secaDatamem.removeEventFromGroup(user, groupId, eventId)
        return eventRemoved
    }

    async function createUser(newUser, pass){
        
        if(!isString(newUser) || !isString(pass))
            throw errors.INVALID_ARGUMENT('username')
        const newUserCreated = await secaUser.createUser(newUser, pass)
        return newUserCreated
    }

    function isString(s){
        return typeof s === 'string' && s != ""
    }
}