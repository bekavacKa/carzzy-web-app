import React from 'react';
import { MdSearch } from "react-icons/md";



import './search-filter.scss';


function SearchFilter({setSort, filterPrice, setFilterPrice, setSearchTerm, searchTerm}) {

  
  // useEffect(() => {
  // },[])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
  
  const handlePriceFilter = (e) => {
    setFilterPrice(parseInt(e.target.value)); 
  }

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
            <p>Sort</p>
            <select className='search-filter-sort-select-btn'
                    onChange={e => {setSort(e.target.value)}}>
              <option value="latest">latest</option>
              <option value="high">highest price</option>
              <option value="low">lowest price</option>
              {/* <option>rating</option> */}
            </select>
        </div>

        <div className="search-filter-price">
							<label htmlFor="priceRange" className="search-filter-price-label">Price: {filterPrice}  </label>
							<input type="range" 
                      defaultValue="0" 
                      onChange={handlePriceFilter} 
                      className="search-filter-price-input" 
                      min="0" 
                      max="1000" 
                      step="2" 
                      id="priceRange"/>
						</div>
    </div>
  )
}

export default SearchFilter