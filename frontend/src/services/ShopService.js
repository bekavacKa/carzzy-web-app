import axios from "axios";

class ShopService{
    static getProducts(){
        return axios.get('/api/all-products');
    }
    static getSingleProduct(productId){
        return axios.get(`/api/single-product/${productId}`);
    }
}

export default ShopService;