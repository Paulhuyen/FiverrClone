import { configureStore } from '@reduxjs/toolkit'
import JobReducers from './reducers/JobReducers'

export const store = configureStore({
    reducer: {
        JobReducers: JobReducers
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch