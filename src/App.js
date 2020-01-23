import React from 'react';
import './App.css';

import Home from "./components/pages/Home";

import images from './puppies.json';

function App() {
  return (
      <Home images={images}/>
  );
}


export default App;
