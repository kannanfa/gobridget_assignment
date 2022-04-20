/**
 * MainContainer - It a layout component used to create base layout for this application 
 * @param {Array.<Component>} {children} - List of child component
 * @returns {Component}
 */
const MainContainer = ({ children }) => {
  return (
    <div className="col p-0" data-testid={`main-container`}>
      <div className="row" >
          {children}
      </div>
    </div>
  );
};

export default MainContainer;
