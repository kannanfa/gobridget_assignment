import { UserContext } from "common/context";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { getNASAImages, resetSearch } from "modules/NASAImage/action";


const useImageForm = () =>{
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const userInfo = useContext(UserContext);
  
    const onChangeSearch = (e) => {
      const val = e?.target?.value;
      setSearch(val);
      dispatch(resetSearch(userInfo.loginId))
    };
  
    const getData = (page) => (e) =>{
      e?.preventDefault();
      dispatch(getNASAImages(userInfo.loginId, { q: search, from: page }));
    }
  

    return { getData, search, onChangeSearch}
}


export default useImageForm;