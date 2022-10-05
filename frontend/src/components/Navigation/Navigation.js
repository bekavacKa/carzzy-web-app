import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import { FaCar, FaUser } from "react-icons/fa";
// import { MdSearch } from "react-icons/md";
import { useSelector } from "react-redux";

import routeConfig from '../../config/routeConfig';
import "./navigation.scss";
import Dropdown from '../Dropdown/Dropdown';
import ShopCart from '../ShopCart/ShopCart';

function Navigation() {
	const currentUser = useSelector((state) => state.userStore.user);

	useEffect(()=> {
		// console.log("From store in nav => ", currentUser);
	},[currentUser]);

	const userBtnLayout = () => {
		return (
		currentUser.hasOwnProperty('username') ?
		<div className='nav-user-profile-info' >

			<FaUser className='user-icon' />
			<p> {currentUser.username} </p> 
			{/* <FaCaretDown className='user-icon-down' /> */}
			<Dropdown meniElements={[`${ currentUser?.isAdmin === 'true' ? 'dashboard' : 'account'}`,"Logout"]} />

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
					{
						currentUser.hasOwnProperty('wallet') ?
						<p className={`nav-user-wallet positive` }> {currentUser.wallet.toFixed(2)} <span>$</span> </p> :
						<p>0.00 &nbsp; $ </p>
					}
					<ShopCart />
					{/* <MdAddShoppingCart className='cart'/> */}
				</div>
				{/* <div className='nav-user-search'>
					<input type="search" placeholder='Search'/>
					<MdSearch/>
				</div> */}
				<div className='nav-user-profile' >
					
					{userBtnLayout()}

				</div>
			</div>

            
        </nav>

    </div>
  )
}

export default Navigation