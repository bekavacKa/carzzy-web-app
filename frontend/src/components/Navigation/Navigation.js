import React, { useEffect, useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import { FaCar, FaConnectdevelop, FaEquals, FaUser } from "react-icons/fa";
// import { MdSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

import routeConfig from '../../config/routeConfig';
import "./navigation.scss";
import Dropdown from '../Dropdown/Dropdown';
import ShopCart from '../ShopCart/ShopCart';

function Navigation() {
	const currentUser = useSelector((state) => state.userStore.user);

	const adminMeni = ['dashboard', 'account', 'logout'];
	const userMeni = [ 'account', 'logout'];

	const [hambMeni, setHambMeni] = useState(false);

	useEffect(()=> {
		// console.log("From store in nav => ", currentUser);
	},[currentUser]);

	const userBtnLayout = () => {
		return (
		currentUser.hasOwnProperty('username') ?
		<div className='main-nav-user-profile-info' >

			<FaUser className='user-icon' />
			<p> {currentUser.username} </p> 
			{/* <FaCaretDown className='user-icon-down' /> */}
			{
				currentUser?.isAdmin === 'true' ? 
				<Dropdown meniElements={adminMeni} /> :
				<Dropdown meniElements={userMeni} />
			}

		</div> :
		<div className='main-nav-user-profile-signin'>
			<NavLink to={routeConfig.SIGN_IN.url}>
				{routeConfig.SIGN_IN.name}
			</NavLink>
		</div>
		)
	};
	
	const userBtnResponsiveLayout = () => {
		return (
			currentUser.hasOwnProperty('username') ?
			<div className='responsive-meni-links user-profile' >
	
				<p className='user-profile-name' > {currentUser.username} </p> 
				{/* <FaCaretDown className='user-icon-down' /> */}
				{
					currentUser?.isAdmin === 'true' ? 
					<Dropdown meniElements={adminMeni} /> :
					<Dropdown meniElements={userMeni} />
				}
	
			</div> 
			:
			<NavLink className='responsive-meni-links'  to={routeConfig.SIGN_IN.url}>
				{routeConfig.SIGN_IN.name}
			</NavLink>
		)
	}

	const handleHambClick = () => {
		setHambMeni(!hambMeni);
	}

	const handleLinkClick = () => {
		setHambMeni(false);
	}

  return (
	<>
		<div className='nav-wrapper'>
			
			<nav className='main-nav'>
				<div className='main-nav-links'>
					<Link className='logo' to={routeConfig.HOME.url}>
						<FaConnectdevelop />
					</Link>

					<NavLink  to={routeConfig.HOME.url}>
						{routeConfig.HOME.name}
					</NavLink>

					<NavLink to={routeConfig.SHOP.url}>
						{routeConfig.SHOP.name}
					</NavLink>

					<NavLink to={routeConfig.ABOUT_US.url}>
						{routeConfig.ABOUT_US.name}
					</NavLink>

					{/* <NavLink to={routeConfig.CONTACT.url}>
						{routeConfig.CONTACT.name}
					</NavLink> */}


				</div>

				<div className='main-nav-user' >
					<div className='main-nav-user-cart'>
						{/* {
							currentUser.hasOwnProperty('wallet') ?
							<p className={`main-nav-user-wallet positive` }> {currentUser.wallet.toFixed(2)} <span>$</span> </p> :
							<p>0.00 &nbsp; $ </p>
						} */}
						<ShopCart />
						{/* <MdAddShoppingCart className='cart'/> */}
					</div>
					{/* <div className='main-nav-user-search'>
						<input type="search" placeholder='Search'/>
						<MdSearch/>
					</div> */}
					<div className='main-nav-user-profile' >
						
						{userBtnLayout()}

					</div>
				</div>
			</nav>

			<nav className='responsive-nav'>

				<div className='responsive-nav-title'>
					<Link className='logo' to={routeConfig.HOME.url}>
						<FaConnectdevelop />
					</Link>
					<h3 className='title'>
						CARZZY
					</h3>
				</div>

				<div className='responsive-nav-btn' onClick={handleHambClick}>
					{
						!hambMeni ? 
						<GiHamburgerMenu className='btn-hamb' />
						:
						<IoClose /> 
					}
				</div>

			</nav>


		</div>

		{
			hambMeni && 
			<div className='responsive-meni'>
					{
						userBtnResponsiveLayout()
					}
					<NavLink className='responsive-meni-links' onClick={handleLinkClick} to={routeConfig.HOME.url}>
						{routeConfig.HOME.name}
					</NavLink>

					<NavLink className='responsive-meni-links' onClick={handleLinkClick} to={routeConfig.SHOP.url}>
						{routeConfig.SHOP.name}
					</NavLink>

					<NavLink className='responsive-meni-links' onClick={handleLinkClick} to={routeConfig.ABOUT_US.url}>
						{routeConfig.ABOUT_US.name}
					</NavLink>


			</div>
		}

	
	</>
  )
}

export default Navigation