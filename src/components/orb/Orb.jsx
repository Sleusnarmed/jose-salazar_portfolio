// OrbCanvas.js
import { useEffect, useRef } from 'react';

const Orb = ({ totalParticles = 100, size = 400, animationTime = 20 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 3;

    // Configuración de las partículas
    for (let i = 0; i < totalParticles; i++) {
      const angle = (i / totalParticles) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const hue = (i / totalParticles) * 360;
      particles.push({ x, y, hue, angle });
    }

    // Animación de partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

      // Actualizamos las partículas
      particles.forEach((particle, index) => {
        const angleOffset = (Math.PI * 2) * (index / totalParticles);
        particle.angle += 0.01; // Velocidad de rotación

        const x = centerX + Math.cos(particle.angle + angleOffset) * radius;
        const y = centerY + Math.sin(particle.angle + angleOffset) * radius;

        // Establecer el color y dibujar la partícula
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${particle.hue}, 100%, 50%)`;
        ctx.fill();
      });

      requestAnimationFrame(animate); // Continuar animando
    };

    animate();

    // Ajustar el tamaño del canvas
    canvas.width = size;
    canvas.height = size;

    // Limpiar y comenzar animación
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar al desmontar
    };
  }, [size, totalParticles]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Orb;
