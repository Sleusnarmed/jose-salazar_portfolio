import { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import Orb from "@/components/orb/Orb.jsx"; // Suponiendo que Orb es un componente ya implementado

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const texts = ["Innovador", "Curioso", "Detallista", "Resiliente", "Jose"];

  useEffect(() => {
    let index = 0;
    console.log(index)
    const interval = setInterval(() => {
      if (index < texts.length) {
        console.log(index)
        console.log(texts.length)
        setCurrentText(texts[index]);
        index++;
      } else {
        clearInterval(interval); // Detenemos el intervalo cuando llegamos a "Jose"
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroSectionContainer__text}>
        <h1>
          Hello! Call me{" "}
          <span className={styles.dynamicText}>{currentText}</span>
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
  );
};

export default HeroSection;
