import React, { Component } from 'react';
import logo from '../logo.svg';
import Board from './board';
import '../Game.css';

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>

        <div className="game-info">
          <div>{ /* status */ }</div>
          <div>{ /* TODO */ }</div>
        </div>
      </div>
    );
  }
}