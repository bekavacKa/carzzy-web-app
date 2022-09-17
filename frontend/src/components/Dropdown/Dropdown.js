import React, { useEffect, useState } from 'react';
import { FaCaretDown } from "react-icons/fa";

import "./dropdown.scss";


function Dropdown(props) {

    const[isActiveMeni, setIsActiveMeni] = useState(false);
    const [allMeniELL, setAallMeniELL] = useState([]);

    useEffect(() => {
        // console.log(props);
        setAallMeniELL(props.meniElements);
    },[props])

    const handleMeniClick = (e) => {
        console.log(e.target.outerText);   
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