import axios from "axios";

class ShopService{
    static getProducts(){
        return axios.get('/api/shop/all-products');
    }
    static getSingleProduct(productId){
        return axios.get(`/api/shop/single-product/${productId}`);
    }
}

export default ShopService;