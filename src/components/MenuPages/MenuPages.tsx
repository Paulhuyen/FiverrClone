import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "../../assets/styles.scss";
import DetailCategories from "../../pages/Categories/DetailCategories";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getAllChiTietLoaiCV,
  getAllMenuLoaiCV,
  ProductModel,
  menuModel,
} from "../../redux/reducers/ProducReducers";
type Props = {
  title?: menuModel;
};

export default function MenuPages({ title }: Props) {
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
    return menuLoaiCV.map((menuPages: menuModel, index: number) => {
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
        </li>
      );
    });
  };

  return (
    <>
      <nav className="menu-pages">
        <div className="container">
          <ul>{renderMenuPages()}</ul>
          {/* <DetailCategories/> */}
        </div>
      </nav>
      <div className="suggested">
        <div className="container d-flex">
          <b>Suggested</b>
          <div className="tag">
            <a href="#">Website Design</a>
            <a href="#">WordPress</a>
            <a href="#">Logo Design</a>
            <a href="#">Video Editing</a>
          </div>
        </div>
      </div>
    </>
  );
}
