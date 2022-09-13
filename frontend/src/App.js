import './App.css';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Contact from './pages/Contact/Contact';
import axios from 'axios';
import { Routes, Route} from "react-router-dom";
import routeConfig from './config/routeConfig';
import Navigation from './components/Navigation/Navigation';

axios.defaults.baseURL ='http://localhost:4000';

function App() {


  return (
    <div className="app-wrapper">

    <Navigation/>

      <Routes>

        <Route path={routeConfig.HOME.url} element={<Home/>} />
        <Route path={routeConfig.CONTACT.url} element={<Contact/>} />
        <Route path={routeConfig.SIGN_IN.url} element={<Auth/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
