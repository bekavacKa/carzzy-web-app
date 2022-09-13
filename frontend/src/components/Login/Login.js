import React from "react";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import "./login.scss";


function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [apiErr, setApiErr] = useState(false);

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
                            // TODO: SEND USER TO HOME PAGE
                            localStorage.setItem("user", JSON.stringify(res.data))
                        }
                    })
                    .catch((err) => {
                        console.log("LOGIN SERVICE ERR =>", err);
                        setApiErr(true);
                    })
    }

    return(
        <div className="login-wrapper" >
            <h2>LOGIN</h2>

            {apiErr ?
            <h2> something is wrong with logging in </h2>            
            :
            <form className="login-form" onSubmit={e => onSubmitForm(e)}>

                <label htmlFor="username" >User Name</label>
                <input id="username" type ="text" onChange={(e) => {setUsername(e.target.value)}} />

                <label htmlFor="password" >Password</label>
                <input id="password" type ="password" onChange={(e) => {setPassword(e.target.value)}} />
                {/* {pass} */}
                {!isValid ? <p>All fields are required!!</p> : null}
                <button type="submit" > LOGIN </button>
            </form> 
            }

        </div>
    )
}

export default Login;