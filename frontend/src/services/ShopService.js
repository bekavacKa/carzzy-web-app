import axios from "axios";

class ShopService{
    static getProducts(){
        return axios.get('/api/shop/all-products');
    }
    static getSingleProduct(productId){
        return axios.get(`/api/shop/single-product/${productId}`);
    }
    static getSearchedProducts(searchTerm){
        // console.log(searchTerm);
        return axios.get(`/api/shop/products/search/${searchTerm}`);
    }
    static getFilteredProducts(price){
        // console.log(price);
        return axios.get(`/api/shop/filtered-products/${price}`)
    }
    static getCategories(){
        return axios.get('/api/shop/products-categories');
    }
    static getBanners(){
        return axios.get('/api/shop/banners');
    }
}

export default ShopService;