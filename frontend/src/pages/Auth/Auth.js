import React from "react";
import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import "./auth.scss";


function Auth(){
    const [isLogin, setIsLogin] = useState(true)


    return(
        
        <div className="auth-wrapper">
            <h1>Test Auth</h1>

            {/* <button onClick={showLogin} > Login </button>
            <button onClick={showRegister} > Register </button> */}
            {isLogin ? <Login showLoginForm={setIsLogin}/> : <Register showLoginForm={setIsLogin}/>}

        </div>
    )
}

export default Auth;