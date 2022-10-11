import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../adminComponents/SideBar/SideBar';
import './dashboard.scss';

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
        <div className='dashboard-view'>
          <SideBar/>
          <div className='dashboard-details'>
            <div className='dashboard-details-title'></div>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Dashboard