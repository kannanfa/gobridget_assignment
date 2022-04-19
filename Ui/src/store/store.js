import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {createReducerManager} from 'store/reducerManager';
import { App } from 'modules/App/reducer';
import { Images } from 'modules/NASAImage/reducer';
import { Map } from 'immutable';


/**
 * Used to pull the store configuration 
 * @param {any} initialState - Empty map immutable object
 * @returns {Object} storage - Object which will help us to connect read / write / update with redux store
 */
export function configureStore(initialState = Map()) {
    const reducerManager = createReducerManager({App, Images})
  
    // Create a store with the root reducer function being the one exposed by the manager.
    const store = createStore(reducerManager.reduce, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) )

    store.reducerManager = reducerManager

    return store;
  }


export default configureStore();