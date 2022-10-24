import React, { useEffect, useState } from "react";
import { DislikeOutlined, LikeOutlined, StarFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getAllProductDetail,
  JobDetail,
} from "../../redux/reducers/ProducReducers";
import { getStoreJson  } from "../../util/settings";
import { getListComment, ListComment } from "../../redux/reducers/CommentReducer";
type Props = {};

export default function Detail({}: Props) {
  const params = useParams();
  const [index,setIndex] = useState(0);
  const { arrayListComment } = useSelector( (state: RootState) => state.CommentReducer);
  console.log('comment',arrayListComment)

  const titleDetail = getStoreJson("arrayJobDetail");
  const ListCommentReveiw = getStoreJson("arrayListComment")
  console.log("danh sách cm",ListCommentReveiw)
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    let { id } = params;
    const action: any = getAllProductDetail(id);
    const actionCM:any = getListComment(id);
    dispatch(actionCM);
    dispatch(action);
  }, [params.id]);

  const renderCommentReview = () => {
    return ListCommentReveiw?.map((item:ListComment,index:number)=> {
      return (
        <div className="review-item" key={index}>
        <div className="user-review d-flex">
          <img
            src={item.avatar}
            alt=""
          />
          <div className="user-info">
            <p>
              <strong>{item.tenNguoiBinhLuan}</strong>
            </p>
            <p>
              <img
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                width={0}
                alt=""
              />
              <p>United States</p>
            </p>
          </div>
        </div>
        <div className="review-detail">
          <p>
            {item.noiDung}
          </p>
          <p className="time-review">{item.ngayBinhLuan}</p>
          <p className="flex">
            <div>
              <LikeOutlined className="mx-3" />
              <DislikeOutlined />
            </div>
          </p>
        </div>
      </div>
      )
    })
  }
  const renderProductDetail = () => {
    return titleDetail?.map((item: JobDetail, indexI: number) => {
      return (
        <div key={indexI}>
          <div className="row">
            <div className="main col-8">
              <div className="over-view">
                <nav>
                  <ul>
                    <li></li>
                  </ul>
                </nav>
                <h3 className="title">{item.congViec.tenCongViec}</h3>
                <div className="seller-overview d-flex">
                  <div className="avatar-author d-flex">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="name-author item">{item.tenNguoiTao}</div>
                  <div className="rated item">Level 2 seller</div>
                  <div className="star item">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="ratings-count item">
                    ( {item.congViec.danhGia} )
                  </div>
                </div>
              </div>
              <hr />
              <div className="slider">
                <div className="slideshow">
                  <img src={item.congViec.hinhAnh} alt="" />
                </div>
                <div className="slide-thumbnails"></div>
              </div>
              <hr />
            </div>

            <div className="sidebar col-4">
              {/* <PriceDetail/> */}
              <div className="tabs">
                <div className="tabsList">
                  <div
                    className={`tabHead ${index === 0 ? "active" : null}`}
                    onClick={() => {
                      setIndex(0);
                    }}
                  >
                    Basic
                  </div>
                  <div
                    className={`tabHead ${index === 1 ? "active" : null}`}
                    onClick={() => {
                      setIndex(1);
                    }}
                  >
                    Standard
                  </div>
                  <div
                    className={`tabHead ${index === 2 ? "active" : null}`}
                    onClick={() => {
                      setIndex(2);
                    }}
                  >
                    Premlum
                  </div>
                </div>
                <div className="tab-header">
                  <div className="tabContant" hidden={index != 0}>
                    <div className="package-content">
                      <div className="header-default d-flex">
                        <p>Basic</p>
                        <p>US$40</p>
                      </div>
                      <div className="article">
                        <div className="time-info">30 Days Dellvery</div>
                        <ul>
                          <div>
                            <li>
                              <i className="fa fa-check active" aria-hidden="true" />
                              <p>Design</p>
                            </li>
                            <li>
                              <i className="fa fa-check active" aria-hidden="true" />
                              <p>Design</p>
                            </li>
                            <li>
                              <i className="fa fa-check active" aria-hidden="true" />
                              <p>Design</p>
                            </li>
                            <li>
                              <i className="fa fa-check" aria-hidden="true" />
                              <p>Design</p>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tabContant" hidden={index != 1}>
                  <div className="package-content">
                      <div className="header-default d-flex">
                        <p>Standard</p>
                        <p>US${item.congViec.giaTien}</p>
                      </div>
                      <div className="article">
                        <div className="time-info my-2">30 Days Dellvery</div>
                        <p className="ml-2">{item.congViec.moTaNgan}</p>
                        <ul>
                          <div>
                            <li>
                              <i className="fa fa-check active" aria-hidden="true" />
                              <p>3D modeling</p>
                            </li>
                            <li>
                              <i className="fa fa-check active" aria-hidden="true" />
                              <p>Include environment</p>
                            </li>
                            <li>
                              <i className="fa fa-check active" aria-hidden="true" />
                              <p>Include furniture and people</p>
                            </li>
                            <li>
                              <i className="fa fa-check" aria-hidden="true" />
                              <p>Texturing & lighting</p>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tabContant" hidden={index != 2}>
                    3
                  </div>
                </div>
                <div className="tab-footer">
                  <div className="btn-cont">Continue ($1000)</div>
                  <a href="#">Compare Package</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8 col-review">
              <div className="over-review">
                <div className="header">
                  <h3 className="title">About gigs</h3>
                  <p>{item.congViec.moTa}</p>
                </div>
              </div>
              <h5>About The Seller</h5>
              <div className="section-title my-3">
                <div className="profile-card">
                  <div className="profile-info">
                    <div className="user-profile-img">
                      <img
                        src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b4a123cf1457d8402a6e16da5eb1f78a-1657868645692/8bcaba6c-3c85-45a3-8f52-341b08e851b5.JPG"
                        alt=""
                      />
                    </div>
                    <div className="user-profile-label">
                      <p>Omerrbyrk</p>
                      <p>Senior Flutter Developer</p>
                      <ul>
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                      </ul>
                      <button className="btn-cl-me">Contact Me</button>
                    </div>
                  </div>
                  <div className="stats-desc"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="gig-page-author">
        {/* render title */}
        {renderProductDetail()}
        
        {/* Comment */}
        <div className="row">
          <div className="col-8 col-comment">
            <div className="section-comment">
              <div className="reviews-wrap">
                <div className="review-list">
                  {renderCommentReview()}

                  <div className="user-comment-review ">
                    <div className="user-comment d-flex">
                      <div className="user-info">
                        <img
                          src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b4a123cf1457d8402a6e16da5eb1f78a-1657868645692/8bcaba6c-3c85-45a3-8f52-341b08e851b5.JPG"
                          alt=""
                        />
                      </div>
                      <textarea name="" id=""></textarea>
                    </div>
                    <button className="btn-comment">Add Comment</button>
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
