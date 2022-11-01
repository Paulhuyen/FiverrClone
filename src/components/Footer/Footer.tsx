import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="item">
              <h6>Categories</h6>
              <ul>
                <li>
                  <a href="#">Graphics & Design</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Writing & Translation</a>
                </li>
                <li>
                  <a href="#">Video & Animation</a>
                </li>
                <li>
                  <a href="#">Music & Audio</a>
                </li>
                <li>
                  <a href="#">Programming & Tech</a>
                </li>
                <li>
                  <a href="#">Data</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Lifestyle</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <h6>About</h6>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press & News</a>
                </li>
                <li>
                  <a href="#">Partnerships</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Intellectual Property Claims</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <h6>Support</h6>
              <ul>
                <li>
                  <a href="#">Help & Support</a>
                </li>
                <li>
                  <a href="#">Trust & Safety</a>
                </li>
                <li>
                  <a href="#">Selling on Fiverr</a>
                </li>
                <li>
                  <a href="#">Buying on Fiverr</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <h6>Community</h6>
              <ul>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Community Standards</a>
                </li>
                <li>
                  <a href="#">Podcast</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Invite a Friend</a>
                </li>
                <li>
                  <a href="#">Become a Seller</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="item">
              <h6>More From Fiverr</h6>
              <ul>
                <li>
                  <a href="#">Fiverr Business</a>
                </li>
                <li>
                  <a href="#">Fiverr Pro</a>
                </li>
                <li>
                  <a href="#">Fiverr Studios</a>
                </li>
                <li>
                  <a href="#">Fiverr Logo Maker</a>
                </li>
                <li>
                  <a href="#">Fiverr Guides</a>
                </li>
                <li>
                  <a href="#">Get Inspired</a>
                </li>
                <li>
                  <a href="#">Fiverr Select</a>
                </li>
                <li>
                  <a href="#">Clear Voice</a>
                </li>
                <li>
                  <a href="#">Content Marketing</a>
                </li>
                <li>
                  <a href="#">Fiverr Workspace</a>
                </li>
                <li>
                  <a href="#">Invoice Software</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Online Courses</a>
                </li>
                <li>
                  <a href="#">Working Not Working</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col col-left">
            <div className="item">
              <span>fiverr</span>
              <i className="fa fa-registered" aria-hidden="true"></i>
              <p>© Fiverr International Ltd. 2022</p>
            </div>
          </div>
          <div className="col col-right">
            <div className="item d-flex">
              <ul className="social-media d-flex">
                <li>
                  <a href="https://twitter.com/fiverr" target="_blank">
                    <img src="./img/social/twitter.png" alt="..." />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Fiverr/" target="_blank">
                    <img src="./img/social/facebook.png" alt="..." />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/fiverr-com/" target="_blank">
                    <img src="./img/social/linkedin.png" alt="..." />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/fiverr/" target="_blank">
                    <img src="./img/social/social.png" alt="..." />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/fiverr/" target="_blank">
                    <img src="./img/social/instagram.png" alt="..." />
                  </a>
                </li>
              </ul>
              <ul className="setting-buttons d-flex">
                <li>
                  <div className="inner">
                  <img src="./img/social/language.png" alt="..." />
                  <span>English</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                  <img src="./img/social/currency.png" alt="..." />
                  <span>USD</span>
                  </div>
                </li>
                <li>
                  <div className="inner">
                  <img src="./img/social/accessibility.png" alt="..." />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
