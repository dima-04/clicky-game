import React, { Component } from "react";
import Card from '../card';
import { Row, Container } from "react-bootstrap";
import NavBar from "../navbar";
import Footer from "../footer";
import images from '../../puppies.json';

class Home extends Component {
  state = {
    images: images,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    className: ""
  };

  componentDidMount() {
    console.log("mount");
    images.forEach(image => {
      image.clicked = false;
    });
    const newState = { ...this.state };
    newState.images = images;
    this.setState(newState);
  };

  handleImageClick = event => {
    const newState = { ...this.state };
    const imageId = parseInt(event.target.attributes.getNamedItem("data-id").value);
    console.log(typeof (images[0].id));
    console.log(typeof (imageId));
    const found = images.find(image => image.id === imageId);
    if (found.clicked) {
      this.lose(newState);
      newState.message = "You guessed Incorrectly!!";
      newState.className = "incorrect";
    } else {
      found.clicked = true;
      newState.score++;
      newState.message = "You guessed correctly";
      newState.className = "correct";
    }
    newState.score = Math.max(newState.score, newState.topScore);

    const shuffledImages = images.sort(() => Math.random() - 0.5);
    newState.images = shuffledImages;
    this.setState(newState);
  };

  lose = (newState) => {
    newState.score = 0;

    images.forEach(image => {
      image.clicked = false;
    });
  }

  render() {
    return (
      <Container>
        <NavBar className={this.state.className} message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <div>
          <h1>Just click</h1>
          <div>
            <Row>
              {this.state.images.map(image => (
                <Card image={image} onClick={this.handleImageClick} />
              )
              )}
            </Row>
          </div>
        </div>
        <Footer />
      </Container>
    );
  }
}

export default Home;