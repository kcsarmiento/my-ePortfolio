import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionArticle = motion.article

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

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <MotionSection
        id="home"
        variants={sectionMotion}
        initial="hidden"
        animate="show"
        className="mx-auto grid min-h-[95vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2"
      >
        <div className="space-y-6">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">
            {portfolioData.identity.course}
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {portfolioData.identity.name}
          </h1>
          <h2 className="text-lg font-medium text-cyan-100 sm:text-xl">
            {portfolioData.identity.heroTitle}
          </h2>
          <p className="max-w-xl text-base text-slate-200 sm:text-lg">
            {portfolioData.identity.aboutPreview}
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/outputs')}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={portfolioData.identity.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
        <div className="relative mx-auto h-[420px] w-full max-w-md overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-900/60 shadow-glow">
          <img
            src={portfolioData.identity.heroImage}
            alt="Profile photo of Kc Sarmiento"
            className="h-full w-full object-cover object-[center_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        </div>
      </MotionSection>

      <MotionSection
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 pb-8 sm:px-6"
        aria-label="Featured work"
      >
        <MotionDiv variants={sectionMotion} className="mb-4">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-cyan-300">
            Featured Work
          </p>
          <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
            ITC-C506 Prelim Highlights
          </h2>
        </MotionDiv>
        <MotionDiv variants={staggerContainer} className="grid gap-4 md:grid-cols-2">
          {portfolioData.prelimOutputs.slice(0, 2).map((output) => (
            <MotionArticle
              key={`featured-${output.id}`}
              variants={sectionMotion}
              className="rounded-xl border border-white/10 bg-soft-slate p-5"
            >
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-cyan-200">
                {output.exerciseLabel}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{output.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{output.description.problem}</p>
              <button
                type="button"
                onClick={() => navigate('/outputs')}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
              >
                Open full output card <ArrowRight className="h-4 w-4" />
              </button>
            </MotionArticle>
          ))}
        </MotionDiv>
      </MotionSection>
    </>
  )
}

export default HomePage
