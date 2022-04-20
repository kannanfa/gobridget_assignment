import {createAction} from 'store/helper';
import {Http} from 'common/utils'
import {GET_IMAGE_QUERY} from './schema'


export const GET_IMAGE_REQUEST = "GET_IMAGE_REQUEST";
export const GET_IMAGE_SUCCESS = "GET_IMAGE_SUCCESS";
export const GET_IMAGE_FAIURE = "GET_IMAGE_FAIURE";
export const RESET_SEARCH_RESULT = "RESET_SEARCH_RESULT"


export const getImagesRequest = createAction(GET_IMAGE_REQUEST, 'loginId', 'input');
export const getImagesSuccess = createAction(GET_IMAGE_SUCCESS, 'loginId', 'response');
export const getImagesFailure = createAction(GET_IMAGE_FAIURE, 'loginId', 'error');
export const resetSearch = createAction(RESET_SEARCH_RESULT, 'loginId');


/**
 * getNASAImages - This function used for fetch image from the NASA API and push the response to the store. 
 * @param {String} loginId - User login id 
 * @param {q:String, from:Int}
 * @returns {Promise}
 */

export const getNASAImages = (loginId, variables) => {
    return async (dispatch) =>{
        dispatch(getImagesRequest(loginId, variables));
        return Http.request(GET_IMAGE_QUERY, variables).then(({getImages})=>{
            dispatch(getImagesSuccess(loginId, {...getImages, ...variables}));
        }).catch((err) =>{
            const errors = err?.response?.errors;
            const error = errors && errors.length ? errors[0]:errors
            dispatch(getImagesFailure(loginId, error));
        })
    }
}
