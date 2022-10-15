import axios from "axios";

class AdminService{
    static deleteSelectedUser(userId){
        return axios.delete(`/api/admin/delete-selected-user/${userId}`);
    }
    static editSelectedUSer(body){
        return axios.options('/api/admin/edit-selected-user', body);
    }
    static deleteSelectedProduct(productId){
        return axios.delete(`/api/admin/delete-selected-product/${productId}`);
    }
}

export default AdminService;