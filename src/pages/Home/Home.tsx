import React from "react";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  StepForwardOutlined,
  MessageOutlined,
} from "@ant-design/icons";

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
            <div id="product-carousel" className="carousel-inner">
              {/* <img src="./img/carousel/hero-andrea.webp" alt="..." /> */}

              {/* SEARCH */}
              <div className="row">
                <div className="col">
                  <div className="item">
                    <div className="title">
                      <p className="d-flex m-0">
                        <h1>Find the perfect</h1>
                        <i>freelance</i>
                      </p>
                      <h1>services for your business</h1>
                    </div>
                    <div className="search mt-4">
                      <form className="form" action="">
                        <span className="icon">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                        <input
                          type="text"
                          placeholder='Try "building mobile app"'
                        />
                        <button>Search</button>
                      </form>
                    </div>
                    <div className="popular d-flex mt-4">
                      <span>Popular:</span>
                      <a href="#">Website Design</a>
                      <a href="#">WordPress</a>
                      <a href="#">Logo Design</a>
                      <a href="#">Video Editing</a>
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
              <li>
                Trusted by:
              </li>
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
    </div>
  );
}
