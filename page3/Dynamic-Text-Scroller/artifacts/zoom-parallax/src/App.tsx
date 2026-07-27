import { useEffect, useRef, useMemo } from 'react';
import { useAnimationFrame } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const URLS = [
  'https://picsum.photos/id/10/700/700',
  'https://picsum.photos/id/20/700/700',
  'https://picsum.photos/id/30/700/700',
  'https://picsum.photos/id/40/700/700',
  'https://picsum.photos/id/50/700/700',
  'https://picsum.photos/id/60/700/700',
  'https://picsum.photos/id/70/700/700',
  'https://picsum.photos/id/80/700/700',
  'https://picsum.photos/id/90/700/700',
  'https://picsum.photos/id/100/700/700',
  'https://picsum.photos/id/110/700/700',
  'https://picsum.photos/id/120/700/700',
  'https://picsum.photos/id/130/700/700',
  'https://picsum.photos/id/140/700/700',
  'https://picsum.photos/id/150/700/700',
  'https://picsum.photos/id/160/700/700',
  'https://picsum.photos/id/170/700/700',
  'https://picsum.photos/id/180/700/700',
  'https://picsum.photos/id/190/700/700',
  'https://picsum.photos/id/200/700/700',
];
const NUM_IMAGES = 16;

interface Particle {
  z: number;
  x: number;
  y: number;
  urlIndex: number;
  rot: number;
  rotSpeed: number;
}

function randomXY(p: Particle) {
  // Spread across full screen space — large radius so projected positions cover the viewport
  const angle = Math.random() * Math.PI * 2;
  const radius = 0.15 + Math.random() * 0.45;
  p.x = radius * Math.cos(angle);
  p.y = radius * Math.sin(angle) * 0.65; // slightly squash Y for widescreen
  p.urlIndex = Math.floor(Math.random() * URLS.length);
  p.rot = Math.random() * 360;
  p.rotSpeed = (Math.random() - 0.5) * 0.25;
}

function Home() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: NUM_IMAGES }, (_, i) => {
      const p: Particle = {
        z: i / NUM_IMAGES, // evenly stagger depth so they're always spread in the tunnel
        x: 0,
        y: 0,
        urlIndex: i % URLS.length,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 0.25,
      };
      randomXY(p);
      return p;
    });
  }, []);

  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgElRefs = useRef<(HTMLImageElement | null)[]>([]);
  const lastScrollY = useRef(0);
  const currentMultiplier = useRef(1);
  const isInitialized = useRef(false);
  const scrollAccum = useRef(0);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const center = maxScroll / 2;
      window.scrollTo(0, center);
      lastScrollY.current = center;
      isInitialized.current = true;
    }, 80);
    return () => clearTimeout(initTimer);
  }, []);

  useAnimationFrame((_time, delta) => {
    if (!isInitialized.current) return;

    const scrollY = window.scrollY;
    const rawDelta = scrollY - lastScrollY.current;
    const deltaY = Math.abs(rawDelta);

    // Accumulate scroll delta virtually — never force scrollTo mid-frame
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    scrollAccum.current += rawDelta;
    lastScrollY.current = scrollY;

    // Silently re-center when near the edge (user won't notice the jump because position is virtual)
    if (scrollY <= 100 || scrollY >= maxScroll - 100) {
      const center = maxScroll / 2;
      window.scrollTo({ top: center, behavior: 'instant' });
      lastScrollY.current = center;
    }

    // Scroll velocity → speed multiplier
    const velocity = delta > 0 ? deltaY / delta : 0;
    const targetMultiplier = 1 + Math.min(velocity * 10, 30);
    const smoothing = targetMultiplier > currentMultiplier.current ? 0.12 : 0.018;
    const factor = 1 - Math.pow(1 - smoothing, delta / 16.66);
    currentMultiplier.current += (targetMultiplier - currentMultiplier.current) * factor;

    const baseSpeed = 0.0014;
    const step = baseSpeed * currentMultiplier.current * (delta / 16.66);

    particles.forEach((p, i) => {
      p.z += step;
      p.rot += p.rotSpeed * currentMultiplier.current * (delta / 16.66);

      if (p.z >= 1) {
        p.z = 0;
        randomXY(p);
        const imgEl = imgElRefs.current[i];
        if (imgEl) imgEl.src = URLS[p.urlIndex];
        return;
      }

      // 3D tunnel projection
      const distance = 1.1 - p.z;
      const scale = 0.2 / distance;

      const xPos = (p.x * window.innerWidth) / distance;
      const yPos = (p.y * window.innerHeight) / distance;

      // Fade in sharply at birth, fade out gently near camera
      let opacity = 1;
      if (p.z < 0.08) {
        opacity = p.z / 0.08;
      } else if (p.z > 0.65) {
        opacity = Math.max(0, (1 - p.z) / 0.35);
      }

      const wrapper = imgRefs.current[i];
      if (wrapper) {
        wrapper.style.transform = `translate(-50%, -50%) translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}) rotate(${p.rot}deg)`;
        wrapper.style.opacity = opacity.toFixed(3);
      }
    });
  });

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100dvh' }}>
      {/* Scroll surface */}
      <div style={{ height: '5000vh', width: '100%', backgroundColor: '#000' }} />

      {/* Preload images silently */}
      <div style={{ display: 'none' }}>
        {URLS.map((url, i) => <img key={i} src={url} alt="" />)}
      </div>

      {/* Vignette overlay — darkens edges so text always pops */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 10,
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Kinetic image tunnel layer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          overflow: 'hidden',
          backgroundColor: '#000',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {particles.map((p, i) => (
          <div
            key={i}
            ref={el => (imgRefs.current[i] = el)}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '420px',
              height: '420px',
              willChange: 'transform, opacity, filter',
              transform: 'translate(-50%, -50%)',
              opacity: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 60px rgba(0,0,0,0.6)',
            }}
          >
            <img
              ref={el => (imgElRefs.current[i] = el)}
              src={URLS[p.urlIndex]}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      {/* Static centered text */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 50,
        }}
      >
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(3rem, 7vw, 7.5rem)',
            fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            margin: 0,
            lineHeight: 1,
            textAlign: 'center',
            textTransform: 'uppercase',
            textShadow:
              '0 0 80px rgba(255,255,255,0.15), 0 4px 40px rgba(0,0,0,0.9)',
          }}
        >
          Our Clients
        </h1>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
