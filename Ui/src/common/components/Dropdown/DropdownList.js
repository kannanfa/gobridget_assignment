/**
 * Dropdown list single item design
 * @param {Object} props 
 * @param {string} props.title - Title of the item 
 * @param {string} props.url - URL use to navigate when user select this item
 * @param {string} props.id - Unique id to refer the item
 * @returns {Componsnt}
 */
const DropdownListItem = ({title, url, id }) =>{
    return (
    <li key={`DropdownListItem-${id}`} data-testid={`DropdownListItem-${id}`}>
    <a className="dropdown-item" href="#home">
      {title}
    </a>
  </li>)
}


/**
 * Dropdown list 
 * @param {Object} props 
 * @param {Array<<Object>>} props.data
 * @param {string} props.data.title - Title of the item 
 * @param {string} props.data.url - URL use to navigate when user select this item
 * @param {string} props.data.id - Unique id to refer the item
 * @returns {Component}
 */

const DropdownList = ({data=[]}) =>{

    return (
        <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
            {data.map((item, index)=>{
                return <DropdownListItem title={item.title} id={item.id} url={item.url}  key={`DropdownListItem-${item.id}`}></DropdownListItem>})}

        </ul>)
}

export default DropdownList;