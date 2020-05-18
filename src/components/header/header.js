import React from "react";
import './header.css';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <nav className={'main-nav'}>
                    <div className={"logo"}>

                    </div>
                    <div className={'sidebar-item'}>
                        <NavLink to="/" className={"nav-link"} activeClassName={"link-selected"}>
                            Main Page</NavLink>
                    </div>
                    <div className={'sidebar-item'}>
                        <NavLink to="/my-profile" className={"nav-link"}>
                            My Profile
                        </NavLink>
                    </div>
                    <div className={'sidebar-item'}>
                        <NavLink to="/player-list" className={"nav-link"}>
                            Player List</NavLink>
                    </div>
                    <div className={'sidebar-item'}>
                        <NavLink to="/sign-in" className={"nav-link"}>
                            Sign In</NavLink>
                    </div>
                    <div className={'sidebar-item'}>
                        <NavLink to="/sign-up" className={"nav-link"}>
                            Sign Up</NavLink>
                    </div>
                </nav>
            </header>
        )
    }
}