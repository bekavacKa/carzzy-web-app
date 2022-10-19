import React from "react";
import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Header from "../../components/Header/Header";
import "./auth.scss";
import MsgToUser from "../../components/MsgToUser/MsgToUser";



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
            {
                isLogin && 
                <MsgToUser  msgTitle="Login info"
                            firstPart="You can register, but if you don't want to, you can log in with the data below and see the functionality of the application. Please do not delete all users or products, thanks!"  
                            secondPart="As admin: username: admin, password: admin" 
                            thirdPart="As user: username: user, password: user" 
                />
            }
        </div>
    )
}

export default Auth;