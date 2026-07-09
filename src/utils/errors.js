class BadRequest extends Error {
    constructor( status , message ) {
        super();
        this.name = "Bad Request"
        this.status = status
        this.message = message
    }
}

export { BadRequest }; 