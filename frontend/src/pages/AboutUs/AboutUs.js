import React from 'react';
import Header from '../../components/Header/Header';
import MyResume from '../../components/MyResume/MyResume';
import routeConfig from '../../config/routeConfig';
import './about-us.scss';

function AboutUs() {
  return (
    <>
      <Header pageTitle={routeConfig.ABOUT_US.name} />
      <div className='about-us-wrapper'>
          <MyResume />
      </div>
    </>
  )
}

export default AboutUs