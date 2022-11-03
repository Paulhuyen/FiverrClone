import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "../../assets/styles.scss";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getAllChiTietLoaiCV,
  getAllMenuLoaiCV,
  ProductModel,
  menuModel,
  DsNhomChiTietLoai,
  DsChiTietLoai,
} from "../../redux/reducers/ProducReducers";
type Props = {
  title?: [menuModel, DsNhomChiTietLoai, DsChiTietLoai];
};

export default function MenuPages({ title}: Props) {
  const { menuLoaiCV } = useSelector(
    (state: RootState) => state.ProducReducers
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const jobCategories = (id: number) => {
    dispatch(getAllChiTietLoaiCV(id));
  };
  useEffect(() => {
    //CALL Api action thunk
    const actionApi = getAllMenuLoaiCV();
    dispatch(actionApi);
  }, []);

  const renderMenuPages = () => {
    return menuLoaiCV.map((menuPages: menuModel, index: number)=> {
      return (
        <li key={index}>
          <a
            onClick={() => {
              jobCategories(menuPages.id);
              navigate(`/detailCate/${menuPages.id}`);
            }}
          >
            {menuPages.tenLoaiCongViec}
          </a>
          <div className="submenu">
            <div className="container">
              
            </div>
          </div>
        </li>
      );
    });
  };

  // const renderGroupName = ()=> {
  //   return menuLoaiCV.map((group:DsNhomChiTietLoai, item: DsChiTietLoai) => {
  //     return(
  //       <>
  //         <h6>
  //           {group.tenNhom}
  //         </h6>
  //         <ul>
  //           <li>
  //             <a href="#">
  //               {item.tenChiTiet}
  //             </a>
  //           </li>
  //         </ul>
  //       </>
  //     )
  //   })
  // }


  // jobGroup: DsNhomChiTietLoai, name: DsChiTietLoai,

  return (
    <>
      <nav className="menu-pages">
        <div className="container">
          <ul>{renderMenuPages()}</ul>
          
        </div>
      </nav>
      {/* <div className="submenu">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="item">{renderGroupName()}</div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
