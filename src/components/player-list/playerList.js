import React from "react";
import './playerList.css';
import { NavLink } from 'react-router-dom';

export default class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerList: []
        }
    }


    componentDidMount() {
        fetch('/Users')
            .then(resp => {
                return resp.json()
            })
            .then(body => {
                return this.setState({playerList: body});} )
            .catch(e => alert("Something went wrong!"));

    }


    render() {
        return (
            <div className={"content-block"}>
                <div className={"player-list-block"}>
                    <h2>Players List</h2>
                    <div className={"blocks-names"}>
                        <button className={"player-play-button"}
                            onClick={()=>alert("Is not available yet")}>Name</button>
                        <button className={"player-play-button"}
                                onClick={()=>alert("Is not available yet")}>Rating</button>
                        <button className={"player-play-button"}
                                onClick={()=>alert("Is not available yet")}>Status</button>
                        <button className={"player-play-button"}
                                onClick={()=>alert("Is not available yet")}>Data</button>
                    </div>

                    <div className={"player-list"}>
                        {this.state.playerList.map((player) =>
                            <div className={"player"}>
                                <NavLink to={`/player-list/${player.id}`} className={"player-name"}>
                                    {player.data.username}
                                </NavLink>
                                <span className={"player-rating"}>{player.data.rating}</span>
                                <span className={"player-status"} style=
                                    {{color: "red"}}>
                                    {"Offline"}
                                </span>
                                <span className={"player-data"}>{"Some Data"}</span>
                                <button className={"player-play-button"} onClick=
                                    {()=>alert("This function will be added later")}>
                                    Play</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}