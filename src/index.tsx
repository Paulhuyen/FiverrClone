import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles.scss'
//setup react router dom
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import { store } from './redux/configStore';
import HomeTemplate from './templates/HomeTemplate';
import DetailCategories from './pages/Categories/DetailCategories';
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import DemoProduct from './pages/Demo/DemoProduct';
//Admin
import AdminTemplate from './templates/AdminTemplate';
import ManageUser from './pages/AdminPages/ManageUser/ManageUser';
import ManageJob from './pages/AdminPages/ManageJob/ManageJob';
import ManageJobType from './pages/AdminPages/ManageJobType.tsx/ManageJobType';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>
          <Route path='categories'>
            <Route path=':id'  element={<DetailCategories/>}></Route>
          </Route>
          <Route path='demoprod' element={<DemoProduct/>}></Route>
          <Route path='detail' >
            <Route path=':id' element={<Detail/>}></Route>
          </Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='*' element={<Navigate to=""/>}></Route>
        </Route>
        <Route path='admin' element={<AdminTemplate/>}>
           <Route index element={<ManageUser/>}></Route>
           <Route path='managenmentjob' element={<ManageJob/>}></Route>
           <Route path='managenmentjobtype' element={<ManageJobType/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

