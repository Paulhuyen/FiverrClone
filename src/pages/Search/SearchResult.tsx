import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getJobListByName,
  JobsList,
  ProductModel,
} from "../../redux/reducers/ProducReducers";

type Props = {
  title?: [JobsList, ProductModel];
};

export default function SearchResult({ title }: Props) {
  let keywordRef = useRef("");
//   let [searchParams, setSearchParams] = useSearchParams();
  // let [arrJobList, setArrJobList] = useState([]);
//   let timeoutRef = useRef({});


  const { arrJobList } = useSelector(
    (state: RootState) => state.ProducReducers
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // Call API = action thunk
    const actionApi = getJobListByName();
    dispatch(actionApi);
  }, []);


  const renderKeyword = () => {
    return arrJobList.map((keyword: JobsList) => {
        
    });
  };

  return (
    <div className="card">
      <img className="w-100" src={arrJobList.hinhAnh} alt="..." />
      <div className="card-body">
        <h2>{arrJobList.name}</h2>
        <p>{arrJobList.shortDescription}</p>
      </div>
      <div className="card-footer">
        <NavLink to={`/detail/${arrJobList.id}`} className="btn">
          Buy Now
        </NavLink>
        <span>{arrJobList.price}$</span>
      </div>
    </div>
  );
}
