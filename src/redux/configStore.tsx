import {configureStore, PayloadAction} from '@reduxjs/toolkit';
import ProducReducers from './reducers/ProducReducers';


export const store = configureStore({
    reducer: {
        ProducReducers:ProducReducers
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch