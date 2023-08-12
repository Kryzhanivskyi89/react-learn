import { createStore } from 'redux'
import { reducer } from './reducer'


export const store = createStore(reducer)

// store.dispatch({type:'inncrement', payload:1})
// console.log(store)