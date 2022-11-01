import { Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { postJobTypeApi } from "../../redux/reducers/AdminManageJobReducer";
import { useDispatch } from "react-redux";

export default function ModalAddJobType() {
  const dispatch = useDispatch();

  const frm = useFormik({
    initialValues: {
    //   id: "",
      tenLoaiCongViec: "",
    },
    validationSchema: Yup.object().shape({
        tenLoaiCongViec: Yup.string()
        .required("không được bỏ trống !"),
    }),
    onSubmit: (values: any) => {
      console.log('VALUE',values);
        const action:any = postJobTypeApi(values)
        dispatch(action)
    },
  });
  return (
    <div>
      <form className="form" onSubmit={frm.handleSubmit}>
        <div className="form-table">
        <div className="form-group">
          <label>Id</label>
          <Input
            type="text"
            name="tenLoaiCongViec"
            id="tenLoaiCongViec"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        </div>

        <div className="form-group">
          <button className="update-user bg-success" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
