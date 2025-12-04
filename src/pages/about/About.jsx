import { useEffect, useState, useRef } from "react";
import profilePicture from '@/assets/img/profileImage.jpg'
import styles from "./about.module.css";

const About = () => {
  const [currentText, setCurrentText] = useState("CodeCrafter");
  const [isFinalText, setIsFinalText] = useState(false);
  const [hasStopped, setHasStopped] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (hasStopped) return;

    const texts = ["CodeCrafter", "Dreamer", "Innovative", "Jose Salazar"];

    const interval = setInterval(() => {
      indexRef.current = indexRef.current + 1;

      if (indexRef.current >= texts.length - 1) {
        setCurrentText(texts[texts.length - 1]);
        setIsFinalText(true);
        setHasStopped(true); 
        clearInterval(interval);
        return;
      }

      setCurrentText(texts[indexRef.current]);
      setIsFinalText(false);
    }, 2000);

    return () => clearInterval(interval);
  }, [hasStopped]);

  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.aboutTitle}>
        <h1>About me.</h1>
      </div>

      <div className={styles.heroSection__content}>
        <div className={styles.heroSectionContainer__finalText}>
          <h1>
            Hello! Call me{" "}
            <span
              key={currentText}
              className={isFinalText ? styles.finalText : styles.dynamicText}
            >
              {currentText}
            </span>
          </h1>

          <p>
            I&#39;m a self-taught programmer who&#39;s dedicated to learning and
            growing in technology like NextJS and React. I&#39;ve tackled
            various personal projects that showcase my ability to problem-solve
            and create innovative solutions. I&#39;m excited to take on my first
            professional role and bring my skills to a dynamic team and vanguard
            team.
          </p>
        </div>
        <div className={styles.heroSection__image}>
          <img src={profilePicture} alt="Profile photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
