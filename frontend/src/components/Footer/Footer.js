import React from 'react';
import {FaTruck, FaGift, FaPhoneAlt, FaMoneyBillAlt, FaHouseUser, FaPhoneVolume, FaMailBulk} from "react-icons/fa";

import "./footer.scss";

function Footer() {
  return (
    <footer className='footer-wrapper' >
        <article className='footer-top'>
            <div className='footer-top-shipping'>
                <div className='footer-top-shipping-image' >
                    <FaTruck className='footer-icon'/>
                </div>
                <div className='footer-top-shipping-info' >
                    <p>Free Shipping</p>
                    <p>Shipping in World </p>
                </div>
            </div>

            <div className='footer-top-gift'>
                <div className='footer-top-gift-image' >
                    <FaGift className='footer-icon' />
                </div>
                <div className='footer-top-gift-info' >
                    <p>Free Shipping</p>
                    <p>Shipping in World </p>
                </div>
            </div>

            <div className='footer-top-support'>
                <div className='footer-top-support-image' >
                    <FaPhoneAlt className='footer-icon'/>
                </div>
                <div className='footer-top-support-info' >
                    <p>Free Shipping</p>
                    <p>Shipping in World </p>
                </div>
            </div>

            <div className='footer-top-payment'>
                <div className='footer-top-payment-image' >
                    <FaMoneyBillAlt className='footer-icon'/>
                </div>
                <div className='footer-top-payment-info' >
                    <p>Free Shipping</p>
                    <p>Shipping in World </p>
                </div>
            </div>
        </article>

        <article className='footer-main'>
            <div className='footer-main-contact' >
                <h4>Contact</h4>
                <div className='footer-main-contact-adress'>
                    <FaHouseUser className='footer-main-contact-icon' />
                    <p>8. Mediteranskih igara 2, Split</p>
                </div>
                <div className='footer-main-contact-phone'>
                    <FaPhoneVolume className='footer-main-contact-icon' />
                    <p>+385 21 546 486</p>
                </div>
                <div className='footer-main-contact-email'>
                    <FaMailBulk className='footer-main-contact-icon' />
                    <p>bekavacTh@mail.com</p>
                </div>
            </div>

            <div className='footer-main-products' >
                <h4>products</h4>
                <p>prices drop</p>
                <p>new products</p>
                <p>best sales</p>
                <p>contact us</p>
                <p>sitemap</p>
            </div>

            <div className='footer-main-company' >
                <h4>our company</h4>
                <p>delivery</p>
                <p>legal notice</p>
                <p>About us</p>
                <p>login</p>
                <p>my account</p>
            </div>

            <div className='footer-main-shop' >
                <h4>shop by</h4>
                <p>Your orders</p>
                <p>your wishlist</p>
                <p>payment</p>
                <p>delivery</p>
                <p>conditions</p>
            </div>

            <div className='footer-main-account' >
                <h4>Your Account</h4>
                <p>Your orders</p>
                <p>your wishlist</p>
                <p>payment</p>
                <p>delivery</p>
                <p>conditions</p>
            </div>
        </article>

        <article className='footer-bottom' >
            <h5> Kazimir Bekavac</h5>
            <h5> &copy; 2022</h5>
        </article>
    </footer>
  )
}

export default Footer