import { useState, useEffect } from "react";
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
    period: "Nile University · Sep 2022 – Jul 2026",
  },
  {
    title: "Dean's Honor Award (3x)",
    period: "Spring 2024 · Spring 2025 · Fall 2025",
  },
];

/* ─── Scaled frame wrapper (Fluid responsive fit for any laptop display) ─── */

function ScaledFrame({ children }: { children: (frameW: number) => React.ReactNode }) {
  const [dim, setDim] = useState({ scale: 1, frameW: 1680 });

  useEffect(() => {
    const update = () => {
      const scale = window.innerHeight / 1050;
      const frameW = Math.max(1680, window.innerWidth / scale);
      setDim({ scale, frameW });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
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
  const rightX = frameW - 480;
  const skillsX = Math.min(rightX - 275, Math.max(centerX + 110, frameW - 750));

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
        className="absolute flex flex-col text-[96px] font-black leading-[0.98] tracking-[2px] text-[#6b6b6b]"
        style={{ left: leftX, top: 35 }}
      >
        <span>MOHANNED</span>
        <span className="mt-[2px]">MAHMOUD</span>
      </h1>
      <p
        className="absolute text-[20px] font-bold leading-[normal] tracking-[3px] text-white"
        style={{ left: leftX + 3, top: 245 }}
      >
        AI ENGINEER & RESEARCHER
      </p>

      {/* ── Education + Contact ── */}
      <section
        className="absolute"
        style={{ left: skillsX, top: 45, width: 420 }}
        aria-labelledby="edu-heading-d"
      >
        <h2
          id="edu-heading-d"
          className="text-[26px] font-bold leading-[normal] text-white"
        >
          EDUCATION
        </h2>
        <p className="mt-[7px] text-base font-normal leading-[normal] text-[#cccccc]">
          B.Sc. Artificial Intelligence, Nile University (Dean's Honor ×3)
        </p>
        <address className="mt-[47px] not-italic text-[15px] font-normal leading-[normal] text-[#d9d9d9]">
          <p>m.mahmoud2203@nu.edu.eg</p>
          <p className="mt-[12px]">+20 102 256 6232</p>
          <p className="mt-[12px]">Cairo, Egypt</p>
        </address>
      </section>

      {/* ── Creative DNA Card ── */}
      <Card
        className="absolute overflow-hidden rounded-[14px] border border-white/10 bg-[#121216]/50 backdrop-blur-xl text-white shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-[#38bdf8]/30 transition-all duration-300"
        style={{ left: leftX, top: 310, width: 420 }}
      >
        <CardContent className="flex flex-col gap-3.5 p-7">
          <h2 className="text-2xl font-bold leading-[normal]">ENGINEERING DNA</h2>
          <p className="text-[17px] font-bold leading-[25.5px]">
            <span className="text-[#38bdf8]">3x</span>
            <span className="text-[#d9d9d9]"> Dean's Honor.</span>
            <br />
            <span className="text-[#38bdf8]">IEEE</span>
            <span className="text-[#d9d9d9]"> Published.</span>
            <br />
            <span className="text-[#38bdf8]">#1</span>
            <span className="text-[#d9d9d9]"> MediLearn VR/AI.</span>
          </p>
          <p className="text-[15px] font-normal leading-[21.8px] text-[#bfbfbf]">
            AI Engineering student at Nile University with expertise in ML/DL, NLP,
            Computer Vision, Data Engineering, and Full-Stack Development.
            Built award-winning VR/AI platforms and published IEEE urban mobility research.
          </p>
        </CardContent>
      </Card>

      {/* ── Portfolio Card ── */}
      <Card
        className="absolute overflow-hidden rounded-[14px] border border-white/10 bg-[#121216]/50 backdrop-blur-xl text-white shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-[#38bdf8]/30 transition-all duration-300"
        style={{ left: leftX, top: 635, width: 420 }}
      >
        <CardContent className="flex items-center gap-[18px] px-6 py-[18px] pl-5">
          <div className="flex h-14 min-w-14 items-center justify-center rounded-[10px] bg-[#0c0c0c] text-2xl font-bold text-[#38bdf8]">
            AI
          </div>
          <section
            aria-labelledby="portfolio-heading-d"
            className="flex flex-col items-start gap-1"
          >
            <h2
              id="portfolio-heading-d"
              className="text-xl font-bold leading-[normal]"
            >
              PORTFOLIO & LINKS
            </h2>
            <p className="text-sm font-normal leading-[normal] text-[#bfbfbf]">
              GitHub & Research papers.
            </p>
            <a
              href="mailto:m.mahmoud2203@nu.edu.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-normal leading-[normal] text-[#999999] underline"
            >
              m.mahmoud2203@nu.edu.eg
            </a>
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
          top: 10,
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
        style={{ left: skillsX, top: 300 }}
        aria-labelledby="skills-heading-d"
      >
        <h2
          id="skills-heading-d"
          className="text-[22px] font-bold leading-[normal] text-[#38bdf8]"
        >
          SKILLS
        </h2>
        <ul className="mt-2.5 list-none p-0 text-[15px] font-normal leading-[24.8px] text-[#cccccc]">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* ── Key Projects Card ── */}
      <Card
        className="absolute w-[260px] overflow-hidden rounded-[14px] border border-white/10 bg-[#121216]/50 backdrop-blur-xl text-white shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-[#38bdf8]/30 transition-all duration-300"
        style={{ left: skillsX, top: 720 }}
      >
        <CardContent className="flex flex-col gap-3.5 px-6 py-[22px]">
          <h2 className="text-[19px] font-bold leading-[normal]">
            <span className="text-[#38bdf8]">KEY</span> PROJECTS
          </h2>
          <ul className="list-none p-0 text-[13.5px] font-normal leading-[22.9px] text-[#c6c6c6]">
            {keyProjects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ── Experience & Leadership Card ── */}
      <Card
        className="absolute overflow-hidden rounded-2xl border border-white/10 bg-[#121216]/50 backdrop-blur-xl text-white shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-[#38bdf8]/30 transition-all duration-300"
        style={{ left: rightX, top: 200, width: 420 }}
      >
        <CardContent className="flex flex-col gap-4 px-8 py-7">
          <h2 className="text-[26px] font-bold leading-[normal]">
            EXPERIENCE & LEADERSHIP
          </h2>
          {journeyRoles.map((role) => (
            <article
              key={`${role.title}-${role.company}`}
              className="flex flex-col gap-[3px]"
            >
              <h3
                className={`text-base font-bold leading-[normal] ${role.featured ? "text-[#38bdf8]" : "text-white"}`}
              >
                {role.title}
              </h3>
              <p className="text-[15.5px] font-medium leading-[normal] text-[#eaeaea]">
                {role.company}
              </p>
              <p className="text-[13px] font-normal leading-[normal] text-[#999999]">
                {role.period}
              </p>
            </article>
          ))}
          {earlierRoles.map((role) => (
            <article key={role.title} className="flex items-center gap-2">
              <span
                className="h-[7px] w-[7px] shrink-0 rounded-[3.5px] bg-[#38bdf8]"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-0.5">
                <h3 className="text-[15px] font-bold leading-[normal] text-white">
                  {role.title}
                </h3>
                <p className="whitespace-nowrap text-[12.5px] font-normal leading-[normal] text-[#999999]">
                  {role.period}
                </p>
              </div>
            </article>
          ))}
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
