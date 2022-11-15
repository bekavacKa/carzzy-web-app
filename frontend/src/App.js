import React, { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Dashboard from './pages/Dashboard/Dashboard';
import BackToTop from './components/BackToTop/BackToTop';
import AllProducts from './adminComponents/ProductManagement/AllProducts/AllProducts';
import AllUsers from './adminComponents/UserManagement/AllUsers/AllUsers';
// import AllEmails from './adminComponents/AllEmails/AllEmails';
import Stats from './adminComponents/Stats/Stats';
import Header from './components/Header/Header';
import UserAccount from './pages/UserAccount/UserAccount';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AllSubscriptions from './adminComponents/SubscriptionsManagment/AllSubscriptions/AllSubscriptions';


axios.defaults.baseURL ='http://localhost:4000';
// axios.defaults.baseURL ='https://carzzy-web-app-production.up.railway.app/';

axios.interceptors.request.use(function (config) {
    // console.log("inter =>", config);
    if(localStorage.hasOwnProperty('token')){
      config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  }, function (err) {
    return Promise.reject(err);
});

function App() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toTopBtnShow, setToTopBtnShow] = useState(false);
  const [isCheckUser, setIsCheckUser] = useState(false);


  useEffect(() => {
    userLocalStorage();
    shopCartLocalStorage();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  },[])

  const listenToScroll = () => {
		if(window.scrollY > 400){
			setToTopBtnShow(true);
		}else{
      setToTopBtnShow(false);
    }
	}
  
  const userLocalStorage = () => {
    if(!localStorage.hasOwnProperty('user')){
      // navigate('/auth');
    }else{
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
    setIsCheckUser(true);
  }

  const shopCartLocalStorage = () => {
    if(localStorage.hasOwnProperty('shopCart')){
      dispatch(setShopCart(JSON.parse(localStorage.getItem('shopCart'))));
    }
  }
  

  return (
    <>
      <div className="app-wrapper">
        <Loader />

        <Navigation/>

        {
          isCheckUser &&
          <Routes>

            <Route path={routeConfig.HOME.url} element={<Home/>} />
            <Route path={routeConfig.SHOP.url} element={<Shop/>} />
            <Route path={routeConfig.SHOP_SINGLE_PRODUCT.url} element={<ProductView/>} />
            <Route path={routeConfig.CONTACT.url} element={<Contact/>} />
            <Route path={routeConfig.SIGN_IN.url} element={<Auth/>} />
            <Route path={routeConfig.USER_ACTIVATE.url} element={<ActivateUser/>} />
            <Route path={routeConfig.ORDER.url} element={<Order/>} />
            <Route path='*' element={<ErrorPage/>} />

            {/* todo only user routes */}
            <Route path={routeConfig.USER_ACCOUNT.url} element={<UserAccount/>} />

            {/* admin routes */}

            <Route path={routeConfig.DASHBOARD.url} element={<AdminProtect> <Dashboard/> </AdminProtect>} >
              <Route index element={<Stats/>} />
              <Route path={routeConfig.ADMIN_USERS.url} element={<AllUsers />} />
              <Route path={routeConfig.ADMIN_PRODUCTS.url} element={<AllProducts />} />
              <Route path={routeConfig.ADMIN_SUBS.url} element={<AllSubscriptions />} />
              {/* <Route path={routeConfig.ADMIN_EMAILS.url} element={<AllEmails />} /> */}
            </Route>
            
          </Routes>
        }

        {
          toTopBtnShow && <BackToTop />
        }

        {/* <Button>TEST BOOTSTRAP</Button> */}

        
      </div>
      <Footer/>
    </>
  );
}

function AdminProtect({children}){
  const {user} = useSelector(state => state.userStore);

  if(!user.isAdmin){
   return <Navigate to= {routeConfig.SHOP.url} />
  }
  return (
    <>
      <Header pageTitle={"Dashboard"} />
      {children}
    </>
  )
}

export default App;
