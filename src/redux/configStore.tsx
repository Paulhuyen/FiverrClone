import {configureStore, PayloadAction} from '@reduxjs/toolkit';
import AdminManageJobReducer from './reducers/AdminManageJobReducer';
import CommentReducer from './reducers/CommentReducer';
import ProducReducers from './reducers/ProducReducers';
import UserReducer from './reducers/UserReducer';


export const store = configureStore({
    reducer: {
        ProducReducers:ProducReducers,
        CommentReducer:CommentReducer,
        UserReducer:UserReducer,
        AdminManageJobReducer:AdminManageJobReducer,

    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch