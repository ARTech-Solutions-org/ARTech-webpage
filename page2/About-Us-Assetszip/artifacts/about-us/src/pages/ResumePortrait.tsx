/* ═══════════════════════════════════════════════════════════════════════
   MOBILE FRAME  —  Figma "Resume - Portrait"  (node 10:3)
   Responsive: all values in vw proportional to 1200px canvas width.
   Y-values compressed ×0.87 vs Figma to tighten vertical spacing.
   Total canvas height: 1565px → v(1565) = 130.4vw.
═══════════════════════════════════════════════════════════════════════ */

/** px → vw based on 1200px canvas width (1px = 1/12 vw) */
const v = (px: number) => `${(px / 12).toFixed(3)}vw`;

/* ── Data ─────────────────────────────────────────────────────────────── */

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
  { title: "B.Sc. Artificial Intelligence", period: "Nile University · Sep 2022 – Jul 2026" },
  { title: "Dean's Honor Award (3x)", period: "Spring 2024 · Spring 2025 · Fall 2025" },
];

/* ── Component ─────────────────────────────────────────────────────────── */

export function ResumePortrait() {
  return (
    /* Outer: studio dark charcoal gradient matching the photo background */
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        overflowY: "auto",
        background:
          "radial-gradient(ellipse 110% 75% at 50% 30%, #4a4a4a 0%, #3a3a3a 25%, #2d2d2d 50%, #222222 72%, #181818 88%, #111111 100%)",
      }}
    >
      {/* Inner: canvas fills at least full viewport height; taller when content demands it */}
      <main
        className="[font-family:'Inter',Helvetica]"
        style={{ position: "relative", width: "100vw", height: "max(180vw, 100vh)", overflow: "hidden" }}
      >

        {/* ── Spinning Text Ring: FULL-STACK ENGINEER (Behind Character) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            top: v(610),
            transform: "translateX(-50%)",
            width: v(580),
            height: v(580),
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
                id="circlePathP"
                d="M 250, 250 m -210, 0 a 210,210 0 1,1 420,0 a 210,210 0 1,1 -420,0"
                fill="none"
              />
              <text fill="#38bdf8" fontSize="28" fontWeight="800" letterSpacing="7.5px">
              <textPath href="#circlePathP" startOffset="0%">
                FULL-STACK ENGINEER • FULL-STACK ENGINEER • FULL-STACK ENGINEER • 
              </textPath>
            </text>
            </svg>
          </div>
        </div>

        {/* ── Mohamed Rady Studio Portrait (Character Cutout) ─────────────── */}
        <figure
          aria-label="Mohanned Mahmoud Portrait"
          className="absolute m-0 overflow-hidden"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            top: v(550),
            width: v(1600),
            height: v(1800),
            pointerEvents: "none",
            zIndex: 1,
            opacity: 1,
          }}
        >
          <img
            src="/figmaAssets/mohamed-anime.png"
            alt="Mohanned Mahmoud"
            className="w-full h-full object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5)) brightness(1.03) contrast(1.05)",
            }}
          />
        </figure>

        {/* ── Semi-Transparent Blue Studio Light Overlay (Shifted Down) ──── */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            top: v(780),
            transform: "translateX(-50%)",
            width: v(1500),
            height: v(1500),
            background:
              "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.07) 40%, rgba(0,0,0,0) 75%)",
            zIndex: 1,
            mixBlendMode: "screen",
            filter: "blur(35px)",
            opacity: 0.8,
          }}
        />

        {/* ── Bottom Ambient Shadow Gradient ─────────────────────────────── */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none w-full"
          style={{
            bottom: 0,
            height: v(450),
            background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(15,15,15,0.6) 50%, rgba(15,15,15,0) 100%)",
            zIndex: 1,
          }}
        />

        {/* ── Squiggle Arrow (Inline Electric Blue React SVG) ───────────── */}
        <svg
          width="119" height="119" viewBox="0 0 119 119" fill="none"
          className="absolute m-0"
          style={{
            left: v(740), top: v(520), width: v(190), height: v(190), zIndex: 2,
            transform: "rotate(70deg)",
            filter: "drop-shadow(0 0 25px rgba(56,189,248,0.85)) drop-shadow(0 10px 20px rgba(0,0,0,0.7))",
          }}
          aria-hidden="true"
        >
          <path d="M9.2966 41.1521C20.0337 35.7426 26.8297 60.3655 42.0405 52.702C57.2513 45.0386 41.5078 24.9236 55.8239 17.711C66.5609 12.3015 83.2675 54.3686 76.1436 69.1765L68.5826 87.5702" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M52.6666 93.1667L68.5333 109.033L81.7555 90.5222" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* ── Name ───────────────────────────────────────────────────────── */}
        <h1
          className="absolute font-black text-[#6b6b6b] leading-[0.9] m-0 p-0"
          style={{ left: v(40), top: v(65), fontSize: v(140), letterSpacing: v(2), zIndex: 2 }}
        >
          <span className="block">MOHANNED</span>
          <span className="block">MAHMOUD</span>
        </h1>

        {/* ── Senior Art Director ────────────────────────────────────────── */}
        <p
          className="absolute font-bold text-white leading-[normal] m-0 whitespace-nowrap"
          style={{ left: v(45), top: v(450), fontSize: v(24), letterSpacing: v(3), zIndex: 2 }}
        >
          AI ENGINEER & RESEARCHER
        </p>

        {/* ── Education ──────────────────────────────────────────────────── */}
        <section
          aria-labelledby="edu-m"
          className="absolute"
          style={{ left: v(755), top: v(380), width: v(340), zIndex: 2 }}
        >
          <h2
            id="edu-m"
            className="font-bold text-white leading-[normal] m-0 whitespace-nowrap"
            style={{ fontSize: v(27) }}
          >
            EDUCATION
          </h2>
          <p
            className="font-normal text-[#cccccc] m-0"
            style={{ fontSize: v(17), lineHeight: 1.35, marginTop: v(9) }}
          >
            B.Sc. Artificial Intelligence, Nile University (Dean's Honor ×3)
          </p>
        </section>

        {/* ── Skills Column (right-aligned) ──────────────────────────────── */}
        <section
          aria-labelledby="skills-m"
          className="absolute text-right"
          style={{ left: v(875), top: v(570), width: v(280), zIndex: 2 }}
        >
          <h2
            id="skills-m"
            className="font-bold text-[#38bdf8] leading-[normal] m-0"
            style={{ fontSize: v(22) }}
          >
            SKILLS
          </h2>
          <ul
            className="list-none p-0 m-0 font-normal text-[#cccccc]"
            style={{ fontSize: v(15), lineHeight: 1.65, marginTop: v(8) }}
          >
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        {/* ── Creative DNA Card ──────────────────────────────────────────── */}
        <div
          className="absolute rounded-[1.167vw] overflow-hidden"
          style={{
            left: v(40), top: v(560), width: v(420),
            background: "rgba(18, 18, 22, 0.45)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            padding: v(30),
            display: "flex", flexDirection: "column", gap: v(16),
            zIndex: 2,
            boxShadow: "0 12px 40px 0 rgba(0,0,0,0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          <h2 className="font-bold text-white leading-[normal] m-0" style={{ fontSize: v(25) }}>
            ENGINEERING DNA
          </h2>
          <p className="font-bold text-[#d9d9d9] m-0" style={{ fontSize: v(18), lineHeight: 1.5 }}>
            <span className="text-[#38bdf8]">3x</span> Dean's Honor.<br />
            <span className="text-[#38bdf8]">IEEE</span> Published.<br />
            <span className="text-[#38bdf8]">#1</span> MediLearn VR/AI.
          </p>
          <p className="font-normal text-[#bfbfbf] m-0" style={{ fontSize: v(16), lineHeight: 1.45 }}>
            AI Engineering student at Nile University with expertise in ML/DL, NLP,
            Computer Vision, Data Engineering, and Full-Stack Development.
            Built award-winning VR/AI platforms and published IEEE urban mobility research.
          </p>
        </div>

        {/* ── Portfolio Card ─────────────────────────────────────────────── */}
        <div
          className="absolute rounded-[1.167vw] overflow-hidden flex items-center"
          style={{
            left: v(40), top: v(940),
            background: "rgba(18, 18, 22, 0.45)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            paddingLeft: v(22), paddingRight: v(26), paddingTop: v(20), paddingBottom: v(20),
            gap: v(20),
            zIndex: 2,
            boxShadow: "0 12px 40px 0 rgba(0,0,0,0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          <div
            className="flex items-center justify-center font-bold text-[#38bdf8] shrink-0"
            style={{ width: v(60), height: v(60), background: "#0d0d0d", fontSize: v(26), borderRadius: v(10) }}
          >
            AI
          </div>
          <div className="flex flex-col items-start" style={{ gap: v(4) }}>
            <h2 className="font-bold text-white leading-[normal] whitespace-nowrap m-0" style={{ fontSize: v(21) }}>
              PORTFOLIO & LINKS
            </h2>
            <p className="font-normal text-[#bfbfbf] leading-[normal] whitespace-nowrap m-0" style={{ fontSize: v(15) }}>
              GitHub & Research papers.
            </p>
            <a
              href="mailto:m.mahmoud2203@nu.edu.eg"
              target="_blank" rel="noopener noreferrer"
              className="font-normal text-[#999999] underline leading-[normal] whitespace-nowrap"
              style={{ fontSize: v(13.5) }}
            >
              m.mahmoud2203@nu.edu.eg
            </a>
          </div>
        </div>

        {/* ── Key Projects Card ──────────────────────────────────────────── */}
        <div
          className="absolute rounded-[1.167vw] overflow-hidden"
          style={{
            left: v(40), top: v(1100), width: v(420),
            background: "rgba(18, 18, 22, 0.45)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            paddingLeft: v(28), paddingRight: v(28), paddingTop: v(26), paddingBottom: v(26),
            display: "flex", flexDirection: "column", gap: v(18),
            zIndex: 2,
            boxShadow: "0 12px 40px 0 rgba(0,0,0,0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          <h2 className="font-bold m-0" style={{ fontSize: v(23) }}>
            <span className="text-[#38bdf8]">KEY</span>
            <span className="text-white"> PROJECTS</span>
          </h2>
          <ul className="list-none p-0 m-0 font-semibold text-[#cccccc]" style={{ fontSize: v(15), lineHeight: 1.6 }}>
            {keyProjects.map((proj) => <li key={proj}>{proj}</li>)}
          </ul>
        </div>

        {/* ── Creative Journey Card ──────────────────────────────────────── */}
        <div
          className="absolute rounded-[1.167vw] overflow-hidden"
          style={{
            left: v(657), top: v(1040), width: v(500),
            background: "rgba(18, 18, 22, 0.45)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            paddingLeft: v(34), paddingRight: v(34), paddingTop: v(30), paddingBottom: v(30),
            display: "flex", flexDirection: "column", gap: v(14),
            zIndex: 2,
            boxShadow: "0 12px 40px 0 rgba(0,0,0,0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          <h2 className="font-bold text-white leading-[normal] m-0" style={{ fontSize: v(26) }}>
            EXPERIENCE & LEADERSHIP
          </h2>

          {journeyRoles.map((role) => (
            <article
              key={`${role.title}-${role.company}`}
              className="flex flex-col"
              style={{ gap: v(3) }}
            >
              <h3
                className={`font-bold leading-[normal] m-0 ${role.featured ? "text-[#38bdf8]" : "text-white"}`}
                style={{ fontSize: v(16) }}
              >
                {role.title}
              </h3>
              <p className="font-medium text-[#ebebeb] leading-[normal] m-0" style={{ fontSize: v(15.5) }}>
                {role.company}
              </p>
              <p className="font-normal text-[#999999] leading-[normal] m-0" style={{ fontSize: v(13) }}>
                {role.period}
              </p>
            </article>
          ))}

          {earlierRoles.map((role) => (
            <article key={role.title} className="flex items-center" style={{ gap: v(9) }}>
              <span
                className="shrink-0 bg-[#38bdf8]"
                style={{ width: v(8), height: v(8), borderRadius: v(3), flexShrink: 0 }}
                aria-hidden="true"
              />
              <div className="flex flex-col" style={{ gap: v(2) }}>
                <h3 className="font-bold text-white leading-[normal] m-0 whitespace-nowrap" style={{ fontSize: v(15) }}>
                  {role.title}
                </h3>
                <p className="font-normal text-[#999999] leading-[normal] m-0 whitespace-nowrap" style={{ fontSize: v(12.5) }}>
                  {role.period}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Contact Info — pinned near canvas bottom ────────────────────── */}
        <address
          className="absolute not-italic font-normal text-[#d9d9d9]"
          style={{ left: v(45), bottom: v(36), fontSize: v(20), zIndex: 2 }}
        >
          <a href="mailto:m.mahmoud2203@nu.edu.eg" className="block text-[#d9d9d9] no-underline hover:text-white transition-colors">
            m.mahmoud2203@nu.edu.eg
          </a>
          <a href="tel:+201022566232" className="block text-[#d9d9d9] no-underline hover:text-white transition-colors" style={{ marginTop: v(10) }}>
            +20 102 256 6232
          </a>
          <span className="block" style={{ marginTop: v(10) }}>Cairo, Egypt</span>
        </address>

      </main>
    </div>
  );
}
