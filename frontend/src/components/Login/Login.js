import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthService from "../../services/AuthService";
import { setUser } from "../../redux/userSlice";

import "./login.scss";



function Login({showLoginForm}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);
    // const [apiErr, setApiErr] = useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitForm = (e) => {
        e.preventDefault();
        // console.log(username, "==>>>", pass);
        if(!username || !password){
            // console.log("nesto ne postoji");
            setIsValid(false);
            return;
        }
        setIsValid(true);
        
        let body = { username, password};
        AuthService.login(body)
                    .then((res) => {
                        if(res.status === 200){
                            console.log("LOGIN SERVICE RESPONSE =>", res);
                            localStorage.setItem("user", JSON.stringify(res.data))
                            // toast.success("Welcome! " + res.data.username);
                            navigate('/');
                            dispatch(setUser(res.data));
                        }if(res.status === 401){
                            toast.warning("Wrong username/password!");
                        }
                    })
                    .catch((err) => {
                        console.log("LOGIN SERVICE ERR =>", err);
                        toast.error("Something is wrong!!");
                        // setApiErr(true);
                    })
    }

    return(
        <div className="login-wrapper" >

            {/* <Header pageTitle={"login"} /> */}


            <form className="login-form" onSubmit={e => onSubmitForm(e)}>

                <label htmlFor="username" >User Name</label>
                <input id="username" type ="text" onChange={(e) => {setUsername(e.target.value)}} />

                <label htmlFor="password" >Password</label>
                <input id="password" type ="password" onChange={(e) => {setPassword(e.target.value)}} />
                {/* {pass} */}
                {!isValid ? <p>All fields are required!!</p> : null}
                <button className="form-btn" type="submit" > LOGIN </button>

            </form> 
            
            <ToastContainer theme="dark" />
        </div>
    )
}

export default Login;