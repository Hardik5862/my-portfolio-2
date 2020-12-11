import React, { Component } from "react";
import { projects } from "./projects";
import NavBar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Searchbox from "./Cards/Searchbox";
import Scroll from "./Scroll/Scroll";
import Cardlist from "./Cards/Cardlist";
import Aboutme from "./Aboutme/Aboutme";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: projects,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredProjects = this.state.projects.filter((project) => {
      return project.sterm
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="App">
        <NavBar />
        <Home />
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist projects={filteredProjects} />
        </Scroll>
        <Aboutme />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
