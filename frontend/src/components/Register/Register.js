import React, { useEffect } from "react";
import { useState } from "react";
import AuthService from "../../services/AuthService";
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

    const [isValid, setIsValid] = useState(true);
    const [isApiFinish, setIsApiFinish] = useState(false);
    const [apiErr, setApiErr] = useState(false);

    const handleInputChange = (e) => {
        // console.log(e.target.name, e.target.value);
        let newUserData = {...userData};
        newUserData[e.target.name] = e.target.value;
        // console.log(newUserData, "user data");
        setUserData(newUserData);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if(!userData.username || !userData.password || !userData.email || !userData.email.includes("@") ){
            console.log("nesto ne postoji!!!");
            setIsValid(false);
            return;
        }
        setIsValid(true);
        
        AuthService.register(userData)
                    .then((res) => {
                        if(res.status === 200){
                            console.log("REGISTER SERVICE RESPONSE =>", res);
                            setIsApiFinish(true);
                            setApiErr(false);
                            // TODO: SEND USER TO HOME PAGE
                            return;
                        }
                    })
                    .catch((err) => {
                        console.log("REGISTER SERVICE ERR =>", err);
                        setApiErr(true);
                    })
    }

    return(
        <div className="register-wrapper" >

            {/* <Header pageTitle={"Register"} /> */}
            
            <form className="register-form" onSubmit={e => onSubmitForm(e)}>

                <label htmlFor="firstName">First Name</label>
                <input id="firstName" 
                        type ="text"
                        name="firstName" 
                        onChange={(e) => {handleInputChange(e)}} />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" 
                        type ="text" 
                        name="lastName" 
                        onChange={(e) => {handleInputChange(e)}} />

                <label htmlFor="adress">Adress</label>
                <input id="adress" 
                        type ="text"
                        name="adress" 
                        onChange={(e) => {handleInputChange(e)}} />

                <label htmlFor="city">City</label>
                <input id="city" 
                        type ="text"
                        name="city"   
                        onChange={(e) => {handleInputChange(e)}}/>

                <label htmlFor="username">Username</label>
                <input id="username" 
                        type ="text" 
                        name="username" 
                        onChange={(e) => {handleInputChange(e)}} />

                <label htmlFor="email">E-mail</label>
                <input id="email" 
                        type ="email" 
                        name="email" 
                        onChange={(e) => {handleInputChange(e)}} />

                <label htmlFor="password">Password</label>
                <input id="password" 
                        type ="password" 
                        name="password" 
                        onChange={(e) => {handleInputChange(e)}} />


                <button className="form-register-btn" type="submit" > REGISTER </button>
                {/* <input type="submit" value="Register" /> */}
            </form> 

            {!isValid ? <p> invalid form </p> : null}
            {apiErr ? <p> something is wrong</p> : null}
            {isApiFinish ? <p> successful registration </p> : null}
        </div>
    )
}

export default Register;