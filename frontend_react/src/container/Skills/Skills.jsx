import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Heading } from '../../components/typography/Heading';
import { useTheme } from 'styled-components';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const skillQuery = '*[_type == "skills"]';
    const expQuery = '*[_type == "experiences"]';

    client.fetch(skillQuery)
      .then((data) => setSkills(data));

    client.fetch(expQuery)
      .then((data) => {
        const sortedExperience = data.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        setExperience(sortedExperience)
      });
  }, [])

  return (
    <section className="app__wrap">
      <Heading text="Skills &" highlight="Experience" />
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              {...theme.animations.fadeIn}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />

              </div>
              <p className="p-text">{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={`${experience.year}-${work.name}`}>
                    <motion.div
                      {...theme.animations.fadeIn}
                      className="app__skills-exp-work"
                      key={`${experience.year}-${work.name}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p>{work.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)