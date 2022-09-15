import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate} from "react-router-dom";
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Contact from './pages/Contact/Contact';
import axios from 'axios';
import routeConfig from './config/routeConfig';
import Navigation from './components/Navigation/Navigation';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/scss/base.scss";
import Shop from './pages/Shop/Shop';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

axios.defaults.baseURL ='http://localhost:4000';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    userExist();
    
  }, []);
  
  const userExist = () => {
    if(!localStorage.hasOwnProperty('user')){
      navigate('/auth')
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
