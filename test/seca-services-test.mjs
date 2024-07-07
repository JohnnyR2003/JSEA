
import assert from 'assert';
import * as events_mock from '../services/mock-seca-services/mock-ticketmaster.mjs'
import * as datauser from '../data/seca-users.mjs'
import * as datamem from '../data-mem/seca-data-mem.mjs'
import services from '../services/seca-services.mjs'

const service = services(datamem, datauser, events_mock)

describe("Test seca-services", function(){

    it("should create an user", async function(){
        let newUser = "João_Neves"
        let pass = "joao"
        await service.createUser(newUser, pass)
        assert.deepEqual(datauser.users[0].username, newUser)
    })

    it("should create a group for a user", async function(){
        const token = datauser.users[0].token
        const newGroup = {
            name: "reference gonçalo",
            description: "im just a test"
        }
        const group = await service.createGroup(token, newGroup)
        assert.deepEqual(group.name, newGroup.name)
        assert.deepEqual(group.description, newGroup.description)
        assert.deepEqual(group.events, [])
        const newGroup2 = {
            name: "reference gonçalo 2",
            description: "im just a test 2"
        }
        const group2 = await service.createGroup(token, newGroup2)
        assert.deepEqual(group2.name, newGroup2.name)
        assert.deepEqual(group2.description, newGroup2.description)
        assert.deepEqual(group2.events, [])
    })

    
    it("should get all groups from a user", async function(){
        const token = datauser.users[0].token
        const groups = await service.getGroups(token)
        assert.equal(groups.length, 2)
    })


    it("should get a specific group from a user", async function(){
        const token = datauser.users[0].token
        let groupId = 0
        const group = await service.getGroup(token, groupId)
        assert.equal(group.name,"reference gonçalo")
        assert.equal(group.description,"im just a test")
    })

    it("should edit the given group id", async function(){
        const token = datauser.users[0].token
        let groupId = 0
        const newGroup = {
            name: "reference gonçalo 3",
            description: "im just a test 3"
        }
        const group = await service.editGroup(token, groupId, newGroup)
        assert.equal(group.name, newGroup.name)
        assert.equal(group.description, newGroup.description)
    })
    

    it("should add an event to a group", async function(){
        const token = datauser.users[0].token
        let groupId = 0
        let eventId = {eventId:"Z7r9jZ1AdJ9ua"}
        const event = await service.addEvent(token, groupId, eventId)
        assert.deepEqual(event.name, events_mock.eventId.name)
    })


    it("should delete an event from a group", async function(){
        const token = datauser.users[0].token
        let groupId = 0
        let eventId = 0
        const event = await service.removeEventFromGroup(token, groupId, eventId)
        assert.deepEqual(event.name, "New Orleans Pelicans vs. Los Angeles Lakers")
    })

    it("should remove group from a user", async function(){
        const token = datauser.users[0].token
        let groupId = 0
        const group = await service.deleteGroup(token, groupId)
        assert.deepEqual(group.name,"reference gonçalo 3")
        assert.deepEqual(group.description,"im just a test 3")
    })
    

    it("should get all events with a given limit and page", async function(){
        let limit = 3
        let page = 1
        const events = await service.getEvents(limit, page)
        assert.equal(events.length, 3)
    })


    it("should get events by name", async function(){
        let limit = 1
        let page = 1
        const events = await service.getEventsByName(limit, page, "Boston Celtics vs. Milwaukee Bucks")
        assert.equal(events.length, 1)
    })

    
})