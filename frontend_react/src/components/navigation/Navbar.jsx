import { useState } from 'react';
import { NavLink } from 'react-router';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images, sections } from '../../constants';
import './Navbar.scss';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <a href="/" className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="app__navbar-links">
        {sections.map((section) => (
          <li className="app__flex p-text" key={`link-${section}`}>
            <div />
            {
              section === 'for recruiters' ? (
                <NavLink to="/for-recruiters">{section}</NavLink>
              ) :
                (<a href={`/#${section}`} >{section}</a>)
            }
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className="app__navbar-menu__motionDiv"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {sections.map((section) => (
                <li key={section}>
                  {section === "for recruiters" ? (
                    <NavLink to="/for-recruiters/" onClick={() => setToggle(false)}>
                      {section}
                    </NavLink>
                  ) : (
                    <a href={`/#${section}`} onClick={() => setToggle(false)}>
                      {section}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};