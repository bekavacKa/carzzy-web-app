import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../redux/loaderSlice';
import AuthService from '../../../services/AuthService';
import './all-impressions.scss';

function AllImpressions() {
    const dispatch = useDispatch();
    const [allImpressions, setAllImpressions] = useState([]);

    useEffect(() => {
        getAllImpressionsFromService();
    },[]);
    


    const getAllImpressionsFromService = () => {
        dispatch(setLoader(true))
        AuthService.getImpressions()
                    .then((res) => {
                      setAllImpressions(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    })
                    .finally(() => dispatch(setLoader(false)));
    }

    const impressionsLayout = () => {
        return allImpressions.map((impressions, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}.</th>
                <td>{impressions.name}</td>
                <td>{impressions.userText.slice(0, 40) + ". . ."}</td>
              </tr>
            )
          })
      }

  return (
    <div className='all-impressions-wrapper' >
    {
    allImpressions?.length && 
    <table className="all-impressions-table">
    <thead>
        <tr>
        <th scope="col">NO.</th>
        <th scope="col">name</th>
        <th scope="col">impression</th>
        </tr>
    </thead>
    <tbody>
        {impressionsLayout()}
    </tbody>
    </table>
    }
</div>
  )
}

export default AllImpressions