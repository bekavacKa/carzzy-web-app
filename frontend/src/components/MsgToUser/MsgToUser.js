import React from 'react';
import './msg-to-user.scss';

function MsgToUser({msgTitle,firstPart, secondPart, thirdPart, msgLink}) {
  return (
    <div className='msg-to-user-wrapper animate__animated animate__bounceInUp'>
        <h2 className='msg-to-user-title'>
            {
                msgTitle ? 
                msgTitle
                :
                "NOTICE"
            }
        </h2>
        <p className='first-part'>
            {firstPart}
        </p>

        <p className='second-part'>
            {secondPart}
        </p>

        <p className='third-part'>
            {thirdPart}
        </p>

        {
            msgLink &&
            <p className='second-part'>
                <button className='second-part-btn' >
                    <a href={msgLink} target="_blank" > activation link </a>
                </button>
            </p>
        }
    </div>
  )
}

export default MsgToUser