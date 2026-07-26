export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  type: string;
  current: boolean;
}

export interface Employee {
  id: number;
  name: string;
  title: string;
  cardTitle?: string;
  initials: string;
  avatar?: string;
  bioStats: string[];
  bioText: string;
  education: string;
  skills: string[];
  portfolioLink: string;
  clients: string[];
  experience: Experience[];
  email: string;
  phone: string;
  location: string;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "Mohanned Mahmoud",
    title: "AI Engineer & Researcher",
    cardTitle: "Full-Stack Engineer",
    initials: "MM",
    avatar: "/figmaAssets/mohamed-anime.png",
    bioStats: [
      "3x Dean's Honor.",
      "IEEE Published.",
      "#1 MediLearn VR/AI."
    ],
    bioText: "AI Engineering student at Nile University with expertise in ML/DL, NLP, Computer Vision, Data Engineering, and Full-Stack Development. Built award-winning VR/AI platforms and published IEEE urban mobility research.",
    education: "B.Sc. Artificial Intelligence, Nile University (Dean's Honor ×3).",
    skills: [
      "Python · C++",
      "PyTorch · TensorFlow",
      "Deep Learning & LLMs",
      "LLM Fine-Tuning & RAG",
      "Computer Vision & YOLO",
      "NLP & Transformers",
      "Data Engineering & ETL",
      "React · Node.js · FastAPI",
      "Docker · Git · Firebase"
    ],
    portfolioLink: "/resume/mohanned-mahmoud",
    clients: ["MediLearn", "IEEE ICCA", "NetMob 2025 Paris", "Nile University", "ADCB", "Summit Tech"],
    experience: [
      {
        role: "Full-Stack Engineer",
        company: "ARTech",
        location: "Cairo, Egypt",
        dates: "Present",
        type: "Full-time",
        current: true
      },
      {
        role: "IT Intern",
        company: "Abu Dhabi Commercial Bank (ADCB)",
        location: "Cairo, Egypt",
        dates: "Aug 2025 — Sep 2025",
        type: "Full-time",
        current: false
      },
      {
        role: "Data Engineer Intern",
        company: "Summit Technology Solutions",
        location: "Cairo, Egypt",
        dates: "Jul 2024 — Aug 2024",
        type: "Full-time",
        current: false
      },
      {
        role: "Junior Teacher Assistant",
        company: "Nile University",
        location: "Giza, Egypt",
        dates: "Feb 2023 — Jan 2026",
        type: "Part-time",
        current: false
      }
    ],
    email: "m.mahmoud2203@nu.edu.eg",
    phone: "+20 102 256 6232",
    location: "Cairo, Egypt"
  },
  {
    id: 2,
    name: "Elena Rostova",
    title: "Creative Director",
    initials: "ER",
    bioStats: [
      "300+ Projects.",
      "15+ Years.",
      "Relentless pursuit of perfection."
    ],
    bioText: "Leading the creative vision for global campaigns. I bridge the gap between high-level strategy and visceral, heart-stopping execution. Every frame needs a pulse.",
    education: "MFA in Design, Central Saint Martins. Focus on Design Theory and Global Brand Strategy.",
    skills: [
      "Creative Direction",
      "Brand Strategy",
      "Film Direction",
      "Team Leadership",
      "Pitching & Strategy",
      "Global Campaigns"
    ],
    portfolioLink: "https://www.behance.net/elenarostova",
    clients: ["Gucci", "Chanel", "Vogue", "LVMH", "Balenciaga", "Prada"],
    experience: [
      {
        role: "Creative Director",
        company: "APEX Studio",
        location: "New York, USA",
        dates: "2019 — Present",
        type: "Full-time",
        current: true
      },
      {
        role: "Associate Creative Director",
        company: "Wieden+Kennedy",
        location: "London, UK",
        dates: "2015 — 2019",
        type: "Full-time",
        current: false
      },
      {
        role: "Senior Art Director",
        company: "Droga5",
        location: "London, UK",
        dates: "2010 — 2015",
        type: "Full-time",
        current: false
      }
    ],
    email: "elena@apexstudio.com",
    phone: "+1 (555) 012-3457",
    location: "New York City, USA"
  },
  {
    id: 3,
    name: "Julian Vance",
    title: "Motion Designer",
    initials: "JV",
    bioStats: [
      "500+ Animations.",
      "6+ Years.",
      "Making pixels breathe."
    ],
    bioText: "Specializing in 3D and 2D motion graphics. From subtle micro-interactions to full cinematic title sequences, I bring static concepts to life with rhythm and weight.",
    education: "BA in Animation, Savannah College of Art and Design (SCAD).",
    skills: [
      "3D Animation",
      "Cinema 4D",
      "After Effects",
      "VFX",
      "Motion Strategy",
      "Kinetic Typography"
    ],
    portfolioLink: "https://www.behance.net/julianvance",
    clients: ["Netflix", "HBO", "Apple", "Spotify", "Hulu", "Amazon"],
    experience: [
      {
        role: "Lead Motion Designer",
        company: "APEX Studio",
        location: "New York, USA",
        dates: "2022 — Present",
        type: "Full-time",
        current: true
      },
      {
        role: "Motion Graphics Artist",
        company: "Buck",
        location: "Los Angeles, USA",
        dates: "2019 — 2022",
        type: "Full-time",
        current: false
      },
      {
        role: "Junior Animator",
        company: "The Mill",
        location: "Los Angeles, USA",
        dates: "2017 — 2019",
        type: "Full-time",
        current: false
      }
    ],
    email: "julian@apexstudio.com",
    phone: "+1 (555) 012-3458",
    location: "Brooklyn, NY, USA"
  },
  {
    id: 4,
    name: "Sarah Chen",
    title: "Brand Strategist",
    initials: "SC",
    bioStats: [
      "50+ Global Brands.",
      "10+ Years.",
      "Finding the why."
    ],
    bioText: "Decoding culture and human behavior to position brands where they matter most. I believe the best creative work is built on an undeniable, razor-sharp truth.",
    education: "BSc in Psychology & Marketing, NYU.",
    skills: [
      "Brand Positioning",
      "Market Research",
      "Consumer Psychology",
      "Workshop Facilitation",
      "Trend Forecasting",
      "Naming & Voice"
    ],
    portfolioLink: "https://www.behance.net/sarahchenstrat",
    clients: ["Google", "Microsoft", "Airbnb", "Square", "Stripe", "Uber"],
    experience: [
      {
        role: "Senior Brand Strategist",
        company: "APEX Studio",
        location: "New York, USA",
        dates: "2020 — Present",
        type: "Full-time",
        current: true
      },
      {
        role: "Strategist",
        company: "R/GA",
        location: "New York, USA",
        dates: "2016 — 2020",
        type: "Full-time",
        current: false
      },
      {
        role: "Research Analyst",
        company: "Edelman",
        location: "New York, USA",
        dates: "2013 — 2016",
        type: "Full-time",
        current: false
      }
    ],
    email: "sarah@apexstudio.com",
    phone: "+1 (555) 012-3459",
    location: "New York City, USA"
  },
  {
    id: 5,
    name: "Marcus Thorne",
    title: "UX Lead",
    initials: "MT",
    bioStats: [
      "20M+ Users Impacted.",
      "9+ Years.",
      "Invisible interfaces."
    ],
    bioText: "Crafting digital experiences that feel inevitable. I obsess over the microscopic details of interaction while keeping the macroscopic user journey perfectly clear.",
    education: "MSc in Human-Computer Interaction, Carnegie Mellon University.",
    skills: [
      "UX/UI Design",
      "Prototyping",
      "User Testing",
      "Information Architecture",
      "Design Systems",
      "Interaction Design"
    ],
    portfolioLink: "https://www.behance.net/marcusthorne",
    clients: ["Peloton", "Robinhood", "Plaid", "Figma", "Notion", "Vercel"],
    experience: [
      {
        role: "UX Lead",
        company: "APEX Studio",
        location: "New York, USA",
        dates: "2021 — Present",
        type: "Full-time",
        current: true
      },
      {
        role: "Senior Product Designer",
        company: "Huge",
        location: "Brooklyn, USA",
        dates: "2017 — 2021",
        type: "Full-time",
        current: false
      },
      {
        role: "UX Designer",
        company: "AKQA",
        location: "San Francisco, USA",
        dates: "2014 — 2017",
        type: "Full-time",
        current: false
      }
    ],
    email: "marcus@apexstudio.com",
    phone: "+1 (555) 012-3460",
    location: "New York City, USA"
  },
  {
    id: 6,
    name: "Amira Hassan",
    title: "Photographer",
    initials: "AH",
    bioStats: [
      "200+ Shoots.",
      "7+ Years.",
      "Capturing the unseen."
    ],
    bioText: "Specializing in high-fashion and conceptual editorial photography. I look for the tension in a scene—the quiet moment just before the action happens.",
    education: "BFA in Photography, Parsons School of Design.",
    skills: [
      "Editorial Photography",
      "Lighting Design",
      "Set Design",
      "Color Grading",
      "Portraiture",
      "Darkroom Techniques"
    ],
    portfolioLink: "https://www.behance.net/amirahassan",
    clients: ["Vogue", "Harper's Bazaar", "GQ", "Dazed", "Vanity Fair", "Elle"],
    experience: [
      {
        role: "Lead Photographer",
        company: "APEX Studio",
        location: "New York, USA",
        dates: "2022 — Present",
        type: "Full-time",
        current: true
      },
      {
        role: "Freelance Photographer",
        company: "Self-Employed",
        location: "Global",
        dates: "2018 — 2022",
        type: "Contract",
        current: false
      },
      {
        role: "Photography Assistant",
        company: "Annie Leibovitz Studio",
        location: "New York, USA",
        dates: "2016 — 2018",
        type: "Full-time",
        current: false
      }
    ],
    email: "amira@apexstudio.com",
    phone: "+1 (555) 012-3461",
    location: "New York City, USA"
  },
  {
    id: 7,
    name: "David Kim",
    title: "Video Director",
    initials: "DK",
    bioStats: [
      "80+ Commercials.",
      "11+ Years.",
      "Cinematic realism."
    ],
    bioText: "Directing high-impact commercials and short films. I focus on raw performances and bold visual language to create work that demands attention and stays with you.",
    education: "MFA in Film Production, USC School of Cinematic Arts.",
    skills: [
      "Film Directing",
      "Cinematography",
      "Scriptwriting",
      "Post-Production",
      "Color Theory",
      "Sound Design"
    ],
    portfolioLink: "https://www.behance.net/davidkimdirector",
    clients: ["Red Bull", "Adidas", "Sony", "Porsche", "Under Armour", "Beats"],
    experience: [
      {
        role: "Video Director",
        company: "APEX Studio",
        location: "New York, USA",
        dates: "2020 — Present",
        type: "Full-time",
        current: true
      },
      {
        role: "Director",
        company: "Smuggler",
        location: "Los Angeles, USA",
        dates: "2015 — 2020",
        type: "Full-time",
        current: false
      },
      {
        role: "1st Assistant Director",
        company: "Anonymous Content",
        location: "Los Angeles, USA",
        dates: "2012 — 2015",
        type: "Full-time",
        current: false
      }
    ],
    email: "david@apexstudio.com",
    phone: "+1 (555) 012-3462",
    location: "Los Angeles, CA, USA"
  },
  {
    id: 8,
    name: "Chloe Dubois",
    title: "Copywriter",
    initials: "CD",
    bioStats: [
      "1M+ Words.",
      "5+ Years.",
      "Sharp, punchy, real."
    ],
    bioText: "Words are design too. I write copy that cuts through the noise, dropping the jargon in favor of bold, human language that actually makes people feel something.",
    education: "BA in English Literature, Columbia University.",
    skills: [
      "Brand Voice",
      "Campaign Copy",
      "Manifestos",
      "UX Writing",
      "Naming",
      "Scriptwriting"
    ],
    portfolioLink: "https://www.behance.net/chloedubois",
    clients: ["Oatly", "Glossier", "Mailchimp", "Discord", "Duolingo", "Cash App"],
    experience: [
      {
        role: "Senior Copywriter",
        company: "APEX Studio",
        location: "New York, USA",
        dates: "2023 — Present",
        type: "Full-time",
        current: true
      },
      {
        role: "Copywriter",
        company: "72andSunny",
        location: "New York, USA",
        dates: "2019 — 2023",
        type: "Full-time",
        current: false
      },
      {
        role: "Junior Writer",
        company: "BBDO",
        location: "New York, USA",
        dates: "2018 — 2019",
        type: "Full-time",
        current: false
      }
    ],
    email: "chloe@apexstudio.com",
    phone: "+1 (555) 012-3463",
    location: "Brooklyn, NY, USA"
  }
];
