import { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { Heading } from '../../components/typography/Heading';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);

  return (
    <section className="app__about app__flex">
      <Heading text="Crafing digital" highlight="experiences" />
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }} >{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
) //About section with #about, wrapped in motion wrapper