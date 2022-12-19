import React from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import './pass-visibility.scss';

function PassVisibility({showPass, setShowPass }) {


    const handlePassShow = () => {
        setShowPass(!showPass);
    };

  return (
    <div className='pass-visibility' onClick={e => handlePassShow()}>
        {
            !showPass ?
            <BiHide />
            :
            <BiShow />
        }
    </div>
  )
}

export default PassVisibility