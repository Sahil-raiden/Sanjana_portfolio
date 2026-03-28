import { useState, useEffect, useRef } from "react";
import {
  MapPin, Mail, Github, Linkedin, Code2, BarChart3, Layers, Cpu,
  GraduationCap, Briefcase, FolderKanban, BookOpen, Award, Globe,
  ChevronDown, ChevronUp, ExternalLink, Zap, Star, Radio,
  Activity, Shield, Satellite, Eye, Bell, AlertTriangle, Database,
  TrendingUp, Heart, Terminal, FlaskConical
} from "lucide-react";

// ── PALETTE ─────────────────────────────────────────────────────────
const C = {
  bg: "#07080A",
  surface: "#0F1318",
  surf2: "#161C24",
  border: "#1E2A38",
  rose: "#F4845F",   // warm coral-rose  (primary)
  emerald: "#34D399",   // emerald green    (secondary)
  gold: "#FBBF24",   // amber gold       (tertiary)
  text: "#EEE8DF",
  muted: "#7A8899",
  dim: "#3A4A5A",
};

// ── DATA ─────────────────────────────────────────────────────────────
const data = {
  name: "Sanjana Alugani",
  title: "Business Analytics · Data Analyst · FinTech",
  location: "Amherst, Massachusetts",
  email: "salugani@umass.edu",
  github: "github.com/SanjanaAlugani",
  linkedin: "linkedin.com/in/sanjana-alugani",
  about: "Graduate researcher blending engineering roots with analytics ambition. Pursuing an MS in Business Analytics at UMass Amherst — driven by curiosity about data, markets, and intelligent systems.",
  skills: [
    { group: "Programming", icon: Terminal, color: C.rose, items: ["Python", "SQL", "R", "C", "C++", "MATLAB"] },
    { group: "Visualization", icon: BarChart3, color: C.emerald, items: ["Power BI", "Tableau", "Alteryx"] },
    { group: "ML & CV", icon: FlaskConical, color: C.gold, items: ["TensorFlow", "OpenCV", "Mask R-CNN", "YOLOv5"] },
    { group: "Web & Cloud", icon: Layers, color: C.rose, items: ["HTML", "CSS", "JavaScript", "Firebase"] },
  ],
  education: [
    {
      degree: "MS in Business Analytics", school: "University of Massachusetts Amherst", period: "Expected Summer 2026", icon: GraduationCap, color: C.emerald,
      courses: ["Business Statistics", "Data Mining", "Business Intelligence", "Data Visualization", "Advanced FinTech", "Web Analytics", "Project Management"]
    },
    {
      degree: "Summer Program in Management", school: "IIM Udaipur, India", period: "Summer 2025", icon: Star, color: C.gold,
      courses: ["Financial Accounting", "Finance", "Economics", "Strategy", "Innovation", "Entrepreneurship", "Decision Making"]
    },
    {
      degree: "B.Tech – Electronics & Instrumentation", school: "VNRVJIET, JNTUH", period: "Apr 2024  ·  GPA 7.36/10", icon: Cpu, color: C.rose,
      courses: ["Data Structures & Algorithms", "IoT", "Robotics & Automation", "Digital Signal Processing", "Microprocessors", "Control Systems"]
    },
  ],
  experience: [
    {
      role: "Sales & Marketing Associate", company: "Srichakra Polyplast", period: "Mar 2024 – Aug 2024", icon: TrendingUp, color: C.rose,
      bullets: ["Contributed to 23% of FY25 sales target (~$25M) by Q1 end", "Monitored client portfolio — Coca-Cola & PepsiCo: 40% of resin exports", "PET production ↑75% with German tech; new PP line ↑50% output", "Attended GCPRS India 2024; engaged Coca-Cola, P&G clients"]
    },
    {
      role: "Project Intern", company: "ADRIN, Dept. of Space", period: "Sep 2023 – Apr 2024", icon: Satellite, color: C.emerald,
      bullets: ["Lake surface temp algorithm using Landsat-8 thermal infrared — 82% accuracy", "Refined model eliminated 10% data noise for higher precision"]
    },
    {
      role: "Summer Intern", company: "NRSC, Hyderabad", period: "May – Jul 2022", icon: Database, color: C.gold,
      bullets: ["Built OCR tool with Python & OpenCV for scanned document analysis", "100% text extraction accuracy on structured datasets at final evaluation"]
    },
  ],
  projects: [
    { title: "Pedestrian Clothing Recognition", icon: Eye, color: C.rose, tech: ["Mask R-CNN", "YOLOv5"], stat: "91%", statLabel: "accuracy" },
    { title: "Smart Coal Miner Equipment", icon: Shield, color: C.emerald, tech: ["IoT", "Sensors", "Wearables"], stat: "24/7", statLabel: "monitoring" },
    { title: "Disaster Alert Web App", icon: AlertTriangle, color: C.gold, tech: ["NASA Space Apps", "Web Dev"], stat: "−40%", statLabel: "response time" },
    { title: "Panic Alarm Circuit", icon: Bell, color: C.rose, tech: ["Tinkercad", "Sensors"], stat: "Live", statLabel: "detection" },
    { title: "SOS Accident Detection", icon: Activity, color: C.emerald, tech: ["IoT", "Mobile Dev"], stat: "Real", statLabel: "time alerts" },
  ],
  publications: [
    { title: "Stock Analysis & Prediction Using Big Data and ML", journal: "IJARST", year: "Jan 2025", icon: TrendingUp },
    { title: "ML-Based Cardiovascular Disease Detection Using Optimal Feature Selection", journal: "IJMMSA", year: "Feb 2025", icon: Heart },
  ],
  certifications: [
    { name: "Forward Learning Program 2025", org: "McKinsey & Co.", icon: Star },
    { name: "Decision-Making & Scenarios", org: "Wharton Online", icon: Zap },
    { name: "Introduction to Corporate Finance", org: "Wharton Online", icon: TrendingUp },
    { name: "Modeling Risk & Realities", org: "Wharton Online", icon: BarChart3 },
    { name: "Fundamentals of Quantitative Modeling", org: "Wharton Online", icon: FlaskConical },
    { name: "C++ Programming", org: "Udemy", icon: Code2 },
    { name: "Python Masterclass", org: "Udemy", icon: Terminal },
    { name: "Data Structures & Algorithms", org: "Udemy", icon: Layers },
  ],
  languages: [
    { lang: "Telugu", level: "Native", pct: 100 },
    { lang: "English", level: "Proficient", pct: 95 },
    { lang: "Hindi", level: "Fluent", pct: 82 },
    { lang: "French", level: "Basic", pct: 32 },
  ],
};

const NAV = [
  { id: "About", icon: Radio },
  { id: "Skills", icon: Code2 },
  { id: "Education", icon: GraduationCap },
  { id: "Experience", icon: Briefcase },
  { id: "Projects", icon: FolderKanban },
  { id: "Publications", icon: BookOpen },
  { id: "Certifications", icon: Award },
];

// ── HOOKS ────────────────────────────────────────────────────────────
function useInView(ref, threshold = 0.12) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return vis;
}

// ── SHARED COMPONENTS ────────────────────────────────────────────────
function Reveal({ children, delay = 0 }) {
  const ref = useRef();
  const vis = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(32px)",
      transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function SectionTitle({ icon: Icon, children, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8, background: `${color}20`, border: `1px solid ${color}44`,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <Icon size={16} color={color} />
      </div>
      <h2 style={{
        fontFamily: "'Syne',sans-serif", fontSize: "1.4rem", fontWeight: 800,
        letterSpacing: "-0.02em", color: C.text
      }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${color}44,transparent)` }} />
    </div>
  );
}

function Pill({ children, color, small }) {
  return (
    <span style={{
      display: "inline-block", padding: small ? "2px 8px" : "3px 11px",
      borderRadius: 4, margin: "3px",
      background: `${color || C.rose}14`, border: `1px solid ${color || C.rose}33`,
      fontFamily: "'JetBrains Mono',monospace", fontSize: small ? "0.66rem" : "0.71rem",
      color: color || C.rose, letterSpacing: "0.04em",
    }}>{children}</span>
  );
}

// ── ANIMATED PARTICLES ───────────────────────────────────────────────
function Particles() {
  const dots = useRef(
    Array.from({ length: 22 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.8 + 0.6,
      spd: Math.random() * 18 + 20,
      delay: Math.random() * -20,
      col: [C.rose, C.emerald, C.gold][Math.floor(Math.random() * 3)],
    }))
  ).current;

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {dots.map((d, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${d.x}%`, top: `${d.y}%`,
          width: d.r * 2, height: d.r * 2,
          borderRadius: "50%",
          background: d.col,
          opacity: 0.18,
          animation: `floatDot ${d.spd}s ${d.delay}s linear infinite`,
        }} />
      ))}
    </div>
  );
}

// ── ANIMATED COUNTER ─────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const n = parseInt(target);
        const dur = 1200, steps = 40;
        let i = 0;
        const id = setInterval(() => {
          i++;
          setVal(Math.round(n * (i / steps)));
          if (i >= steps) clearInterval(id);
        }, dur / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── SKILL BAR ────────────────────────────────────────────────────────
function SkillBar({ pct, color }) {
  const ref = useRef();
  const vis = useInView(ref, 0.5);
  return (
    <div ref={ref} style={{ height: 3, background: C.surf2, borderRadius: 2, overflow: "hidden", marginTop: 6 }}>
      <div style={{
        height: "100%", borderRadius: 2,
        background: `linear-gradient(90deg,${color},${color}88)`,
        width: vis ? `${pct}%` : "0%",
        transition: "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.2s",
        boxShadow: `0 0 8px ${color}66`,
      }} />
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("About");
  const [expandedEdu, setExpandedEdu] = useState(null);
  const [hoveredProj, setHoveredProj] = useState(null);

  const scrollTo = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: C.bg, color: C.text, minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.rose}55;border-radius:2px}

        @keyframes floatDot{0%{transform:translateY(0) scale(1);opacity:.18}50%{transform:translateY(-60px) scale(1.3);opacity:.32}100%{transform:translateY(0) scale(1);opacity:.18}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes orbitA{0%{transform:rotate(0deg) translateX(48px) rotate(0deg)}100%{transform:rotate(360deg) translateX(48px) rotate(-360deg)}}
        @keyframes orbitB{0%{transform:rotate(120deg) translateX(36px) rotate(-120deg)}100%{transform:rotate(480deg) translateX(36px) rotate(-480deg)}}
        @keyframes orbitC{0%{transform:rotate(240deg) translateX(28px) rotate(-240deg)}100%{transform:rotate(600deg) translateX(28px) rotate(-600deg)}}
        @keyframes pulsRing{0%,100%{transform:scale(1);opacity:.4}50%{transform:scale(1.18);opacity:.12}}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
        @keyframes iconBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}

        .nav-btn{background:none;border:none;font-family:'JetBrains Mono',monospace;font-size:.65rem;color:${C.muted};cursor:pointer;padding:10px 14px;letter-spacing:.12em;text-transform:uppercase;transition:color .2s;display:flex;align-items:center;gap:6px;position:relative;white-space:nowrap}
        .nav-btn::after{content:'';position:absolute;bottom:0;left:12px;right:12px;height:2px;background:${C.rose};border-radius:2px;transform:scaleX(0);transition:transform .25s}
        .nav-btn.active,.nav-btn:hover{color:${C.rose}}
        .nav-btn.active::after,.nav-btn:hover::after{transform:scaleX(1)}

        .card{background:${C.surface};border:1px solid ${C.border};border-radius:10px;padding:1.5rem;transition:all .3s}
        .card:hover{border-color:${C.rose}33;box-shadow:0 6px 28px ${C.rose}10}

        .proj-card{background:${C.surface};border:1px solid ${C.border};border-radius:10px;padding:1.5rem;cursor:default;transition:all .3s}

        .cert-chip{background:${C.surface};border:1px solid ${C.border};border-radius:8px;padding:.9rem 1.1rem;transition:all .25s;display:flex;align-items:flex-start;gap:.75rem}
        .cert-chip:hover{border-color:${C.rose}44;background:${C.surf2};transform:translateY(-2px)}

        .contact-pill{display:inline-flex;align-items:center;gap:7px;padding:7px 16px;border:1px solid ${C.border};border-radius:20px;font-family:'JetBrains Mono',monospace;font-size:.73rem;color:${C.muted};text-decoration:none;transition:all .2s}
        .contact-pill:hover{border-color:${C.rose};color:${C.rose};background:${C.rose}0C}

        .stat-card{background:${C.surface};border:1px solid ${C.border};border-radius:10px;padding:1.1rem;text-align:center;transition:all .3s;position:relative;overflow:hidden}
        .stat-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,${C.rose}08 0%,transparent 60%);pointer-events:none}
        .stat-card:hover{transform:translateY(-4px);border-color:${C.rose}44;box-shadow:0 8px 24px ${C.rose}14}

        .exp-card{background:${C.surface};border-left:3px solid transparent;border-top:1px solid ${C.border};border-right:1px solid ${C.border};border-bottom:1px solid ${C.border};border-radius:0 10px 10px 0;padding:1.4rem;transition:all .3s;position:relative}
        .exp-card:hover{box-shadow:0 6px 24px rgba(0,0,0,.3)}

        .edu-card{background:${C.surface};border:1px solid ${C.border};border-radius:10px;padding:1.4rem;cursor:pointer;transition:all .3s}
        .edu-card:hover{border-color:${C.border};background:${C.surf2}}

        .tag-glow:hover{box-shadow:0 0 12px currentColor}

        .icon-anim{animation:iconBob 2.5s ease-in-out infinite}

        .cursor-blink{display:inline-block;width:3px;height:1em;background:${C.rose};vertical-align:text-bottom;margin-left:3px;animation:blink 1s step-end infinite;border-radius:1px}
      `}</style>

      {/* Background grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${C.border}18 1px,transparent 1px),linear-gradient(90deg,${C.border}18 1px,transparent 1px)`,
        backgroundSize: "52px 52px"
      }} />

      {/* Radial ambient */}
      <div style={{
        position: "fixed", top: -100, left: "50%", transform: "translateX(-50%)", width: 900, height: 600,
        background: `radial-gradient(ellipse at 50% 0%, ${C.rose}0A 0%, ${C.emerald}06 40%, transparent 70%)`, pointerEvents: "none", zIndex: 0
      }} />

      <Particles />

      {/* ── NAV ─────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100, background: `${C.bg}E8`, backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${C.border}66`, display: "flex", alignItems: "center", padding: "0 1.5rem", overflowX: "auto"
      }}>
        {/* Logo mark */}
        <div style={{ marginRight: "1rem", flexShrink: 0, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative", width: 28, height: 28 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `1px solid ${C.rose}44`, animation: "pulsRing 2.4s ease-in-out infinite" }} />
            <div style={{ position: "absolute", inset: 4, borderRadius: "50%", background: `${C.rose}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: C.rose, fontWeight: 500 }}>SA</span>
            </div>
          </div>
        </div>
        {NAV.map(({ id, icon: Icon }) => (
          <button key={id} className={`nav-btn${activeNav === id ? " active" : ""}`} onClick={() => scrollTo(id)}>
            <Icon size={11} />
            {id}
          </button>
        ))}
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ──────────────────────────────── */}
        <header style={{ padding: "6rem 2rem 4rem", maxWidth: 960, margin: "0 auto" }}>

          {/* Orbital accent */}
          <div style={{ position: "absolute", right: "8%", top: "80px", width: 120, height: 120, pointerEvents: "none" }}>
            <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.rose, boxShadow: `0 0 12px ${C.rose}` }} />
              <div style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: C.rose, boxShadow: `0 0 8px ${C.rose}`, animation: "orbitA 4s linear infinite" }} />
              <div style={{ position: "absolute", width: 5, height: 5, borderRadius: "50%", background: C.emerald, boxShadow: `0 0 8px ${C.emerald}`, animation: "orbitB 6s linear infinite" }} />
              <div style={{ position: "absolute", width: 4, height: 4, borderRadius: "50%", background: C.gold, boxShadow: `0 0 8px ${C.gold}`, animation: "orbitC 3.5s linear infinite" }} />
            </div>
          </div>

          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", color: C.rose, letterSpacing: "0.2em", marginBottom: "1.5rem", animation: "slideUp .5s ease" }}>
            {"// portfolio · 2026"}
          </div>

          <h1 style={{
            fontFamily: "'Syne',sans-serif", fontSize: "clamp(3rem,8.5vw,7rem)", fontWeight: 800,
            lineHeight: .88, letterSpacing: "-0.04em", color: C.text, animation: "slideUp .6s ease .1s both"
          }}>
            <span style={{ color: C.rose }}>Sanjana</span>
            <br />
            <span style={{ WebkitTextStroke: `1px ${C.border}` }}>Alugani</span>
            <span className="cursor-blink" />
          </h1>

          <div style={{ marginTop: "1.75rem", display: "flex", gap: 8, flexWrap: "wrap", animation: "slideUp .6s ease .22s both" }}>
            {["MS Business Analytics", "Data Analyst", "FinTech Enthusiast"].map((t, i) => (
              <span key={t} style={{
                padding: "5px 14px", borderRadius: 20,
                border: `1px solid ${[C.rose, C.emerald, C.gold][i]}44`,
                background: `${[C.rose, C.emerald, C.gold][i]}10`,
                color: [C.rose, C.emerald, C.gold][i],
                fontFamily: "'JetBrains Mono',monospace", fontSize: "0.72rem", letterSpacing: "0.05em",
              }}>{t}</span>
            ))}
          </div>

          <p style={{ marginTop: "1.75rem", maxWidth: 520, lineHeight: 1.8, color: C.muted, fontSize: "0.95rem", animation: "slideUp .6s ease .32s both" }}>
            {data.about}
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: "0.65rem", flexWrap: "wrap", animation: "slideUp .6s ease .42s both" }}>
            <a href={`mailto:${data.email}`} className="contact-pill"><Mail size={12} />{data.email}</a>
            <a href={`https://${data.github}`} target="_blank" rel="noreferrer" className="contact-pill"><Github size={12} />GitHub</a>
            <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer" className="contact-pill"><Linkedin size={12} />LinkedIn</a>
            <span className="contact-pill"><MapPin size={12} />{data.location}</span>
          </div>

          {/* Stats */}
          <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.85rem", maxWidth: 480, animation: "slideUp .6s ease .52s both" }}>
            {[["2", "Publications", BookOpen, C.rose], ["5", "Projects", FolderKanban, C.emerald], ["8", "Certifications", Award, C.gold], ["4", "Languages", Globe, C.rose]].map(([n, l, Icon, col]) => (
              <div key={l} className="stat-card">
                <Icon size={16} color={col} style={{ margin: "0 auto 6px", display: "block", opacity: .8 }} />
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: col, fontFamily: "'Syne',sans-serif", lineHeight: 1 }}>
                  <Counter target={n} suffix="+" />
                </div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: C.muted, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
              </div>
            ))}
          </div>
        </header>

        <main style={{ maxWidth: 960, margin: "0 auto", padding: "0 2rem 6rem" }}>

          {/* ── SKILLS ───────────────────────────── */}
          <section id="Skills" style={{ marginBottom: "5rem" }}>
            <Reveal>
              <SectionTitle icon={Code2} color={C.rose}>Skills</SectionTitle>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "1rem" }}>
              {data.skills.map((s, i) => (
                <Reveal key={s.group} delay={i * 0.08}>
                  <div className="card" style={{ borderTop: `2px solid ${s.color}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: 7, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center",
                        animation: "iconBob 2.5s ease-in-out infinite", animationDelay: `${i * 0.4}s`
                      }}>
                        <s.icon size={15} color={s.color} />
                      </div>
                      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: s.color, textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.group}</p>
                    </div>
                    <div>{s.items.map(it => <Pill key={it} color={s.color}>{it}</Pill>)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── ABOUT / LANGUAGES ────────────────── */}
          <section id="About" style={{ marginBottom: "5rem" }}>
            <Reveal>
              <SectionTitle icon={Radio} color={C.emerald}>About</SectionTitle>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <Reveal>
                <div className="card">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
                    <Globe size={15} color={C.emerald} className="icon-anim" />
                    <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: C.emerald, textTransform: "uppercase", letterSpacing: "0.12em" }}>Languages Known</p>
                  </div>
                  {data.languages.map(({ lang, level, pct }, i) => (
                    <div key={lang} style={{ marginBottom: "1rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                        <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{lang}</span>
                        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: C.muted }}>{level}</span>
                      </div>
                      <SkillBar pct={pct} color={[C.rose, C.emerald, C.gold, C.rose][i]} />
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.75rem" }}>
                      <FlaskConical size={15} color={C.gold} />
                      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: C.gold, textTransform: "uppercase", letterSpacing: "0.12em" }}>Research Focus</p>
                    </div>
                    <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: C.muted }}>
                      Machine learning applied to finance, healthcare, and computer vision. Co-authored papers on stock prediction (IJARST) and cardiovascular disease detection (IJMMSA).
                    </p>
                  </div>
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.6rem" }}>
                      <Zap size={14} color={C.rose} />
                      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: C.rose, textTransform: "uppercase", letterSpacing: "0.12em" }}>Target Roles</p>
                    </div>
                    <Pill color={C.rose}>Business Analyst</Pill>
                    <Pill color={C.emerald}>Financial Data Analyst</Pill>
                  </div>
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ textAlign: "center", flex: 1 }}>
                      <p style={{ fontSize: "1.4rem", fontWeight: 800, color: C.rose, fontFamily: "'Syne',sans-serif" }}>3+</p>
                      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: C.muted, textTransform: "uppercase", letterSpacing: ".08em" }}>Yrs Experience</p>
                    </div>
                    <div style={{ width: 1, height: 48, background: C.border }} />
                    <div style={{ textAlign: "center", flex: 1 }}>
                      <p style={{ fontSize: "1.4rem", fontWeight: 800, color: C.emerald, fontFamily: "'Syne',sans-serif" }}>CGPA</p>
                      <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: C.muted, textTransform: "uppercase", letterSpacing: ".08em" }}>7.36 / 10</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── EDUCATION ────────────────────────── */}
          <section id="Education" style={{ marginBottom: "5rem" }}>
            <Reveal>
              <SectionTitle icon={GraduationCap} color={C.emerald}>Education</SectionTitle>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {data.education.map((e, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="edu-card" onClick={() => setExpandedEdu(expandedEdu === i ? null : i)}
                    style={{ borderLeft: `3px solid ${e.color}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                      <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", flex: 1 }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: 8, background: `${e.color}18`, border: `1px solid ${e.color}33`,
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                          animation: "iconBob 3s ease-in-out infinite", animationDelay: `${i * 0.5}s`
                        }}>
                          <e.icon size={16} color={e.color} />
                        </div>
                        <div>
                          <p style={{ fontSize: "1rem", fontWeight: 700, color: C.text }}>{e.degree}</p>
                          <p style={{ fontFamily: "'JetBrains Mono',monospace", color: e.color, fontSize: "0.76rem", marginTop: 3 }}>{e.school}</p>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                        <span style={{
                          fontFamily: "'JetBrains Mono',monospace", color: C.muted, fontSize: "0.7rem",
                          background: C.surf2, border: `1px solid ${C.border}`, borderRadius: 4, padding: "3px 10px"
                        }}>{e.period}</span>
                        {expandedEdu === i ? <ChevronUp size={14} color={C.muted} /> : <ChevronDown size={14} color={C.muted} />}
                      </div>
                    </div>
                    {expandedEdu === i && (
                      <div style={{ marginTop: "1rem", borderTop: `1px solid ${C.border}`, paddingTop: "1rem", animation: "slideUp .3s ease" }}>
                        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Coursework</p>
                        <div>{e.courses.map(c => <Pill key={c} color={e.color}>{c}</Pill>)}</div>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── EXPERIENCE ───────────────────────── */}
          <section id="Experience" style={{ marginBottom: "5rem" }}>
            <Reveal>
              <SectionTitle icon={Briefcase} color={C.gold}>Experience</SectionTitle>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative", paddingLeft: "1.5rem" }}>
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
                background: `linear-gradient(to bottom,${C.rose},${C.emerald},${C.gold},transparent)`
              }} />
              {data.experience.map((exp, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div style={{ position: "relative" }}>
                    <div style={{
                      position: "absolute", left: -23, top: 18, width: 10, height: 10,
                      background: exp.color, borderRadius: "50%", boxShadow: `0 0 10px ${exp.color}`,
                      border: `2px solid ${C.bg}`
                    }} />
                    <div className="exp-card" style={{ borderLeftColor: exp.color }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 4px 20px ${exp.color}18`; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.85rem" }}>
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                          <div style={{
                            width: 34, height: 34, borderRadius: 7, background: `${exp.color}18`, border: `1px solid ${exp.color}33`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            animation: "iconBob 2.8s ease-in-out infinite", animationDelay: `${i * 0.7}s`
                          }}>
                            <exp.icon size={15} color={exp.color} />
                          </div>
                          <div>
                            <p style={{ fontSize: "0.98rem", fontWeight: 700 }}>{exp.role}</p>
                            <p style={{ fontFamily: "'JetBrains Mono',monospace", color: exp.color, fontSize: "0.74rem" }}>{exp.company}</p>
                          </div>
                        </div>
                        <span style={{
                          fontFamily: "'JetBrains Mono',monospace", color: C.muted, fontSize: "0.7rem",
                          background: C.surf2, border: `1px solid ${C.border}`, borderRadius: 4, padding: "3px 10px", alignSelf: "flex-start"
                        }}>{exp.period}</span>
                      </div>
                      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                        {exp.bullets.map((b, j) => (
                          <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", color: C.muted, fontSize: "0.86rem", lineHeight: 1.7, marginBottom: "0.3rem" }}>
                            <span style={{ color: exp.color, marginTop: 3, flexShrink: 0 }}>▸</span>{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── PROJECTS ─────────────────────────── */}
          <section id="Projects" style={{ marginBottom: "5rem" }}>
            <Reveal>
              <SectionTitle icon={FolderKanban} color={C.rose}>Projects</SectionTitle>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1rem" }}>
              {data.projects.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="proj-card"
                    style={{ borderTop: `2px solid ${hoveredProj === i ? p.color : C.border}`, transition: "all .3s" }}
                    onMouseEnter={() => setHoveredProj(i)}
                    onMouseLeave={() => setHoveredProj(null)}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 9, background: `${p.color}18`, border: `1px solid ${p.color}33`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transform: hoveredProj === i ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                        transition: "transform .3s ease",
                        boxShadow: hoveredProj === i ? `0 0 16px ${p.color}44` : "none"
                      }}>
                        <p.icon size={18} color={p.color} />
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: "1.4rem", fontWeight: 800, color: p.color, fontFamily: "'Syne',sans-serif", lineHeight: 1 }}>{p.stat}</p>
                        <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: C.muted, textTransform: "uppercase", letterSpacing: ".08em" }}>{p.statLabel}</p>
                      </div>
                    </div>
                    <p style={{
                      fontSize: "0.93rem", fontWeight: 700, marginBottom: "0.6rem",
                      color: hoveredProj === i ? p.color : C.text, transition: "color .2s"
                    }}>{p.title}</p>
                    <div>{p.tech.map(t => <Pill key={t} color={p.color} small>{t}</Pill>)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── PUBLICATIONS ─────────────────────── */}
          <section id="Publications" style={{ marginBottom: "5rem" }}>
            <Reveal>
              <SectionTitle icon={BookOpen} color={C.gold}>Research Publications</SectionTitle>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {data.publications.map((pub, i) => (
                <Reveal key={i} delay={i * 0.12}>
                  <div className="card" style={{
                    display: "flex", gap: "1.25rem", alignItems: "flex-start",
                    borderLeft: `3px solid ${C.gold}`
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 9, background: `${C.gold}18`, border: `1px solid ${C.gold}33`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      animation: "iconBob 3.2s ease-in-out infinite", animationDelay: `${i * 0.6}s`
                    }}>
                      <pub.icon size={18} color={C.gold} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Syne',sans-serif", fontSize: "1rem", fontWeight: 700, lineHeight: 1.45, marginBottom: "0.6rem" }}>{pub.title}</p>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        <Pill color={C.gold}>{pub.journal}</Pill>
                        <Pill color={C.muted}>{pub.year}</Pill>
                      </div>
                    </div>
                    <ExternalLink size={14} color={C.muted} style={{ flexShrink: 0, marginTop: 4 }} />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── CERTIFICATIONS ───────────────────── */}
          <section id="Certifications" style={{ marginBottom: "5rem" }}>
            <Reveal>
              <SectionTitle icon={Award} color={C.emerald}>Certifications</SectionTitle>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: "0.75rem" }}>
              {data.certifications.map((cert, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="cert-chip">
                    <div style={{
                      width: 30, height: 30, borderRadius: 6, background: `${C.emerald}15`, border: `1px solid ${C.emerald}33`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      animation: "iconBob 2.5s ease-in-out infinite", animationDelay: `${i * 0.3}s`
                    }}>
                      <cert.icon size={13} color={C.emerald} />
                    </div>
                    <div>
                      <p style={{ color: C.text, fontSize: "0.84rem", fontWeight: 600, lineHeight: 1.4 }}>{cert.name}</p>
                      <p style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted, fontSize: "0.68rem", marginTop: 2 }}>{cert.org}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: `1px solid ${C.border}55`, padding: "2.5rem 2rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: "1rem" }}>
          <a href={`mailto:${data.email}`} className="contact-pill" style={{ fontSize: "0.7rem" }}><Mail size={11} />{data.email}</a>
          <a href={`https://${data.github}`} target="_blank" rel="noreferrer" className="contact-pill" style={{ fontSize: "0.7rem" }}><Github size={11} />GitHub</a>
        </div>
        <p style={{ fontFamily: "'JetBrains Mono',monospace", color: `${C.muted}55`, fontSize: "0.68rem", letterSpacing: "0.15em" }}>
          SANJANA ALUGANI · {new Date().getFullYear()} ·{" "}
          <span style={{ color: C.rose }}>UMass Amherst</span>
        </p>
      </footer>
    </div>
  );
}