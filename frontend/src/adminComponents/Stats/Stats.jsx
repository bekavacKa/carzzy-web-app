import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import AdminService from '../../services/AdminService';
import AuthService from '../../services/AuthService';
import './stats.scss';
import StatsBox from './StatsBox';

function Stats() {

  const dispatch = useDispatch();
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);
  const [subs, setSubs] = useState(0);

  // TODO sve u jedan api call tribam napravit

  useEffect(() => {
    getProductsFromService();
    getUsersFromService();
    getSubscriptionsFromService();
  }, []);

  const getProductsFromService = () => {
    dispatch(setLoader(true))
    AdminService.getAllDbProducts()
                .then((res) => {
                  // console.log(res);
                  setProducts(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getUsersFromService = () => {
    dispatch(setLoader(true))
    AuthService.getAllUsers()
                .then((res) => {
                  // console.log(res);
                  setUsers(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const getSubscriptionsFromService = () => {
    dispatch(setLoader(true))
    AuthService.getAllSubscriptions()
                .then((res) => {
                  setSubs(res.data.length);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }


  return (
    <div className='stats-wrapper' >
      <StatsBox number={products} title="PRODUCTS" />
      <StatsBox number={users} title="USers"/>
      <StatsBox number={subs} title="Subscriptions" />
    </div>
  )
}

export default Stats