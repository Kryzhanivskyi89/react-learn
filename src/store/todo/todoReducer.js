import { createReducer } from "@reduxjs/toolkit";
import { todoInitialState } from "./initialState";
import {createTodo} from './actions'
// import { initialState } from "../initialState";
// import { CREATETODO } from "./types";

export const todoReducer = createReducer(todoInitialState, {
    // [createTodo] : (state, action)=>({ /* createTodo - назва ф-ції, а не обєкт, тому в [] */
    //     ...state,
    //         todo: [...state.todo, {...action.payload}],
    // }),
    [createTodo]: (state, action) => {
        state.todo.push(action.payload)
    },
})

// export const todoReducer = (state = initialState.todo, action) => {
//     switch (action.type) {
//         case CREATETODO:
//             return {
//                 ...state,
//                 todo: [...state.todo, {...action.payload}],
//             }
//         default:
//             return state;
//     }
// }
