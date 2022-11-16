import React from 'react';
import Header from '../../components/Header/Header';
import routeConfig from '../../config/routeConfig';
import './about-us.scss';

function AboutUs() {
  return (
    <>
      <Header pageTitle={routeConfig.ABOUT_US.name} />
      <div className='about-us-wrapper'>
          <h2>
            COMING SOON !
          </h2>
      </div>
    </>
  )
}

export default AboutUs