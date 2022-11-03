import {configureStore, PayloadAction} from '@reduxjs/toolkit';
import ProducReducers from './reducers/ProducReducers';
import userReducer from './reducers/userReducer';



export const store = configureStore({
    reducer: {
        ProducReducers:ProducReducers,
        userReducer : userReducer,

    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch