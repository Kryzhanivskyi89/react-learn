// import { reducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 


// store.dispatch({type:'inncrement', payload:1})
// console.log(store)



const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)