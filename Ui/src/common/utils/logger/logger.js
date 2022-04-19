import UiError from 'common/utils/Error/Error'




/** 
 * Logger - This class help us to collect all the error happening in our application and send data feed to our backend service 
 * 
 */
class Logger{
    appVersion;
    static Logs = []

    constructor(appVersion){
        this.appVersion = appVersion;
    }
    addError = (path, errorType, errorStack, component) =>{
        const err = new UiError({
            appVersion:this.appVersion,
            path,
            errorType,
            errorStack,
            component
        })
        console.log(err)
        Logger.Logs.push(err);
    }
    errorBoundry = (errorStack, component=null) =>{
        const path = window?.location?.pathname;
        const errorType = 'ErrorBoundry';
        this.addError(path, errorType, errorStack, component);
    }
    info = (errorStack, component=null) =>{
        const path = window?.location?.pathname;
        const errorType = 'Info';
        this.addError(path, errorType, errorStack, component);
    }
    missingFields = (errorStack, component=null) =>{
        const path = window?.location?.pathname;
        const errorType = 'MandatoryFieldMissing';
        this.addError(path, errorType, errorStack, component);
    }
    transportLog = (errorStack, component=null) =>{
        const path = window?.location?.pathname;
        const errorType = 'TransportLog';
        this.addError(path, errorType, errorStack, component);
    }
    windowError = (errorStack, component=null) =>{
        const path = window?.location?.pathname;
        const errorType = 'WindowError';
        this.addError(path, errorType, errorStack, component);
    }
}
const version = process?.env?.version;
export default new Logger(version)