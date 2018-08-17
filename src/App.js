import React, { Component } from 'react';
import Board from './board'
import './App.css';
import Header from './header'
import Footer from './footer'

class App extends Component {

  render() {
    return (
      <div>
        <div className="header-container">
            <Header className="header"/>
        </div>
        <div className="board">
            <Board />
        </div>
        <div className="footer-container">
            <Footer className="footer"/>
        </div>
      </div>
    );
  }
}

export default App;
