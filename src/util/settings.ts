import axios from 'axios';
// import { history } from '../index';
export const config = {
  setCookie: (name:string, value:string, days:number) => {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  },
  getCookie: (name:string) => {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  getStore: (name:string) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
    return null;
  },
  setStore: (name:string, value:any) => {
    localStorage.setItem(name, value);
  },
  setStoreJson: (name:string, value:any) => {
    let json = JSON.stringify(value);
    localStorage.setItem(name, json);
  },
  getStoreJson: (name:any) => {
    if (localStorage.getItem(name)) {
        let result:any = localStorage.getItem(name);
      return JSON.parse(result);
    }
    return null;
  },
  ACCESS_TOKEN: 'accessToken',
  USER_LOGIN: 'userLogin',
  ID_USER:'id_User',
  ROLE_USER: 'role_user'

};

export const { setCookie,  getCookie,  getStore, setStore, setStoreJson, getStoreJson,ROLE_USER,ACCESS_TOKEN,USER_LOGIN,ID_USER } = config;


const DOMAIN = 'https://fiverrnew.cybersoft.edu.vn';
const TOKEN_CYBERSOFT ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU';

// cấu hình request cho tất cả api - response cho tất cả kết quả từ api trả về

// cấu hình domain gửi đi
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000, //5 phut
});
// cấu hình request header
http.interceptors.request.use(
  (config:any) => {
    const token = getStore(ACCESS_TOKEN);
    config.headers = {
      ...config.headers,
      ['token']: `${token}`,
      ['TokenCybersoft']: TOKEN_CYBERSOFT,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);


// cấu hình kết quả trả về
http.interceptors.response.use((response) => {
  console.log(response);
  return response;
}, err => {
  console.log(err.response.status);
  if(err.response.status === 400 || err.response.status === 404){
     
      // history.push('/');
      return Promise.reject(err)
  }


  if( err.response.status === 401 || err.response.status === 403){
      alert('Token không hợp lệ! Vui lòng đăng nhập lại!');
      // history.push('/login');
      return Promise.reject(err)
  }
})

/**
 * status code
 * 400: Tham số gửi lên không hợp lệ => kết quả không tìm được (Badrequest);
 * 404: Tham số gửi lên hợp lệ nhưng không tìm thấy => Có thể bị xoá rồi (Not found) ... 
 * 200: Thành công, OK
 * 201: Đã được tạo thành công => (Mình đã tạo rồi sau đó request tiếp thì sẽ trả 201) (Created)
 * 401: Không có quyền truy cập vào api đó (Unauthorize - Có thể do token không hợp lệ hoặc bị admin chặn )
 * 403: Chưa đủ quyền truy cập vào api đó (Forbiden - token hợp lệ tuy nhiên token đó chưa đủ quyền truy cập vào api)
 * 500: Lỗi xảy ra tại server (Nguyên nhân có thể frontend gửi dữ liệu không hợp lệ => backend trong quá trình xử lý code gây ra lỗi hoặc do backend code bị lỗi => Error in server )
 */ 