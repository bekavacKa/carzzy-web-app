import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../adminComponents/SideBar/SideBar';
import './dashboard.scss';

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
        <h3> Welcome admin </h3>
        <h4> your section is currently in progress </h4>
        <div className='dashboard-view'>
          <SideBar/>
          <div className='dashboard-details'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Dashboard