import React from 'react';
import { useSelector } from 'react-redux';
import './loader.scss';

function Loader() {
  const {loading} = useSelector(state => state.loaderStore);
  return (
    <>
    {
      loading && 
        <div className='loader-wrapper'>
            <div className='loader'></div>
        </div>
    }
    </>
  )
}

export default Loader