import React from "react";
import './profile.css';
import { Route } from 'react-router-dom';

const playerFriendsNames = [];

for (let i = 0; i < 100; ++i) {
    playerFriendsNames.push({name: `Player${i}`, online: i % 4 == 0});
}

export default class MyProfile extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={"content-block"}>
                <div className={"profile-block"}>
                    <div className={"player-image"}/>
                    <div className={"short-inf"}>
                        <h3>Shrek</h3>
                        <p>Some Status</p>

                    </div>
                    <div className={"profile-content"}>
                        Some information that will be added later
                    </div>
                </div>


                <div className={"friend-list-block"}>
                    <h4>Player friends</h4>
                    <div>
                        {playerFriendsNames.map((player) =>
                            <div className={"friend-player"}>
                                <span className={"friend-player-name"}>{player.name}</span>
                                <span className={"friend-player-status"} style=
                                    {{color: player.online ? "green" : "red"}}>
                                    {player.online ? "Online" : "Offline"}

                                </span>

                            </div>
                        )}
                    </div>

                </div>

            </div>
        )
    }
}