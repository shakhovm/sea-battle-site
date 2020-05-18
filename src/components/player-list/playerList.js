import React from "react";
import './playerList.css';

import {Link, Route, Switch, NavLink} from 'react-router-dom';
import PlayerProfile from "../playerProfile";

const playerFriendsNames = [];

for (let i = 0; i < 100; ++i) {
    playerFriendsNames.push({name: `Player${i}`,
        rating: `00${i}`,
        online: i % 4 === 0,

        additionInf: "Some Data"});
}

export default class PlayerList extends React.Component {
    constructor() {
        super();
        this.state = {
            playerList: []
        }
    }

    componentDidMount() {
        fetch('/Users')
            .then(resp => {
                console.log(resp);
                return resp.json()
            })
            .then(body => this.setState(
                {playerList: body
                }))
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
                                <NavLink to={`/player-list/${player.id}`} className={"player-name"}>{player.data.username}</NavLink>
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