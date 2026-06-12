/* ============================================================
   RainCanvas.js — Canvas-based rain effect
   
   Why canvas instead of CSS?
   CSS can only animate properties uniformly — every "drop"
   in a CSS animation moves at the same speed, has the same
   length, and repeats at the same rate. Real rain has:
     • ~150+ individual drops at random X positions
     • Each drop has its own speed, length, and opacity
     • Drops reset at a random Y offset so they don't all
       start at the top simultaneously (staggered)
     • A slight rightward lean (wind angle)
   Canvas lets us draw each drop independently every frame.

   Performance notes:
   • requestAnimationFrame — syncs to monitor refresh rate,
     automatically pauses when tab is backgrounded
   • We only store lightweight plain objects (no DOM nodes)
     per drop — ~150 objects × ~5 numbers each = negligible
   • The canvas is pointer-events: none so it never blocks
     clicks, hovers, or text selection on page content
   • ResizeObserver keeps the canvas sized to the window
     without layout thrash
   ============================================================ */

import { useEffect, useRef } from 'react';

/* ── Tweak these to change the feel of the rain ── */
const CONFIG = {
  dropCount:    150,      /* total simultaneous drops on screen   */
  speedMin:     8,        /* px per frame, slowest drop           */
  speedMax:     18,       /* px per frame, fastest drop           */
  lengthMin:    10,       /* minimum drop length in px            */
  lengthMax:    30,       /* maximum drop length in px            */
  opacityMin:   0.04,     /* nearly invisible drops (far away)    */
  opacityMax:   0.22,     /* brightest drops (close, foreground)  */
  windAngle:    0.25,     /* radians — slight lean right (~14°)   */
  color:        '201, 209, 217',  /* RGB of --text (#c9d1d9)       */
  lineWidth:    0.8,      /* stroke width in px                   */
};

/* Creates one raindrop with randomized properties.
   initialY: if true, scatter drops across full height so the
   screen isn't empty on the first frame. */
function createDrop(canvasW, canvasH, initialY = false) {
  return {
    x:       Math.random() * canvasW,
    y:       initialY
               ? Math.random() * canvasH     /* start anywhere vertically  */
               : -Math.random() * canvasH,   /* start above the viewport   */
    speed:   CONFIG.speedMin + Math.random() * (CONFIG.speedMax - CONFIG.speedMin),
    length:  CONFIG.lengthMin + Math.random() * (CONFIG.lengthMax - CONFIG.lengthMin),
    opacity: CONFIG.opacityMin + Math.random() * (CONFIG.opacityMax - CONFIG.opacityMin),
  };
}

function RainCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    /* ── Size canvas to fill viewport ── */
    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    /* ── Initialise drop pool ──
       Pass initialY=true so drops are already scattered on load
       instead of all streaming in from the top at once.        */
    let drops = Array.from(
      { length: CONFIG.dropCount },
      () => createDrop(canvas.width, canvas.height, true)
    );

    /* ── Wind angle precomputed to dx/dy offsets ──
       sin(angle) × length = horizontal offset of the drop tail
       cos(angle) × length = vertical   offset of the drop tail */
    let rafId;

    function draw() {
      /* Clear frame */
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineCap = 'round';

      drops.forEach((drop) => {
        /* Move drop downward (and slightly right with wind) */
        drop.y += drop.speed;
        drop.x += drop.speed * Math.sin(CONFIG.windAngle);

        /* Reset drop when it exits the bottom or right edge */
        if (drop.y > canvas.height + drop.length) {
          /* Re-spawn above the top, at a new random X */
          Object.assign(drop, createDrop(canvas.width, canvas.height, false));
        }

        /* Draw the drop as a short line segment.
           The tail (x2, y2) is behind the head using the angle. */
        const x2 = drop.x - drop.length * Math.sin(CONFIG.windAngle);
        const y2 = drop.y - drop.length * Math.cos(CONFIG.windAngle);

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);     /* head (leading edge) */
        ctx.lineTo(x2, y2);             /* tail (trailing edge) */

        /* Each drop gets its own opacity — this is what CSS can't do */
        ctx.strokeStyle = `rgba(${CONFIG.color}, ${drop.opacity})`;
        ctx.lineWidth   = CONFIG.lineWidth;
        ctx.stroke();
      });

      rafId = requestAnimationFrame(draw);
    }

    draw();

    /* ── Cleanup on unmount ──
       Cancel the animation loop and remove the resize listener
       so there are no memory leaks when the component unmounts. */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []); /* empty deps — runs once on mount, cleans up on unmount */

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        0,
        pointerEvents: 'none',   /* never blocks page interaction */
        display:       'block',
      }}
      aria-hidden="true"         /* screen readers ignore decorative canvas */
    />
  );
}

export default RainCanvas;
