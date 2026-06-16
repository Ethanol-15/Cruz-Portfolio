/* ============================================================
   CircuitCanvas.js — Drifting circuit node background

   What it draws:
   • ~55 nodes drifting slowly in random directions
   • When two nodes come within CONNECTION_DIST of each other,
     a line is drawn between them — fading out as they get farther
   • Lines route as L-shaped PCB traces (horizontal then vertical)
     rather than straight diagonals — gives it the circuit board feel
   • Nodes occasionally pulse (expand + fade) to mimic signal activity
   • Everything is very low opacity — subtle, not distracting

   Performance:
   • requestAnimationFrame — pauses when tab is backgrounded
   • Nodes are plain objects, no DOM elements
   • O(n²) connection check is fine at n=55 (~1500 pairs)
   • Canvas resizes with the window via ResizeObserver
   ============================================================ */

import { useEffect, useRef } from 'react';

/* ── Tweak these to adjust the feel ── */
const CONFIG = {
  nodeCount:       55,      /* total nodes on screen              */
  speedMin:        0.12,    /* px per frame, slowest node         */
  speedMax:        0.38,    /* px per frame, fastest node         */
  nodeRadius:      1.8,     /* base dot size in px                */
  nodeOpacity:     0.35,    /* dot opacity                        */
  connectionDist:  160,     /* px — max distance to draw a line   */
  lineOpacityMax:  0.12,    /* line opacity when nodes are close  */
  color:           '201, 209, 217',  /* matches --text #c9d1d9    */
  accentColor:     '248, 81, 73',    /* matches --red #f85149      */
  pulseChance:     0.0008,  /* probability per frame a node pulses*/
  pulseRadius:     6,       /* max expanded radius during pulse   */
  pulseDuration:   60,      /* frames a pulse lasts               */
};

function createNode(w, h) {
  const angle = Math.random() * Math.PI * 2;
  const speed = CONFIG.speedMin + Math.random() * (CONFIG.speedMax - CONFIG.speedMin);
  return {
    x:        Math.random() * w,
    y:        Math.random() * h,
    vx:       Math.cos(angle) * speed,
    vy:       Math.sin(angle) * speed,
    /* accent: ~15% of nodes are red-tinted for visual interest */
    accent:   Math.random() < 0.15,
    /* pulse state */
    pulsing:  false,
    pulseAge: 0,
  };
}

function CircuitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let nodes = Array.from(
      { length: CONFIG.nodeCount },
      () => createNode(canvas.width, canvas.height)
    );

    let rafId;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      /* ── Update + draw nodes ── */
      nodes.forEach((node) => {
        /* Move */
        node.x += node.vx;
        node.y += node.vy;

        /* Bounce off edges so nodes stay on screen forever */
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));

        /* Random pulse trigger */
        if (!node.pulsing && Math.random() < CONFIG.pulseChance) {
          node.pulsing  = true;
          node.pulseAge = 0;
        }

        /* Advance pulse */
        if (node.pulsing) {
          node.pulseAge++;
          if (node.pulseAge >= CONFIG.pulseDuration) {
            node.pulsing  = false;
            node.pulseAge = 0;
          }
        }

        /* Draw dot */
        const col = node.accent
          ? CONFIG.accentColor
          : CONFIG.color;

        /* Pulse ring — expands and fades out */
        if (node.pulsing) {
          const progress = node.pulseAge / CONFIG.pulseDuration;
          const ringR    = CONFIG.nodeRadius + progress * CONFIG.pulseRadius;
          const ringAlpha = (1 - progress) * 0.25;
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${col}, ${ringAlpha})`;
          ctx.lineWidth   = 0.8;
          ctx.stroke();
        }

        /* Core dot */
        ctx.beginPath();
        ctx.arc(node.x, node.y, CONFIG.nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col}, ${CONFIG.nodeOpacity})`;
        ctx.fill();
      });

      /* ── Draw PCB-style L-shaped connections ── */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx   = b.x - a.x;
          const dy   = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > CONFIG.connectionDist) continue;

          /* Opacity fades as nodes drift apart */
          const alpha = (1 - dist / CONFIG.connectionDist) * CONFIG.lineOpacityMax;

          /* Use accent color if either node is an accent node */
          const lineCol = (a.accent || b.accent)
            ? CONFIG.accentColor
            : CONFIG.color;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${lineCol}, ${alpha})`;
          ctx.lineWidth   = 0.6;

          /* L-shaped PCB trace:
             go horizontal from a to the midpoint X,
             then vertical to b.
             The "elbow" is at (b.x, a.y) — horizontal first. */
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, a.y);   /* horizontal segment */
          ctx.lineTo(b.x, b.y);   /* vertical segment   */
          ctx.stroke();

          /* Small square junction dot at the elbow corner —
             mimics a PCB solder pad */
          ctx.fillStyle = `rgba(${lineCol}, ${alpha * 1.8})`;
          ctx.fillRect(b.x - 1, a.y - 1, 2, 2);
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        0,
        pointerEvents: 'none',
        display:       'block',
      }}
      aria-hidden="true"
    />
  );
}

export default CircuitCanvas;
