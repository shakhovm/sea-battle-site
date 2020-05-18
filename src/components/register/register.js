import React from "react";

import '../form/form.css';
import CustomInput from "../cunstom-input";
import Form from "../form";
const mainElements = [
    {
        value: "username",
        label: "Username",
        type: "text"
    },
    {
        value: "email",
        label: "Email",
        type: "email"
    },
    {
        value: "password",
        label: "Password",
        type: "password"
    },
    {
        value: "again password",
        label: "Repeat Password",
        type: "password"
    }];
export default class Register extends React.Component {
    constructor(router) {
        super(router);
        this.state = {
            username: "",
            password: "",
            email: "",
            "again password": "",
            errors: {
                username: "",
                password: "",
                email: "",
                "again password": ""
            },
            emailFound: false,
            usernameFound: false
        }
    }


    validate(name, value) {
        switch (name) {
            case 'username':
                const usernameRegex = /^[a-zA-Z0-9]+$/;

                if (value.length < 2) {
                    this.setState({ errors: {...this.state.errors, username: 'Name is too short'}});
                    return false;
                }

                if (!value.match(usernameRegex))
                {
                    this.setState({ errors: {...this.state.errors, username: 'Your username is not valid. ' +
                                'Only characters A-Z, a-z, 0-9 are  acceptable.'}});
                    return false;
                }

                this.setState({ errors: {...this.state.errors, username: ''}});
                break;

            case 'email':
                const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                if (!emailValidation.test(value)) {
                    this.setState({ errors: {...this.state.errors, email: 'Email is not valid'}});
                    return false;
                }

                this.setState({ errors: {...this.state.errors, email: ''}});
                break;
            case 'password':
                if (value.length <= 2)
                {
                    this.setState({ errors: {...this.state.errors, password: 'Password is too short'}});
                    return false;
                }

                this.setState({ errors: {...this.state.errors, password: ''}});
                break;
            case 'again password':
                if (this.state.password !== value)
                {
                    this.setState({ errors: {...this.state.errors,
                            "again password": 'Passwords are not the same'}});
                    return false;
                }

                this.setState({ errors: {...this.state.errors, "again password": ''}});
                break;
            default:
                break;
        }
        return true;
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        for (let [key, value] of Object.entries(this.state)) {
            if (!this.validate(key, value))
            {
                alert("Fill form Properly");
                return;
            }
        }
        this.addUser();
        alert("You registered successfully!");
    }

    addUser() {
        const newUser = {
            data: {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                rating: 0,
                additionalData: "Here should be some information",
                image: "https://arcanashop.ru/avatar/00/27/35702059.jpeg"
            }};
        fetch('/Users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).catch(reason => alert("Something Went Wrong!"));
    }

    render() {
        return (
            <Form
                content={
                    mainElements.map(element =>
                        <CustomInput
                            name={element.value} onChange={value => this.handleChange(element.value, value)}
                            label={element.label} value={this.state[element.value]} placeholder={element.value}
                            type={element.type} onBlur={e => this.validate(e.target.name, e.target.value)}
                            errorMessage={this.state.errors[element.value] &&
                            <span>{this.state.errors[element.value]}</span>}
                        />)
                }
                buttonValue={"Sign Up"}
                onSubmit={e => this.onSubmit(e)}
            />
        )
    }
}