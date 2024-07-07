function HttpErrorResponse(status, e){
    this.status = status
    this.body = {
        code: e.code,
        error: e.description
    }
}

const HTTP_STATUS_CODES = {
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNAUTHOTIZED: 401,
    INTERNAL_SERVER_ERROR: 500
}

export default function(e){
    console.log("okok")
    console.log(e.code)
    console.log("okok")
    switch(e.code){
        case 1: return new HttpErrorResponse(HTTP_STATUS_CODES.BAD_REQUEST, e)
        case 2: return new HttpErrorResponse(HTTP_STATUS_CODES.NOT_FOUND, e)
        case 3: return new HttpErrorResponse(HTTP_STATUS_CODES.NOT_FOUND, e)
        case 4: return new HttpErrorResponse(HTTP_STATUS_CODES.UNAUTHOTIZED, e)
        case 5: return new HttpErrorResponse(HTTP_STATUS_CODES.BAD_REQUEST, e)
        default: return new HttpErrorResponse(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, e)
    }
}