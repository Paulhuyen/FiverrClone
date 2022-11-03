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
          {/* <div className="submenu">
            <ul>
              {menuPages.dsNhomChiTietLoai?.map((groupItem: DsNhomChiTietLoai, index: number) => {
                return(
                  <li key={index}>
                    <h6>
                      {groupItem.tenNhom}
                    </h6>
                    {groupItem.dsChiTietLoai.map((item: DsChiTietLoai) => {
                      return(
                        <a href="#">
                          {item.tenChiTiet}
                        </a>
                      )
                    })}
                  </li>
                )
              })}
            </ul>
          </div> */}
        </li>
      );
    });
  };

  return (
    <>
      <nav className="menu-pages">
        <div className="container">
          <ul>{renderMenuPages()}</ul>
          
        </div>
      </nav>
    </>
  );
}
