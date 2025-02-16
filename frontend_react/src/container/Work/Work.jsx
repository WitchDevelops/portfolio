import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '@wrapper/AppWrap';
import { urlFor, client } from '@/client';
import { PROJECT_TYPE_FILTERS as projectTypeFilters, PROJECT_TECH_FILTERS as projectTechFilters } from '@data/filters';
import { Heading } from '@components/typography/Heading';
import './Work.scss';

const Work = () => {
  const [, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
  }, [])
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <section className="app__works">
      <Heading text="My Creative" highlight="Portfolio" />

      <div className="app__work-filters-wrapper">
        <p>Filter by project type</p>
        <div className="app__work-filter">
          {projectTypeFilters.map((item, index) => (
            <div
              key={index}
              className={`app__work-filter-item app__flex ${index === item ? 'item-active' : ''
                }`}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="app__work-filters-wrapper">
        <p>Filter by technology used</p>
        <div className="app__work-filter">
          {projectTechFilters.map((item, index) => (
            <div
              key={index}
              className={`app__work-filter-item app__flex ${index === item ? 'item-active' : ''
                }`}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (

          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={`Screenshot of ${work.title}`} className="app__work-img" />
              <motion.div
                whileInView={{ opacity: isMobile ? 1 : 0 }}
                whileHover={{ opacity: isMobile ? 1 : [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_target" rel="noreferrer" title={`View project: ${work.title}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_target" rel="noreferrer" title={`View the code for project: ${work.title}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>

              </motion.div>
            </div>
            <Link to={`/projects/${encodeURIComponent(work.title)}`} className="app__work-content">
              <div className="app__work-card-description">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              </div>
              <div className="app__work-tag app__flex">
                {
                  work.tags?.map((tag, index) => (
                    <p key={index} className="app__work-tag_item">{tag}</p>
                  ))
                }

              </div>
            </Link>
          </div>
        ))
        }
      </motion.div>
    </section>
  )
}

export default AppWrap(Work, 'projects')