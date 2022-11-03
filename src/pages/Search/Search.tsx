import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getJobListByName, JobsList } from "../../redux/reducers/ProducReducers";
import { http } from "../../util/settings";

type Props = {};

export default function Search({}: Props) {
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  // let [arrJobList, setArrJobList] = useState([]);
  let timeoutRef = useRef({});

  // const getJobByKeyword = async (keyword?: string) => {
  //   try {
  //     const keyword = searchParams.get("keyword"); //null
  //     if (keyword?.trim() !== "" && keyword !== null) {
  //       let result = await http.get(
  //         `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`
  //       );
  //       console.log(result.data.content);
  //       setArrJobList(result.data.content);
  //       // clearTimeout(timeoutRef.current);
  //     } else {
  //       setArrJobList([]);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getJobByKeyword();
  // }, [keywordRef.current]);


  // Test
  const {arrJobList} = useSelector(
    (state: RootState) =>state.ProducReducers
  );
  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    const actionApi = getJobListByName();
    dispatch(actionApi);
  }, [keywordRef.current]);


  const handleChange = (e: any) => {
    keywordRef.current = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 1000);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  // const renderSearchResult = () => {
  //   return arrJobList.map((keyword: JobsList, index: number) => {
  //     return (
  //       <div className="col-4" key={index}>
  //         {/* <ProductCard product={item} /> */}
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="search-form">
      <form className="form" action="" onSubmit={handleSubmit}>
        <span className="icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          placeholder='Try "building mobile app"'
          onChange={handleChange}
          
        />

        <Search/>
        <NavLink to="/job-list">
          <button>Search</button>
        </NavLink>
      </form>
    </div>
  );
}
