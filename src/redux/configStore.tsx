import {configureStore, PayloadAction} from '@reduxjs/toolkit';
import ProducReducers from './reducers/ProducReducers';
import userReducer from './reducers/userReducer';
import userLogin from './reducers/userLogin';


export const store = configureStore({
    reducer: {
        ProducReducers:ProducReducers,
        userReducer : userReducer,
        userLogin : userLogin,
        

    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch