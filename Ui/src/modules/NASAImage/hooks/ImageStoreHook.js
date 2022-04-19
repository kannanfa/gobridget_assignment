import { List } from "immutable";
import {UserContext} from 'common/context'
import  { useContext } from 'react'
import  { useSelector } from 'react-redux'


const useImageStore = () =>{

    const userInfo = useContext(UserContext);
    const images = useSelector (state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'images'], List()));
    const searchText = useSelector (state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'q'], null));
    const currentPage = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'from'], null));
    const prev = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'buttons', 'prev', 'page' ], null));
    const next = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'data', 'buttons', 'next', 'page'], null));
    const isLoading = useSelector(state => state.getIn(['Images', userInfo.loginId,'info', 'isLoading'], false));

    return {currentPage, prev, next, isLoading, images, searchText}
}

export default useImageStore