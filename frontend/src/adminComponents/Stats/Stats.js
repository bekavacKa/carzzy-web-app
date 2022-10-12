import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import AuthService from '../../services/AuthService';
import ShopService from '../../services/ShopService'
import './stats.scss';
import StatsBox from './StatsBox';

function Stats() {

  const dispatch = useDispatch();
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);


  useEffect(() => {
    getProductsFromService();
    getUsersFromService();
  }, []);

  const getProductsFromService = () => {
    dispatch(setLoader(true))
    ShopService.getProducts()
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
  return (
    <div className='stats-wrapper' >
      <StatsBox number={products} title="PRODUCTS" />
      <StatsBox number={users} title="USers"/>
      <StatsBox number={products} title="PRODUCTS" />
      <StatsBox number={users} title="USers"/>
    </div>
  )
}

export default Stats