import { AudioOutlined } from "@ant-design/icons";
import { Dropdown, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/styles.scss";
import { RootState } from "../../redux/configStore";
import { history } from '../../index';

import {
  DsChiTietLoai,
  DsNhomChiTietLoai,
  getJobMenu,
  JobMenu,
} from "../../redux/reducers/ProducReducers";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings";
import { signOutAction } from "../../redux/reducers/UserReducer";
type Props = {};
const { Search } = Input;

const onSearch = (value: string) => console.log(value);
export default function MenuPages({}: Props) {
  const { arrayJobMenu } = useSelector((state: RootState) => state.ProducReducers);
  const { userLogin } = useSelector((state: RootState) => state.UserReducer);
  function logOut(){
    localStorage.clear();
    history.push('/home')
    dispatch(signOutAction(userLogin));
  }
  console.log('alo',userLogin)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const action: any = getJobMenu();
    dispatch(action);
  }, []);
  const renderMenuPages = () => {
    return arrayJobMenu.map((menuPages: JobMenu, index: number) => {
      return (
        <li key={index}>
          <a
            onClick={() => {
              navigate(`/categories/${menuPages.id}`);
            }}
          >
            {menuPages.tenLoaiCongViec}
          </a>
          <div className="sub-menu">
            <ul>
              {menuPages.dsNhomChiTietLoai?.map(
                (itemSub: DsNhomChiTietLoai) => {
                  return (
                    <li key={itemSub.id}>
                      <a href="" className="tenNhom">
                        {itemSub.tenNhom}
                      </a>
                      {itemSub.dsChiTietLoai.map((itemSubS: DsChiTietLoai) => {
                        return (
                          <a href="#" key={itemSubS.id}>
                            {itemSubS.tenChiTiet}
                          </a>
                        );
                      })}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </li>
      );
    });
  };

  const renderUserLogin = () =>{
    if(userLogin == null){
      return<NavLink to={'/logindemo'}>Login</NavLink>
    }else{
      return<li>
       <div className="dropdown open">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {userLogin.name}
          </button>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <NavLink className="dropdown-item " to="/"><button onClick={logOut}>Đăng Xuất</button></NavLink>
            <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
          </div>
        </div>

      </li> 
    }
  }
  return (
    <>
      <div className="header-fiverr container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="/demoprod">
              <img src="./img/Fiverr_logo.png" alt="" />
            </a>
          </div>
          <div className="fiverr-header-search">

            <Search
              placeholder="What service are you looking for today?"
              className="ip-search"
              onSearch={onSearch}
              // onChange= (handleChange)
              enterButton
            />
          </div>
          <div className="fiverr-nav-right ">
            <ul>
              <li>
                <NavLink to="/profile">Fiverr Business</NavLink>
              </li>
              <li>
                <a href="/">Explore</a>
              </li>
              <li>
                <a href="/">English</a>
              </li>
              <li>
                <a href="/">US$ USD</a>
              </li>
              <li>
                <a href="/">Become a seller</a>
              </li>
                {renderUserLogin()}
                {/* <NavLink to="/logindemo">Login </NavLink> */}
              {/* <li>{userLogin.name}</li> */}
              {/* <li>
                  <div className="avata-user"><img src="./img/avt.jpg" style={{width:50, height:50, objectFit:'cover', borderRadius:50}} alt="" /></div>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
      <nav className=" menu-pages">
        <div className="menu-cate container">
          <ul>{renderMenuPages()}</ul>
        </div>
      </nav>
    </>
  );
}
