import { GoogleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getCongViecApi } from '../../redux/reducers/ProducReducers';
import { getUserApi, updateAvatar,  } from '../../redux/reducers/AdminUserReducer';
type Props = {
    
}

export default function InfoProfile({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const {userLogin} =  useSelector((state: RootState)=> state.UserReducer);
  const {congViecDaThue} =  useSelector((state: RootState)=> state.ProducReducers);
  console.log('user profile',userLogin);
  // const itemUser = userLogin;
  // console.log("data user", userLogin)
  // const Profile = getStoreJson("user")
  // console.log(Profile)
  useEffect(() => {
    dispatch(getUserApi());
  }, []);
  useEffect(() => {
    dispatch(getCongViecApi());
 }, []);
 const handlePreviewAvatar = (e:any) =>{
     const file = e.target.files[0];
     file.preview = URL.createObjectURL(file)
    //  console.log(URL.createObjectURL(file))
     const action = updateAvatar(file)
     dispatch(action)

 }
  return (
    <div className="info-column col col-lg-4">
      <div>
      <div className="sellerCard-component" >
        <div className="user-profile-info">
          <div className="user-profile-image">
            <div className="user-img">
              <img src={userLogin.avatar} alt="" />
              <div className="icon-camera">
                {/* <input type="file" onChange={handlePreviewAvatar}/> */}
                <i className="fa fa-camera" aria-hidden="true"></i>
                {/* <Upload></Upload> */}
              </div>
            </div>
          </div>
        </div>
        <div className="user-profile-name">
          <p>{userLogin?.name}</p>
          <i className="fa fa-paint-brush" aria-hidden="true"></i>
        </div>
        <div className="button-wrapper">
          <a href="#">Preview Fiverr Profile</a>
        </div>
        <hr />
        <div className="user-desc">
          <ul>
            <li>
              <span className="d-flex">
                <i className="fa fa-map-marker mx-1" aria-hidden="true"></i>
                <p>Form</p>
              </span>
              <p>Vietnam</p>
            </li>
            <li>
              <span className="d-flex">
                <i className="fa fa-user mx-1" aria-hidden="true"></i>
                <p>Member since</p>
              </span>
              <p>Oct 2022</p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    <div className="user-segmentation">
        <div className="profile-desc inner-row">
            <p>Description</p>
            <a href="#">Edit Description</a>
        </div>
        <hr />
        <div className="inner-row">
            <p>Languages</p>
            <a href="#">Add New</a>
        </div>
        <div className="profile-langguages">
            <p className="title">English - Basic</p>
        </div>
        <hr />
        <div className="profile-accounts">
            <p>Linked Accounts</p>
            <ul>
                <li>
                    
                   <PlusOutlined />
                   <a  href='#' className="btn-connect">Facebook</a>
                </li>
                <li>
                   <GoogleOutlined />
                   <a  href='#' className="btn-connect cl-gg">Google</a>
                </li>
                <li>
                   <PlusOutlined />
                   <a  href='#' className="btn-connect">Dirbble</a>
                </li>
                <li>
                   <PlusOutlined />
                   <a href='#'  className="btn-connect">Stack Overflow</a>
                </li>
                <li>
                   <PlusOutlined />
                   <a href='#'  className="btn-connect">Github</a>
                </li>
                <li>
                   <PlusOutlined />
                   <a href='#'  className="btn-connect">Vimeo</a>
                </li>
                <li>
                   <PlusOutlined />
                   <a className="btn-connect">Twitter</a>
                </li>
            </ul>
        </div>
        <hr />
        <div className="profile-skill inner-row">
           <p>Skills</p>
           <a href="#">Add New</a>
        </div>
        <p className="title">Add your skill.</p>
        <hr />
        <div className="profile-education inner-row">
           <p>Education</p>
           <a href="#">Add New</a>
        </div>
        <p className="title">Add your Education</p>
        <hr />
        <div className="profile-certlflcation inner-row">
           <p>Certlflcation</p>
           <a href="#">Add New</a>
        </div>
        <p className="title">Add your Certification</p>
        <hr />

    </div>
  </div>
  )
}