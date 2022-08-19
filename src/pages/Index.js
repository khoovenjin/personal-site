import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Khoo Ven Jin's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Full Stack Developer</Link></h2>
        </div>
      </header>
      <p> Welcome to my website! I am specialized in Web and Mobile App Development with a niche in
        Cloud Technology, specifically Amazon Web Services (AWS). I am passionate in developing
        solutions to help you solve real-world problems and grow your business. With that being said,
        what are you waiting for? Let's collaborate!
      </p>
      <p>
        Please feel free to read more about me on my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
