import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';
import './categories.scss';

function Categories() {

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
  }

  const categoryLayout = () => {
    return (
      categories.map((cat, index) => {
        return (
          <div className='categories-card' key={index} >
            <div className='categories-card-img'>
              <img src={cat.imageUrl} alt={cat.title} />
            </div>
            <div className='categories-card-title'>
              <p>{cat.title}</p>
            </div>
          </div>
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