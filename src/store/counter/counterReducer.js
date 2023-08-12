import { initialState } from "../initialState"
import { INCREMENT, DECREMENT, SETSTEP } from "./types"

export const counterReducer = (state = initialState.counter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                total: state.total + action.payload,
            }
        case DECREMENT:
            return {
                ...state,
                total: state.total - action.payload,
            }
        case SETSTEP:
            return {
                ...state,
                step: action.payload, 
            }
        default:
            return state;
    }
}