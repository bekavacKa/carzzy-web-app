import React from 'react';
import { GoMailRead } from 'react-icons/go';

import './subscribe-me.scss';

function SubscribeMe() {
  return (
    <div className='subscribe-me-wrapper'>
        <div className='subscribe-me-icon'>
            <GoMailRead />
        </div>
        <div className='subscribe-me-info'>
            <h3>
                Sign up now to recive emails for <br/>
                exclusive offers
            </h3>
            <p>
                Sign up to recive the latest offers and discounts from Carzzy Auto Parts
            </p>
        </div>
        <div className='subscribe-me-email'>
            <input className='subscribe-me-email-input' id="email" type ="email" name="email" placeholder='Your email address'  />
        </div>
        <button className='subscribe-me-btn'>
            Sign Up
        </button>
    </div>
  )
}

export default SubscribeMe