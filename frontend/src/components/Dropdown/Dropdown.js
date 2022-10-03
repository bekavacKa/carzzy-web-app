import React, { useEffect, useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import {useDispatch} from  'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUser } from '../../redux/userSlice';
import  routeConfig  from '../../config/routeConfig';

import "./dropdown.scss";


function Dropdown(props) {

    const[isActiveMeni, setIsActiveMeni] = useState(false);
    const [allMeniELL, setAallMeniELL] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(props);
        setAallMeniELL(props.meniElements);
    },[props])

    const handleMeniClick = (e) => {
        // console.log(e.target.outerText);
        let targetName = e.target.outerText.toLowerCase();
        if (targetName.includes("logout")){
            dispatch(setUser({}));
            localStorage.removeItem('user');
            navigate(routeConfig.SIGN_IN.url);
        }
        setIsActiveMeni(false);
    }

  return (
    <div className='dropdown-wrapper'>
        <div className='dropdown-meni'>

            <FaCaretDown className='dropdown-btn'  onClick={() => setIsActiveMeni(!isActiveMeni)} />

            {
                isActiveMeni &&
                <div className='dropdown-content' >
                    {
                        allMeniELL.map((el, index) => {
                            return (
                                <div className='dropdown-item' key={index} onClick={e => handleMeniClick(e)} >
                                    {el}
                                </div>
                            )
                        })
                    }

                </div>
            }

        </div>

    </div>
  )
}

export default Dropdown;