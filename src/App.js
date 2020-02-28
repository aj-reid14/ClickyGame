import React, { Component } from "react";
import "./app.css"
import Picture from "./components/Picture";
import TitleBar from "./components/TitleBar";
import Wrapper from "./components/Wrapper";
import GameOver from "./components/GameOver";
import pics from "./pics.json";

class App extends Component {

  state = {
    pics,
    score: 0,
    bestScore: 0,
    gameOver: false
  };

  evaluateClick = id => {

    if (this.state.gameOver) {
      this.setState({gameOver: false});
    }

    this.state.pics.find((clickedPic, currentPic) => {
      if (clickedPic.id === id) {

        if (!pics[currentPic].clicked) {
          console.log(`Clicked: ${id}, ${pics[currentPic].clicked}`);
          pics[currentPic].clicked = true;
          this.setState({ score: this.state.score + 1 });
          this.state.pics.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
        }
      }
    });
  }

  endGame() {

    this.setState({gameOver: true, score: 0});

    if (this.state.score > this.state.bestScore) {
      this.setState({bestScore: this.state.score});
    }

    this.state.pics.forEach(pic => {
      pic.clicked = false;
    })

  }

  render() {
    let GameOverMessage = "";

    if (this.state.gameOver) {
      GameOverMessage = (<GameOver></GameOver>);
    }
    return (
      <Wrapper>
        <TitleBar score={this.state.score} bestScore={this.state.bestScore} gameOver={this.state.gameOver}>The Clicky Game!</TitleBar>

        {this.state.pics.map(pic => (
          <Picture
            id={pic.id}
            key={pic.id}
            image={pic.image}
            evaluateClick={this.evaluateClick}
          />
        ))}
        {GameOverMessage}

      </Wrapper>
    );
  }

}

export default App;
