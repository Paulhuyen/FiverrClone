import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/settings';
import { AppDispatch } from '../configStore';
import { ModalJob } from '../models/jobModel';

const initialState:any = {
    arrJobType: [],
}

const AdminManageJobReducer = createSlice({
  name: 'AdminManageJobReducer',
  initialState,
  reducers: {
    getAllJobTypeApiAction:(state,action: PayloadAction<ModalJob[]> ) => {
        state.arrJobType = action.payload;
      },
    postJobTypeApiAction:(state,action: PayloadAction<ModalJob[]> ) => {
        state.arrJobType = action.payload;
      },
  }
});

export const {getAllJobTypeApiAction,postJobTypeApiAction} = AdminManageJobReducer.actions

export default AdminManageJobReducer.reducer



export const getAllJobTypeApi = ()=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.get('/api/loai-cong-viec');
        let arrJobType: ModalJob[] = response.data.content;
        console.log(arrJobType)
        const action = getAllJobTypeApiAction(arrJobType);
        dispatch(action);
        } catch (error) {
        }
      }
}

export const postJobTypeApi = (value:any)=>{
  return async (dispatch: AppDispatch) =>{
    try {
      const response = await http.post('/api/loai-cong-viec',value);
      let arrJobType: ModalJob[] = response.data.content;
      console.log(arrJobType)
      const action = postJobTypeApiAction(arrJobType);
      alert('Thêm loại công việc thành công')
      dispatch(action);
      } catch (error) {
       alert('Thêm loại công việc không thành công')

      }
    }
}

export const deleteJobTypeApi = (id:any)=>{
  return async (dispatch: AppDispatch) =>{
    try {
      const response = await http.delete(`/api/loai-cong-viec/${id}`);
      // let arrJobType: ModalJob[] = response.data.content;
      // console.log(arrJobType)
      // const action = postJobTypeApiAction(arrJobType);
      // dispatch(action);
      } catch (error) {
      }
    }
}