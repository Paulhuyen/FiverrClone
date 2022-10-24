import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
type Props = {};

export default function AdminTemplate({}: Props) {
  return (
    <div className="section">
      <div className="dashboard_menu">
        <div className="item-logo text-center"><h1>Fiverr</h1></div>
        <div className="item-menu">
          <li>
            <NavLink to="">
              <div className="icon">
                <UserOutlined />
              </div>
              <div className="title">Quản Lý Người Dùng</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="managenmentjob">
              <div className="icon">
                <UserOutlined />
              </div>
              <div className="title">Quản Lý Công Việc</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="managenmentjobtype">
              <div className="icon">
                <UserOutlined />
              </div>
              <div className="title">Quản Lý Loại Công Việc</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="managenmentjob">
              <div className="icon">
                <UserOutlined />
              </div>
              <div className="title">Quản Lý Dịch Vụ</div>
            </NavLink>
          </li>
        </div>
        <div className="menu"></div>
      </div>
      <div className="header">
        <div className="header_top">
          <div className="user-manage d-flex">
            <div className="dropdown">
              <div
                className="dropdown-toggle"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img style={{width:60, height:60}} src="./img/avt.jpg" alt="..." />
                <span className="mx-2">Huyến</span>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button className="dropdown-item" type="button">
                    Cập Nhập Thông Tin
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Đăng Xuất
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
