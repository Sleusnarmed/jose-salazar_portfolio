import { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import Orb from "@/components/orb/Orb.jsx";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("CodeCrafter");
  const [isFinalText, setIsFinalText] = useState(false);
  const [orbSize, setOrbSize] = useState(500); 
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

  useEffect(() => {
    const updateOrbSize = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setOrbSize(600); 
      } else if (width >= 1024) {
        setOrbSize(450); // Tamaño mediano para pantallas medianas
      } else {
        setOrbSize(400); // Tamaño aún más pequeño para pantallas muy pequeñas
      }
    };
    updateOrbSize();

    window.addEventListener("resize", updateOrbSize);

    return () => {
      window.removeEventListener("resize", updateOrbSize);
    };
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
            totalParticles={800}
            size={orbSize}
            rotationSpeed={0.009}
            particleSize={1.7}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
