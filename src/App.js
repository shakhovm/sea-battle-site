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
function App() {
  return (
      <BrowserRouter>
          <Header/>
            <Switch>
                <Route path='/player-list' component={PlayerList} />
                <Route path='/my-profile' component={MyProfile} />
                <Route path='/sign-in' component={Form} />
                <Route path='/sign-up' component={Register} />
                <Route path='/' component={MainPage} />
            </Switch>

      </BrowserRouter>
  );
}

export default App;
