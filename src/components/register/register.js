import React from "react";

import '../form/form.css';

export default class Register extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={"form-container"}>
                <div className={"form-logo"}>

                </div>
                <div className={"form-element"}>
                    <label htmlFor={"email"}>Email</label>
                    <input type={"email"} name={"email"} placeholder={"email@example.com"}/>
                </div>
                <div className={"form-element"}>
                    <label htmlFor={"username"}>Username</label>
                    <input type={"text"} name={"username"} placeholder={"username"}/>
                </div>
                <div className={"form-element"}>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} name={"password"} placeholder={"password"}/>

                </div>
                <div className={"form-element"}>
                    <label htmlFor={"password"}>Repeat Password</label>
                    <input type={"password"} name={"password"} placeholder={"password"}/>

                </div>

                <button className={"player-play-button"} onClick={()=>alert("Submit")}>SignUp</button>
            </div>
        )
    }
}