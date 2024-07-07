import { equal } from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http'
import chaiSubset from 'chai-subset';
//import { users } from '../data/seca-users.mjs';
import { USERS } from '../services/mock-seca-services/mock-seca-services.mjs'
import { app } from '../seca-server.mjs'
import assert from 'assert';
import * as eventsMock from '../services/mock-seca-services/mock-ticketmaster.mjs'

chai.use(chaiHttp);

describe("Test all routes and their response", function(){
  it("should create a user",async function(){
    const res = await chai.request(app)
          .post('/user/create')
          .send({username:"João_Neves1"})
    assert.equal(res.status,201)
    assert.equal(res.body.newUser.username,"João_Neves1")
    const res1 = await chai.request(app)
          .post('/user/create')
          .send({username:"António_Silva"})
    assert.equal(res1.status,201)
    assert.equal(res1.body.newUser.username,"António_Silva")           
  })

  it("shoud create a group for a user", async function(){
    const token = USERS[3].token
    const res = await chai.request(app)
        .post('/group/create')
        .set('Authorization', `Bearer ${token}`)
        .send({name: "reference gonçalo", description: "im just a test"})
    assert.equal(res.status,201)
    chai.expect(res.body.newGroup.name).to.be.equal("reference gonçalo")
    chai.expect(res.body.newGroup.description).to.be.equal("im just a test")
  })

  it("should add a event to a group", async function(){
    const token = USERS[3].token
    const res = await chai.request(app)
        .post('/group/addEvent/0')
        .set('Authorization', `Bearer ${token}`)
        .send({eventId: "Z7r9jZ1AdJ9ua"})
    assert.equal(res.status,201)
    chai.expect(res.body.addEvent.name).to.be.equal(eventsMock.eventId.name)
    chai.expect(res.body.addEvent.date).to.be.equal(eventsMock.eventId.dates.start.localDate)
    chai.expect(res.body.addEvent.genre).to.be.equal(eventsMock.eventId.classifications[0].genre.name)
    chai.expect(res.body.addEvent.segment).to.be.equal(eventsMock.eventId.classifications[0].segment.name)

  })

  it("should return the details of one group of a given user", async function(){
    const token = USERS[3].token
    const res = await chai.request(app)
        .get('/group/details/0')
        .set('Authorization', `Bearer ${token}`)
    assert.equal(res.status,200)
    chai.expect(res.body.group.name).to.be.equal("reference gonçalo")
    chai.expect(res.body.group.description).to.be.equal("im just a test")
  })
  
  it("should return all groups of a given user", async function(){
    const token = USERS[3].token
    const res = await chai.request(app)
        .get('/group')
        .set('Authorization', `Bearer ${token}`)
    assert.equal(res.status,200)
    //console.log(res.body.groups)
    assert.deepEqual(USERS[3].groups, [
      {
        id: 0,
        name: 'reference gonçalo',
        description: 'im just a test',
        events: [{
              id: "Z7r9jZ1AdJ9ua",
              name: "New Orleans Pelicans vs. Los Angeles Lakers",
              date: "2023-12-31",
              genre: "Basketball",
              segment: "Sports"
            }
          ]
        }])
  })

  it("should edit a group of a given user", async function(){
    const token = USERS[3].token
    const res = await chai.request(app)
        .put('/group/editGroup/0')
        .set('Authorization', `Bearer ${token}`)
        .send({name: "joao felix", description: "joao neves"})
    assert.equal(res.status,201)
    chai.expect(res.body.editedGroup.name).to.be.equal("joao felix")
    chai.expect(res.body.editedGroup.description).to.be.equal("joao neves")
  })

  it("should remove and event from a given group from a given user", async function(){
    const token = USERS[3].token
    const res = await chai.request(app)
        .delete('/group/removeEvent/0/0')
        .set('Authorization', `Bearer ${token}`)
    assert.equal(res.status,201)
    //como removo o adicionado testei por este metodo
    chai.expect(res.body.removedEvent.name).to.be.equal(eventsMock.eventId.name)
    chai.expect(res.body.removedEvent.date).to.be.equal(eventsMock.eventId.dates.start.localDate)
    chai.expect(res.body.removedEvent.genre).to.be.equal(eventsMock.eventId.classifications[0].genre.name)
    chai.expect(res.body.removedEvent.segment).to.be.equal(eventsMock.eventId.classifications[0].segment.name)
  })

  it("should remove the group from a given user", async function(){
    const token = USERS[3].token
    const res = await chai.request(app)
        .delete('/group/delete/0')
        .set('Authorization', `Bearer ${token}`)
    assert.equal(res.status,201)
    chai.expect(res.body.deletedGroup.name).to.be.equal("joao felix")
    chai.expect(res.body.deletedGroup.description).to.be.equal("joao neves")
  })

  it("should get the events from topEvents", async function(){
    const res = await chai.request(app)
        .get('/popularEvents')
        .query({limit:3, page:1})
    assert.equal(res.status,200)
    assert.deepEqual(res.body.length, 3)
  })

  it("should get the event by the given name", async function(){
    const res = await chai.request(app)
        .get('/searchEvent/Celtics')
        .query({limit:1, page:1})
    assert.equal(res.status,200)
    assert.deepEqual(res.body.length, 1)
  })
})




