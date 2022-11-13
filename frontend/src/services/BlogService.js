import axios from "axios";

class BlogService {
    static getBlogs(){
        return axios.get('/api/blog/all-blogs');
    }
}

export default BlogService;