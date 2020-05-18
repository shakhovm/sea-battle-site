import React from "react";
import './profile.css';

import PlayerInforamtion from "../playerInformation";


const playerFriendsNames = [];

for (let i = 0; i < 100; ++i) {
    playerFriendsNames.push({name: `Player${i}`, online: i % 4 === 0});
}

const currentId = 1;

export default class MyProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            id: currentId,
            data: {
                username: "",
                additionalData: "",
                rating: 0,
                image: "",
                password: ""

            }

        }
    }

    componentDidMount() {
        fetch(`/Users/${currentId}`)
            .then(resp => resp.json())
            .then(body => this.setState(body))
            .catch(e => alert("Something Went Wrong!"));
    }

    uploadImage(ev) {
        try {
            const newUrl = URL.createObjectURL(ev.target.files[0]);
            this.setState({data: {...this.state.data, image: newUrl}
            });

            const newState = {
                id: this.state.id,
                data: {
                    ...this.state.data,
                    image: newUrl
                }
            };

            fetch(`/Users/${currentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newState)
            }).catch(e => alert("Failed to upload image!"));

        } catch (e) {
            alert("Failed to upload image!");
        }

    }

    render() {
        return (

            <div className={"content-block"}>
                <PlayerInforamtion
                    username={this.state.data.username}
                    rating={this.state.data.rating}
                    additionalData={this.state.data.additionalData}
                    image={
                        <>
                        <label htmlFor="imageChooser" className={"player-image"}
                               style={{backgroundImage: `url(${this.state.data.image})`}}/>
                        <input type={"file"} id="imageChooser" onChange={ev => this.uploadImage(ev)}/>
                        </>
                    }
                />


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