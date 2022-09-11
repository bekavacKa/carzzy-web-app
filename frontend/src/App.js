import './App.css';
import Auth from './pages/Auth/Auth';
import axios from 'axios';

axios.defaults.baseURL ='http://localhost:4000';

function App() {


  return (
    <div className="app-wrapper">
      <Auth/>
    </div>
  );
}

export default App;
