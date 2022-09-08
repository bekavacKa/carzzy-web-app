import axios from "axios";

class AuthService {

    static login(body){
        // console.log("body service => ", body);
        return axios.post('/api/login', body);
    }
}

export default AuthService;