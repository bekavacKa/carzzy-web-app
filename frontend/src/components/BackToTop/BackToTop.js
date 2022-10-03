import React from 'react';
import './back-to-top.scss';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

function BackToTop() {

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <div className='back-to-top-wrapper' >
        <BsFillArrowUpSquareFill className='back-to-top-btn' onClick={e => toTop()}/>
    </div>
  )
}

export default BackToTop