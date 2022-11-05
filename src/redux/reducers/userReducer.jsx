import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { http } from '../../util/settings';
import userLogin from './userLogin';

const initialState = {

}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {}
});

export const {} = userReducer.actions

export default userReducer.reducer

export const registerApi = (userRegister) => {

    return async (dispatch) => {
        try {
            const result = await http.post(`/auth/signup`, userRegister);
            alert("đăng kí thành công")
        } catch(err) {
            console.log(err)
            alert(err.response.data.content);
        }
    }

}