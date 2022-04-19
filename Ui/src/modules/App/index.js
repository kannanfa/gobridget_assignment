import { UserContextProvider } from "common/context";
import 'modules/App/style.css'
import {NavBarContainer, MainContainer } from "modules/App/Containers";

/**
 * APP - For the app module main file 
 * @param {Array.<Component>} {children} - Child components
 * @param {Context} UserContextProvider - User context is used to share the context data with all the child component 
 * @param {Component} NavBarContainer - Used to load the top navigation bar
 * @returns {Component} 
 */
const App = ({children}) =>{
  const userInfo = {loginId:"safavieh", name:"safavieh"};
 
    return <div className="row">
            <UserContextProvider value={userInfo}>
                <MainContainer>
                <NavBarContainer></NavBarContainer>
                <div className="col-12">
                  {children}
                </div>
                </MainContainer>
            </UserContextProvider>
            </div>
}


export default App;