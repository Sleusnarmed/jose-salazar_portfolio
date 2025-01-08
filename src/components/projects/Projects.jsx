import styles from './projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsContainer__tools}>
        <div className={styles.tools_text}>
          <h2>Tools</h2>
        </div>
        <div className={styles.tools_imageContainer}>
          <div className={styles.imageContainer}>
            
          </div>
        </div>
      </div>
      <div className={styles.projectsContainer__imagesProject}>
      <div className={styles.imageProject_wrapper}>
          <div className={styles.wrapper_imageContainer}></div>
          <div className={styles.wrapper_textContainer}></div>
        </div>
        <div className={styles.imageProject_wrapper}>
          <div className={styles.wrapper_imageContainer}></div>
          <div className={styles.wrapper_textContainer}></div>
        </div>
      </div>
    </div>
  )
}

export default Projects
