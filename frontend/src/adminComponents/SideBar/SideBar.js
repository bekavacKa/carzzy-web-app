import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { ADMIN_SIDEBAR_CONFIG } from '../../config/adminSideBarConfig';
import './side-bar.scss';

function SideBar() {

  const {user} = useSelector(state => state.userStore);

  useEffect(() => {
    // console.log(user);
  },[])

  const sideBarTitles = () => {
    return (
      ADMIN_SIDEBAR_CONFIG.map((title, index) => {
        return (
          <NavLink className='sidebar-meni-titles' to={title.url} key={index} >
            {title.icon} &nbsp; <span> {title.name} </span> 
          </NavLink>
        )
      })
    )
  }

  return (
    <div className='sidebar-wrapper'>
        <div className='sidebar-main-title'> 
          <h3> ADMIN </h3> 
          <h4> {user?.username} </h4>
        </div>
        <div className='sidebar-meni'>
            {sideBarTitles()}
        </div>
    </div>
  )
}

export default SideBar