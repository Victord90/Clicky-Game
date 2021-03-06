import React, { Component } from "react";
import "./App.css";
import Container from "./components/container/container";
import Nav from "./components/navbar/navbar";
import Card from "./components/Card/card";
import staff from "./staff.json";
import Row from "./components/Row/row";
import Header from "./components/header/header";

class App extends Component {
  state = {
    staff,
    message: "Click The Office staff to begin!!",
    score: 0,
    topScore: 0
  };

  imageShuffle = () => {
    this.setState({ staff: this.state.staff.sort(() => Math.random() - 0.8) });
  };

  componentDidMount() {
    this.imageShuffle();
  }

  imageClicked = id => {
    const staffImage = this.state.staff;

    staffImage.forEach(staff => {
      if (staff.id === id && staff.clicked) {
        staffImage.forEach(staffImage => {
          staffImage.clicked = false;
        });

        this.setState({
          score: 0,
          message:
            "Sorry you clicked that cast memeber already! Please try again!!"
        });
      } else if (staff.id === id && !staff.clicked) {
        staff.clicked = true;
        this.setState({
          message: "Correct Choice!!",
          score: this.state.score + 1,
          topScore:
            this.state.score + 1 > this.state.topScore
              ? this.state.score + 1
              : this.state.topScore
        });
      }
    });

    if (this.state.score + 1 === staffImage.length) {
      this.setState({
        message: "You won!! Try your luck again!!"
      });
    }
    this.imageShuffle();
  };

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Header
            message={this.state.message}
            score={this.state.score}
            topScore={this.state.topScore}
          ></Header>

          <Row>
            {this.state.staff.map(staff => (
              <Card
                id={staff.id}
                key={staff.id}
                name={staff.name}
                image={staff.image}
                shuffle={this.imageShuffle}
                imageClicked={this.imageClicked}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
