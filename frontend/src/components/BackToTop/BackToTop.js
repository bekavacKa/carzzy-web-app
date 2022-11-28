import React from 'react';
import './back-to-top.scss';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

function BackToTop() {

    const toTop = () => {
      window.scroll({
        top: 0, 
        behavior: "smooth"
      });
    }

  return (
    <div className='back-to-top-wrapper' >
        <BsFillArrowUpSquareFill className='back-to-top-btn animate__animated animate__backInDown' onClick={e => toTop()}/>
    </div>
  )
}

export default BackToTop