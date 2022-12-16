import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../redux/loaderSlice';
import ShopService from '../../../services/ShopService';
import './all-sponsors.scss';

function AllSponsors() {
    const dispatch = useDispatch();
    const [allSponsors, setAllSponsors] = useState([]);

    useEffect(() => {
        getAllSponsorsFromService();
    },[]);
    


    const getAllSponsorsFromService = () => {
        dispatch(setLoader(true))
        ShopService.getSponsors()
                    .then((res) => {
                      setAllSponsors(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    })
                    .finally(() => dispatch(setLoader(false)));
    }

    const sponsorsLayout = () => {
        return allSponsors.map((sponsor, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}.</th>
                <td>{sponsor.title}</td>
                <td>{sponsor.isVisible === "true" ? "enabled" : "disabled" }</td>
              </tr>
            )
          })
    }

  return (
    <div className='all-sponsors-wrapper' >
        {
            allSponsors?.length && 
            <table className="all-sponsors-table">
                <thead>
                    <tr>
                    <th scope="col">NO.</th>
                    <th scope="col">name</th>
                    <th scope="col">visibility</th>
                    </tr>
                </thead>
                <tbody>
                    {sponsorsLayout()}
                </tbody>
            </table>
        }
    </div>
  )
}

export default AllSponsors