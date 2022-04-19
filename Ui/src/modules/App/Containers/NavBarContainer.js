
import { Dropdown, Navbar } from "common/components";
import { UserContext } from "common/context";
import { List } from "immutable";
import { useContext } from "react";
import { useSelector } from "react-redux";


/**
 * NavBarContainer - It a layout component used to create base layout for navbar  with dropdown
 * @param {Array.<Component>} {children} - List of child component
 * @returns {Component}
 */
const NavBarContainer = () =>{

    const userInfo = useContext(UserContext);
    const value = useSelector(state => state.getIn(['App', userInfo.loginId,'userinfo'], List()));
    const { data =null, isLoading = false, error = null } = value.toJS()
    const navBarClass = isLoading ? "col-12 p-0 navBarlayout loading" : "col-12 p-0"

    return <div className={navBarClass}>
                
                {!isLoading && <Navbar data={data} >
                          {data && <Dropdown  {...data}></Dropdown>}

                </Navbar> }
                {!isLoading && error && <div className="alert alert-warning" role="alert"> {error?.message}! Unable to load user info.</div>}
            </div>
}

export default NavBarContainer;