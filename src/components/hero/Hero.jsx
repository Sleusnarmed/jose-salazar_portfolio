import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import styles from "./hero.module.css";
import { Suspense, useRef, useState } from "react";
import { Model } from "../ModeloOficina.tsx";

const CameraAnimator = ({ target, controlsRef }) => {
  const { camera } = useThree();
  const animationRef = useRef({
    startTime: null,
    startPos: new THREE.Vector3(),
    startTarget: new THREE.Vector3()
  });

  useFrame((state) => {
    if (!target || !controlsRef.current) return;

    const now = state.clock.getElapsedTime();
    const anim = animationRef.current;

    if (anim.startTime === null) {
      anim.startTime = now;
      anim.startPos.copy(camera.position);
      anim.startTarget.copy(controlsRef.current.target);
    }

    const duration = 1.5;
    const elapsed = now - anim.startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    const targetPos = new THREE.Vector3(...target.position);
    camera.position.lerpVectors(anim.startPos, targetPos, easedProgress);

    const targetLookAt = new THREE.Vector3(...target.target);
    const currentTarget = new THREE.Vector3();
    currentTarget.lerpVectors(anim.startTarget, targetLookAt, easedProgress);

    controlsRef.current.target.copy(currentTarget);
    controlsRef.current.update();

    if (progress >= 1) {
      animationRef.current.startTime = null;
    }
  });

  return null;
};

const HeroSection = () => {
  const [cameraTarget, setCameraTarget] = useState(null);
  const [mostrarOverlay, setMostrarOverlay] = useState(false);
  const controlsRef = useRef();

  const initialCamera = {
    position: [2, 2, 2],
    target: [0, 0, 0]
  };

  const handlePantallaClick = () => {
    const pantallaPosition = [0.15, -0.1, -0.55];

    const cameraPos = [
      pantallaPosition[0],
      pantallaPosition[1] + 0.15,
      pantallaPosition[2] + 0.45
    ];

    setCameraTarget({
      position: cameraPos,
      target: pantallaPosition
    });
    setMostrarOverlay(true);
  };

  const resetCamera = () => {
    setCameraTarget({
      position: initialCamera.position,
      target: initialCamera.target
    });
    setMostrarOverlay(false); 

    setTimeout(() => setCameraTarget(null), 600);
  };

  return (
    <div className={styles.modelContainer}>
      {cameraTarget && (
        <button 
          onClick={resetCamera}
          className={styles.zoomBackButton}
        >
          ← Volver a vista general
        </button>
      )}

      <Canvas 
        className={styles.canva} 
        shadows
        gl={{ antialias: true }}
        camera={{ position: initialCamera.position, fov: 35 }}
      >
        <Suspense fallback={null}>
          <Model 
            position={[0, -0.4, 0]}
            scale={0.5}
            onPantallaClick={handlePantallaClick}
          />
          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls 
          ref={controlsRef}
          enabled={!cameraTarget}  
        />

        <CameraAnimator 
          target={cameraTarget}
          controlsRef={controlsRef}
        />
      </Canvas>

      {mostrarOverlay && (
        <div className={styles.overlayContainer}>
          <div className={styles.profileCard}>
            <div className={styles.cardHeader}>
              <img 
                src="#" 
                alt="José Salazar" 
                className={styles.profileImage}
              />
              <h2 className={styles.profileName}>José Salazar</h2>
              <p className={styles.profileTitle}>Desarrollador Full Stack</p>
            </div>
            
            <div className={styles.cardBody}>
              <p className={styles.profileBio}>
                Especializado en React, Three.js y desarrollo web interactivo. 
                Creo experiencias 3D inmersivas para la web.
              </p>
              
              <div className={styles.skillsList}>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Three.js</span>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>Blender</span>
                <span className={styles.skillTag}>Node.js</span>
              </div>
            </div>
            
            <div className={styles.cardFooter}>
              <a 
                href="/proyectos" 
                className={styles.primaryButton}
                onClick={(e) => e.stopPropagation()}
              >
                Ver Proyectos
              </a>
              <a 
                href="/contacto" 
                className={styles.secondaryButton}
                onClick={(e) => e.stopPropagation()}
              >
                Contactar
              </a>
            </div>
            
            <button 
              className={styles.closeButton}
              onClick={resetCamera}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;