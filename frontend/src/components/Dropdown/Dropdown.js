import React, { useEffect, useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import {useDispatch, useSelector} from  'react-redux';
import {useNavigate} from 'react-router-dom';
import { setUser } from '../../redux/userSlice';
import  routeConfig  from '../../config/routeConfig';

import "./dropdown.scss";


function Dropdown(props) {

    const {user} = useSelector(state => state.userStore);

    const[isActiveMeni, setIsActiveMeni] = useState(false);
    const [allMeniELL, setAallMeniELL] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(props);
        setAallMeniELL(props.meniElements);
        // console.log(user);
    },[props])

    const handleMeniClick = (e) => {
        // console.log(e.target.outerText);
        let targetName = e.target.outerText.toLowerCase();
        if (targetName.includes("logout")){
            dispatch(setUser({}));
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            navigate(routeConfig.SIGN_IN.url);
        }
        if (targetName.includes("dashboard")){
            navigate(routeConfig.DASHBOARD.url);
        }
        if (targetName.includes("account")){
            navigate(routeConfig.USER_ACCOUNT.completeUrl(user?._id));
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