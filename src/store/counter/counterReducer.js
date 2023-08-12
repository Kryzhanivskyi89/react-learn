import { createReducer } from "@reduxjs/toolkit"
import { initialState } from "../initialState"
// import { INCREMENT, DECREMENT, SETSTEP } from "./types"
import {increment, decrement, setStep} from './actions'


export const counterReducer = createReducer(initialState.counter, {
    [increment]: (state, action) => ({
        ...state,
            total: state.total + action.payload,
    }),

    [decrement]: (state, action) => ({
        ...state,
            total: state.total - action.payload,
    }),

    [setStep]: (state, action) => ({
        ...state,
            step: action.payload,
    }),
})

// export const counterReducer = (state = initialState.counter, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 total: state.total + action.payload,
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 total: state.total - action.payload,
//             }
//         case SETSTEP:
//             return {
//                 ...state,
//                 step: action.payload, 
//             }
//         default:
//             return state;
//     }
// }