import React from "react";

import CustomInput from "../cunstom-input";
import Form from "../form";

const mainElements = [
    {
        value: "username",
        label: "Username",
        type: "text"
    },
    {
        value: "password",
        label: "Password",
        type: "password"
    },
];


export default class SignInForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            userId: 0
        }
    }

    findData(username, password, body) {

        for (let element of body) {
            if (element.data.username === username)
            {
                if (element.data.password !== password)
                {
                    alert("Incorrent Password!");
                    return false;
                }

                alert("Success!");
                this.setState({userId: element.id});
                return true;
            }
        }
        alert("Invalid Username!");
        return false;
    }

    validateData() {
        fetch("/Users")
            .then(resp => resp.json())
            .then(body => this.findData(this.state.username, this.state.password, body))
            .catch(e => alert("Something went wrong"));
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.validateData();
    }

    render() {
        return (
            <Form
                content={
                    mainElements.map(element =>
                        <CustomInput
                            name={element.value} onChange={value => this.handleChange(element.value, value)}
                            label={element.label} value={this.state[element.value]} placeholder={element.value}
                            type={element.type} errorMessage={""} onBlur={()=>{}}
                        />)
                }
                buttonValue={"Sign In"}
                onSubmit={e => this.onSubmit(e)}
            />
        )
    }
}