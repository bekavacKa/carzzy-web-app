import axios from "axios";

class ShopService{
    static getProducts(){
        return axios.get('https://fakestoreapi.com/products')
    }
}

export default ShopService;