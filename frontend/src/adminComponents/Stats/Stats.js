import React, { useEffect, useState } from 'react'
import AuthService from '../../services/AuthService';
import ShopService from '../../services/ShopService'
import './stats.scss';
import StatsBox from './StatsBox';

function Stats() {

  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);


  useEffect(() => {
    ShopService.getProducts()
              .then((res) => {
                // console.log(res);
                setProducts(res.data.length);
              })
              .catch((err) => {
                console.log(err);
              })
    AuthService.getAllUsers()
              .then((res) => {
                // console.log(res);
                setUsers(res.data.length);
              })
              .catch((err) => {
                console.log(err);
              })
  }, [])

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