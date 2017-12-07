import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddRound from './components/AddRound';
import RoundList from './components/RoundList';
import StepBack from './components/StepBack';
import PlayerCount from './containers/PlayerCount';
import Game from './components/Game';

const App = () => (
  <div>
    <PlayerCount />
    <Game />
  </div>
)

export { App };

export default App;


