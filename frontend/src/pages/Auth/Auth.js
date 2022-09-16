import React from "react";
import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Header from "../../components/Header/Header";
import "./auth.scss";



function Auth(){
    const [isLogin, setIsLogin] = useState(true);

    const showLogin = () => {
        setIsLogin(true);
    }
    const showRegister = () => {
        setIsLogin(false);
    }
    return(
        
        <div className="auth-wrapper">

            <Header pageTitle={"Sign In"} />

            
            <div className="auth-forms">
            {/* <button onClick={showRegister} > Register </button>  */}
            {isLogin ? <Login /> : <Register />}
            </div>
            
            <div className="auth-btns">
                {
                    isLogin ? 
                    <p className="auth-btn-p" onClick={showRegister} > Register ? </p>
                    :
                    <p className="auth-btn-p" onClick={showLogin} > Login ?</p>
                }
            </div>
        </div>
    )
}

export default Auth;