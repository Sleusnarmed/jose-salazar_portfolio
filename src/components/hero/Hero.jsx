import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import modeloUrl from '@/assets/3d-models/oficina_setup.glb';

function Modelo3D() {
  const { scene } = useGLTF(modeloUrl);
  // Escala y posiciona según necesites
  return <primitive object={scene} position={[0, -1, 0]} scale={0.5} />;
}

const HeroSection = () => {
  return (
    <div style={{ width: '100vw', height: '50vh' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Modelo3D />
          <Environment preset="city" />

        
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  );
};
// Precarga el modelo para mejor rendimiento
useGLTF.preload(modeloUrl);

export default HeroSection;