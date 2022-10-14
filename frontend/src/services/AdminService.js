import axios from "axios";

class AdminService{
    static deleteSelectedUser(userId){
        return axios.delete(`/api/user/delete-selected-user/${userId}`);
    }
}

export default AdminService;