import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import TitleBar from "./components/TitleBar";
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
      </Wrapper>
    );
  }

}

export default App;
