import React, { useEffect, useState } from 'react';
import { MdSearch } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setLoader } from '../../redux/loaderSlice';
import ShopService from '../../services/ShopService';



import './search-filter.scss';


function SearchFilter({setSort, filterPrice, setFilterPrice, setSearchTerm, searchTerm, setCheckedCategory}) {

  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getAllCategories();
  },[]);

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
  
  // const handlePriceFilter = (e) => {
  //   setFilterPrice(parseInt(e.target.value)); 
  // }

  return (
    <div className='search-filter-wrapper' >
        <div className='search-filter-view'>
            <input className='search-filter-input' 
                  type="search" 
                  placeholder='Search' 
                  defaultValue={searchTerm}
                  onChange={e => handleSearch(e)}/>
            <MdSearch className='search-filter-icon' />
        </div>

        <div className='search-filter-sort-select'>
            <p>Category</p>
            <select className='search-filter-sort-select-btn'
                    onChange={e => {setCheckedCategory(e.target.value)}}>
                      {/* TODO moram nac nacin da mi nije nista checkirano inicijalno */}
                      <option ></option>
                    {
                      categories.map((item, index) => {
                        return(
                          <option value={item.title} key={index} >{item.title}</option>
                        )
                      })
                    }
            </select>
        </div>

        <div className='search-filter-sort-select'>
            <p>Sort</p>
            <select className='search-filter-sort-select-btn'
                    onChange={e => {setSort(e.target.value)}}>
              <option value="latest">latest</option>
              <option value="high">highest price</option>
              <option value="low">lowest price</option>
              {/* <option>rating</option> */}
            </select>
        </div>



        {/* TODO tribam ga popravit */}
        {/* <div className="search-filter-price">
							<label htmlFor="priceRange" className="search-filter-price-label">Price: {filterPrice}  </label>
							<input type="range" 
                      defaultValue="0" 
                      onChange={handlePriceFilter} 
                      className="search-filter-price-input" 
                      min="0" 
                      max="1000" 
                      step="2" 
                      id="priceRange"/>
				</div> */}
      </div>
  )
}

export default SearchFilter