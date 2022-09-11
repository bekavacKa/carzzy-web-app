import React from "react";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import "./register.scss";

function Register(){

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [isValid, setIsValid] = useState(true);
    const [apiErr, setApiErr] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        // console.log("Data form ==>>>", firstName, lastName, username, email, pass, );
        if(!username || !pass || !email){
            // console.log("nesto ne postoji");
            setIsValid(false);
            return;
        }
        setIsValid(true);
        
        let body = {username, email, pass, firstName, lastName};
        AuthService.register(body)
                    .then((res) => {
                        if(res && res.status === 200){
                            console.log("REGISTER SERVICE RESPONSE =>", res);
                            // TODO: SEND USER TO HOME PAGE
                        }
                    })
                    .catch((err) => {
                        console.log("REGISTER SERVICE ERR =>", err);
                        setApiErr(true);
                    })
    }

    return(
        <div className="register-wrapper" >
            <h2>REGISTER</h2>


            {apiErr ?
            <h2> something is wrong with logging in </h2>            
            :

            <form className="auth-form" onSubmit={e => onSubmitForm(e)}>

                <label htmlFor="firstname">First Name</label>
                <input id="firstname" type ="text" onInput={(e) => {setFirstName(e.target.value)}} />

                <label htmlFor="lastname">Last Name</label>
                <input id="lastname" type ="text" onChange={(e) => {setLastName(e.target.value)}} />

                <label htmlFor="username">Username</label>
                <input id="username" type ="text" onChange={(e) => {setUsername(e.target.value)}} />

                <label htmlFor="email">Email</label>
                <input id="email" type ="email" onChange={(e) => {setEmail(e.target.value)}} />

                <label htmlFor="password">Password</label>
                <input id="password" type ="password" onChange={(e) => {setPass(e.target.value)}} />

                <button type="submit" > REGISTER </button>

                {!isValid ? <p>Some fields are required!!</p> : null}
            </form> 
            }
        </div>
    )
}

export default Register;