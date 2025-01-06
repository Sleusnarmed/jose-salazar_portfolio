/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

const Orb = ({
  totalParticles = 500,
  size = 500,
  particleSize = 2,
  rotationSpeed = 0.01,
}) => {
  const canvasRef = useRef(null);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 3; // Radio del orbe
    const particles = [];

    // Generar partículas en coordenadas esféricas
    for (let i = 0; i < totalParticles; i++) {
      const phi = Math.acos(2 * Math.random() - 1); // Ángulo vertical
      const theta = Math.random() * Math.PI * 2; // Ángulo horizontal
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      particles.push({ x, y, z });
    }

    let angleX = 0;
    let angleY = 0;

    const project = (x, y, z) => {
      const scale = size / (size + z);
      const projX = x * scale + centerX;
      const projY = y * scale + centerY;
      return { x: projX, y: projY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angleX += rotationSpeed;
      angleY += rotationSpeed;

      particles.forEach((particle) => {
        // Rotación en el eje Y
        const rotatedX =
          // x * cos(tetha) - z * sin(tetha)
          particle.x * Math.cos(angleY) - particle.z * Math.sin(angleY);
        const rotatedZ =
          // x * cos(tetha) + z * sin(tetha)
          particle.x * Math.sin(angleY) + particle.z * Math.cos(angleY);

        // Rotación en el eje X
        const rotatedY =
          // y * cos(tetha) - z * sin(tetha)
          particle.y * Math.cos(angleX) - rotatedZ * Math.sin(angleX);
        const finalZ =
          // y * cos(tetha) + z * sin(tetha)
          particle.y * Math.sin(angleX) + rotatedZ * Math.cos(angleX);

        // 3D a 2D
        const { x, y } = project(rotatedX, rotatedY, finalZ);

        ctx.beginPath();
        ctx.arc(x, y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${finalZ > 0 ? 0.8 : 0.4})`; // Se cambia la opacidad dependiendo de z
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [size, totalParticles, particleSize, rotationSpeed]);

  return <canvas ref={canvasRef} style={{ display: "block", margin: "0 auto" }} />;
};

export default Orb;
