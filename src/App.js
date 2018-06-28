import React, { Component } from 'react';
import './App.css';

const Logo = () => (
  <div className="header">
    <div className="logo" />
  </div>
);
const TimHead = () => <div className="tim_head" />;
const Hello = () => (
  <div className="hello">
    <h1>Hello! I'm Tim Kirchhof. I design and build user interfaces.</h1>
  </div>
);
const Skills = () => (
  <ul className="skills">
    <li>JavaScript</li>
    <li>React</li>
    <li>HTML/CSS</li>
    <li>Webpack</li>
    <li>Babel</li>
    <li>npm</li>
    <li>Git</li>
    <li>Next</li>
    <li>styled-components</li>
    <li>GIMP</li>
  </ul>
);

const Basho = () => (
  <div className="site basho">
    <a
      href="http://basho.ai/"
      alt="AI generated haiku site named after famous japanese poet Basho"
    />
  </div>
);
const KingBaron = () => (
  <div className="site kingbaron">
    <a
      href="http://kingbaron.surge.sh/"
      alt="music site for the jazz band King Baron"
    />
  </div>
);
const SoundCloudTJK = () => (
  <div className="site soundcloud">
    <a
      href="https://soundcloud.com/timkirchhofmusic/the-joy-of-silver"
      alt="Soundcloud music examples"
    />
  </div>
);
const Urbanfarmhand = () => (
  <div className="site urbanfarmhand">
    <a
      href="https://timothyjohnk.github.io/urbanfarmhand/"
      alt="static site for the gardening business the urban farmhand"
    />
  </div>
);

const Portfolio = () => (
  <div>
    <div className="portfolio_header">
      <div className="portfolio_title">Portfolio</div>
      <div>Please click on the images below to see examples of my design</div>
    </div>
    <div className="portfolio_wrapper">
      <div className="portfolio">
        <Basho />
        <KingBaron />
        <SoundCloudTJK />
        <Urbanfarmhand />
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className="header">
    <Logo />
    <div className="github header_link">
      <a href="https://github.com/TimothyJohnK">
        <img
          src={require('./img/octocat_256.png')}
          height="44px"
          width="44px"
          alt="github octocat"
        />
      </a>
    </div>
    <div className="imdb header_link">
      <a href="http://www.imdb.com/name/nm9373855/">
        <img
          src={require('./img/IMDB_Logo.png')}
          height="26px"
          width="54px"
          alt="imdb logo"
        />
      </a>
    </div>
    <div className="meetup header_link">
      <a href="https://www.meetup.com/members/224711695/">
        <img
          src={require('./img/Meetup_Logo.png')}
          height="50px"
          width="50px"
          alt="meetup logo"
        />
      </a>
    </div>
  </div>
);

const ContentImgWrapper = () => (
  <div className="content_img_wrapper">
    <TimHead />
    <Hello />
    <Skills />
    <div className="add_text">
      I also perform, teach, compose and produce sonically lush and compelling
      music for film, commercial usage, and live performance. Check out the IMDB
      link in the header for my film credits and checkout the portfolio section
      for examples of my composition.
    </div>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <ContentImgWrapper />
        <Portfolio />
      </div>
    );
  }
}
