import React from "react";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  StepForwardOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Search from "../Search/Search";
// import Search from "../Search/Search";
// import WorkingIndustries from "../WorkingIndustries/WorkingIndustries";

type Props = {
  title?: string;
};

export default function Home({ title }: Props) {
  return (
    <div>
      {/* CAROUSEL */}
      <section className="slider">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              id="product-carousel"
              className="carousel-inner"
              style={{
                backgroundImage: "url(./img/carousel/hero-gabrielle.webp)",
                position: "absolute",
                top: "0",
                left: "0",
                height: "680px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* SEARCH */}
              <div className="search">
                <div className="row d-flex">
                  <div className="col-left">
                    <div className="item">
                      <div className="title">
                        <p className="d-flex m-0">
                          <h1>Find the perfect</h1>
                          <i>freelance</i>
                        </p>
                        <h1>services for your business</h1>
                      </div>
                      <Search/>
                      <div className="popular d-flex mt-4">
                        <span>Popular:</span>
                        <a href="#">Website Design</a>
                        <a href="#">WordPress</a>
                        <a href="#">Logo Design</a>
                        <a href="#">Video Editing</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-right">
                    <div className="item d-flex">
                      <div className="item-left"></div>
                      <div className="item-right">
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>
                          Gabrielle, <b>Video Editor</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <div className="container">
          <ul className="d-flex">
            <li>Trusted by:</li>
            <li>
              <img src="./img/facebook.png" alt="..." />
            </li>
            <li>
              <img src="./img/google.png" alt="..." />
            </li>
            <li>
              <img src="./img/netflix.png" alt="..." />
            </li>
            <li>
              <img src="./img/P&G.png" alt="..." />
            </li>
            <li>
              <img src="./img/paypal.png" alt="..." />
            </li>
          </ul>
        </div>
      </section>

      {/* WORKING INDUSTRIES */}
      {/* <WorkingIndustries /> */}
    </div>
  );
}
