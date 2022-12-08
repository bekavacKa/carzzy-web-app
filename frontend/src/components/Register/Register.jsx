import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { setLoader } from "../../redux/loaderSlice";
import AuthService from "../../services/AuthService";
import MsgToUser from "../MsgToUser/MsgToUser";
import "./register.scss";

function Register(){

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        adress: "",
        city: "",
        username: "",
        email: "",
        password: "",
    });

    const [isSubmited, setIsSubmited] = useState(false);
    const [isSuccesReg, setSuccesReg] = useState(false);
    const [userLinkAcctivate, setUserLinkAcctivate] = useState('');
    
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        // console.log(e.target.name, e.target.value);
        let newUserData = {...userData};
        newUserData[e.target.name] = e.target.value;
        // console.log(newUserData, "user data");
        setUserData(newUserData);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        setIsSubmited(true);

        if(!userData.username || !userData.password || !userData.email || !userData.email.includes("@") ){
            // console.log("nesto ne postoji!!!");
            toast.info("There are required fields!");
            return;
        }
        dispatch(setLoader(true));
        
        AuthService.register(userData)
                    .then((res) => {
                        if(res.status === 200){
                            console.log("REGISTER SERVICE RESPONSE =>", res);
                            setUserLinkAcctivate(res.data.acctivationLink)
                            setSuccesReg(true);
                            return;
                        }
                    })
                    .catch((err) => {
                        console.log("REGISTER SERVICE ERR =>", err);
                        toast.info("Something is wrong, try again later");
                    })
                    .finally(() => dispatch(setLoader(false)));
    }

    return(
        <div className="register-wrapper" >

            {/* <Header pageTitle={"Register"} /> */}

            {
                !isSuccesReg &&
                <form className="register-form" onSubmit={e => onSubmitForm(e)}>

                    <label htmlFor="firstName">First Name</label>
                    <input  className="register-form-input"
                            id="firstName" 
                            type ="text"
                            name="firstName" 
                            onChange={(e) => {handleInputChange(e)}} />

                    <label htmlFor="lastName">Last Name</label>
                    <input  className="register-form-input" 
                            id="lastName" 
                            type ="text" 
                            name="lastName" 
                            onChange={(e) => {handleInputChange(e)}} />

                    <label htmlFor="adress">Adress</label>
                    <input  className="register-form-input"
                            id="adress" 
                            type ="text"
                            name="adress" 
                            onChange={(e) => {handleInputChange(e)}} />

                    <label htmlFor="city">City</label>
                    <input  className="register-form-input"
                            id="city" 
                            type ="text"
                            name="city"   
                            onChange={(e) => {handleInputChange(e)}}/>

                    <label htmlFor="username">Username</label>
                    <input  className={`register-form-input ${!userData.username && isSubmited && 'required animate__animated animate__shakeX'} `}
                            id="username" 
                            type ="text" 
                            name="username" 
                            onChange={(e) => {handleInputChange(e)}} />

                    <label htmlFor="email">E-mail</label>
                    <input  className={`register-form-input ${!userData.email && isSubmited && 'required animate__animated animate__shakeX'} `}
                            id="email" 
                            type ="email" 
                            name="email" 
                            onChange={(e) => {handleInputChange(e)}} />

                    <label htmlFor="password">Password</label>
                    <input  className={`register-form-input ${!userData.password && isSubmited && 'required animate__animated animate__shakeX'} `}
                            id="password" 
                            type ="password" 
                            name="password" 
                            onChange={(e) => {handleInputChange(e)}} />


                    <button className="form-register-btn" type="submit" > REGISTER </button>
                    {/* <input type="submit" value="Register" /> */}
                </form> 
            }
            
            {
                isSuccesReg &&
                <MsgToUser  msgTitle="Successful registration"
                            firstPart="To sign up, you must first activate your account by clicking on the link we sent you in your email."  
                            secondPart="If you registered with a fake email, click on the button to visit the link to activate your account" 
                            thirdPart="Your role is user, to log in and view admin options, see login info" 
                            msgLink={userLinkAcctivate}
                />
            }

            <ToastContainer theme="dark" />
        </div>
    )
}

export default Register;