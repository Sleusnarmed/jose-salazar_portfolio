import { motion } from "framer-motion";
import styles from "./projectContainer.module.css";
import github from '@/assets/img/github-mark.svg'

const ProjectContainer = ({
  title,
  description,
  image,
  links = [],
  tech = [],
  githubUrl,
  demoUrl,
  index = 0,
}) => {
  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.15 },
        },
      }}
    >
      <img
        className={styles.imageMockup}
        src={image}
        alt={`Imagen del proyecto ${title}`}
      />

      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>


        {tech.length > 0 && (
          <div className={styles.card__tech}>
            {tech.map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                alt="tech icon"
                className={styles.techIcon}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              />
            ))}
          </div>
        )}

        <div className={styles.card__buttons}>
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              className={styles.cardBtn}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <img src={github} alt="github" />
              <span>Code →</span>
            </motion.a>
          )}

          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              className={styles.cardBtn}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <span>Live Demo →</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContainer;
