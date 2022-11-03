import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {

}

const userLogin = createSlice({
  name: "userLogin",
  initialState,
  reducers: {}
});

export const {} = userLogin.actions

export default userLogin.reducer

export const loginApi = (userLogin) => {

    return async (dispatch) => {
        try {
            const result = await axios ({
                url : 'https://fiverrnew.cybersoft.edu.vn/api/auth/signin',
                method: 'POST',
                data:userLogin,
                
            });
            alert( result.data.content );
        } catch (err) {
            console.log(err);
            alert(err.response.data.content);


        }

    
    }

}