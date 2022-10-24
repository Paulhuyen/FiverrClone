import {configureStore, PayloadAction} from '@reduxjs/toolkit';
import CommentReducer from './reducers/CommentReducer';
import drawerReducer from './reducers/drawerReducer';
import ProducReducers from './reducers/ProducReducers';


export const store = configureStore({
    reducer: {
        ProducReducers:ProducReducers,
        CommentReducer:CommentReducer,
        drawerReducer:drawerReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch