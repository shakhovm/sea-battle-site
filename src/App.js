import React from 'react';
import './App.css';
import Header from "./components/header";
import PlayerList from "./components/player-list";
import MainPage from "./components/mainPage";
import MyProfile from "./components/profile";
import Register from "./components/register";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PlayerProfile from "./components/playerProfile";
import SignInForm from "./components/sign-in";
import SeaBattle from "./components/SeaBattle";

import { Provider } from "react-redux";
import configStore from "./store";


const store = configStore();


function App() {
  return (
      <Provider store={ store }>
          <BrowserRouter>
              <Header/>
                <Switch>
                    <Route exact path='/player-list' component={PlayerList} />

                    <Route exact path='/player-list/:id' component={PlayerProfile} />
                    <Route path='/my-profile' component={MyProfile} />
                    <Route path='/sign-in' component={SignInForm} />
                    <Route path='/sign-up' component={Register} />
                    <Route path="/battle" component={SeaBattle} />
                    <Route exact path='/' component={MainPage} />
                </Switch>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
