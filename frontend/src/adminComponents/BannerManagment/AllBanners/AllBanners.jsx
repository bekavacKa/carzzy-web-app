import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../redux/loaderSlice';
import ShopService from '../../../services/ShopService';
import './all-banners.scss';

function AllBanners() {
    const dispatch = useDispatch();
    const [allBanners, setAllBanners] = useState([]);

    useEffect(() => {
        getAllBannersFromService();
    },[]);

    const getAllBannersFromService = () => {
        dispatch(setLoader(true))
        ShopService.getBanners()
                    .then((res) => {
                      setAllBanners(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    })
                    .finally(() => dispatch(setLoader(false)));
    }

    const bannersLayout = () => {
        return allBanners.map((banner, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}.</th>
                <td>{banner.title}</td>
                <td>{banner.subtitle.slice(0, 30) + ". . ."}</td>
                <td>{banner.buttonText}</td>
                <td>{banner.infoPosition}</td>
              </tr>
            )
          })
    }

  return (
    <div className='all-banners-wrapper' >
        {
            allBanners?.length && 
            <table className="all-banners-table">
                <thead>
                    <tr>
                    <th scope="col">NO.</th>
                    <th scope="col">title</th>
                    <th scope="col">text</th>
                    <th scope="col">button</th>
                    <th scope="col">position</th>
                    </tr>
                </thead>
                <tbody>
                    {bannersLayout()}
                </tbody>
            </table>
        }
    </div>
  )
}

export default AllBanners