import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../redux/loaderSlice';
import BlogService from '../../../services/BlogService';
import './all-blogs.scss';

function AllBlogs() {
  const dispatch = useDispatch();
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    getAllBlogsFromService();
  },[]);

  const getAllBlogsFromService = () => {
    dispatch(setLoader(true))
    BlogService.getBlogs()
                .then((res) => {
                  setAllBlogs(res.data);
                })
                .catch((err) => {
                  console.log(err);
                })
                .finally(() => dispatch(setLoader(false)));
  }

  const blogsLayout = () => {
    return allBlogs.map((blog, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}.</th>
            <td>{blog.title}</td>
            <td>{blog.blogText.slice(0,30) + '. . . '}</td>
            <td>{blog.publisher}</td>
            <td>{blog.publishDate.slice(0,10)}</td>
          </tr>
        )
      })
  }

  return (
    <div className='all-blogs-wrapper' >
        {
        allBlogs?.length && 
        <table className="all-blogs-table">
        <thead>
            <tr>
            <th scope="col">NO.</th>
            <th scope="col">title</th>
            <th scope="col">text</th>
            <th scope="col">publisher</th>
            <th scope="col">Publish Date</th>
            </tr>
        </thead>
        <tbody>
            {blogsLayout()}
        </tbody>
        </table>
        }
    </div>
  )
}

export default AllBlogs