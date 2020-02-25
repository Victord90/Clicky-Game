import React, { Component } from 'react';
import './App.css';
import Container from './components/container/container';
import Navbar from './components/navbar/navbar';
import Card from './components/Card/card';
import staff from './staff.json';



class App extends Component {

  state = {
    staff,
    message: "Click The Office staff to begin!!",
    score: 0,
    topScore: 0
  };

  imageShuffle = () => {
    this.setState({staff: this.state.staff.sort(() => Math.random() - .8)});
  }

  componentDidMount() {
    this.imageShuffle();
  }

  imageClicked = (id, name, clicked) => {

    const staffImage = this.state.staff

    staffImage.forEach((staff) => {
      
      if (staff.id === id && staff.clicked) {
        staffImage.forEach((element) => {
          element.clicked = false
        });
        this.setState({
          message: "Sorry you clicked that cast memeber already! Please try again!!",
          score: 0});
      } else if (staff.id === id && !staff.clicked) {
        staff.clicked = true
        this.setState({
          message: "Correct Choice!!",
          score: this.state.score + 1,
          topScore: this.state.score + 1 > this.state.topScore ? this.state.score +1 : this.state.topScore
        });
      }
    })

    if (this.state.score + 1 === staffImage.length) {
      this.setState({
        message: "You won!! Try your luck again!!",
        score: 0,
        topScore: 0
      });

    }
    this.imageShuffle()
  };




  render() {
    return (
      <Container>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}>
        </Navbar>

        {this.state.staff.map(staff => (
          <Card
          id={staff.id}
          key={staff.id}
          name={staff.name}
          image={staff.image}
          shuffle={this.imageShuffle}
          imageClicked={this.imageClicked} />
        ))}
  
      </Container>
    );
  }

}


export default App;
