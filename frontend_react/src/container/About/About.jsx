import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss';

const About = () => {
  const abouts = [
    { title: 'Web Developer', description: 'I am good web developer', imgUrl: images.about01 },
    { title: 'Backend Developer', description: 'I am good backend developer', imgUrl: images.about02 },
    { title: 'Frontend Developer', description: 'I am good frontend developer', imgUrl: images.about03 },
    { title: 'Frontend Developer', description: 'I am good frontend developer', imgUrl: images.about04 },
  ];

  return (
    <section id="about" className="app__about app__flex">
      <h2 className="head-text">
        <span>good design </span><br />
        means
        <span> good business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }} >{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About