import {createAction} from 'store/helper';
import {Http} from 'common/utils'
import {GET_IMAGE_QUERY} from './schema'


export const GET_IMAGE_REQUEST = "GET_IMAGE_REQUEST";
export const GET_IMAGE_SUCCESS = "GET_IMAGE_SUCCESS";
export const GET_IMAGE_FAIURE = "GET_IMAGE_FAIURE";
export const RESET_SEARCH_RESULT = "RESET_SEARCH_RESULT"


export const getImagesRequest = createAction(GET_IMAGE_REQUEST, 'loginId');
export const getImagesSuccess = createAction(GET_IMAGE_SUCCESS, 'loginId', 'response');
export const getImagesFailure = createAction(GET_IMAGE_FAIURE, 'loginId', 'error');
export const resetSearch = createAction(RESET_SEARCH_RESULT, 'loginId');


export const getNASAImages = (loginId, variables) => {
    return async (dispatch) =>{
        dispatch(getImagesRequest(loginId));
        return Http.request(GET_IMAGE_QUERY, variables).then(({getImages})=>{
            dispatch(getImagesSuccess(loginId, {...getImages, ...variables}));
        }).catch((error) =>{
            const errors = error?.response?.errors;
            dispatch(getImagesFailure(loginId, errors));
        })
    }
}
