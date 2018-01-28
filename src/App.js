import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://thumbs.gfycat.com/ShinyTautArcherfish-max-1mb.gif'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Tell me a <code>duck</code> story
        </p>
        <iframe id="video" width="480" height="320" src="https://www.youtube.com/embed/MtN1YnoL46Q?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
        );
  }
}

export default App;
