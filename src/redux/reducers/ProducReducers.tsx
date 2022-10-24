//rxslice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { http, setStoreJson } from "../../util/settings";
// import {http } from "../../util/settings";
import { AppDispatch } from "../configStore";


//Menu
export interface JobMenu {
  id:                number;
  tenLoaiCongViec:   string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}
export interface JobCategories {
  id:                number;
  tenLoaiCongViec:   string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}
export interface DsNhomChiTietLoai {
  id:             number;
  tenNhom:        string;
  hinhAnh:        string;
  maLoaiCongviec: number;
  dsChiTietLoai:  DsChiTietLoai[];
}

export interface DsChiTietLoai {
  id:         number;
  tenChiTiet: string;
}
//Chi tiết loại công việc


//Detail Product
export interface JobDetail {
  id:                 number;
  congViec:           CongViec;
  tenLoaiCongViec:    string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai:     string;
  tenNguoiTao:        string;
  avatar:             string;
}

export interface CongViec {
  id:                    number;
  tenCongViec:           string;
  danhGia:               number;
  giaTien:               number;
  nguoiTao:              number;
  hinhAnh:               string;
  moTa:                  string;
  maChiTietLoaiCongViec: number;
  moTaNgan:              string;
  saoCongViec:           number;
}

//Product
export interface Job {
  id:                    number;
  tenCongViec:           string;
  danhGia:               number;
  giaTien:               number;
  nguoiTao:              number;
  hinhAnh:               string;
  moTa:                  string;
  maChiTietLoaiCongViec: number;
  moTaNgan:              string;
  saoCongViec:           number;
}



interface TypeArrayJob {
  arrayJob: Job[],
  arrayJobDetail: JobDetail[],
  arrayJobMenu:JobMenu[],
  arrJobCategories:JobCategories[],

}
const initialState:TypeArrayJob={
   arrayJob:[],
  arrayJobDetail:[],
  arrayJobMenu:[],
  arrJobCategories:[],

} 



const ProducReducers = createSlice({
  name: "ProducReducers",
  initialState,
  reducers: {
    getArrayProduct: (state,action: PayloadAction<Job[]> ) => {
      state.arrayJob = action.payload;
    },
    getArrayProductDetail: (state,action: PayloadAction<JobDetail[]> ) => {
      state.arrayJobDetail = action.payload;
      setStoreJson("arrayJobDetail",state.arrayJobDetail);
    },
    getJobMenuAction: (state,action: PayloadAction<JobMenu[]> ) => {
      state.arrayJobMenu = action.payload;
      setStoreJson("arrayJobMenu",state.arrayJobMenu);
    },
    getJobCateAction: (state,action: PayloadAction<JobCategories[]> ) => {
      state.arrJobCategories = action.payload;
      setStoreJson("arrJobCategories",state.arrJobCategories);
    }

  }
});

export const { getArrayProduct,getArrayProductDetail,getJobMenuAction,getJobCateAction } = ProducReducers.actions;

export default ProducReducers.reducer;

export const getAllProduct = ()=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.get('/api/cong-viec');
        let arrayJob: Job[] = response.data.content;
        const action = getArrayProduct(arrayJob);
        dispatch(action);
        } catch (error) {
        }
      }
}




export const getAllProductDetail = (id:any)=>{
  return async (dispatch: AppDispatch) =>{
    try {
      const response = await http.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${id}`);
      let arrayJobDetail: JobDetail[] = response.data.content;
      const action = getArrayProductDetail(arrayJobDetail);
      dispatch(action);
      } catch (error) {
      }
    }
}

export const getJobMenu = ()=> {
  return async (dispatch: AppDispatch)=>{
      try {
          const response = await http.get('/api/cong-viec/lay-menu-loai-cong-viec')
          let arrayJobMenu: JobMenu[] = response.data.content;
          const action = getJobMenuAction(arrayJobMenu);
         dispatch(action);
      } catch (error) {
          
      }
  }
}

export const getJobCate = (id:any)=> {
  return async (dispatch: AppDispatch)=>{
      try {
          const response = await http.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`)
          let arrJobCategories : JobCategories[] = response.data.content
          const action = getJobCateAction(arrJobCategories);
         dispatch(action);
      } catch (error) {
          
      }
  }
}