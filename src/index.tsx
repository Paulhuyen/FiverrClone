import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//setup react router dom
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import {store} from "./redux/configStore";
import HomeTemplate from './templates/HomeTemplate';
import './assets/styles.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<HomeTemplate/>}>
                    <Route index element={<Home/>}></Route>

                    <Route path='*' element={<Navigate to=""/>}></Route>

                </Route>
            </Routes>
        </BrowserRouter>

    </Provider>
)
