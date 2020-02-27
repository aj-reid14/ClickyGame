import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {

    let page = null;

    switch (this.state.currentPage) {
      case "Home":
        page = <Home />
        break;
      case "About":
        page = <About />
        break;
      case "Blog":
        page = <Blog />
        break;
      case "Contact":
        page = <Contact />
        break;

      default:
        break;
    }

    return page;

  }

  render() {

    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.

        {this.renderPage()}

      </div>
    );
  }
}

export default PortfolioContainer;
