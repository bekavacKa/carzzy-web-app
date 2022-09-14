import React from 'react';
import {Link, NavLink} from "react-router-dom";
import routeConfig from '../../config/routeConfig';
import { FaCar, FaUser, FaCaretDown } from "react-icons/fa";
import { MdAddShoppingCart, MdSearch } from "react-icons/md";
import "./navigation.scss";


function Navigation() {
  return (
    <div className='nav-wrapper'>
        <nav>
			<div className='nav-links'>
				<Link className='logo' to={routeConfig.HOME.url}>
					<FaCar/>
				</Link>

				<NavLink  to={routeConfig.HOME.url}>
					{routeConfig.HOME.name}
				</NavLink>

				<NavLink to={routeConfig.CONTACT.url}>
					{routeConfig.CONTACT.name}
				</NavLink>

				<NavLink to={routeConfig.SIGN_IN.url}>
					{routeConfig.SIGN_IN.name}
				</NavLink>
			</div>

			<div className='nav-user' >
				<div className='nav-user-cart'>
					<MdAddShoppingCart className='cart'/>
					<p>0.00</p>
				</div>
				<div className='nav-user-search'>
					<input type="search" placeholder='Search'/>
					<MdSearch/>
				</div>
				<div className='nav-user-profile' >
					<FaUser className='user-icon' />
					<p> &nbsp; | &nbsp; BTC &#8383; &nbsp; </p>
					<FaCaretDown/>
				</div>
			</div>

            
        </nav>

    </div>
  )
}

export default Navigation