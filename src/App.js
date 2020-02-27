import React, {Component} from "react";
import Picture from "./components/Picture";
import TitleBar from "./components/TitleBar";
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";

class App extends Component {

  state = {
    pics,
    score: 0
  };

  render() {
    return (
      <Wrapper>
        <TitleBar score={this.state.score}>The Clicky Game!</TitleBar>

        {this.state.pics.map(card => (
          <Picture
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;
