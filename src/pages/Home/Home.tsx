import React from "react";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  StepForwardOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Search from "../Search/Search";
import WorkingIndustries from "../WorkingIndustries/WorkingIndustries";

type Props = {
  title?: string;
};

export default function Home({title}: Props) {
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
              <Search/>
              
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
      <WorkingIndustries/>
      {/* <section className="popular-services">
        <div className="container">
          <h2>Popular professional services</h2>
          <div className="owl-carousel owl-theme">
          <div className="item">
              <h4>1</h4>
            </div>
            <div className="item">
              <h4>2</h4>
            </div>
            <div className="item">
              <h4>3</h4>
            </div>
            <div className="item">
              <h4>4</h4>
            </div>
            <div className="item">
              <h4>5</h4>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
}
