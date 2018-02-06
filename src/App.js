import React, { Component } from 'react';
import './App.css';

const Logo = () => <div className="logo" />;
const TimHead = () => <div className="tim_head" />;

class Hello extends Component {
  render() {
    return (
      <div className="hello">
        <h1>Hello! I'm Tim Kirchhof. I design and build user interfaces.</h1>
      </div>
    );
  }
}

class Skills extends Component {
  render() {
    return (
      <ul className="skills">
        <li>JavaScript</li>
        <li>React</li>
        <li>Next</li>

        
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
            <img
              src={require('./img/octocat_256.png')}
              height="44px"
              width="44px"
              alt="github octocat"
            />
          </a>
        </div>
        <div className="imdb">
          <a href="http://www.imdb.com/name/nm9373855/" className="footer_link">
            <img
              src={require('./img/IMDB_Logo.png')}
              height="26px"
              width="54px"
              alt="imdb logo"
            />
          </a>
        </div>
        <div className="meetup">
          <a
            href="https://www.meetup.com/members/224711695/"
            className="footer_link"
          >
            <img
              src={require('./img/Meetup_Logo.png')}
              height="50px"
              width="50px"
              alt="meetup logo"
            />
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
      <div className="content">
        <Logo />
        <TimHead />
        <Hello />
        <Skills />
        <Footer />
      </div>
    );
  }
}
