import url from 'url'
import toHttpResponse from '../api/http-errors-response.mjs';
import { deleteGroup, editGroup } from '../../data-mem/seca-data-mem.mjs';
import { get } from 'http';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export default function(SERVICE){
    return{
        homePage: homePage,
        popularEventsPage: WithoutToken(popularEventsPage),
        searchEventsPage: WithoutToken(searchEventsPage),
        oneEvent: WithoutToken(oneEvent),
        registerPage: registerPage,
        createUser: WithoutToken(createUser),
        tryLogin: WithoutToken(tryLogin),
        homeUser: WithToken(userHome),
        logout: logout,
        createGroup: WithToken(createGroup),
        createNewGroup: WithToken(createNewGroup), 
        getGroup : WithToken(getGroup),
        deleteGroup : WithToken(deleteGroup),
        editGroup : WithToken(editGroup),
        editingGroup : WithToken(editingGroup),
        addEvent : WithToken(addEvent),
        removeEvent : WithToken(removeEvent),
        loginPage: loginPage
    }

    function logout(req, rsp){ 
        //estupidez = undefined
        req.logout((err) => { 
            //estupidez = undefined
            rsp.redirect('../public/home')
          }) 
        //rsp.redirect('../public/home')
    }

    function loginPage(req, rsp){
        rsp.render('login')
    }

    async function homePage(req, rsp) {
        try {
            const res = await SERVICE.getEvents(3, 1)
            rsp.render('home', { popularEvents : res, flag : req.user})
            } catch (e) {
            const response = toHttpResponse(e);
            rsp.status(response.status).json(response.body);
            console.log(e);
        } 
    }


    async function popularEventsPage(req, rsp){
        const limit = req.query.limit ? Number(req.query.limit) : undefined
        const page = req.query.page ? Number(req.query.page) : undefined
        const events = await SERVICE.getEvents(limit, page)
        return {name: 'Events/popularEvents', data: { popularEvents : events, flag : req.user}}
    }

    async function searchEventsPage(req, rsp){
        const limit = req.query.limit ? Number(req.query.limit) : undefined
        const page = req.query.page ? Number(req.query.page) : undefined
        const name = req.query.eventName;
        let events;
        if(name == undefined){
            events = await SERVICE.getEvents(limit, page);
        }else{
            events = await SERVICE.getEventsByName(limit, page, name);
        }
        return {name: 'Events/searchEvents', data: { searchedEvents : events, flag : req.user}}
    }

    async function oneEvent(req, rsp){
        const id = req.params.id
        const event = await SERVICE.getEventDetails(id)
        let groups;
        if(req.user){
            groups = await SERVICE.getGroups(req.user.token)
        }   
        return {name: 'Events/oneEvent', data: { oneEvent : event, flag : req.user, groups : groups}}
    }

    async function registerPage(req, rsp){
        rsp.render('createUser')
    }

    async function createUser(req, rsp){
        const name = req.body.username
        const pass = req.body.password
        const newUser = await SERVICE.createUser(name, pass)
        const userVerified = {
            username: newUser.createUser.username,
            token: newUser.id
        }
        req.login(userVerified, () => rsp.redirect('./Userhome'))
    }

    async function tryLogin(req, rsp){
        const name = req.body.username
        const pass = req.body.password
        const user = await SERVICE.tryLogin(name, pass)
        const userVerified = {
            username: user._source.username,
            token: user._id
        }
        req.login(userVerified, () => rsp.redirect('./Userhome'))
    }

    async function userHome(req, rsp){
        console.log(req.token) 
        const groupsUser = await SERVICE.getGroups(req.token)
        return {name: 'public/UserHome', data: { groupsUser: groupsUser}}    
    }

    async function createGroup(req, rsp){
        rsp.render('createGroup')
    }

    async function createNewGroup(req, rsp){
        const name = req.body.groupName
        const description = req.body.groupDescription

        let group = {
            name: name,
            description: description
        }
        await SERVICE.createGroup(req.token, group)
        rsp.redirect('./Userhome')
    }

    async function getGroup(req, rsp){
        const id = req.params.id
        const group = await SERVICE.getGroup(req.token, id)
        return {name: 'oneGroup', data: { oneGroup: group, groupId : id}}
    }

    async function deleteGroup(req, rsp){
        const id = req.params.id
        await SERVICE.deleteGroup(req.token, id)
        rsp.redirect('../Userhome')
    }

    async function editGroup(req, rsp){
        const id = req.params.id
        const group = await SERVICE.getGroup(req.token, id)
        return {name: 'editGroup', data: { editGroup: group}}
    }

    async function editingGroup(req, rsp){
        const id = req.params.id
        const name = req.body.groupName
        const description = req.body.groupDescription

        let group = {
            name: name,
            description: description
        }
        await SERVICE.editGroup(req.token, id, group)
        rsp.redirect('../Userhome')
    }

    async function addEvent(req, rsp){
        const id = req.body.groupId
        const event = req.body.eventId

        let eventToAdd = {
            eventId : event
        }
        await SERVICE.addEvent(req.token, id, eventToAdd)
        rsp.redirect('./oneGroup/' + id)
    }

    async function removeEvent(req, rsp){
        const idGroup = req.params.id
        const idEvent = req.body.eventId

        await SERVICE.removeEventFromGroup(req.token, idGroup, idEvent)
        rsp.redirect('../oneGroup/' + idGroup)
    }

    function View(name, data) {
        this.name = name;
        this.data = data;
      }


    function WithoutToken(handler) {
        return async function (req, rsp) {
            try {
                let body = await handler(req, rsp)
                if(body)
                    rsp.render(body.name, body.data) //name is the handler's path and data is if there is any data to send
            } catch (e) {
                const response = toHttpResponse(e)
                rsp.status(response.status).json(response.body)
                console.log(e)
            }
        }
    }

    function WithToken(handler){
        return async function(req, rsp){
            try{
                req.token = req.user.token
                let body = await handler(req, rsp)
                if(body) {
                    rsp.render(body.name , body.data)
                }
            }catch(e){
                const response = toHttpResponse(e)
                rsp.status(response.status).json(response.body)
                console.log(e)
            }
        }
    }
}