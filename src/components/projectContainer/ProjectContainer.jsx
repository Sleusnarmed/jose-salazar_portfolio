import styles from "./projectContainer.module.css";

const ProjectContainer = ({ title, description, image, links = [] }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.imageMockup}
        src={image}
        alt={`Imagen del proyecto ${title}`}
      />

      <div className={styles.card__info}>
        <span className={styles.card__name}>
          {title}
          <span className={styles.card__ocupation}>
            <br />
            {description}
          </span>

          <div className={styles.card__links}>
            {links.map((link, i) => (
              <a href={link.url} target="_blank" key={i}>
                {link.icon}
              </a>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default ProjectContainer;
