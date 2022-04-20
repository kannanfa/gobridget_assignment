import { fromJS, Map } from 'immutable';
import { GET_IMAGE_REQUEST, GET_IMAGE_SUCCESS, GET_IMAGE_FAIURE, RESET_SEARCH_RESULT} from 'modules/NASAImage/action';


export function Images(state=Map(), action){
    switch(action.type){
        case GET_IMAGE_REQUEST:
            return state.setIn([action.loginId, 'info'], Map({
                "isLoading":true,
                ...action.input
            }));
        case GET_IMAGE_SUCCESS:
            return state.setIn([action.loginId, 'info', "isLoading"], false)
                        .setIn([action.loginId, 'info', "data"], fromJS(action.response));
        case GET_IMAGE_FAIURE:
            return state.setIn([action.loginId, 'info', "isLoading"], false)
                        .setIn([action.loginId, 'info', "error"],fromJS(action.error));
        case RESET_SEARCH_RESULT:
            return state.setIn([action.loginId, 'info',], Map({
                "isLoading":false
            }));
        default:
            return state;
    }
}