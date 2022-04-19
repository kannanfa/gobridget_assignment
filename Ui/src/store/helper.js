/**
 * createAction is part of helper function to create action inmore readeable manner
 * @param {string} type -   Action type for this action
 * @param {any} ...argsNames - List of additional parameter you wan to pass along while you dispatch
 * @returns {Function}
 */
export function createAction(type, ...argsNames){
    return function(...args){
        let action = {type };
        argsNames.forEach((value, index)=>{
            action[argsNames[index]] = args[index]
        })
        return action;
    }

}