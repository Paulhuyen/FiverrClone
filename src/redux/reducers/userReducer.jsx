import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {

}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {}
});

export const {} = userReducer.actions

export default userReducer.reducer

export const registeApi = (userRegister) => {

    return async (dispatch) => {
        try {
            const result = await axios ({
                url : 'https://fiverrnew.cybersoft.edu.vn/api/auth/signup',
                method: 'POST',
                data:userRegister,
                
            });
            alert( result.data.content );
        } catch (err) {
            console.log(err);
            alert(err.response.data.content);


        }

    
    }

}