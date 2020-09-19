const globalErrorHandler = class globalErrorHandler extends Error{

    constructor(message,code){
        super(message);
        this.code = code;
    }

}

module.exports = globalErrorHandler;