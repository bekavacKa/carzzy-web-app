import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/scss/base.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

import routeConfig from './config/routeConfig';
import Navigation from './components/Navigation/Navigation';
import Shop from './pages/Shop/Shop';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Contact from './pages/Contact/Contact';
import { setUser } from "./redux/userSlice";
import ActivateUser from './pages/ActivateUser/ActivateUser';
import ProductView from './pages/ProductView/ProductView';
import Order from './pages/Order/Order';
import { setShopCart } from './redux/shopSlice';

axios.defaults.baseURL ='http://localhost:4000';

function App() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    userLocalStorage();
    shopCartLocalStorage();
  }, []);
  
  const userLocalStorage = () => {
    if(!localStorage.hasOwnProperty('user')){
      // navigate('/auth');
    }else{
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
  }

  const shopCartLocalStorage = () => {
    if(localStorage.hasOwnProperty('shopCart')){
      dispatch(setShopCart(JSON.parse(localStorage.getItem('shopCart'))));
    }
  }
  

  return (
    <div className="app-wrapper">

      <Navigation/>

      <Routes>

        <Route path={routeConfig.HOME.url} element={<Home/>} />
        <Route path={routeConfig.SHOP.url} element={<Shop/>} />
        <Route path={routeConfig.SHOP_SINGLE_PRODUCT.url} element={<ProductView/>} />
        <Route path={routeConfig.CONTACT.url} element={<Contact/>} />
        <Route path={routeConfig.SIGN_IN.url} element={<Auth/>} />
        <Route path={routeConfig.USER_ACTIVATE.url} element={<ActivateUser/>} />
        <Route path={routeConfig.ORDER.url} element={<Order/>} />
        
      </Routes>

      {/* <Button>TEST BOOTSTRAP</Button> */}
      
    </div>
  );
}

export default App;
