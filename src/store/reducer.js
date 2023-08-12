import { combineReducers } from "redux"
import { initialState } from './initialState'
import { INCREMENT, DECREMENT, SETSTEP } from "./counter/types"
import { counterReducer } from "./counter/counterReducer"
import { todoReducer } from "./todo/todoReducer"



export const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
})