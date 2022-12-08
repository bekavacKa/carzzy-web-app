import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../redux/loaderSlice';
import AuthService from '../../../services/AuthService';
import './all-subscriptions.scss';

function AllSubscriptions() {
  const dispatch = useDispatch();
  const [allSubs, setAllSubs] = useState([]);

  useEffect(() => {
    getAllSubscriptionsFromService();
  },[])
  
  const getAllSubscriptionsFromService = () => {
    dispatch(setLoader(true))
    AuthService.getAllSubscriptions()
                .then((res) => {
                  setAllSubs(res.data);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  };

  const subsLayout = () => {
    return allSubs.map((sub, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}.</th>
          <td>{sub.email}</td>
          <td>{sub.subscribeDate}</td>
        </tr>
      )
    })
  }

  return (
    <div className='all-subs-wrapper' >
    {
      allSubs?.length && 
      <table className="all-subs-table">
      <thead>
        <tr>
          <th scope="col">NO.</th>
          <th scope="col">email</th>
          <th scope="col">Subscription date</th>
        </tr>
      </thead>
      <tbody>
        {subsLayout()}
      </tbody>
    </table>
    }
  </div>
  )
}

export default AllSubscriptions