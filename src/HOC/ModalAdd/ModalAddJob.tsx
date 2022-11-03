import { Input } from "antd";
// import TextArea from "antd/lib/input/TextArea";
import { useFormik } from "formik";
import React, { useState, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { postJob } from "../../redux/reducers/AdminManageJobReducer";

const { TextArea } = Input;
export default function ModalAddJob() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      id:"",
      tenCongViec: "",
      danhGia: "",
      giaTien: "",
      nguoiTao: "",
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: "",
      moTaNgan: "",
      saoCongViec: "",
    },
    validationSchema: Yup.object().shape({
      tenCongViec: Yup.string().required("không được bỏ trống !"),
    }),
    onSubmit: (values: any) => {
      console.log("VALUE ADD JOB", values);
      const action: any = postJob(values);
      dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal">
      <h3>Thêm công việc</h3>
      <form  onSubmit={frm.handleSubmit}>
        <div className="  form-table">
          <div className="form-group">
            <label htmlFor="">Tên Công Việc</label>
            <Input
              type="text"
              name="tenCongViec"
              id="tenCongViec"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            {frm.errors.tenCongViec ? (
              <span className="txt">{frm.errors.tenCongViec}</span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">Hình ảnh</label>
            <Input
              type="text"
              name="hinhAnh"
              id="hinhAnh"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Đánh giá</label>
            <Input
              type="text"
              name="danhGia"
              id="danhGia"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Gía Tiền</label>
            <Input
              type="text"
              name="giaTien"
              id="giaTien"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mô tả</label>
            <TextArea
              name="moTa"
              id="moTa"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mô tả ngắn</label>
            <TextArea
              name="moTaNgan"
              id="moTaNgan"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Mã chi tiết loại công việc</label>
            <Input
              type="text"
              name="maChiTietLoaiCongViec"
              id="maChiTietLoaiCongViec"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Sao công việc</label>
            <Input
              type="text"
              name="saoCongViec"
              id="saoCongViec"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
          </div>
          <div className="form-group">
            <button className="update-user bg-success btn-modal" type="submit">
              Add Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
