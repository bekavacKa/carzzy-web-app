import axios from "axios";

class AdminService{
    static deleteSelectedUser(userId){
        return axios.delete(`/api/admin/delete-selected-user/${userId}`);
    }
    static editSelectedUSer(body){
        return axios.put('/api/admin/edit-selected-user', body);
    }
    static getAllDbProducts(){
        return axios.get('/api/admin/all-products');
    }
    static addNewProduct(body){
        return axios.post('/api/admin/add-new-product', body);
    }
    static deleteSelectedProduct(productId){
        return axios.delete(`/api/admin/delete-selected-product/${productId}`);
    }
    static editSelectedProduct(body){
        return axios.put('/api/admin/edit-selected-product', body);
    }
}

export default AdminService;