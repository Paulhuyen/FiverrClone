import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { ProductModel,DsNhomChiTietLoai,DsChiTietLoai } from "../../redux/reducers/ProducReducers";
import { RootState } from "../../redux/configStore";

type Props = {
  title?: [ProductModel,DsNhomChiTietLoai,DsChiTietLoai];
};

export default function DetailCategories({title}: Props) {
    const {jobCategories} = useSelector((state:RootState)=> state.ProducReducers);
    console.log('detail *', jobCategories);
    // console.log('detail DsNhomChiTietLoai', jobCategories.DsNhomChiTietLoai);
    // console.log('detail DsNhomChiTietLoai dsChiTietLoai', jobCategories.DsNhomChiTietLoai.dsChiTietLoai);

    const renderJobCategories = () => {
        return jobCategories[0].dsNhomChiTietLoai.map((item:DsNhomChiTietLoai)=>{
           return (<div className="item-job" key={item.id}>
                    <div className="card-img">
                        <img src={item.hinhAnh} alt="..." />
                    </div>
                    {/* <div className="card-name">{item.tenNhom}</div>               */}
                    <div className="card-footer">
                        <ul>
                          {/* {item.dsChiTietLoai.map((itemds:DsChiTietLoai,index)=>{
                            <li key={index}>                            
                              <p>{itemds.tenChiTiet}</p>
                               <ArrowRightOutlined className="icon"/>
                            </li>
                          })} */}
                        </ul>
                    </div>
                    </div>
                    )
        })}


  return (
    <div className="Header-Categories">
      <div className="container">
        <div className="banner-category bg-dark">
          <div className="banner-page">
            <img src="./img/banner.webp" alt="" />
            <div className="banner-content">
              <h3 className="title">Graphics & Design</h3>
              <p className="subtitle">Designs to make you stand out.</p>
              <div className="button-banner">
                <button className="button">How Fiverr Works</button>
              </div>
            </div>
          </div>
        </div>
        {/* show list job */}
        <div className="header-job">
          <h4 className="text-title">Explore Graphics & Design</h4>
          <div className="list-job row">
            {/*  */}
            {renderJobCategories()}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
