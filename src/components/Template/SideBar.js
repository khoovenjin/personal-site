import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Khoo Ven Jin</h2>
        <p><a href="mailto:venjin_boy@hotmail.com">venjin_boy@hotmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Fun fact, I love coding and developing software on my pass time.
        A little more about me, I am an <a href="https://www.apu.edu.my/">APU</a> graduate, SMI Alumni, and
        an ex-Technical Assistant.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Khoo Ven Jin <Link to="/">54.221.33.239</Link>.</p>
    </section>
  </section>
);

export default SideBar;
