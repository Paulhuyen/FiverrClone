import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/settings';
import { AppDispatch } from '../configStore';
import { UserModal } from '../models/jobModel';

const initialState = {

}

const ReducerUser = createSlice({
  name: 'ReducerUser',
  initialState,
  reducers: {}
});

export const {} = ReducerUser.actions

export default ReducerUser.reducer


export const singUpApi = (values: UserModal) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.post("/api/auth/signup", values);
        console.log(response.data.content);
        alert("Thêm thành công");
      } catch (err) {
        console.log(err);
        alert("Thất bại");
      }
    };
  };

  export const updateAvatar3 = (file:any) => {
    return async (dispatch: AppDispatch) => {
      try {
        http
          .post(
            `/api/users/upload-avatar`,
            { formFile: file },
            // {
            //   headers: { "Content-Type": "multipart/form-data" },
            // }
          )
          alert('okde')
      } catch (err) {
        console.log(err);
      }
    };
  };
  