import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ResumePortrait } from "@/pages/ResumePortrait";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const skills = [
  "Python · C++ · C# · Java",
  "PyTorch · TensorFlow · Keras",
  "Deep Learning & LLMs",
  "LLM Fine-Tuning & RAG",
  "Computer Vision & YOLO",
  "NLP & Transformers",
  "Data Engineering & ETL",
  "SQL Server · Oracle · Star Schema",
  "React · Flutter · Node.js",
  "FastAPI · Flask · Modal GPU",
  "Docker · Git · Firebase",
  "Unity · Power BI · Edge AI",
];

const keyProjects = [
  "MediLearn: VR & AI Medical Platform",
  "Ancient Hieroglyphs Translator (BLEU 62)",
  "AI Carotid Plaque U-Net++ SSL",
  "NetMob 2025 Paris — Dual Presenter",
  "IEEE ICCA 2024 Published Author",
];

const journeyRoles = [
  {
    title: "FULL-STACK ENGINEER",
    company: "ARTech – Cairo, Egypt",
    period: "Present (Full-Time)",
    featured: true,
  },
  {
    title: "IT INTERN",
    company: "Abu Dhabi Commercial Bank (ADCB) – Cairo, Egypt",
    period: "Aug 2025 – Sep 2025 (Full-Time)",
  },
  {
    title: "DATA ENGINEER INTERN",
    company: "Summit Technology Solutions – Cairo, Egypt",
    period: "Jul 2024 – Aug 2024 (Full-Time)",
  },
  {
    title: "JUNIOR TEACHER ASSISTANT",
    company: "Nile University – Giza, Egypt",
    period: "Feb 2023 – Jan 2026 (Part-Time)",
  },
  {
    title: "HEAD OF ACADEMICS",
    company: "Nile University Student Union (NUSU) – Giza, Egypt",
    period: "Nov 2024 – Nov 2025",
  },
  {
    title: "HEAD OF HR & CO-FOUNDER",
    company: "Microsoft Students Club (MSC-NU) – Giza, Egypt",
    period: "Sep 2025 – Mar 2026",
  },
  {
    title: "VICE PRESIDENT & HEAD OF HR",
    company: "Bena Art Club, Nile University – Giza, Egypt",
    period: "Jan 2024 – Nov 2024",
  },
];

const earlierRoles = [
  {
    title: "B.Sc. Artificial Intelligence",
    period: "Nile University · Sep 2022 – Jul 2026 (Graduated)",
  },
  {
    title: "Dean's Honor Award (3x)",
    period: "Spring 2024 · Spring 2025 · Fall 2025",
  },
];

/* ─── Scaled frame wrapper (measures its own container, works in any size) ─── */

function ScaledFrame({ children }: { children: (frameW: number) => React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dim, setDim] = useState({ scale: 1, frameW: 1680 });

  useEffect(() => {
    const update = (w: number, h: number) => {
      const scale = h / 1050;
      const frameW = Math.max(1680, w / scale);
      setDim({ scale, frameW });
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        update(width, height);
      }
    });

    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      update(width, height);
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse 130% 110% at 50% 30%, #4a4a4a 0%, #3a3a3a 25%, #2d2d2d 50%, #222222 72%, #181818 88%, #111111 100%)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        style={{
          width: dim.frameW,
          height: 1050,
          transform: `scale(${dim.scale})`,
          transformOrigin: "center center",
          position: "relative",
          flexShrink: 0,
          willChange: "transform",
        }}
      >
        {children(dim.frameW)}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   DESKTOP FRAME  —  Fluid responsive layout for all laptop screens
═══════════════════════════════════════════════════════════════════════ */

function DesktopFrame({ frameW }: { frameW: number }) {
  const centerX = frameW / 2;
  const leftX = 60;
  const rightX = frameW - 60;
  const skillsX = frameW - 480;

  return (
    <main
      className="relative overflow-hidden [font-family:'Inter',Helvetica]"
      style={{
        width: frameW,
        height: 1050,
        background: "transparent",
      }}
    >
      {/* ── Name + Title ── */}
      <h1
        className="absolute flex flex-col text-[80px] font-black leading-[0.98] tracking-[2px] text-[#6b6b6b]"
        style={{ left: leftX, top: 35 }}
      >
        <span>MOHANNED</span>
        <span className="mt-[2px]">MAHMOUD</span>
      </h1>
      <p
        className="absolute text-[18px] font-bold leading-[normal] tracking-[3px] text-white"
        style={{ left: leftX + 3, top: 215 }}
      >
        AI ENGINEER & RESEARCHER
      </p>

      {/* ── Education ── */}
      <section
        className="absolute"
        style={{ left: skillsX, top: 135, width: 420 }}
        aria-labelledby="edu-heading-d"
      >
        <h2
          id="edu-heading-d"
          className="text-[28px] font-bold leading-[normal] text-white"
        >
          EDUCATION
        </h2>
        <p className="mt-[7px] text-lg font-normal leading-[normal] text-[#cccccc]">
          B.Sc. Artificial Intelligence, Nile University (Dean's Honor ×3)
        </p>
      </section>


      {/* ── Portfolio Card ── */}
      <Card
        className="absolute overflow-hidden rounded-[14px] border border-white/10 bg-[#121216]/50 backdrop-blur-xl text-white shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-[#38bdf8]/30 transition-all duration-300"
        style={{ left: skillsX, top: 240, width: 420 }}
      >
        <CardContent className="flex items-center gap-4 px-5 py-5">
          <div className="flex h-12 min-w-12 items-center justify-center rounded-[9px] bg-[#0c0c0c] text-lg font-bold text-[#38bdf8] shrink-0">
            AI
          </div>
          <section aria-labelledby="portfolio-heading-d" className="flex flex-col gap-1">
            <h2
              id="portfolio-heading-d"
              className="text-[17px] font-bold leading-tight"
            >
              PORTFOLIO & LINKS
            </h2>
            <p className="text-[14px] font-normal text-[#bfbfbf]">
              GitHub & Research papers.
            </p>
          </section>
        </CardContent>
      </Card>

      {/* ── Spinning Text Ring: FULL-STACK ENGINEER (Behind Character) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: centerX - 220,
          top: 200,
          width: 440,
          height: 440,
          zIndex: 0,
          opacity: 0.5,
        }}
      >
        <div
          className="w-full h-full animate-spin"
          style={{
            animationDuration: "22s",
            transformOrigin: "center center",
          }}
        >
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <path
              id="circlePathD"
              d="M 250, 250 m -210, 0 a 210,210 0 1,1 420,0 a 210,210 0 1,1 -420,0"
              fill="none"
            />
            <text fill="#38bdf8" fontSize="28" fontWeight="800" letterSpacing="7.5px">
              <textPath href="#circlePathD" startOffset="0%">
                FULL-STACK ENGINEER • FULL-STACK ENGINEER • FULL-STACK ENGINEER •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* ── Mohamed Rady Character Cutout ── */}
      <figure
        className="absolute overflow-hidden pointer-events-none"
        style={{
          left: centerX - 310,
          top: 40,
          width: 620,
          height: 1010,
          zIndex: 1,
          opacity: 1,
        }}
      >
        <img
          src="/figmaAssets/mohamed-anime.png"
          alt="Mohanned Mahmoud"
          className="w-full h-full object-contain object-bottom"
          style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5)) brightness(1.03) contrast(1.05)" }}
        />
      </figure>

      {/* ── Blue studio light glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: centerX - 300,
          top: 250,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.07) 45%, transparent 75%)",
          zIndex: 1,
          mixBlendMode: "screen",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Squiggle Arrow ── */}
      <img
        className="absolute h-[155px] w-[155px]"
        style={{
          left: skillsX - 180,
          top: 120,
          filter: "drop-shadow(0 0 15px rgba(56,189,248,0.5))",
          transform: "scaleX(-1) rotate(-20deg)",
        }}
        alt=""
        aria-hidden="true"
        src="/figmaAssets/frame.svg"
      />

      {/* ── Skills Column ── */}
      <section
        className="absolute w-[260px]"
        style={{ left: skillsX, top: 358 }}
        aria-labelledby="skills-heading-d"
      >
        <h2
          id="skills-heading-d"
          className="text-[24px] font-bold leading-[normal] text-[#38bdf8]"
        >
          SKILLS
        </h2>
        <ul className="mt-2.5 list-none p-0 text-[16px] font-normal leading-[26px] text-[#cccccc]">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* ── Contact Card ── */}
      <Card
        className="absolute w-[260px] overflow-hidden rounded-[14px] border border-white/10 bg-[#121216]/50 backdrop-blur-xl text-white shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-[#38bdf8]/30 transition-all duration-300"
        style={{ left: skillsX, top: 722 }}
      >
        <CardContent className="flex flex-col gap-4 px-6 py-[22px]">
          <h2 className="text-[21px] font-bold leading-[normal]">
            <span className="text-[#38bdf8]">GET IN</span> TOUCH
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "Email", value: "m.mahmoud2203@nu.edu.eg" },
              { label: "Phone", value: "+20 102 256 6232" },
              { label: "Location", value: "Cairo, Egypt" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#38bdf8]">
                  {item.label}
                </span>
                <span className="text-[14px] font-normal text-[#cccccc] leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── About Card ── */}
      <Card
        className="absolute overflow-hidden rounded-2xl border border-white/10 bg-[#121216]/50 backdrop-blur-xl text-white shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-[#38bdf8]/30 transition-all duration-300"
        style={{ left: leftX, top: 250, width: 420 }}
      >
        <CardContent className="flex flex-col gap-5 px-8 py-7">
          {/* Heading */}
          <h2 className="text-[28px] font-bold leading-[normal]">
            <span className="text-[#38bdf8]">ABOUT</span> ME
          </h2>

          {/* Bio paragraph */}
          <p className="text-[16.5px] font-normal leading-[1.75] text-[#cccccc]">
            AI Engineering graduate from Nile University with deep expertise spanning
            Machine Learning, Deep Learning, NLP, Computer Vision, Data Engineering,
            and Full-Stack Development. Recognized three times with the Dean's Honor Award
            for academic excellence, and published IEEE-indexed research on urban mobility
            presented at NetMob 2025 in Paris.
          </p>
          <p className="text-[16.5px] font-normal leading-[1.75] text-[#cccccc]">
            Built and led the development of MediLearn — an award-winning VR/AI medical
            training platform — and contributed to cutting-edge projects in computer vision,
            large language model fine-tuning, and real-time data pipelines. Currently working
            as a Full-Stack Engineer at ARTech, bringing AI-driven ideas to production-grade
            web experiences.
          </p>

          {/* Achievement stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "3×", label: "Dean's Honor" },
              { value: "IEEE", label: "Published" },
              { value: "#1", label: "MediLearn VR/AI" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-xl bg-white/5 border border-white/[0.07] py-3 px-2 gap-1"
              >
                <span className="text-[22px] font-black text-[#38bdf8] leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#888] text-center leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </CardContent>
      </Card>
    </main>
  );
}

export const ResumeLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(
    () => window.innerWidth > window.innerHeight && window.innerWidth >= 640
  );

  useEffect(() => {
    const update = () => {
      setIsLandscape(
        window.innerWidth > window.innerHeight && window.innerWidth >= 640
      );
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  if (!isLandscape) {
    return <ResumePortrait />;
  }

  return (
    <ScaledFrame>
      {(frameW) => <DesktopFrame frameW={frameW} />}
    </ScaledFrame>
  );
};
