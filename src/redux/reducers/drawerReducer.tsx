import { createSlice } from '@reduxjs/toolkit'
import React from 'react';

const initialState = {
    Component: (props:any) => {
        return <div>
          
        </div>
    }
}

const drawerReducer = createSlice({
  name: "drawerReducer",
  initialState,
  reducers: {
    setComponent: (state,action) => {
        //Lấy component từ payload
        let Component = action.payload;
        state.Component = Component;
    }
  }
});

export const {setComponent} = drawerReducer.actions

export default drawerReducer.reducer