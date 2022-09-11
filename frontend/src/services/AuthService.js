import axios from "axios";

class AuthService {

    static login(body){
        // console.log("body service => ", body);
        return axios.post('/api/login', body);
    }
    static register(body){
        // console.log("body register service => ", body);
        return axios.post('/api/register', body);
    }
}

export default AuthService;