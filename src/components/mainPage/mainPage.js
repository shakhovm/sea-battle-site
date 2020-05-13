import React from "react";
import './mainPage.css';


export default class MainPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className={"main-page-block"}>
                    <div className={"main-page-text"}>
                        Immerse yourself to the world of sea battle
                    </div>
                    <div className={"image-block"}>

                    </div>
                </div>
                <div id={"play-block"}>
                    <button className={"play-button"}>Play</button>
                    <p>Here should be some search oponents options. Will be added during the project work</p>
                </div>
            </>
        )
    }
}