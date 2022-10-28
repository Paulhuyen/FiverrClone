import React, { useEffect, useRef, useState, } from "react";
import { useSearchParams } from "react-router-dom";
import { http } from "../../util/settings";

type Props = {};

export default function Search({}: Props) {
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let [arrJobList, setArrJobList] = useState([]);
  let timeoutRef = useRef({});

  const getJobByKeyword = async (keyword?:string) => {
    try{
        const keyword = searchParams.get('keyword'); //null
        if(keyword?.trim() !== "" && keyword !== null){
            let result = await http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`);
            console.log(result.data.content);
            setArrJobList(result.data.content);
            // clearTimeout(timeoutRef.current);
        } else{
            setArrJobList([]);
        }
    } catch(err){
        console.log(err);
    }
    }

    useEffect(() => {
        getJobByKeyword();
    }, [keywordRef.current]);

    const handleChange = (e:any) => {
        keywordRef.current = e.target.value;
        timeoutRef.current = setTimeout(() => {
          setSearchParams({ keyword: keywordRef.current });
        }, 1000);
      };

    const handleSubmit = (e:any) => {
        e.preventDefault();
    };

  return (
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
            <div className="search mt-4">
              <form className="form" action="" onSubmit={handleSubmit}>
                <span className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
                <input type="text" placeholder='Try "building mobile app"' onChange={handleChange} />
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
  );
}
