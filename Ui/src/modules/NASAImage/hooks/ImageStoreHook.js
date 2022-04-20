import { List } from "immutable";
import {UserContext} from 'common/context'
import  { useContext } from 'react'
import  { useSelector } from 'react-redux'


/**
 * useImageStore - This hook used as a common hook to access image data from redux store. 
 * @returns {currentPage, prev, next, isLoading, images, searchTex}
 */
const useImageStore = () =>{

    const userInfo = useContext(UserContext);
    const images = useSelector (state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'images'], List()));
    const searchText = useSelector (state => state.getIn(['Images', userInfo.loginId,'info', 'q'], null));
    const currentPage = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'from'], null));
    const error = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'error'], List()));
    const prev = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'buttons', 'prev', 'page' ], null));
    const next = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'buttons', 'next', 'page'], null));
    const isLoading = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'isLoading'], false));

    

    return {currentPage, prev, next, isLoading, images, searchText, error}
}

export default useImageStore