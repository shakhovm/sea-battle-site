import React from "react";

import './form.css';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            userId: 0
        }
    }

    render() {
        return (
            <form onSubmit={e => this.props.onSubmit(e)} className={"form-container"}>
                <div className={"form-logo"}>
                </div>
                {this.props.content}
                <div className={"form-element"}>
                    <input type="submit" className={"player-play-button"} value={this.props.buttonValue}/>
                </div>
            </form>
        )
    }
}