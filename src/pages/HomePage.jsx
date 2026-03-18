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

function getFeaturedNarrative(output) {
  if (!output) {
    return {
      challenge: 'No output data available yet.',
      build: 'Output details will be published soon.',
      result: 'Status will update once a new artifact is added.',
    }
  }

  const resultById = {
    'midterm-exercise-1': 'Best model reached 80.13% accuracy using Sex + Pclass + Age.',
    'exercise-1': 'Stable k values (k=3 and k=5) produced 96% classification accuracy.',
    'exercise-2': 'Validated class predictions with confusion matrix review and metric checks.',
  }

  return {
    challenge: output.description?.problem ?? 'Problem summary unavailable.',
    build:
      output.predictiveSkills?.slice(0, 2).join(' | ') ??
      'Implemented a complete, rubric-aligned predictive workflow.',
    result:
      resultById[output.id] ??
      'Delivered a complete output with measurable findings and reflective analysis.',
  }
}

function HomePage() {
  const navigate = useNavigate()
  const prelimOutputs = portfolioData.prelimOutputs ?? []
  const latestMidtermOutputs = portfolioData.midtermOutputs ?? []
  const finalsOutputs = portfolioData.finalsOutputs ?? []

  const resolveOutputTab = (outputId) => {
    if (latestMidtermOutputs.some((output) => output.id === outputId)) return 'midterm'
    if (prelimOutputs.some((output) => output.id === outputId)) return 'prelim'
    if (finalsOutputs.some((output) => output.id === outputId)) return 'finals'
    return 'prelim'
  }

  const latestOutput = latestMidtermOutputs[0] ?? prelimOutputs[0]
  const featuredOutputs = [
    ...latestMidtermOutputs.filter((output) => output.id !== latestOutput?.id),
    ...prelimOutputs,
  ].slice(0, 2)
  const totalOutputs = prelimOutputs.length + latestMidtermOutputs.length
  const snapshotItems = [
    { label: 'Total Published Outputs', value: String(totalOutputs) },
    {
      label: 'Latest Period',
      value: latestMidtermOutputs.length > 0 ? 'Midterm' : 'Prelim',
    },
    { label: 'Best Midterm Accuracy', value: '80.13%' },
    { label: 'Current Focus', value: 'Predictive Modeling' },
  ]

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
        aria-label="Results snapshot"
      >
        <MotionDiv variants={sectionMotion} className="mb-4">
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-cyan-300">
            Results Snapshot
          </p>
          <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
            Fast View of Key Outcomes
          </h2>
        </MotionDiv>

        <MotionDiv variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {snapshotItems.map((item) => (
            <MotionArticle
              key={item.label}
              variants={sectionMotion}
              className="rounded-xl border border-white/10 bg-soft-slate p-5"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
            </MotionArticle>
          ))}
        </MotionDiv>
      </MotionSection>

      <MotionSection
        variants={sectionMotion}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 pb-8 sm:px-6"
        aria-label="Start here guidance"
      >
        <MotionDiv className="rounded-2xl border border-cyan-300/25 bg-cyan-400/10 p-6 sm:p-7" variants={sectionMotion}>
          <p className="font-heading text-xs uppercase tracking-[0.24em] text-cyan-200">Start Here</p>
          <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
            Quick Review Path for Evaluators
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-100 sm:text-base">
            Thank you for reviewing this portfolio. For faster evaluation, begin with my latest
            exercise below, then open the full Outputs page for complete rubric-aligned details.
          </p>

          <div className="mt-5 rounded-xl border border-white/15 bg-[#0A1628]/60 p-4 sm:p-5">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-cyan-200">
              Latest Output
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{latestOutput.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              {latestOutput.description.problem}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                navigate(`/outputs/${resolveOutputTab(latestOutput.id)}/${latestOutput.id}`)
              }
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Open Latest Output <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/outputs')}
              className="inline-flex items-center gap-2 rounded-md border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              Open Full Outputs <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </MotionDiv>
      </MotionSection>

      <MotionSection
        variants={sectionMotion}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 pb-8 sm:px-6"
        aria-label="Prelim versus midterm comparison"
      >
        <MotionDiv className="rounded-2xl border border-white/10 bg-soft-slate p-6 sm:p-7" variants={sectionMotion}>
          <p className="font-heading text-xs uppercase tracking-[0.24em] text-cyan-300">
            Progress Compare
          </p>
          <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
            Prelim vs Midterm at a Glance
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-cyan-300/20 bg-[#0A1628]/60 p-4">
              <p className="font-heading text-xs uppercase tracking-[0.18em] text-cyan-200">Prelim</p>
              <p className="mt-2 text-sm text-slate-100">
                Built strong foundations in classification workflows and experimentation discipline.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-200">
                <li>Published Outputs: {prelimOutputs.length}</li>
                <li>Primary Focus: kNN and preprocessing quality</li>
                <li>Growth Signal: stronger model interpretation habits</li>
              </ul>
            </article>

            <article className="rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-4">
              <p className="font-heading text-xs uppercase tracking-[0.18em] text-cyan-100">Midterm</p>
              <p className="mt-2 text-sm text-slate-100">
                Shifted to deeper model evaluation with threshold trade-offs and validation focus.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-200">
                <li>Published Outputs: {latestMidtermOutputs.length}</li>
                <li>Primary Focus: Binary Logistic Regression</li>
                <li>Best Recorded Result: 80.13% accuracy</li>
              </ul>
            </article>
          </div>
        </MotionDiv>
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
            Other Key Outputs
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            The latest exercise is highlighted above. These cards show additional outputs that
            support the overall portfolio evaluation.
          </p>
        </MotionDiv>
        <MotionDiv variants={staggerContainer} className="grid gap-4 md:grid-cols-2">
          {featuredOutputs.map((output) => (
            <MotionArticle
              key={`featured-${output.id}`}
              variants={sectionMotion}
              className="rounded-xl border border-white/10 bg-soft-slate p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-heading text-xs uppercase tracking-[0.2em] text-cyan-200">
                  {output.exerciseLabel}
                </p>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">{output.title}</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p className="text-slate-100">
                  <span className="font-semibold text-cyan-100">Challenge:</span>{' '}
                  {getFeaturedNarrative(output).challenge}
                </p>
                <p className="text-slate-100">
                  <span className="font-semibold text-cyan-100">What I Built:</span>{' '}
                  {getFeaturedNarrative(output).build}
                </p>
                <p className="text-slate-100">
                  <span className="font-semibold text-cyan-100">Measured Result:</span>{' '}
                  {getFeaturedNarrative(output).result}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  navigate(
                    `/outputs/${resolveOutputTab(output.id)}/${output.id}`
                  )
                }
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
