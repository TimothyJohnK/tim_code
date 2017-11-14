import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Hello! I'm Tim Kirchhof. I design and build user interfaces.</h1>
        </header>
      </div>
    );
  }
}

const Logo = () => <div className="logo" />;

class Intro extends Component {
  render() {
    return (
      <div className="skills">
        <ul className="intro">
          <li>UIX</li>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>Git</li>
        </ul>
      </div>
    );
  }
}
class Footer extends Component {
  render() {
    const year = new Date();
    return (
      <div className="footer">
        <div className="github">
          <a href="https://github.com/TimothyJohnK" />
        </div>
        <div className="year">
          <h3>© {year.getFullYear()}</h3>
        </div>
        <div>
          <a href="mailto: Tim@VectorLab.com" className="email">
            Tim@VectorLab.com
          </a>
        </div>
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Header />
        <Intro />
        <Footer />
      </div>
    );
  }
}
