import { motion } from 'framer-motion'
import { BookOpen, Code2, Github, GraduationCap } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const MotionSection = motion.section
const MotionDiv = motion.div

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

function AboutPage() {
  return (
    <MotionSection
      id="about"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6"
    >
      <MotionDiv variants={sectionMotion} className="space-y-4">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">
          About
        </p>
        <h2 className="font-heading text-3xl text-white sm:text-4xl">Academic Profile</h2>
        <p className="max-w-4xl text-slate-200">{portfolioData.identity.fullBio}</p>
      </MotionDiv>

      <MotionDiv variants={sectionMotion} className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-soft-slate p-6">
          <h3 className="mb-4 inline-flex items-center gap-2 font-heading text-xl text-cyan-200">
            <Code2 className="h-5 w-5" /> Skills
          </h3>
          <ul className="space-y-2 text-sm text-slate-200">
            {portfolioData.technicalSkills.core.map((skill) => (
              <li key={skill}>- {skill}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-white/10 bg-soft-slate p-6">
          <h3 className="mb-4 inline-flex items-center gap-2 font-heading text-xl text-cyan-200">
            <BookOpen className="h-5 w-5" /> Web Stack
          </h3>
          <ul className="space-y-2 text-sm text-slate-200">
            {portfolioData.technicalSkills.web.map((skill) => (
              <li key={skill}>- {skill}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-white/10 bg-soft-slate p-6">
          <h3 className="mb-4 inline-flex items-center gap-2 font-heading text-xl text-cyan-200">
            <GraduationCap className="h-5 w-5" /> Education
          </h3>
          {portfolioData.education.map((entry) => (
            <div key={entry.school} className="space-y-1 text-sm text-slate-200">
              <p className="font-semibold text-white">{entry.school}</p>
              <p>{entry.degree}</p>
              <p>{entry.level}</p>
            </div>
          ))}
          <a
            href={portfolioData.identity.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 px-3 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/10"
          >
            <Github className="h-4 w-4" /> Visit GitHub
          </a>
        </article>
      </MotionDiv>
    </MotionSection>
  )
}

export default AboutPage
