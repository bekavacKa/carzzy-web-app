
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MsgToUser from '../../components/MsgToUser/MsgToUser';
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
        // console.log("user id in params =>", params.id);
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
            <MsgToUser msgTitle="Succesfull Activation" 
                        firstPart="You have successfully activated your account"
                        secondPart="You can sign up now"
                        thirdPart="Thanks !"
            />  
            :
            <MsgToUser msgTitle="ERROR Activation" 
                        firstPart="Something went wrong"
                        secondPart="Please try again later"
                        thirdPart="Thanks !"
            /> 
        )
    }

  return (
    <div className='activate-user-wrapper' >
        <Header pageTitle="activation" />

        { isApiFinished && responseMsgLayout()}
    </div>
  )
}

export default ActivateUser