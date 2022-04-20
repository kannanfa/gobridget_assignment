import { UserContext } from "common/context";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { getNASAImages, resetSearch } from "modules/NASAImage/action";


/**
 * useImageForm - This hook used for set, get search value and dispach API call for the images.
 * @returns { getData, search, onChangeSearch} 
 */
const useImageForm = () =>{

    /**
     * @param {string}  search - Local State variable 
     * @param {Function } setSearch - setter function for search
     * @param { Context} UserContext - User context globle object. which can be access across project
     * */
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const userInfo = useContext(UserContext);
  
     /**
      * @param {Function} onChangeSearch - used for reset globle value and set the local search string
      * */
    const onChangeSearch = (e) => {
      const val = e?.target?.value;
      setSearch(val);
      dispatch(resetSearch(userInfo.loginId))
    };

     /**
      * @param {Currying Function} getData -use to fetch Images base on search paramenter and page number
      * */  
    const getData = (page) => (e) =>{
      e?.preventDefault();
      dispatch(getNASAImages(userInfo.loginId, { q: search, from: page }));
    }
  

    return { getData, search, onChangeSearch}
}


export default useImageForm;