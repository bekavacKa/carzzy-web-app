import React, { useEffect, useState } from 'react';
import { FaCookieBite } from 'react-icons/fa';
import './cookie.scss';

function Cookie() {

    const[showCookie, setShowCookie] = useState(false);

    useEffect(() => {
        // ? mogu napravit da se ponovo prikaziva ako odbije, al necu za sada
        setTimeout(() => {
            setShowCookie(true);
        }, 3000);
    }, [])

    const handleAccept = () => {
        setShowCookie(false);
        localStorage.setItem("Cookie", "accepted");
    }
    const handleDecline = () => {
        setShowCookie(false);
        localStorage.setItem("Cookie", "decline");
    }

  return (
    <>
        {
            showCookie &&
            <div className='cookie-wrapper'>
                <div className='cookie-content'>
                    <div className='cookie-content-header' >
                        <FaCookieBite className='cookie-logo' />
                        <h3>This website uses cookies</h3>
                    </div>

                    <div className='cookie-content-text'>
                        <p className='cookie-content-text- one'>
                            I use this cookie modal to inform my site visitors that the site is still under development and this is not the final version!!
                        </p>
                        <p className='cookie-content-text- two'>
                            I would also like to say that the responsiveness has not been done yet, as you can see if you browse on a smartphone. So I would ask you to turn on PC VIEW or watch it via computer.
                        </p>
                        <p className='cookie-content-text- three'>
                            And of course, do you accept the conditions? <span>&#128514;</span> <br/> (no conditions exist)
                        </p>
                    </div>

                    <div className='cookie-content-btns'>
                        <button onClick={handleDecline}>
                            decline
                        </button>
                        <button className='accept-btn' onClick={handleAccept} >
                            accept
                        </button>
                    </div>
                </div>

            </div>
        }
    </>
  )
}

export default Cookie