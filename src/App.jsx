import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cpu,
  Sparkles,
  FileDown,
  Award,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

/* ================= MAIN COMPONENT ================= */

export default function Portfolio() {
  // Use the /preview link for better viewing experience
  const resumeLink = "https://drive.google.com/file/d/19SSLoV3_Ax2B1wH7mkCPl01bL8ckC2M7/preview";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* BACKGROUND BLURS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-6 text-[10px] md:text-xs tracking-widest uppercase">
        {["about", "skills", "projects", "certifications", "contact"].map((item) => (
          <a key={item} href={`#${item}`} className="hover:text-indigo-400 transition font-medium">
            {item}
          </a>
        ))}
        <div className="w-[1px] h-4 bg-white/20 hidden md:block" />
        <a href={resumeLink} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 font-bold hidden md:block">
          Resume
        </a>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs uppercase font-medium"
        >
          <Sparkles size={14} /> Open to Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter"
        >
          Sreeja{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Bussa
          </span>
        </motion.h1>

        <p className="mt-6 max-w-2xl text-slate-400 text-lg md:text-xl">
          Full-Stack Developer & AI Enthusiast building scalable and modern web applications.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
          <motion.a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20"
          >
            <FileDown size={18} /> View Resume
          </motion.a>
          
          <div className="flex gap-4">
            <SocialLink href="https://github.com/Sreeja99893" icon={<Github size={20}/>} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/sreejabussa" icon={<Linkedin size={20}/>} label="LinkedIn" />
            <SocialLink href="mailto:sreeja.bussa01@gmail.com" icon={<Mail size={20}/>} label="Email" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-32">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Computer Science student passionate about clean code, algorithms, and scalable systems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Open-source contributor with experience in full-stack development and machine learning.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Role" value="Full-Stack Dev" />
              <StatCard label="Location" value="Hyderabad" />
              <StatCard label="Interest" value="AI & ML" />
              <StatCard label="Status" value="Student" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 bg-slate-900/20 border-y border-white/5">
        <motion.div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SkillBox icon={<Terminal />} title="Languages" list="Java, Python, C, C++, JavaScript" />
          <SkillBox icon={<Cpu />} title="Frameworks" list="React, Node.js, Express, Flask" />
          <SkillBox icon={<Database />} title="Databases & Tools" list="MongoDB, SQL, Git, Pandas" />
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold text-center mb-16">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard title="Multi-Agent Data Platform" tech="Python • Flask • Pandas" desc="Automated data cleaning and visualization system." link="https://github.com/Sreeja99893/Automate-Multi-Agent-System" />
          <ProjectCard title="Learnify E-Learning" tech="MERN Stack" desc="Full-stack e-learning platform with authentication." link="https://github.com/Sreeja99893/ZPHS-Gangapur" />
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/5">
        <h2 className="text-4xl font-bold text-center mb-16">Certifications & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <CertificationCard 
            title="Guinness World Record Title" 
            issuer="Google for Developers & GDG Hyderabad" 
            date="Dec 2025"
            desc="Participant in the largest Agentic AI hackathon (Agentathon 2025) which achieved a Guinness World Record with 2,089 participants." 
            link="https://drive.google.com/file/d/1Z1J2PJu4po31Xll8-e8UE3tusJUZnpib/preview"
          />

          <CertificationCard 
            title="Agentathon 2025 Participant" 
            issuer="GDG Hyderabad" 
            date="Dec 2025"
            desc="Official Certificate of Participation for attending the world record-breaking event at Malla Reddy University." 
            link="https://drive.google.com/file/d/1Av28zyXkzke1cJpYCE0Kfnu_18OXo_as/preview"
          />

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 text-center">
        <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 text-slate-400">
          <ContactItem icon={<Phone size={18}/>} text="+91 8688244127" />
          <ContactItem icon={<Mail size={18}/>} text="sreeja.bussa01@gmail.com" />
          <ContactItem icon={<MapPin size={18}/>} text="Hyderabad" />
        </div>
        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:sreeja.bussa01@gmail.com" className="inline-block px-12 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-600/20">
          Say Hello
        </motion.a>
      </section>

      <footer className="py-10 text-center text-slate-500 text-xs border-t border-white/5">
        © {new Date().getFullYear()} Sreeja Bussa • Built with React & Tailwind v4
      </footer>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SocialLink({ href, icon, label }) {
  return (
    <motion.a href={href} target="_blank" whileHover={{ y: -4 }} className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors" aria-label={label}>
      {icon} <span className="hidden lg:inline">{label}</span>
    </motion.a>
  );
}

function SkillBox({ icon, title, list }) {
  return (
    <motion.div variants={fadeInUp} className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-colors">
      <div className="mb-4 text-indigo-400">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{list}</p>
    </motion.div>
  );
}

function ProjectCard({ title, tech, desc, link }) {
  return (
    <motion.a href={link} target="_blank" whileHover={{ y: -5 }} className="p-8 bg-slate-900/50 border border-white/10 rounded-3xl block group hover:border-indigo-500/30 transition-all">
      <div className="flex justify-between mb-4">
        <Code2 className="text-indigo-400" />
        <ExternalLink className="text-slate-500 group-hover:text-white transition-colors" size={20} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-indigo-400 text-xs font-mono mb-3 uppercase tracking-wider">{tech}</p>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.a>
  );
}

// FIXED COMPONENT: Now accepts 'link' and uses it in an <a> tag
function CertificationCard({ title, issuer, date, desc, link }) {
  return (
    <motion.a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.4)" }} 
      className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl flex flex-col justify-between hover:bg-slate-900/60 transition-all cursor-pointer group"
    >
      <div>
        <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
          <Award className="text-indigo-400" size={20} />
        </div>
        <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-indigo-400 text-xs font-medium uppercase tracking-wider mb-2">{issuer}</p>
        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-slate-500 text-[10px] font-mono uppercase tracking-tighter">{date}</p>
        <ExternalLink size={14} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
      </div>
    </motion.a>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{label}</p>
      <p className="font-semibold text-sm">{value}</p>
    </div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 hover:text-indigo-400 transition-colors cursor-default">
      {icon} <span className="text-sm font-medium">{text}</span>
    </div>
  );
}