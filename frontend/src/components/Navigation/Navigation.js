import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import { FaCar, FaUser, FaCaretDown } from "react-icons/fa";
import { MdAddShoppingCart, MdSearch } from "react-icons/md";
import { useSelector } from "react-redux";

import routeConfig from '../../config/routeConfig';
import "./navigation.scss";

function Navigation() {
	const currentUser = useSelector((state) => state.userStore.user);

	useEffect(()=> {
		console.log("From store in nav => ", currentUser);
	},[currentUser]);

	const userDropDown = () => {
		// todo dropdown meni with logout btn !
		console.log("IN MENI");
	}

	const userBtnLayout = () => {
		return (
		currentUser.hasOwnProperty('username') ?
		<div className='nav-user-profile-info' onClick={userDropDown} >
			<FaUser className='user-icon' />
			<p> {currentUser.username} </p> 
			<FaCaretDown className='user-icon-down' />
		</div> :
		<div className='nav-user-profile-signin'>
			<NavLink to={routeConfig.SIGN_IN.url}>
				{routeConfig.SIGN_IN.name}
			</NavLink>
		</div>
		)
	}

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

				<NavLink to={routeConfig.SHOP.url}>
					{routeConfig.SHOP.name}
				</NavLink>

				<NavLink to={routeConfig.CONTACT.url}>
					{routeConfig.CONTACT.name}
				</NavLink>

			</div>

			<div className='nav-user' >
				<div className='nav-user-cart'>
					<MdAddShoppingCart className='cart'/>
					{
						currentUser.hasOwnProperty('wallet') ?
						<p className='nav-user-wallet'> {currentUser.wallet.toFixed(2) + " $"} </p> :
						<p>0.00 &nbsp; $ </p>
					}
				</div>
				<div className='nav-user-search'>
					<input type="search" placeholder='Search'/>
					<MdSearch/>
				</div>
				<div className='nav-user-profile' >


					
					{userBtnLayout()}


				</div>
			</div>

            
        </nav>

    </div>
  )
}

export default Navigation