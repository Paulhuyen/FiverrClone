import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import MenuPages from "../MenuPages/MenuPages";
import { NavLink } from "react-router-dom";
type Props = {};

export default function JobsList({}: Props) {
  return (
    <div className="container">
      <MenuPages />

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
      {/* <DetailCategories/> */}

      <div className="banner-page-category">
        <div className="banner-page">
          <div className="banner-content">
            <h3 className="title">Result for "html"</h3>
            <div className="row">
              <div className="col">
                <div className="item">
                  <button className="button">
                    Category
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                  <button className="button">
                    Seller Details
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                  <button className="button">
                    Budget
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                  <button className="button">
                    Delivery Time
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="item d-flex">
                  <div className="toggle-icon">
                    <img src="./img/toggle.png" alt="..." />
                    <span>Pro Services</span>
                  </div>
                  <div className="toggle-icon">
                    <img src="./img/toggle.png" alt="..." />
                    <span>Local sellers</span>
                  </div>
                  <div className="toggle-icon">
                    <img src="./img/toggle.png" alt="..." />
                    <span>Online sellers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-left">
                <span>24,563 services available</span>
              </div>
              <div className="col col-right">
                <span>
                  Sort by <b>Relevance</b>
                </span>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Render Job Card Result */}

        <div className="job-card-result">
          <div className="row">
            <div className="col-4">
              <div className="item">
                <NavLink className="top" to="/chi-tiet-cong-viec">
                  {/* hinhAnh */}
                  <img src="./img/jobs/LogoDesign.webp" alt="..." />
                </NavLink>
                <div className="center">
                  <div className="accountHolder d-flex">
                    <div className="avatar">
                      {/* avatar */}
                      <img src="./img/jobs/SEO.webp" alt="..." />
                    </div>
                    <div className="accountName">
                      {/* tenNguoiTao */}
                      <a href="#">Tên Người tạo</a>
                      <p>Level 2 Seller</p>
                    </div>
                  </div>
                  {/* tenCongViec */}
                  <h3 style={{height:120}}>
                    <NavLink className="jobName" to="/chi-tiet-cong-viec">
                      I will design an outstanding logo with a high quality so that you can feel appointed
                    </NavLink>
                  </h3>
                  <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    {/* saoCongViec */}
                    <span>5.0</span>
                    {/* danhGia */}
                    <p>(danhGia - 623)</p>
                  </div>
                </div>
                <div className="bottom d-flex">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <div className="price d-flex">
                    <p>STARTING AT</p>
                    {/* giaTien */}
                    <span>$15</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
