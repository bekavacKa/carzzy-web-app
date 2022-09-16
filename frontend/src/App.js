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

axios.defaults.baseURL ='http://localhost:4000';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    userExist();
    
  }, []);
  
  const userExist = () => {
    if(!localStorage.hasOwnProperty('user')){
      navigate('/auth')
    }else{
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
    }
  }
  

  return (
    <div className="app-wrapper">

      <Navigation/>

      <Routes>

        <Route path={routeConfig.HOME.url} element={<Home/>} />
        <Route path={routeConfig.SHOP.url} element={<Shop/>} />
        <Route path={routeConfig.CONTACT.url} element={<Contact/>} />
        <Route path={routeConfig.SIGN_IN.url} element={<Auth/>} />
        
      </Routes>

      {/* <Button>TEST BOOTSTRAP</Button> */}
      
    </div>
  );
}

export default App;
