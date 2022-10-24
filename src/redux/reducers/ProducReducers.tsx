//rxslice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/settings";
import { AppDispatch } from "../configStore";

export interface ProductModel {
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
};

const ProducReducers = createSlice({
  name: "ProducReducers",
  initialState,
  reducers: {
    getAllChiTietLoaiCVAction: (
      state,
      action: PayloadAction<ProductModel[]>
    ) => {
      state.jobCategories = action.payload;
    },
    getAllMenuLoaiCVAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.menuLoaiCV = action.payload;
    },
  },
});

export const { getAllChiTietLoaiCVAction, getAllMenuLoaiCVAction } =
  ProducReducers.actions;

export default ProducReducers.reducer;

export const getAllMenuLoaiCV = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/cong-viec/lay-menu-loai-cong-viec");
      //sau khi lấy kq đưa lên redux
      let menuLoaiCV: ProductModel[] = result.data.content;
      const action = getAllMenuLoaiCVAction(menuLoaiCV);
      dispatch(action);
      console.log("DS MENU", menuLoaiCV);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllChiTietLoaiCV = (id:number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
      //sau khi lấy kq đưa lên redux
      let jobCategories: ProductModel[] = result.data.content;
      const action = getAllChiTietLoaiCVAction(jobCategories);
      dispatch(action);
      console.log("list categories", jobCategories);
    } catch (err) {
      console.log(err);
    }
  };
};
