import React, { Component } from 'react';
import './App.css';

const Logo = () => (
  <div className="footer">
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
    <li>React</li>
    <li>JavaScript</li>
    <li>HTML/CSS</li>
    <li>Webpack</li>
    <li>Babel</li>
    <li>npm</li>
    <li>Git</li>
    <li>Next</li>
    <li>GIMP</li>
    <li>Redux </li>
    <li>Node.js </li>
    <li>Security</li>
    <li>Express.js</li>
    <li>SemanticUI</li>
    <li>PostgresSQL </li>
    <li>Authorization</li>
    <li>styled-components</li>
    <li>RESTful API Design</li>
    <li>SQL Authentication</li>
    <li>Scalable Infrastructure </li>
    <li>Production and Deployment</li>
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
      href="http://kingbaron.com/"
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
const Spotify = () => (
  <div className="site spotify">
    <a
      href="https://open.spotify.com/artist/5kOzz7GshgVRuGKupWgY66?si=wIMo9OdrScy1c_sqktajdw"
      alt="spotify artist page"
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
    <div className="portfolio_footer">
      <div className="portfolio_title">Portfolio</div>
      <div>Please click on the images below to see examples of my design</div>
    </div>
    <div className="portfolio_wrapper">
      <div className="portfolio">
        <Basho />
        <KingBaron />
        <Spotify />
        <SoundCloudTJK />
        <Urbanfarmhand />
      </div>
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
    <Logo />
    <div className="github footer_link">
      <a href="https://github.com/TimothyJohnK">
        <img
          src={require('./img/octocat_256.png')}
          height="44px"
          width="44px"
          alt="github octocat"
        />
      </a>
    </div>
    <div className="imdb footer_link">
      <a href="http://www.imdb.com/name/nm9373855/">
        <img
          src={require('./img/IMDB_Logo.png')}
          height="26px"
          width="54px"
          alt="imdb logo"
        />
      </a>
    </div>
    <div className="meetup footer_link">
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
      link in the footer for my film credits and checkout the portfolio section
      for examples of my composition.
    </div>
  </div>
);

export default class App extends Component {
  render() {
    return (
      <div className="content">
        <ContentImgWrapper />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}
