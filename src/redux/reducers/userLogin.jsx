// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { AppDispatch } from "../configStore";
// import {toast} from "react-toastify";
// import { ACCESS_TOKEN, http, setCookie, setStore } from "../../util/settings";

// const initialState = {};

// const userLogin = createSlice({
//   name: "userLogin",
//   initialState,
//   reducers: {},
// });

// export const {} = userLogin.actions;

// export default userLogin.reducer;

// // export const loginApi = (userLogin) => {
// //   return async (dispatch: ) => {
// //     try {
// //       const result = await axios({
// //         url: "https://fiverrnew.cybersoft.edu.vn/api/auth/signin",
// //         method: "POST",
// //         data: userLogin,
// //       });
// //       // set token
// //       setCookie(ACCESS_TOKEN, result.data.content.token, 30);
// //       setStore(ACCESS_TOKEN, result.data.content.token);
// //       alert("result.data.content");
// //     } catch (err) {
// //       console.log(err);
// //     //   alert("result.data.content");
// //     }
// //   };
// // };

// //login
// export const loginApi = (userLogin) => {
//   return async (dispatch) => {
//     try {
//       const result = await http.post(`/auth/signin`, userLogin);
//       console.log(result);
//       // set token
//       setCookie(ACCESS_TOKEN, result.data.content.token, 30);
//       setStore(ACCESS_TOKEN, result.data.content.token);
//       //
//       alert("Đăng nhập tài khoản thành công !");
//     } catch (err) {
//       console.log(err);
//       alert(err.response.data.content);
//     }
//   };
// };
