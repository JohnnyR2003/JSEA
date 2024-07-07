import uriManager, { URI_PREFIX } from "./uri-manager.mjs";
import {get, post, del, put} from './fetch-wrapper.mjs'
import { randomUUID } from 'crypto'
import secaUser from './seca-elastic-users.mjs'
import errors from '../../errors.mjs'



export default async function(){
    
    const URI_MANAGER = await uriManager('groups')
    //const URI_GROUP = await uriManager('nextID')

    return{
        getGroups,
        createGroup,
        getGroup,
        editGroup,
        deleteGroup,
        addEvent,
        removeEventFromGroup
    }

    /*async function nextId(){
        let maxId = 0

        const users = await get(URI_MANAGER.getAll())

        users.hits.hits.forEach(user => {
            user._source.groups.forEach(group => {
                if(group.id >= maxId)
                    maxId = group.id+1
            })
        })

        return maxId
    }*/

    /*async function getGroups(user){
        const groups = user._source
    
        return groups.groups
    }*/

    async function getGroups(user) {
        const uri = `${URI_MANAGER.getAll()}?q=userId:${user._id}`
        return get(uri)
            .then(body => body.hits.hits.map(createTaskFromElastic))
    }

    async function getGroup(user, idGroup){
        /*const groups = user._source

        const group = groups.groups.find(group => group.id == idGroup)

        return group*/

        const group = await get(URI_MANAGER.get(idGroup)).then(createTaskFromElastic)

        if(user._id == group.userId)
            return group
        throw errors.NOT_AUTHORIZED(`User ${user._id}`, `this group`)
    }

    async function createGroup(user, newGroup){

        const id = user._id
        //const source = user._source

        //let maxId = await nextId()

        let addGroup = {
            userId: id,
            //id: maxId,
            name: newGroup.name,
            description: newGroup.description,
            events: []
        }

        //maxId++

        

        //source.groups.push(addGroup)

        await post(URI_MANAGER.create(), addGroup)

        return addGroup
    }

    async function editGroup(user, id, toEdit){
        let toEditGroup = {}

        //const idUser = user._id

        let group = await getGroup(user, id)

        if(toEdit.name == '')
            toEdit.name = group.name
        if(toEdit.description == '')
            toEdit.description = group.description

        group['name'] = toEdit.name
        group['description'] = toEdit.description

        toEditGroup = {
            //id: group.id,
            userId: user._id,
            name: toEdit.name,
            description: toEdit.description,
            events: group.events
        }

        await put(URI_MANAGER.update(id), toEditGroup)

        return toEditGroup

    }

    async function deleteGroup(user, id){

        let deleted = {}

        //const idUser = user._id

        let group = await getGroup(user, id)

        deleted = {
            id: group.id,
            name: group.name,
            description: group.description,
            events: group.events
        }

        //user._source.groups = user._source.groups.filter(group => group.id != id)


        await del(URI_MANAGER.delete(id))

        return deleted
    }

    async function addEvent(user = undefined, group, toAddEvent){
        
        //const id = user._id

        const groupId = group.id

        //const groupToAdd = user._source.groups.find(group => group.id == groupId)

        /*toAddEvent = {
            //id: group.id,
            userId: user._id,
            name: group.name,
            description: group.description,
            events: group.events
        }*/

        const source = await get(URI_MANAGER.get(groupId))

        source._source.events.push(toAddEvent)

        await put(URI_MANAGER.update(groupId), source._source)

        return toAddEvent
    }

    async function removeEventFromGroup(user, groupId, eventId){

        //const id = user._id

        //const group = await getGroup(user, groupId)

        const source = await get(URI_MANAGER.get(groupId))

        const events = source._source.events

        const eventToRemove = events[eventId]

        let eventDeleted = {
            name: eventToRemove.name,
            date: eventToRemove.date,
            genre: eventToRemove.genre,
            segment: eventToRemove.segment
        }

        source._source.events.splice(eventId, 1)

        
        await put(URI_MANAGER.update(groupId), source._source)

        return eventDeleted
    }

    function createTaskFromElastic(taskElastic) {
        let task = Object.assign({id: taskElastic._id}, taskElastic._source)
        return task
    }
}