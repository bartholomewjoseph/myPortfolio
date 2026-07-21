"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingNav } from "@/components/aceternity/floating-navbar";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { LampContainer } from "@/components/aceternity/lamp";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";
import { CardHoverEffect } from "@/components/aceternity/card-hover-effect";
import { MovingBorderButton } from "@/components/aceternity/moving-border";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline";
import Image from "next/image";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
];

const projects = [
  {
    title: "SQL Data Cleaning Project",
    description:
      "Comprehensive SQL-based data cleaning pipeline handling missing values, duplicates, and data standardization for large datasets.",
    link: "https://github.com/bartholomewjoseph/-Data-CLeaning",
    tags: ["SQL", "Data Cleaning", "PostgreSQL"],
  },
  {
    title: "Python Data Science",
    description:
      "Data cleaning and analysis using Python — leveraging pandas, numpy, and visualization libraries for insightful data exploration.",
    link: "https://github.com/bartholomewjoseph/Data-science",
    tags: ["Python", "Pandas", "Data Science"],
  },
  {
    title: "Audio Transcribing App",
    description:
      "A live web application for automated audio transcription, deployed on Render with real-time processing capabilities.",
    link: "https://audio-transcribing.onrender.com",
    tags: ["Web App", "Audio Processing", "AI"],
  },
  {
    title: "Kaduna State Microplanning",
    description:
      "Population density analysis of Kaduna State, Nigeria using gridded raster data, zonal statistics, and classification techniques for evidence-based planning.",
    link: "https://github.com/bartholomewjoseph/Kaduna_State-Microplanning",
    tags: ["QGIS", "GIS", "Raster Analysis"],
  },
  {
    title: "NCD Awareness Survey",
    description:
      "Non-Communicable Disease Awareness Survey built on KoBoToolbox — enabling efficient field data collection and real-time analytics.",
    link: "https://ee.kobotoolbox.org/EP8f2364",
    tags: ["KoBoToolbox", "Survey", "Public Health"],
  },
  {
    title: "SpendWise — Daily Spending Tracker",
    description:
      "A full-stack personal finance app that tracks daily income, spending, and investments with live wallet balance, animated dashboards, and daily/weekly/monthly/yearly views. Includes smart recommendations and investment reminders.",
    link: "https://wiselyspend.vercel.app",
    tags: ["Full-Stack", "Dashboard", "Finance"],
  },
  {
    title: "SatCity Hospital Management Platform",
    description:
      "A unified hospital management system connecting doctors, lab technicians, pharmacists, and patients — featuring smart assignment, real-time notifications, Supabase auth, and full audit trails for modern clinical operations.",
    link: "https://satcityhospital.vercel.app",
    tags: ["Full-Stack", "Healthcare", "Supabase"],
  },
];

const skillCategories = [
  {
    category: "Data Analytics",
    skills: ["Python", "SQL/PostgreSQL", "Advanced Excel", "AI Prompt Engineering", "Data Cleaning & Validation"],
  },
  {
    category: "Visualization",
    skills: ["Power BI", "Google Looker Studio", "Interactive Dashboards", "QGIS Map Production"],
  },
  {
    category: "Data Engineering",
    skills: ["JavaScript", "Google Sheets Automation", "Kobo API", "Google API Integration"],
  },
  {
    category: "Survey Tools",
    skills: ["KoBoToolbox", "ODK", "KoboCollect", "Google Forms", "Microsoft Forms"],
  },
  {
    category: "Productivity",
    skills: ["Microsoft Office Suite", "Google Workspace", "PowerPoint", "SharePoint"],
  },
];

const certifications = [
  "Data Quality — Global Health eLearning Centre (2025)",
  "Data Entry Tools & Techniques — Alison (2025)",
  "Computer Science — Sailor Academy (2025)",
  "PSEAH — UNICEF (2024)",
  "Responding to Cholera in Nigeria — NCDC (2024)",
];

const testimonialItems = [
  {
    quote:
      "Joseph's automated validation tracker boosted our team productivity by 80%. His technical skills and attention to data quality are unmatched.",
    name: "SARMAAN Program",
    title: "eHealth Africa / NIMR",
  },
  {
    quote:
      "His QGIS maps and Power BI dashboards made our program outcomes impossible to ignore. Excellent at translating complex datasets into clear intelligence.",
    name: "Evidence Review Meeting",
    title: "Senior Stakeholder Briefing",
  },
  {
    quote:
      "Joseph coordinated ICT training for 32 Health Facilitators and 478 CDDs, boosting productivity by 50% and reducing coordinator dependency significantly.",
    name: "Malaria Consortium",
    title: "DIGIT App Training Program",
  },
  {
    quote:
      "His groundwater quality analysis and maps directly informed our strategic decisions on rural water supply infrastructure across Bauchi State.",
    name: "RUWASSA",
    title: "Water Quality Assessment Project",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      <FloatingNav navItems={navItems} />

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundBeams />
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Joseph Bartholomew Oche"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse-glow" />
          </motion.div>

          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4">
                <span className="mr-2 inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </Badge>
            </motion.div>

            <TextGenerateEffect
              words="Joseph Bartholomew Oche"
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl"
            >
              IT Support Specialist & Data Analyst
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-3 text-sm md:text-base text-gray-500 max-w-2xl"
            >
              4+ years building automated data pipelines, real-time validation systems, and QGIS maps that make data impossible to ignore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#projects">
                <MovingBorderButton>View My Work</MovingBorderButton>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </Button>
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "4+", label: "Years Experience" },
                { value: "1M+", label: "Records Processed" },
                { value: "20+", label: "Team Members Led" },
                { value: "100%", label: "QC Compliance" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="relative py-24 px-6">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <SectionHeading
              title="About Me"
              subtitle="Bridging the gap between raw data and actionable intelligence"
            />
          </motion.div>
        </LampContainer>

        <div className="max-w-6xl mx-auto -mt-40">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    I&apos;m an <span className="text-cyan-400 font-semibold">IT Support Specialist</span> and{" "}
                    <span className="text-cyan-400 font-semibold">Data Analyst</span> with 4+ years of experience spanning ICT operations, GIS mapping, data analytics, and customer service across public health, environmental research, and enterprise environments.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4 text-sm md:text-base">
                    I build automated data pipelines that eliminate manual errors, develop real-time validation systems that catch problems before they escalate, and produce QGIS maps and Power BI dashboards that make data impossible to ignore. Delivered proven impact across high-profile programs including{" "}
                    <span className="text-purple-400 font-semibold">SARMAAN II</span> and{" "}
                    <span className="text-purple-400 font-semibold">Malaria Consortium</span> — leading a team of 20+ field validators on a million-submission health survey while maintaining 100% QC compliance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Education cards */}
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              {[
                { degree: "BSc Computer Science", school: "University of the People", year: "2027 (In Progress)" },
                { degree: "HND Soil & Water Engineering", school: "Federal Polytechnic Bauchi", year: "2024" },
                { degree: "ND GIS & Remote Sensing", school: "Kaduna Polytechnic", year: "2018" },
                { degree: "ND Agricultural & Bio-environmental Eng.", school: "Kaduna Polytechnic", year: "2018" },
              ].map((edu, idx) => (
                <div key={idx} className="bg-gray-900/30 border border-white/5 rounded-lg p-4 hover:border-cyan-500/20 transition-colors">
                  <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                  <p className="text-xs text-gray-400 mt-1">{edu.school}</p>
                  <span className="text-xs text-cyan-400">{edu.year}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section id="skills" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Skills & Tools"
              subtitle="A diverse toolkit for turning data into decisions"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/40 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, skillIdx) => (
                    <Badge key={skillIdx} variant={idx % 2 === 0 ? "default" : "secondary"}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Badge variant="outline" className="text-xs">{cert}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Featured Projects"
              subtitle="Real-world solutions built with data, code, and purpose"
            />
          </motion.div>

          <CardHoverEffect items={projects} />
        </div>
      </section>

      {/* ==================== EXPERIENCE SECTION ==================== */}
      <section id="experience" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Experience"
              subtitle="A track record of impact across public health, environmental research, and enterprise IT"
            />
          </motion.div>

          <div className="mt-12">
            <TimelineItem
              period="Feb 2025 – Apr 2026"
              title="Data Quality Officer (Part Time)"
              company="eHealth Africa / NIMR — SARMAAN I & II | Bill & Melinda Gates Foundation"
              description={[
                "Pioneered the first automated Google Sheets validation tracker integrating Kobo API and Google API, boosting team productivity by 80%",
                "Engineered a JavaScript-based data pipeline enabling real-time error flagging for 1,000,000+ household submissions",
                "Deployed Python scripts for advanced data cleaning, cutting documentation pre-processing workload by 70%",
                "Built interactive Power BI dashboards to visualize health program outcomes for program directors and donors",
                "Led a team of 20+ field validators, designing QC procedures that improved error resolution by 50%",
              ]}
              tags={["Python", "JavaScript", "Power BI", "QGIS", "KoBoToolbox", "Google API"]}
            />

            <TimelineItem
              period="Jun – Jul 2025"
              title="Workshop Assistant (Contract)"
              company="Malaria Consortium"
              description={[
                "Coordinated ICT training for 32 Health Facilitators and 478 CDDs via DIGIT App, boosting productivity by 50%",
                "Delivered real-time inventory analytics for dose tracking and streamlined KoboCollect troubleshooting",
              ]}
              tags={["DIGIT App", "KoBoCollect", "Training", "Analytics"]}
            />

            <TimelineItem
              period="Aug 2022 – Feb 2023"
              title="Research Analyst"
              company="Bauchi State RUWASSA — Ground Water Quality Assessment"
              description={[
                "Developed customized KoBoToolbox forms for groundwater quality surveys, reducing data entry errors",
                "Created comprehensive geographic maps using GPS coordinates for spatial visualization of groundwater distribution",
                "Delivered actionable insights that directly informed RUWASSA's strategic decisions on rural water supply infrastructure",
              ]}
              tags={["KoBoToolbox", "QGIS", "GPS Mapping", "Data Analysis"]}
            />

            <TimelineItem
              period="Apr 2020 – Dec 2022"
              title="Network Administrator"
              company="Ateko Technology Limited / JAMB CBT Centre"
              description={[
                "Configured and maintained full LAN infrastructure including network cable crimping, switch boxes, and rack installations",
                "Performed pre-examination system audits ensuring 100% system readiness before every JAMB sitting",
                "Diagnosed and resolved hardware/software faults under strict time pressure, maintaining zero examination disruptions",
              ]}
              tags={["LAN", "Networking", "System Administration", "Hardware"]}
            />

            <TimelineItem
              period="Feb 2018 – Jan 2020"
              title="Network Administrator"
              company="Whitehouse Computer Limited"
              description={[
                "Designed and implemented network architecture using switch boxes and rack installations",
                "Performed end-to-end cable crimping and structured network cabling for new installations",
                "Diagnosed and resolved hardware and software faults promptly, minimizing downtime",
              ]}
              tags={["Network Design", "Cabling", "System Maintenance"]}
            />
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Impact & Recognition"
              subtitle="What partners and stakeholders say about my work"
            />
          </motion.div>

          <InfiniteMovingCards
            items={testimonialItems}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="relative py-24 px-6 overflow-hidden">
        <BackgroundBeams />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a project in mind or want to discuss data solutions? Let's connect."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "josephbartholomew15@gmail.com",
                  href: "mailto:josephbartholomew15@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+234 815 518 6709",
                  href: "tel:+234855186709",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "LinkedIn",
                  href: "https://www.linkedin.com/in/bartholomewjoseph",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  label: "GitHub",
                  value: "GitHub",
                  href: "https://github.com/bartholomewjoseph",
                },
              ].map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{contact.label}</p>
                    <p className="text-sm text-white group-hover:text-cyan-400 transition-colors">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 bg-gray-900/30 border border-white/5 rounded-2xl p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-950/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-950/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-950/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <MovingBorderButton className="w-full">
                Send Message
              </MovingBorderButton>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Joseph Bartholomew Oche. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/bartholomewjoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bexAlex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:bex@gmail.com"
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
