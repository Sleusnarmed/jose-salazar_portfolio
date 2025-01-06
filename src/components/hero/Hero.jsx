import { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import Orb from "@/components/orb/Orb.jsx";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("CodeCrafter");
  const [isFinalText, setIsFinalText] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const texts = ["Dreamer", "Innovative", "Jose"];
    const interval = setInterval(() => {
      if (indexRef.current < texts.length - 1) {
        setCurrentText(texts[indexRef.current]);
        indexRef.current++;
      } else {
        setCurrentText(texts[indexRef.current]);
        setTimeout(() => {
          setIsFinalText(true);
        }, 2000);
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroSection__top}>
        <div
          className={
            isFinalText
              ? styles.heroSectionContainer__finalText
              : styles.heroSectionContainer__text
          }
        >
          <h1>
            Hello! Call me{" "}
            <span
              key={currentText}
              className={isFinalText ? styles.finalText : styles.dynamicText}
            >
              {currentText}
            </span>
            {isFinalText && (
              <p>
                I&#39;m a self-taught programmer who&#39;s dedicated to learning
                and growing in technology like NextJS and React. I&#39;ve
                tackled various personal projects that showcase my ability to
                problem-solve and create innovative solutions. I&#39;m excited
                to take on my first professional role and bring my skills to a
                dynamic team and vanguard team.
              </p>
            )}
          </h1>
        </div>
        <div className={styles.heroSectionContainer__particleOrb}>
          <Orb
            totalParticles={700}
            size={400}
            rotationSpeed={0.01}
            particleSize={1.5}
          />
        </div>
      </div>
      <div className={styles.heroSection__arrowDown}>
        <div className={styles.hola}>▽hola</div>
      </div>
    </div>
  );
};

export default HeroSection;
