import axios from "axios";

class ShopService{
    static getProducts(){
        return axios.get('/api/shop/all-products');
    }
    static getRandomProducts(num){
        return axios.get(`/api/shop/random-products/${num}`)
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
    static getRandomBanners(num){
        return axios.get(`/api/shop/random-banners/${num}`);
    }
    static getSponsors(){
        return axios.get('/api/shop/all-sponsors');
    }
    static getProductsWithSpecificCategory(catName){
        return axios.get(`/api/shop/products-category/${catName}`);
    }
}

export default ShopService;