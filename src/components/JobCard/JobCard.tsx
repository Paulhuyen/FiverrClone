import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllProduct } from "../../redux/reducers/ProducReducers";
import { Job } from "../../redux/models/jobModel";
type Props = {};

export default function JobCard({}: Props) {
  const { arrayJob } = useSelector((state: RootState) => state.ProducReducers);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const actionApi = getAllProduct();
    dispatch(actionApi);
  }, []);
  //render
  const renderCongViec = () => {
    return arrayJob.map((item: Job, index: number) => {
      return (

          <div className="col-4" key={index}>
            <div className="item">
              <NavLink className="top" to="/chi-tiet-cong-viec">
                {/* hinhAnh */}
                <img src={item.hinhAnh} alt="..." />
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
                <h3>
                  <NavLink className="jobName" to="/chi-tiet-cong-viec">
                    {item.tenCongViec}
                  </NavLink>
                </h3>
                <div className="rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {/* saoCongViec */}
                  <span>{item.saoCongViec}</span>
                  {/* danhGia */}
                  <p>(danhGia - {item.danhGia})</p>
                </div>
              </div>
              <div className="bottom d-flex">
                <i className="fa fa-heart" aria-hidden="true"></i>
                <div className="price d-flex">
                  <p>STARTING AT</p>
                  {/* giaTien */}
                  <span>${item.giaTien}</span>
                </div>
              </div>
            </div>
          </div>
      );
    });
  };
  return (
    <div className="job-card-result " >
    <div className="row">
      {renderCongViec()}
      </div>
      </div>
  );
}
