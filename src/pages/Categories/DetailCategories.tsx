import React, { useEffect } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
// import { ProductModel,DsNhomChiTietLoai, getAllChiTietLoaiCV, DsChiTietLoai} from "../../redux/reducers/ProducReducers";
import { AppDispatch } from "../../redux/configStore";
import { useParams } from "react-router-dom";
import { getStoreJson } from "../../util/settings";
import {
  DsChiTietLoai,
  DsNhomChiTietLoai,
  getJobCate,
} from "../../redux/reducers/ProducReducers";

export default function DetailCategories() {
  const jobListDetail = getStoreJson("arrJobCategories");
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    let { id } = params;
    const action: any = getJobCate(id);
    // console.log(action);
    dispatch(action);
  }, [params.id]);

  const renderJobCategories = () => {
    return jobListDetail[0].dsNhomChiTietLoai?.map(
      (item: DsNhomChiTietLoai) => {
        return (
          <div className="item-job" key={item.id}>
            <div className="card-img">
              <img src={item.hinhAnh} alt="..." />
            </div>
            <div className="card-name">{item.tenNhom}</div>
            <div className="card-footer">
              <ul>
                {item.dsChiTietLoai?.map(
                  (itemds: DsChiTietLoai, index: number) => {
                    return (
                      <li key={index}>
                        <p>{itemds.tenChiTiet}</p>
                        <ArrowRightOutlined className="icon" />
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        );
      }
    );
  };

  return (
    <div className="Header-Categories">
      <div className="container">
        <div className="banner-category bg-dark">
          <div className="banner-page">
            <img src="./img/banner.webp" alt="" />
            <div className="banner-content">
              <h3 className="title">Graphics & Design</h3>
              <p className="subtitle">Designs to make you stand out.</p>
              <div className="button-banner">
                <button className="button">How Fiverr Works</button>
              </div>
            </div>
          </div>
        </div>
        {/* show list job */}
        <div className="header-job">
          <h4 className="text-title">{jobListDetail.tenLoaiCongViec}</h4>
          <div className="list-job row">
            {renderJobCategories()}
            {/*  */}
          </div>
        </div>
        <div className="services">
        <h3>Services Related To Graphics & Design</h3>

        <ul>
          <span>
            <a href="">Minimalist logo design</a>
          </span>

          <span>
            <a href="">Signature logo design</a>
          </span>

          <span>
            <a href="">Mascot logo design</a>
          </span>
          <span>
            <a href="">3d logo design</a>
          </span>

          <span>
            <a href="">Hand drawn logo design</a>
          </span>

          <span>
            <a href="">Vintage logo design</a>
          </span>

          <span>
            <a href="">Remove background</a>
          </span>

          <span>
            <a href="">Photo restoration</a>
          </span>

          <span>
            <a href="">Photo retouching</a>
          </span>

          <span>
            <a href="">Image resize</a>
          </span>

          <span>
            <a href="">Product label design</a>
          </span>

          <span>
            <a href="">Custom twitch overlay</a>
          </span>

          <span>
            <a href="">Custom twitch emotes</a>
          </span>

          <span>
            <a href="">Gaming logo</a>
          </span>
          <span>
            <a href="">Children book illustration</a>
          </span>

          <span>
            <a href="">Instagram design</a>
          </span>

          <span>
            <a href="">Movie poster design</a>
          </span>

          <span>
            <a href="">Box design</a>
          </span>

          <span>
            <a href="">Logo maker</a>
          </span>

          <span>
            <a href="">Logo ideas</a>
          </span>
        </ul>
      </div>
      </div>
    </div>
  );
}
