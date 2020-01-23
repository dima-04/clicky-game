import React, { Component } from 'react';
import './App.css';

import Home from "./components/pages/Home";

import images from './puppies.json';

class App extends Component {
  componentDidMount() {
    document.title = "Click game";
  }

  render() {
    return (
      <Home images={images} />
    );
  }
}


export default App;
