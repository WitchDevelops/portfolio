import { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const skillQuery = '*[_type == "skills"]';
    const expQuery = '*[_type == "experiences"]';

    client.fetch(skillQuery)
      .then((data) => setSkills(data));

    client.fetch(expQuery)
      .then((data) => setExperience(data));
  }, [])

  return (
    <section>
      <h2 className="head-text">
        Skills & <span>experience</span>
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
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
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-content={work.desc}
                      data-tooltip-id={work.name}
                      key={`${experience.year}-${work.name}`}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip id={work.name} effect="solid" arrowColor="#FFF" className="skills-tooltip">
                      {work.desc}
                    </Tooltip>
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