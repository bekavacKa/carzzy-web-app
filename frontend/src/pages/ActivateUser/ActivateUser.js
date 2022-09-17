
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import "./activate-user.scss";

function ActivateUser() {

    const [isActivateMail, setIsActivateMail] = useState(false);
    const [isApiFinished, setIsApiFinished] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
      if(localStorage.hasOwnProperty('user')){
        navigate("/")
      }else{
        console.log("user id in params =>", params.id);
        AuthService.completeRegistration({userId: params.id})
                    .then(res => {
                        if(res.status === 201){
                            // console.log(res.data);
                            setIsActivateMail(true);
                            setTimeout(() => {
                                navigate("/auth");
                            }, 3000);
                        }
                    })
                    .catch(err => {
                        console.log("ERROR FROM COMPLETE REGISTRATION =>", err);
                        setIsActivateMail(false);
                    })
                    .finally(() =>{
                        setIsApiFinished(true);
                    })
                    
      }
    }, [])
    

    const responseMsgLayout = () => {
        return (
            isActivateMail ? 
           <p>SUCCESSFUL REGISTRATION</p> :
           <p> SOMETHING IS WRONG PLEASE TRY AGAIN LATER</p>
        )
    }

  return (
    <div className='activate-user-wrapper' >
        <h1>ACTIVATTEEEEE PAGGEEE</h1>

        { isApiFinished && responseMsgLayout()}
    </div>
  )
}

export default ActivateUser