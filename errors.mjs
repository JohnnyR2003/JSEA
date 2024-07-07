export const ERROR_CODES = {
    INVALID_ARGUMENT: 1,
    GROUP_NOT_FOUND: 2,
    USER_NOT_FOUND: 3,
    NOT_AUTHORIZED: 4,
    SAME_USER: 5
}

export default {
    INVALID_ARGUMENT: argName => {
        return new Error(ERROR_CODES.INVALID_ARGUMENT, `Invalid argument ${argName}`)
    },
    NOT_FOUND: (what, who) => { 
        return new Error(ERROR_CODES.GROUP_NOT_FOUND,`${what} not found ${who}`)
    },
    USER_NOT_FOUND: (what) => { 
        return new Error(ERROR_CODES.USER_NOT_FOUND,`User not found`)
    },
    NOT_AUTHORIZED: (who, what) => { 
        return new Error(ERROR_CODES.NOT_AUTHORIZED,`${who} has no access to ${what}`)
    },
    SAME_USER: (what) => {
        return new Error(ERROR_CODES.SAME_USER, `this username is already taken by someone`)
    }
}

function Error(code, description) {
    this.code = code
    this.description = description
}