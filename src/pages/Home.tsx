import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  GraduationCap,
  MapPin,
  Phone,
  BookOpen,
  Trophy,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { resumeData } from "@/data/resume";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const categories = [
    "All",
    ...Array.from(new Set(resumeData.projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? resumeData.projects
      : resumeData.projects.filter((p) => p.category === activeCategory);

  const skillsData = resumeData.skills.categories
    .flatMap((cat) =>
      cat.skills.map((skill) => ({
        name: skill.name,
        value: skill.level,
        category: cat.name,
      }))
    )
    .sort((a, b) => b.value - a.value)
    .slice(0, 9);

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus("sending");
    // For Vercel free tier — just open mailto as fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.open(`mailto:${resumeData.personal.email}?subject=${subject}&body=${body}`);
    setContactStatus("sent");
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setContactStatus("idle"), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-body">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-grid"
      >
        {/* Gradient orbs */}
        <div className="absolute top-20 right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-6xl">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Open to opportunities in Germany
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
              {resumeData.personal.name}
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground min-h-[36px]">
              I specialise in{" "}
              <span className="text-gradient font-bold">
                <Typewriter
                  words={[
                    "Data Engineering",
                    "BI Dashboards",
                    "ETL Pipelines",
                    "SQL & Python",
                    "Tableau & Power BI",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={65}
                  deleteSpeed={40}
                  delaySpeed={1800}
                />
              </span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              {resumeData.personal.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <ScrollLink to="projects" smooth offset={-80}>
                <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:opacity-90 transition-all">
                  View My Work <ArrowRight size={16} />
                </button>
              </ScrollLink>
              <a
                href={resumeData.personal.resumeUrl}
                download
                className="flex items-center gap-2 px-7 py-3 rounded-full border-2 border-border font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Download CV <Download size={16} />
              </a>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Mail size={18} />
              </a>
              <span className="ml-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={14} />
                {resumeData.personal.location}
              </span>
            </div>
          </motion.div>

          {/* Right — stats card cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-[460px] h-[460px]">
              {/* Rotating rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-primary/15 rounded-full"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 25 + i * 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ padding: `${i * 36}px` }}
                />
              ))}

              {/* Center card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl blur-2xl" />
                <div className="relative z-10 w-56 h-56 bg-white rounded-2xl shadow-2xl border border-border/50 flex flex-col items-center justify-center gap-1 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="text-6xl font-display font-bold text-gradient">
                    3+
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Years Experience
                  </div>
                  <div className="mt-3 flex gap-3">
                    {["SQL", "Python", "Tableau"].map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono bg-secondary px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              {[
                { label: "Dashboards Built", value: "25+", top: "top-4", right: "-right-8" },
                { label: "Samsung Award", value: "🏆", top: "bottom-8", left: "-left-10" },
                { label: "GPA (B.E.)", value: "9.69", top: "top-24", left: "-left-12" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${card.top} ${card.right || ""} ${card.left || ""} bg-white/90 backdrop-blur border border-border rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 w-44`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    delay: i * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-2xl font-display font-bold text-primary">
                    {card.value}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {card.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ScrollLink
            to="about"
            smooth
            offset={-80}
            className="cursor-pointer flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-mono">
              Scroll
            </span>
            <ChevronDown size={18} className="animate-bounce" />
          </ScrollLink>
        </motion.div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="py-28 bg-secondary/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading
            title="About Me"
            subtitle="My journey through data, code, and engineering."
          />

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed first-letter:text-4xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                {resumeData.personal.about}
              </p>

              {/* Capabilities grid */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {resumeData.capabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white rounded-2xl p-5 border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mb-3 p-2.5 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <cap.icon size={20} />
                    </div>
                    <h3 className="font-display font-bold mb-1">{cap.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Publication */}
              <div className="mt-6 p-5 bg-white rounded-2xl border border-primary/20 shadow-sm">
                <div className="flex items-start gap-3">
                  <BookOpen size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                      Publication
                    </span>
                    <p className="text-sm font-medium mt-1">
                      {resumeData.publication.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {resumeData.publication.journal} · {resumeData.publication.volume}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Education */}
              <div className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm">
                <h3 className="font-display font-bold text-lg mb-5 flex items-center gap-2">
                  <GraduationCap size={18} className="text-primary" /> Education
                </h3>
                <div className="space-y-5">
                  {resumeData.education.map((edu, i) => (
                    <div
                      key={i}
                      className="pl-4 border-l-2 border-primary/30 space-y-0.5"
                    >
                      <p className="text-xs font-mono text-muted-foreground">
                        {edu.period}
                      </p>
                      <h4 className="font-semibold text-sm leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-6 border border-border/60 shadow-sm">
                <h3 className="font-display font-bold text-lg mb-5 flex items-center gap-2">
                  <Trophy size={18} className="text-primary" /> Achievements
                </h3>
                <div className="space-y-4">
                  {resumeData.achievements.map((ach, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                        <ach.icon size={14} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{ach.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {ach.description}
                        </p>
                        <span className="text-[10px] font-mono text-primary">
                          {ach.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ───────────────────────────────────────── */}
      <section id="experience" className="py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional track record and career growth."
          />

          <div className="relative space-y-10">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 md:gap-10 pl-16 md:pl-20 relative"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-6 top-6 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-lg shadow-primary/20 -translate-x-1/2" />

                <div className="flex-1 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 p-6 md:p-8 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-base font-medium text-foreground/80">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────── */}
      <section id="skills" className="py-28 bg-secondary/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading
            title="Technical Skills"
            subtitle="The tools and technologies I use to drive insights and build pipelines."
          />

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Skill bars */}
            <div className="space-y-8">
              {resumeData.skills.categories.map((cat, i) => (
                <div key={i}>
                  <h3 className="text-base font-display font-bold mb-4 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-primary" />
                    {cat.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {cat.skills.map((skill, j) => (
                      <div
                        key={j}
                        className="bg-white p-4 rounded-xl border border-border/60 shadow-sm"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + j * 0.1,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-border/60 shadow-sm"
            >
              <h3 className="font-display font-bold text-lg mb-1">
                Top Proficiency
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                My strongest technical capabilities
              </p>
              <div className="h-[380px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={skillsData}
                    layout="vertical"
                    margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
                  >
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={110}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(220 15% 92% / 0.5)" }}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                        fontSize: "13px",
                      }}
                      formatter={(v) => [`${v}%`, "Proficiency"]}
                    />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={22}>
                      {skillsData.map((_, index) => (
                        <Cell
                          key={index}
                          fill={`hsl(248 84% ${72 - index * 4}%)`}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────── */}
      <section id="projects" className="py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading
            title="Featured Projects"
            subtitle="Key projects spanning data engineering, analytics, and ML."
          />

          {/* Category filter */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────── */}
      <section id="certifications" className="py-28 bg-secondary/40">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading
            title="Certifications"
            subtitle="Continuous learning and professional development."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-border/60 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <cert.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-sm leading-snug mb-1 min-h-[2.5rem] flex items-center justify-center">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {cert.issuer}
                </p>
                <span className="inline-flex text-xs font-mono font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Have a project, opportunity, or just want to connect? I'd love to hear from you."
                align="left"
                className="mb-8"
              />

              <div className="space-y-4">
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-semibold text-sm">
                      {resumeData.personal.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${resumeData.personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-semibold text-sm">
                      {resumeData.personal.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <p className="font-semibold text-sm">Connect with me</p>
                  </div>
                </a>

                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Github size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      GitHub
                    </p>
                    <p className="font-semibold text-sm">
                      github.com/sakshimankar
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl border border-border/60 shadow-xl p-8 md:p-10">
              <h3 className="font-display font-bold text-2xl mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleContact} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    placeholder="Jane Smith"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    placeholder="jane@company.com"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    placeholder="Hi Sakshi, I'd love to discuss..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={contactStatus === "sending"}
                  className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md shadow-primary/20 hover:opacity-90 disabled:opacity-60 transition-all"
                >
                  {contactStatus === "sending"
                    ? "Opening mail client..."
                    : contactStatus === "sent"
                    ? "✓ Message draft opened!"
                    : "Send Message"}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  This will open your email client with a pre-filled message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-10 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="font-display font-bold text-lg">
            <span className="text-gradient">Sakshi Mankar</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Data Engineer & Analytics Professional · Magdeburg, Germany
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            © {new Date().getFullYear()} Sakshi Mankar · Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
