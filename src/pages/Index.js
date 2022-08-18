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
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. You can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
