import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import './assets/styles'
//setup react router dom
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import { store } from './redux/configStore';
import HomeTemplate from './templates/HomeTemplate';
import DetailCategories from './pages/Categories/DetailCategories';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>
          <Route path='detailCate'>
            <Route path=':id'  element={<DetailCategories/>}></Route>
          </Route>
          {/* <Route path='categories'>
             <Route path=':id'  element={<ChiTietLoaiCV/>}></Route>
          </Route> */}
          <Route path='register' element={<Register/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='*' element={<Navigate to=""/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

