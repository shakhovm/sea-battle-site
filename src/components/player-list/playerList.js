import React from "react";
import './playerList.css';

const playerFriendsNames = [];

for (let i = 0; i < 100; ++i) {
    playerFriendsNames.push({name: `Player${i}`,
        rating: `00${i}`,
        online: i % 4 == 0,

        additionInf: "Some Data"});
}

export default class PlayerList extends React.Component {
    constructor() {
        super();
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
                        {playerFriendsNames.map((player) =>
                            <div className={"player"}>
                                <div className={"player-name"}>{player.name}</div>
                                <span className={"player-rating"}>{player.rating}</span>
                                <span className={"player-status"} style=
                                    {{color: player.online ? "green" : "red"}}>
                                    {player.online ? "Online" : "Offline"}
                                </span>
                                <span className={"player-data"}>{player.additionInf}</span>
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