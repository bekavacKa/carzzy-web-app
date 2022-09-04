import React from "react";
import { useState } from "react";

function AuthPage(){
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(username, "==>>>", pass);
    }


    return(
        <div className="auth-wrapper">
            <h1>Test Auth</h1>

            <form className="auth-form" onSubmit={e => onSubmitForm(e)}>
                <label htmlFor="username" >User Name</label>
                <input id="username" type ="text" onChange={(e) => {setUsername(e.target.value)}} />
                {username}
                <label htmlFor="password" >Password</label>
                <input id="password" type ="password" onChange={(e) => {setPass(e.target.value)}} />
                {pass}
                <button type="submit" > Test Send</button>
            </form>

        </div>
    )
}

export default AuthPage;