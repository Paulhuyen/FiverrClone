import React, { useEffect } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "../../redux/reducers/ProducReducers";
import { Job } from "../../redux/models/jobModel";
import JobCard from "../../components/JobCard/JobCard";
import JobCardSearch from "../../components/JobCard/JobCardSearch";
// import MenuPages from "../MenuPages/MenuPages";
type Props = {};

export default function JobsList({}: Props) {
  const { arrayJob } = useSelector((state: RootState) => state.ProducReducers);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const actionApi = getAllProduct();
    dispatch(actionApi);
  }, []);
  // const renderCongViec = () => {
  //   return arrayJob.map((item: Job, index: number) => {
  //     return (
  //       <div className="col-3 p-2" key={index}>
  //         <div className="img">
  //           <img src={item.hinhAnh} style={{ width: "100%" }} alt="" />
  //         </div>
  //         <div className="card-body">
  //           <div className="information-author d-flex">
  //             <img src="./img/avt.jpg" width={30} alt="" />
  //             <div className="name-author">
  //               <span>I'm Groot</span>
  //               <br />
  //               <span>Level 2</span>
  //             </div>
  //           </div>
  //           <div className="title">
  //             <a
  //               href=""
  //               style={{ color: "black" }}
  //               onClick={() => {
  //                 navigate(`/detail/${item.id}`);
  //               }}
  //             >
  //               {item.tenCongViec}
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };
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

        {/* Render Job Card Result */}

        <div className="result">
          {/* <div className="row">{renderCongViec()}</div> */}
          <JobCardSearch/>
          <hr />
          {/* <h4 style={{fontWeight:600}}>List Job</h4> 
          <JobCard/> */}
        </div>
      </div>
    </div>
  );
}
