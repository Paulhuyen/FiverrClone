//rxslice
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface JobsList {
    id: number;
    congViec: JobModel;
    tenLoaiCongViec: string;
    tenNhomChiTietLoai: string;
    tenChiTietLoai: string;
    tenNguoiTao: string;
    avatar: string;
}

export interface JobModel { //congViec
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

export interface menuModel {
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

const initialState: any = {
    jobCategories: [],
    menuLoaiCV: [],
    arrJobList: [],
};

const JobReducers = createSlice({
    name: "JobReducers",
    initialState,
    reducers: {
      getAllChiTietLoaiCVAction: (
        state,
        action: PayloadAction<JobModel[]>
      ) => {
        state.jobCategories = action.payload;
      },
  
      getAllMenuLoaiCVAction: (state, action: PayloadAction<JobModel[]>) => {
        state.menuLoaiCV = action.payload;
      },
  
      getJobListByNameAction: (state, action: PayloadAction<JobModel[]>) => {
        state.arrJobList = action.payload;
      },
  
    },
});

export const {getAllChiTietLoaiCVAction, getAllMenuLoaiCVAction, getJobListByNameAction} = JobReducers.actions

export default JobReducers.reducer;

// -------------- API --------------------------