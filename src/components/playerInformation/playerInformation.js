import React from "react";

export default class PlayerInforamtion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"profile-block"}>
                {this.props.image}
                {/*<div className={"player-image"}/>*/}
                <div className={"short-inf"}>
                    <h3>{this.props.username}</h3>
                    <p>{this.props.rating}</p>

                </div>
                <div className={"profile-content"}>
                    {this.props.additionalData}
                </div>
            </div>
        )
    }
}