import React, { Component } from 'react';
import './App.css';

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
      <ul className="intro">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next</li>
        <li>UX</li>
        <li>HTML/CSS</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>npm</li>
        <li>Git</li>
      </ul>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="github">
          <a href="https://github.com/TimothyJohnK" className="footer_link">
            <img src={require('./img/octocat.png')} alt="github octocat" />
          </a>
        </div>
        <div className="imdb">
          <a href="http://www.imdb.com/name/nm9373855/" className="footer_link">
            <img src={require('./img/imdb_logo_small.png')} alt="imdb logo" />
          </a>
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
