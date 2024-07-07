import uriManager from "./uri-manager.mjs";
import {get, post, del, put} from './fetch-wrapper.mjs'
import { randomUUID } from 'crypto'
import errors from '../../errors.mjs'


export default async function(index = 'users'){

    const URI_MANAGER = await uriManager(index)

    return{
        GetUser,
        createUser,
        GetUserForLogin,
    }

    async function GetUserForLogin(name, pass){
        let getUser = await get(URI_MANAGER.getAll())

        getUser = getUser.hits.hits.find(user => user._source.username == name && user._source.password == pass)

        //if(getUser.found == false) getUser = undefined
        return getUser
    }


    async function GetUser(token){
        let getUser = await get(URI_MANAGER.getAll())

        getUser = getUser.hits.hits.find(user => user._id == token)

        //if(getUser.found == false) getUser = undefined
        return getUser
    }

    async function createUser(userToCreate, passUser){

        let CreateUser = {
            username: userToCreate,
            password:passUser
            //token: randomUUID(),
            //groups: []
        }

        const users = await get(URI_MANAGER.getAll())

        users.hits.hits.forEach(user => {
            if(user._source.username == userToCreate) throw errors.SAME_USER()
        })
        
        const UserCreated = await post(URI_MANAGER.create(), CreateUser)
        
        return {id: UserCreated._id, createUser: CreateUser}
    }

}