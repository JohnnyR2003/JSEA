
import { randomUUID } from 'crypto'
import errors from '../errors.mjs'

export let users = []

export async function GetUser(token) { 
    let user = users.find(user => user.token == token)
    //if (user == null) throw 'User not found'
    return user
}

async function NextId(){
    let maxId = 0
    let length = users.length
    if(length == 0) 
        return maxId
    else 
        maxId = length
    return maxId
}

export async function createUser(userToCreate) {
    //console.log(users)
    let sameName = users.find(user => user.username == userToCreate)
    //console.log(sameName)
    if (sameName != null) throw errors.SAME_USER()

    let newId = await NextId();

    let newUser = {
        id: newId,
        token: randomUUID(),
        username: userToCreate,
        groups: []
    }

    users.push(newUser)
    /*console.log("....................")
    console.log(users)*/
    return newUser
}
