import React from 'react';
import { NavLink } from 'react-router-dom';
import { ADMIN_SIDEBAR_CONFIG } from '../../config/adminSideBarConfig';
import './side-bar.scss';

function SideBar() {

  const sideBarTitles = () => {
    return (
      ADMIN_SIDEBAR_CONFIG.map((title, index) => {
        return (
          <li className='sidebar-titles'  key={index}> 
            <NavLink className='sidebar-titles-links' to={title.url} >
              {title.icon} &nbsp; {title.name}
            </NavLink>
          </li>
        )
      })
    )
  }

  return (
    <div className='sidebar-wrapper'>
        <ul>
            {sideBarTitles()}
        </ul>
    </div>
  )
}

export default SideBar