import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import styles from "./hero.module.css";
import { Suspense } from "react";
import { Model } from "../ModeloOficina.tsx";

const HeroSection = () => {
  return (
    <div className={styles.modelContainer}>
      <Canvas
        className={styles.canva}
        shadows
        gl={{ antialias: true }}
        camera={{ position: [2, 2, 2], fov: 35 }}
      >
        <Suspense fallback={null}>
          <Model position={[0, -0.4, 0]} scale={0.5} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={1.75}
          maxDistance={3}
        />
      </Canvas>
    </div>
  );
};

export default HeroSection;
