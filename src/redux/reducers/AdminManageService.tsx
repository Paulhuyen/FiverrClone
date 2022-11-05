import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/settings';
import { AppDispatch } from '../configStore';
import { ThueCongViecModal } from '../models/jobModel';

const initialState:any = {
    arrService: [],
    getIdService: {}
}

const AdminManageService = createSlice({
  name: 'AdminManageService',
  initialState,
  reducers: {
    getAllServiceApiAction:(state,action: PayloadAction<ThueCongViecModal[]> ) => {
        state.arrService = action.payload;
      },
      getIdServiceApiAction:(state,action: PayloadAction<ThueCongViecModal[]> ) => {
        state.getIdService = action.payload;
      },
  }
});

export const {getAllServiceApiAction,getIdServiceApiAction} = AdminManageService.actions

export default AdminManageService.reducer

// get all service
export const getAllServiceApi = ()=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.get('api/thue-cong-viec');
        let arrService: ThueCongViecModal[] = response.data.content;
        const action = getAllServiceApiAction(arrService);
        console.log('data cong việc thuê', arrService)
        dispatch(action);
        } catch (error) {
        }
      }
}
//delete
export const deletelIdServiceApi = (id:any)=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.delete(`api/thue-cong-viec/${id}`);
        alert('xoá thành công')
        } catch (error) {
        alert('xoá không thành công')

        }
      }
}

//get id 
export const getIdServiceApi = (id:any)=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.get(`api/thue-cong-viec/${id}`);
        let getIdService: ThueCongViecModal[] = response.data.content;
        const action = getIdServiceApiAction(getIdService);
        dispatch(action);
        console.log('id cong việc thuê', getIdService)

        alert('lấy id thành công')
        } catch (error) {
        alert('lấy id không thành công')

        }
      }
}
//update
export const updateIdService = (data:any)=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.put(`api/thue-cong-viec/${data.id}`, data);
        alert('update thành công')
        } catch (error) {
        alert('update không thành công')

        }
      }
}
