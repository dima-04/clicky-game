import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Footer from './components/footer';

function App() {
  return (
    <Container>
      <NavBar score="0" topScore="0" />
      <Home/>
      <Footer/>
    </Container>

  );
}


export default App;
