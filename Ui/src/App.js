import "App.css";
import "style";
import "bootstrap/dist/js/bootstrap.js";
import { ErrorBoundary } from "common/components";
import { Provider } from "react-redux";
import { Storage } from "store/index";
import {App} from "modules/index"
import AppRoutes from "modules/routes";
import { BrowserRouter  } from "react-router-dom";

/**
 * Main Page component 
 * @param {Component.Redux.Provider} Provider - componet used to serve store to entire application 
 * @param {Component} ErrorBoundary - Catch unhandled error in our application and log to the server 
 * @param {Component} BrowserRouter - Router component helps us to route all the pages
 * @param {Component} App - Basic App page Module for  contains all the containers and components need for this application 
 * @param {Component} AppRoutes - Basic List of avaliable page and respective component
 * @param {Component} BrowserRouter - Router component helps us to route all the pages
 * 
 * @returns {Component} 
 */
function bootstrap() {
  return (
    <div className="container-fluid">
      <Provider store={Storage}>
        <ErrorBoundary>
        <BrowserRouter>
            <App> 
              <AppRoutes></AppRoutes>
            </App>
          </BrowserRouter>
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default bootstrap;
