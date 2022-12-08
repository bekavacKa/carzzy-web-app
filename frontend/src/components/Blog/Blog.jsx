import React, { useEffect, useState } from 'react';
import { FaBimobject } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import BlogService from '../../services/BlogService';
import CardSlider from '../CardSlider/CardSlider';

function Blog() {

    const dispatch = useDispatch();
    const [latestBlogs, setLatestBlogs] = useState([]);

    
    useEffect(() => {
        getLatestBlogs();
    }, [])

    const getLatestBlogs = () => {
        dispatch(setLoader(true))
        BlogService.getBlogs()
                    .then(res => {
                      if(res.status === 200){
                        setLatestBlogs(res.data.reverse())
                      }
                    })
                    .catch(err => console.log(err))
                    .finally(() => dispatch(setLoader(false)))
    }

  return (
    <>
        {
            latestBlogs && latestBlogs.length > 0 ?
            <CardSlider sliderTitle={'Latest Blog'} sliderIcon={<FaBimobject />} sliderArrow={true} cardSliderItems={latestBlogs} sliderTypeBlog={true} />
            :null

        }
    </>
  )
}

export default Blog