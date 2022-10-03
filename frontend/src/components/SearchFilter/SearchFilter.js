import React from 'react';
import { MdSearch } from "react-icons/md";
import Dropdown from '../Dropdown/Dropdown';


import './search-filter.scss';


function SearchFilter() {
  return (
    <div className='search-filter-wrapper' >
        <div className='search-filter-view'>
            <input className='search-filter-input' type="search" placeholder='Search'/>
            <MdSearch className='search-filter-icon' />
        </div>
        <div className='search-filter-dropdown'>
            <p>Filter</p>
            <Dropdown meniElements={["highest price","lowest price", "rating"]} />
        </div>
    </div>
  )
}

export default SearchFilter