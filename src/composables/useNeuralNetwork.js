import { onMounted, onUnmounted } from "vue";

/**
 * useNeuralNetwork
 * Anima una red neuronal de partículas conectadas sobre un <canvas>
 * @param {Ref<HTMLCanvasElement>} canvasRef
 */
export function useNeuralNetwork(canvasRef) {
  let animId = null;
  let nodes = [];
  const COUNT = 55;
  const DIST = 150; // distancia máxima para conectar
  const SPEED = 0.35;

  const resize = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  const createNodes = () => {
    const canvas = canvasRef.value;
    nodes = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.8 + 0.8,
      pulse: Math.random() * Math.PI * 2, // fase inicial aleatoria
    }));
  };

  const draw = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Mover nodos
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += 0.02;

      // Rebotar en bordes
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

      // Pulso de brillo
      const alpha = 0.4 + Math.sin(n.pulse) * 0.25;

      // Dibujar conexiones
      nodes.forEach((m) => {
        if (m === n) return;
        const dx = n.x - m.x;
        const dy = n.y - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DIST) {
          const lineAlpha = (1 - dist / DIST) * 0.45;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(0, 85, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      // Dibujar nodo
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 127, 255, ${alpha})`;
      ctx.fill();

      // Halo suave
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 85, 255, ${alpha * 0.12})`;
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  };

  const handleResize = () => {
    resize();
    createNodes();
  };

  onMounted(() => {
    resize();
    createNodes();
    draw();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", handleResize);
  });
}
