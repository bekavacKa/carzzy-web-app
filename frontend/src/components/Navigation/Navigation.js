import React from 'react';
import {NavLink} from "react-router-dom";
import routeConfig from '../../config/routeConfig';
import "./navigation.scss";


function Navigation() {
  return (
    <div className='nav-wrapper'>
        <nav>

            <NavLink className="nav-link"  to={routeConfig.HOME.url}>
				{routeConfig.HOME.name}
			</NavLink>

			<NavLink className="nav-link" to={routeConfig.CONTACT.url}>
				{routeConfig.CONTACT.name}
			</NavLink>

			<NavLink className="nav-link" to={routeConfig.SIGN_IN.url}>
				{routeConfig.SIGN_IN.name}
			</NavLink>
            
        </nav>

    </div>
  )
}

export default Navigation