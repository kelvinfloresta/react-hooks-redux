import { createStore, combineReducers } from 'redux'
import userForm from './duck/userForm'

const rootReducer = combineReducers({ userForm })
const store = createStore(rootReducer)

export default store
