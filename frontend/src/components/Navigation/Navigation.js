import React, { useEffect, useState } from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import { FaCar, FaCaretDown, FaConnectdevelop, FaEquals, FaUser } from "react-icons/fa";
// import { MdSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import routeConfig from '../../config/routeConfig';
import "./navigation.scss";
import Dropdown from '../Dropdown/Dropdown';
import ShopCart from '../ShopCart/ShopCart';
import { setUser } from '../../redux/userSlice';

function Navigation() {
	const currentUser = useSelector((state) => state.userStore.user);
	const dispatch = useDispatch();
    const navigate = useNavigate();

	const adminMeni = ['dashboard', 'account', 'logout'];
	const userMeni = [ 'account', 'logout'];

	const [hambMeni, setHambMeni] = useState(false);
	const [userDropdown, setUserDropdown] = useState(false);
	const [stickyNav, setStickyNav] = useState(false);

	useEffect(()=> {
		// console.log("From store in nav => ", currentUser);
	},[currentUser]);

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
	  },[])
	
	const listenToScroll = () => {
		if(window.scrollY > 300){
			setStickyNav(true);
		}else{
			setStickyNav(false);
		}
	}

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

	const handleDropdownMeniClick = (e) => {
		setUserDropdown(false);
		setHambMeni(false);
		let targetName = e.target.outerText.toLowerCase();
        if (targetName.includes("logout")){
            dispatch(setUser({}));
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return navigate(routeConfig.SIGN_IN.url);
        }
        if (targetName.includes("dashboard")){
            return navigate(routeConfig.DASHBOARD.url);
        }
        if (targetName.includes("account")){
            return navigate(routeConfig.USER_ACCOUNT.completeUrl(currentUser?._id));
        }
	}
	
	const userBtnResponsiveLayout = () => {
		return (
			currentUser.hasOwnProperty('username') ?
			<div className='responsive-meni-links user-profile' >
	
				<div className='user-profile-name' onClick={handleUserDropdownClick} > 
					<p>
						{currentUser.username} 
					</p>
					<FaCaretDown className='user-profile-name-btn'  />
				</div> 
	
			</div> 
			:
			<NavLink className='responsive-meni-links' onClick={handleLinkClick}  to={routeConfig.SIGN_IN.url}>
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
	
	const handleUserDropdownClick = () => {
		setUserDropdown(!userDropdown);
	}

  return (
	<div className={`nav-wrapper ${stickyNav ? "sticky-nav animate__animated animate__fadeInDown" : null} ${hambMeni && "bg-disabled"}`}>

		<div className='nav-content'>
			
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

				<Link className='responsive-nav-title' to={routeConfig.HOME.url}>
					<div className='logo' >
						<FaConnectdevelop />
					</div>
					<h3 className='title'>
						CARZZY
					</h3>
				</Link>

				<div className='responsive-nav-btn' onClick={handleHambClick}>
					{
						!hambMeni ? 
						<GiHamburgerMenu  />
						:
						<IoClose /> 
					}
				</div>

			</nav>


		</div>

		{
			hambMeni && 
			<div className='responsive-meni animate__animated animate__fadeInDown'>
					<NavLink className='responsive-meni-links' onClick={handleLinkClick} to={routeConfig.HOME.url}>
						{routeConfig.HOME.name}
					</NavLink>

					<NavLink className='responsive-meni-links' onClick={handleLinkClick} to={routeConfig.SHOP.url}>
						{routeConfig.SHOP.name}
					</NavLink>

					<NavLink className='responsive-meni-links' onClick={handleLinkClick} to={routeConfig.ABOUT_US.url}>
						{routeConfig.ABOUT_US.name}
					</NavLink>
					{
						userBtnResponsiveLayout()
					}
			</div>
		}

		{
			localStorage.getItem("user") && hambMeni && userDropdown && 
			<div className='responsive-meni user-dropdown'>
				{
					currentUser?.isAdmin === 'true' ? 
					adminMeni.map((el, index) => {
						return(
							<div className='responsive-meni-links user-dropdown-links' key={index} onClick={e => handleDropdownMeniClick(e)} >
								<p>{el}</p> 
							</div>
						)
					}) 
					:
					userMeni.map((el, index) => {
						return(
							<div className='responsive-meni-links user-dropdown-links' key={index} onClick={e => handleDropdownMeniClick(e)} >
								<p>{el}</p> 
							</div>
						)
					}) 
				}
			</div>
		}

	</div>
  )
}

export default Navigation