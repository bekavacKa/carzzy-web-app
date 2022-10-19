import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthService from "../../services/AuthService";
import { setUser } from "../../redux/userSlice";

import "./login.scss";
import { setLoader } from "../../redux/loaderSlice";
import routeConfig from "../../config/routeConfig";



function Login({showLoginForm}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmited, setIsSubmited] = useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onSubmitForm = (e) => {
        e.preventDefault();
        setIsSubmited(true);
        // console.log(username, "==>>>", pass);
        if(!username || !password){
            toast.info("All fields required!");
            return;
        }
        dispatch(setLoader(true));
        
        let body = { username, password};
        AuthService.login(body)
                    .then((res) => {
                        // console.log(res.data);
                        if(res.status === 200){
                            console.log("LOGIN SERVICE RESPONSE =>", res);
                            localStorage.setItem("user", JSON.stringify(res.data.userData));
                            localStorage.setItem("token", JSON.stringify(res.data.token));
                            // toast.success("Welcome! " + res.data.username);
                            dispatch(setUser(res.data.userData));
                            navigate(`${res.data.userData.isAdmin.includes('true') ? routeConfig.DASHBOARD.url : routeConfig.HOME.url}`);
                        }if(res.status === 201){
                            toast.warning("Wrong username or password!");
                        }
                        if(res.status === 210){
                            toast.warning(res.data);
                        }
                    })
                    .catch((err) => {
                        console.log("LOGIN SERVICE ERR =>", err);
                        toast.error("Something is wrong!!");
                        console.log(err.status);
                        // setApiErr(true);
                    })
                    .finally(() => dispatch(setLoader(false)))
    }

    return(
        <>
            <div className="login-wrapper" >

                {/* <Header pageTitle={"login"} /> */}


                <form className="login-form" onSubmit={e => onSubmitForm(e)}>

                    <label htmlFor="username" >User Name</label>
                    <input className={`login-form-input ${!username && isSubmited && 'required animate__animated animate__shakeX'} `} id="username" type ="text" onChange={(e) => {setUsername(e.target.value)}} />

                    <label htmlFor="password" >Password</label>
                    <input className={`login-form-input ${!password && isSubmited && 'required animate__animated animate__shakeX'} `} id="password" type ="password" onChange={(e) => {setPassword(e.target.value)}} />
                    {/* {pass} */}
                    <button className="form-btn" type="submit" > LOGIN </button>

                </form> 
                
                <ToastContainer theme="dark" />
            </div>
        </>
    )
}

export default Login;