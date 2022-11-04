import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
// import MenuPages from "../MenuPages/MenuPages";
type Props = {};

export default function JobsList({}: Props) {

  return (
    <div className="container">
      {/* <MenuPages /> */}

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

        {/* Render Search Result */}

        <div className="result">
          <div className="row">
            
          </div>
        </div>



        {/* <div className="carousel-category">
          <h4 className="text-title">Most popular in Graphics & Design</h4>
          <div className="slider"></div>
        </div> */}
        {/* <div className="product-categories "> */}
        {/* <h4 className="text-title">Explore Graphics & Design</h4> */}
        {/* <div className="prod-list row">
            <div className="product-item"> */}
        {/* <div className="card-img">
                <img src="./img/prod1.webp" alt="" />
              </div> */}
        {/* <div className="card-body">
                <p className="card-name">Logo & Brand Identity</p>
              </div> */}
        {/* <div className="card-footer"> */}
        {/* <div className="items-content">
                  <p>Logo Design</p>
                  <ArrowRightOutlined />
                </div> */}
        {/* <div className="items-content">
                  <p>Brand Style Guides</p>
                  <ArrowRightOutlined />
                </div> */}
        {/* <div className="items-content">
                  <p>Fonts & Typography</p>
                  <ArrowRightOutlined />
                </div> */}
        {/* <div className="items-content">
                  <p>Business Cards & Stationery</p> */}
        {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
        {/* <ArrowRightOutlined /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
