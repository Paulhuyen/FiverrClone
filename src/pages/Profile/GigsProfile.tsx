import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { ThueCongViecModal } from '../../redux/models/jobModel';
import { getCongViecApi } from '../../redux/reducers/ProducReducers';
import { getUserApi } from '../../redux/reducers/UserReducer';

type Props = {}

export default function GigsProfile({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const {congViecDaThue} =  useSelector((state: RootState)=> state.ProducReducers);
  console.log('cv da thue',congViecDaThue)

    useEffect(() => {
         dispatch(getCongViecApi());
      }, []);
      useEffect(() => {
        dispatch(getUserApi());
     }, []);
  return (
    <div className="gigs-column col-8">
    <div className="gigs-prod">
        {congViecDaThue?.map((congViecThue:any, index:number )=>{
             return(
                <div className="gigs-prod-inner card-prod row" key={index}>
                <div className="prod-img col-4">
                    <img src={congViecThue.congViec?.hinhAnh} alt="..." />
                </div>
                <div className="prod-title col-8">
                    <a href="#" className="prod-name">{congViecThue.congViec?.tenCongViec}</a>
                    <p className="prod-title">{congViecThue.congViec?.moTaNgan}</p>
                    <div className="prod-footer d-flex">
                        <div className="btn-detail btn">View detail</div>
                        <div className="btn-edit btn" >Edit</div>
                        <div className=" btn">X</div>
                    </div>
                </div>
            </div>
             )
        })}
    </div>

  </div>
  )
}