/** 
 * This class give the basic interface for all error object 
 * */
class UiError extends Error{
    appVersion = null;
    path=null;
    component=null;
    errorType = null;
    errorStack = null;
    constructor( appVersion, path, component, errorType, errorStack){
        super();
        this.appVersion = appVersion
        this.path=path
        this.component=component
        this.errorType = errorType
        this.errorStack = errorStack
    }
}

export default UiError;