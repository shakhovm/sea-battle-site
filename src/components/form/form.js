import React from "react";

import './form.css';

export default class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={"form-container"}>
                <div className={"form-logo"}>

                </div>
                <div className={"form-element"}>
                    <label htmlFor={"username"}>Username</label>
                        <input type={"text"} name={"username"} placeholder={"username"}/>
                </div>
                <div className={"form-element"}>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} name={"password"} placeholder={"password"}/>

                </div>

            <button className={"player-play-button"} onClick={()=>alert("Submit")}>SignIn</button>
            </div>
        )
    }
}