import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import PlayerList from "./components/player-list";
import MainPage from "./components/mainPage";
import MyProfile from "./components/profile";
import Form from "./components/form";
import Register from "./components/register";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayerProfile from "./components/playerProfile";
import SignInForm from "./components/sign-in";
function App() {
  return (
      <BrowserRouter>
          <Header/>
            <Switch>
                <Route exact path='/player-list' component={PlayerList} />

                <Route exact path='/player-list/:id' component={PlayerProfile} />
                <Route path='/my-profile' component={MyProfile} />
                <Route path='/sign-in' component={SignInForm} />
                <Route path='/sign-up' component={Register} />
                <Route exact path='/' component={MainPage} />
            </Switch>

      </BrowserRouter>
  );
}

export default App;
