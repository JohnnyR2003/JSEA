
import toHttpResponse from './http-errors-response.mjs'

export default function (SERVICE) {

    return {
        getEvents: getEvents,
        getEventsByName: getEventsByNameInternal,
        getGroups: handleRequest(getGroupsInternal),
        getGroup: handleRequest(getGroupInternal),
        createGroup: handleRequest(createGroupInternal),
        addEvent: handleRequest(addEventInternal),
        getEventDetails: getEventDetails,
        editGroup: handleRequest(editGroupInternal),
        deleteGroup: handleRequest(deleteGroupInernal),
        removeEventFromGroup: handleRequest(removeEventFromGroupInternal),
        createUser: createUserInternal
    }

    async function getEvents(req, rsp) {
        try {
            const limit = req.query.limit ? Number(req.query.limit) : undefined
            const page = req.query.page ? Number(req.query.page) : undefined
            const events = await SERVICE.getEvents(limit, page)
            rsp.json(events)
        } catch (e) {
            const response = toHttpResponse(e)
            rsp.status(response.status).json(response.body)
            }
    }

    async function getEventsByNameInternal(req, rsp) {
        try {
            const limit = req.query.limit ? Number(req.query.limit) : undefined
            const page = req.query.page ? Number(req.query.page) : undefined
            const name = req.params.name
            const events = await SERVICE.getEventsByName(limit, page, name)
            rsp.json(events)
        } catch (e) {
            const response = toHttpResponse(e)
            rsp.status(response.status).json(response.body)
        }
    }

    async function getGroupsInternal(req, rsp) {
        const groups = await SERVICE.getGroups(req.token)
        rsp.status(200).json({
            status: `Groups of user with token ${req.token}`,
            groups: groups
        })
    }

    async function getGroupInternal(req, rsp) {
        const group = await SERVICE.getGroup(req.token, req.params.id)
        rsp.status(200).json({
            status: `Group with id ${req.params.id}`,
            group: group
        })
    }

    async function createGroupInternal(req, rsp) {
        const toCreate = {
            name: req.body.name,
            description: req.body.description,
        }

        const newGroup = await SERVICE.createGroup(req.token, toCreate)

        rsp.status(201).json({
            status: `Group with id created`,
            newGroup: newGroup
        })
    }


    async function addEventInternal(req, rsp) {
        const event = {
            eventId: req.body.eventId
        }

        const addEvent = await SERVICE.addEvent(req.token, req.params.id, event)

        rsp.status(201).json({
            status: `Event with id ${addEvent.id} added`,
            addEvent: addEvent
        })
    }


    async function getEventDetails(req,rsp){
        try {
            const eventName = req.query.eventName
            const eventDetails = await SERVICE.getEventDetails(req.params.idEvent, eventName)
            rsp.status(200).json({
                status: `Event with name ${eventDetails.name}` ,
                eventDetails: eventDetails
            })
        } catch (e) {
            const response = toHttpResponse(e)
            rsp.status(response.status).json(response.body)
        }
   }

    async function editGroupInternal(req, rsp) {
        const toEdit = {
            name: req.body.name,
            description: req.body.description
        }

        const editedGroup = await SERVICE.editGroup(req.token, req.params.id, toEdit)

        rsp.status(201).json({
            status: `Group with id ${editedGroup.id} edited`,
            editedGroup: editedGroup
        })
    }

    async function deleteGroupInernal(req, rsp) {
        const deletedGroup = await SERVICE.deleteGroup(req.token, req.params.id)

        rsp.status(201).json({
            status: `Group with id ${deletedGroup.id} deleted`,
            deletedGroup: deletedGroup
        })
     }

    async function removeEventFromGroupInternal(req, rsp) {
        const removedEvent = await SERVICE.removeEventFromGroup(req.token, req.params.id, req.params.eventid)

        rsp.status(201).json({
            status: `Event with name ${removedEvent.name} removed`,
            removedEvent: removedEvent
        })
     }

    async function createUserInternal(req, rsp) {
        try {
            const name = req.body.username

            const newUser = await SERVICE.createUser(name)

            rsp.status(201).json({
                status: `User with id ${newUser.token} created`,
                newUser: newUser
            })
        } catch (e) {
            console.log(e)
            const response = toHttpResponse(e)
            rsp.status(response.status).json(response.body)
        }


    }


    function handleRequest(handler) {
        return async function (req, rsp) {
            const BEARER_STR = "Bearer "
            const tokenHeader = req.get("Authorization")
            if (!(tokenHeader && tokenHeader.startsWith(BEARER_STR) && tokenHeader.length > BEARER_STR.length)) {
                rsp
                    .status(401)
                    .json({ error: `Invalid authentication token` })
                return
            }
            req.token = tokenHeader.split(" ")[1]
            try {
                let body = await handler(req, rsp)
                rsp.json(body)
            } catch (e) {
                const response = toHttpResponse(e)
                rsp.status(response.status).json(response.body)
                console.log(e)
            }
        }
    }
}
