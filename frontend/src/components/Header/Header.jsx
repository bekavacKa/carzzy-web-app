import React from 'react';
import './header.scss';


export default function Header({pageTitle}) {
  return (
    <div className='header-wrapper'>
        <h2 className='header-page-title underline animate__animated animate__fadeInLeft' >{pageTitle}</h2>
    </div>
  )
}
