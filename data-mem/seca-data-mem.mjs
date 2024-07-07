import * as data from '../data/seca-data.mjs'
import * as user from '../data/seca-users.mjs'
import errors from '../errors.mjs'

const ids = []
let maxId = 0

/*async function getNextId(userToken){
    //let maxId = 0
    const everyUser = user.users
    let token = everyUser.find(user => user['token'] == userToken)
    let group = token['groups'].length
    if(group == 0) 
        return maxId
    else 
        maxId = group
    return maxId
}*/

/*export async function getEvents(limit, page){
    let events = []
    await data.makeRequest(events, data.PopularEvents, limit, page)
    return events
}*/

/*export async function getEventsByName(limit, page, name){
    let eventsWithName = []
    await data.makeRequest(eventsWithName, data.getEventsByName, limit, page, 0, name)
    return eventsWithName
}*/

export async function getGroups(user){
    let groups = user.groups
    //console.log(groups)
    return groups
}

export async function getGroup(user, id){
    let group = user.groups.find(group => group.id == id)
    if(group == undefined) throw errors.NOT_FOUND('group', 'or your not AUTHORIZED')
    return group
}

export async function addEvent(user, group, toAddGroup){

    /*let toAddGroup = {}

    let eventId = eventToAdd.eventId

    let group = await getGroup(user, id)

    //let eventDetails = await data.makeRequest([], data.getEventDetails, 0, 0, eventId)

    toAddGroup = {
        id: eventId,
        name: eventDetails.name,
        date: eventDetails.date,
        genre: eventDetails.genre,
        segment: eventDetails.segment
    }*/

    group.events.push(toAddGroup)
    return toAddGroup
}

export async function editGroup(user, id, toEdit){
    let toEditGroup = {}

    let group = await getGroup(user, id)


    if(toEdit.name == null)
        toEdit.name = group.name
    if(toEdit.description == null)
        toEdit.description = group.description

    group['name'] = toEdit.name
    group['description'] = toEdit.description

    toEditGroup = {
        id: group.id,
        name: toEdit.name,
        description: toEdit.description,
        events: group.events
    }

    return toEditGroup

}

export async function deleteGroup(user, id){

    let deleted = {}

    let group = await getGroup(user, id)

    deleted = {
        id: group.id,
        name: group.name,
        description: group.description,
        events: group.events
    }

    user.groups = user.groups.filter(group => group.id != id)
    return deleted
}

export async function createGroup(user, newGroup){
    let addGroup ={}
    let obj = {}

    //let getNewId = await getNextId(user.token)

    addGroup = {
        id: maxId,
        name: newGroup.name,
        description: newGroup.description,
        events: []
    }

    maxId++

    user.groups.push(addGroup)
    obj[user.token] = user.groups
    /*console.log(obj)
    console.log("-----------------")*/
    ids.push(obj)
    /*console.log(ids)*/
    return addGroup

}

export async function removeEventFromGroup(user, groupId, eventId){
    let group = await getGroup(user, groupId)
    let events = group.events
    let event = events[eventId]

    /*console.log(group)
    console.log("..................")
    console.log(events)
    console.log("..................")
    console.log(event)*/

    let eventDeleted = {
        name: event.name,
        date: event.date,
        genre: event.genre,
        segment: event.segment
    }

    events.splice(eventId, 1)

    //console.log(group)
    return eventDeleted
}

