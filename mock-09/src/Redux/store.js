import {legacy_createStore as createStore,applyMiddleware} from "redux"
import {reducer as AppReducer} from "./AppReducer/reducer"
import {reducer as AuthReducer } from "./AuthReducer/reducer"
import thunk from "redux-thunk"
import {combineReducers} from "redux"
const rootReducer=combineReducers({AppReducer,AuthReducer})
export const store=createStore(rootReducer,applyMiddleware(thunk))

