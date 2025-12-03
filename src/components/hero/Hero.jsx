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
  };

  const resetCamera = () => {
    setCameraTarget({
      position: initialCamera.position,
      target: initialCamera.target
    });

    // Esto limpia el estado cuando llega al final
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
    </div>
  );
};


export default HeroSection;