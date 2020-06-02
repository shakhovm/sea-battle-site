import React from "react";
import '../profile/profile.css';
import PlayerInforamtion from "../playerInformation";

const playerFriendsNames = [];

for (let i = 0; i < 100; ++i) {
    playerFriendsNames.push({name: `Player${i}`, online: i % 4 === 0});
}

export default class PlayerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };

    }

    componentDidMount() {
        fetch(`/Users/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(body => {
                this.setState({data: body.data});
            })
            .catch(resp => alert("Something went wrong!"));
    }

    render() {
        return (
            <div className={"content-block"}>
                <PlayerInforamtion
                    username={this.state.data.username}
                    rating={this.state.data.rating}
                    additionalData={this.state.data.additionalData}
                    image={<div className={"player-image"}
                                style={{backgroundImage: `url(${this.state.data.image})`}}/>
                    }
                />
            </div>
        )
    }
}