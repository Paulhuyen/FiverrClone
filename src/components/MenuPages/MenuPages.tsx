import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../assets/styles.scss";
import {  RootState } from "../../redux/configStore";
import {
  DsChiTietLoai,
  DsNhomChiTietLoai,
  getJobMenu,
  JobMenu,
} from "../../redux/reducers/ProducReducers";
type Props = {};

export default function MenuPages({}: Props) {
  const { arrayJobMenu } = useSelector(
    (state: RootState) => state.ProducReducers
  );
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
  return (
    <>
      <nav className=" menu-pages">
        <div className="menu-cate container">
          <ul>{renderMenuPages()}</ul>
        </div>
      </nav>
    </>
  );
}
