class BadRequest extends Error {
    constructor( status , message ) {
        super()
        this.name = "Bad Request"
        this.status = status
        this.message = message
    }
}

class Conflict extends Error {
    constructor( status , message ) {
        super()
        this.name = "Conflict"
        this.status = status
        this.message = message
    }
}

export { BadRequest , Conflict }; 