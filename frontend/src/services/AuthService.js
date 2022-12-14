import axios from "axios";

class AuthService {

    static login(body){
        // console.log("body login service => ", body);
        return axios.post('/api/user/login', body);
    }
    static register(body){
        // console.log("body register service => ", body);
        return axios.post('/api/user/register', body);
    }
    static completeRegistration(body){
        return axios.post('/api/user/complete-registration', body);
    }
    static getAllUsers(){
        return axios.get('/api/user/all-users');
    }
    // * test headers
    // static getMyData(userId){
    //     return axios.get(`/api/user/get-my-data/${userId}`, {
    //         headers: {
    //             "Authorization" : localStorage.getItem('token')
    //         }
    //     });
    // }
    //  * interceptors bolje nego da stavljam svuda headers
    static getMyData(userId){
        return axios.get(`/api/user/get-my-data/${userId}`);
    }
    static getImpressions(){
        return axios.get('/api/user/impressions');
    }
    static userSubscription(body){
        return axios.post('/api/user/add-subscription', body)
    }
    static getAllSubscriptions(){
        return axios.get('/api/user/all-subscriptions')
    }
    static editOwnData(body){
        return axios.put('/api/user/edit-own-data', body);
    }
}

export default AuthService;