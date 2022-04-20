
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
    const data = {
        "name": "Kannan",
        "role":"Manager",
        "dropdownMenu": [
            {
                "type": "link",
                "title": "Account Settings",
                "url": null,
                "id": "account-setting",
                "icon": "account",
                "hasAlert": false
            },
            {
                "type": "link",
                "title": "User Management",
                "url": null,
                "id": "user-management",
                "icon": "user",
                "hasAlert": false
            },
            {
                "title": "Logout",
                "url": null,
                "id": "Language",
                "icon": "",
                "hasAlert": false
            }
        ]
    }

    return <div className={"col-12 p-0"} data-testid={`navbar-container`}>
               <Navbar data={data} >
                    <Dropdown  {...data}></Dropdown>
                </Navbar>
            </div>
}

export default NavBarContainer;