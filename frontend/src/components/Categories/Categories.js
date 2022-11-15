import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import routeConfig from '../../config/routeConfig';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './categories.scss';

function Categories() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, [])

  const getAllCategories = () => {
    dispatch(setLoader(true));
    ShopService.getCategories()
                .then(res => {
                  // console.log(res.data)
                  setCategories(res.data);
                })
                .catch(err => console.log(err))
                .finally(() => dispatch(setLoader(false)));
  };

  // const handleCategory = (e) => {
  //   console.log(e.target.id);
  //   <Link to={routeConfig.SHOP.url} state={{ from: "occupation" }} />
  // }

  const categoryLayout = () => {
    return (
      categories.map((cat, index) => {
        return (
            <Link to={routeConfig.SHOP.url} state={{ catName: cat?.title }} className='categories-card' key={index} id={cat.title} >
              <div className='categories-card-img'>
                <img src={cat.imageUrl} alt={cat.title} />
              </div>
              <div className='categories-card-title'>
                <p>{cat.title}</p>
              </div>
            </Link>
        )
      })
    )
  }

  
    
  return (
    <div className='categories-wrapper' >
        {
          categories &&
          categoryLayout()
        }

    </div>
  )
}

export default Categories