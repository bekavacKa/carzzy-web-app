import React from 'react';
import { Link } from 'react-router-dom';
import routeConfig from '../../config/routeConfig';
import './error-page.scss';

function ErrorPage() {
  return (
    <div className='error-page-wrapper'>
        <h2>404</h2>
        <h3> page not found</h3>
        <Link to={routeConfig.HOME.url}>
          <button>Back to home </button>
        </Link>
    </div>
  )
}

export default ErrorPage