import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';
type Props = {}

export default function DanhSachCongViec({}: Props) {
  return (
    <div className='container'>
    <div className="banner-page-category">
        <div className="banner-page">
            <img src="./img/banner.webp"  alt="" />
            <div className="banner-content">
                <h3 className="title">Graphics & Design</h3>
                <p className='subtitle'>Designs to make you stand out.</p>
                <div className="button-banner">
                    <button className='button'>How Fiverr Works</button>
                </div>
            </div>
        </div> 
        <div className="carousel-category">
            <h4 className='text-title'>Most popular in Graphics & Design</h4>
            <div className="slider">
            </div>
        </div>
        <div className="product-categories ">
            <h4 className='text-title'>Explore Graphics & Design</h4>
            <div className="prod-list row">
                <div className="product-item">
                    <div className="card-img" ><img src="./img/prod1.webp" alt="" /></div>
                    <div className="card-body">
                            <p className='card-name'>Logo & Brand Identity</p>
                    </div>
                    <div className="card-footer">
                        <div className="items-content">
                            <p>Logo Design</p>
                            <ArrowRightOutlined />
                        </div>
                        <div className="items-content">
                            <p>Brand Style Guides</p>
                            <ArrowRightOutlined />

                        </div>
                        <div className="items-content">
                            <p>Fonts & Typography</p>
                            <ArrowRightOutlined />

                        </div>
                        <div className="items-content">
                            <p>Business Cards & Stationery</p>
                            {/* <i class="fa fa-arrow-right" aria-hidden="true"></i> */}
                            <ArrowRightOutlined />

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}