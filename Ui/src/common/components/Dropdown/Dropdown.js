import DropdownButton from "common/components/Dropdown/DropdownButton";
import DropdownList from "./DropdownList";

/**
 * It is a common dropdown component for our application
 * 
 * @param {{name: string, dropdownMenu: Object}}  
 * @param {Object} dropdownMenu  List of dropdown options
 * @param {string} dropdownMenu.id  Unique for the dropdown object
 * @param {number} dropdownMenu.title  Title for the list
 * @returns {Component}
 */
const index = ({ name, dropdownMenu }) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <DropdownButton ButtonText={name}></DropdownButton>
        <DropdownList data={dropdownMenu}></DropdownList>
      </li>
    </ul>
  );
};

export default index;
