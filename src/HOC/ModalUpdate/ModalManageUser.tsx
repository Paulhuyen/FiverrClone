import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateUserApi } from "../../redux/reducers/UserReducer";

export default function ModalManageUser() {
  const { editUser } = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();

  const frm = useFormik({
    enableReinitialize:true,
    initialValues : {
      id: editUser.id,
      email: editUser.email,
      name: editUser.name,
      password: editUser.password,
      phone: editUser.phone,
      role: editUser.role,
      gender: editUser.gender,
      birthday: editUser.birthday,
    },
    // validationSchema: Yup.object().shape({
    //   email: Yup.string()
    //     .required("email không được bỏ trống !")
    //     .email("email không đúng định dạng !"),
    //   password: Yup.string()
    //     .required("Bạn chưa nhập password")
    //     .matches(
    //       /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+.]{6,20}$/,
    //       "Password từ 6-20 bao gồm 1 ký tự 1 chữ hoa và 1 chữ thường"
    //     ),
    //   name: Yup.string().required("name không được bỏ trống !"),
    //   phone: Yup.string()
    //     .required("Vui lòng không để trống")
    //     .matches(
    //       /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
    //       "Số điện thoại không đúng"
    //     ),
    //   birthday: Yup.string().required("birthday khong duoc bo trong !"),
    //   role: Yup.string().required("Role khong duoc bo trong !"),
    // }),
    onSubmit: (data: any) => {
      console.log("data", data.id);
      const action: any = updateUserApi(data);
      alert('thanfh cong' )
      dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal_user">
      <form onSubmit={frm.handleSubmit}>
        <div className="form-group">
          <label>Id</label>
          <Input
            type="text"
            value={frm.values.id}
            name="name"
            id="name"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <Input
            type="text"
            value={frm.values.name}
            name="name"
            id="name"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <Input
            type="text"
            value={frm.values.email}
            name="email"
            id="email"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <Input
            value={frm.values.password}
            name="password"
            type="password"
            id="password"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <Input
            value={frm.values.phone}
            type='text'
            name="phone"
            id="phone"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        <div className="form-group">
          <label>date</label>
          <Input
            value={frm.values.birthday}
            type='date'
            name="birthday"
            id="birthday"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </div>
        <div className="form-group">
          <select
            name="role"
            value={frm.values.role}
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <div className="form-group">
          <div
            className="gender"
            id="gender"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          >
            <label htmlFor="">gender</label>
            <input
              className="mx-4"
              name="gender"
              id="gender"
              value="true"
              type="radio"
            />
            <input
              className="mx-2"
              name="gender"
              id="gender"
              value="false"
              type="radio"
            />
          </div>
        </div>
        <div className="form-group">
          <button className="update-user bg-success" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
