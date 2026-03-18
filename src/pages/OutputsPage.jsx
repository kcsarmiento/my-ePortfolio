import { useEffect, useMemo, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { portfolioData } from '../data/portfolioData'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionArticle = motion.article

const periodTabs = ['prelim', 'midterm', 'finals']

function OutputsPage() {
  const { period, exerciseId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const lastScrolledTargetRef = useRef('')
  
  // Support backward compatibility with query params
  const query = useMemo(() => new URLSearchParams(location.search), [location.search])
  const targetOutputId = exerciseId ?? query.get('output')
  const requestedPeriod = period ?? query.get('tab')

  const getTabFromOutputId = (outputId) => {
    if (portfolioData.midtermOutputs?.some((output) => output.id === outputId)) return 'midterm'
    if (portfolioData.prelimOutputs?.some((output) => output.id === outputId)) return 'prelim'
    if (portfolioData.finalsOutputs?.some((output) => output.id === outputId)) return 'finals'
    return null
  }

  const initialTab = periodTabs.includes(requestedPeriod)
    ? requestedPeriod
    : (getTabFromOutputId(targetOutputId) ?? 'prelim')
  const activeOutputTab = initialTab
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!targetOutputId) return

    const targetKey = `${location.key}:${activeOutputTab}:${targetOutputId}`
    if (lastScrolledTargetRef.current === targetKey) return

    let attempts = 0
    let timeoutId

    const tryScroll = () => {
      const targetCard = document.getElementById(`output-card-${targetOutputId}`)

      if (targetCard) {
        targetCard.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
        lastScrolledTargetRef.current = targetKey
        return
      }

      if (attempts < 12) {
        attempts += 1
        timeoutId = window.setTimeout(tryScroll, 60)
      }
    }

    // Always start fresh when targetOutputId changes
    lastScrolledTargetRef.current = ''
    tryScroll()

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [targetOutputId, activeOutputTab, location.key, shouldReduceMotion])

  const sectionMotion = useMemo(
    () =>
      shouldReduceMotion
        ? {
            hidden: { opacity: 1, y: 0 },
            show: { opacity: 1, y: 0 },
          }
        : {
            hidden: { opacity: 0, y: 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: 'easeOut' },
            },
          },
    [shouldReduceMotion]
  )

  const staggerContainer = useMemo(
    () =>
      shouldReduceMotion
        ? {
            hidden: { opacity: 1 },
            show: { opacity: 1 },
          }
        : {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
    [shouldReduceMotion]
  )

  const activeOutputs = useMemo(() => {
    const allOutputs = portfolioData[`${activeOutputTab}Outputs`] ?? []
    // If viewing single exercise, filter to just that one
    if (targetOutputId) {
      return allOutputs.filter((output) => output.id === targetOutputId)
    }
    return allOutputs
  }, [activeOutputTab, targetOutputId])

  const activePeriod = useMemo(
    () => portfolioData.futureProofing[activeOutputTab],
    [activeOutputTab]
  )

  const periodHeading = {
    prelim: 'ITC-C506 Prelim Period',
    midterm: 'ITC-C506 Midterm Period',
    finals: 'ITC-C506 Finals Period',
  }[activeOutputTab]

  return (
    <MotionSection
      id="outputs"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6"
    >
      <MotionDiv variants={sectionMotion} className="space-y-3">
        <p className="font-heading text-xs uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
          {periodHeading}
        </p>
        <h2 className="font-heading text-3xl text-white sm:text-4xl">Course Outputs</h2>
        <p className="max-w-5xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Each exercise below is organized by the rubric-critical sections: The Output,
          The Description, Predictive Skills, The So What, and The Learning Reflection.
        </p>
      </MotionDiv>

      <MotionDiv variants={sectionMotion} className="flex flex-wrap gap-4">
        {periodTabs.map((periodTab) => (
          <button
            key={periodTab}
            type="button"
            onClick={() => navigate(`/outputs/${periodTab}`)}
            className={`rounded-md px-4 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
              activeOutputTab === periodTab
                ? 'bg-cyan-400 text-slate-900'
                : 'border border-white/15 text-slate-200 hover:bg-white/10'
            }`}
          >
            {periodTab}
          </button>
        ))}
      </MotionDiv>

      {activeOutputs.length > 0 ? (
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-6"
        >
          {activeOutputs.map((item) => (
            <MotionArticle
              variants={sectionMotion}
              key={item.id}
              id={`output-card-${item.id}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-soft-slate"
            >
              <div className="border-b border-white/10 px-5 py-4 sm:px-6">
                <p className="font-heading text-xs uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
                  {item.exerciseLabel} | {item.exerciseCode}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-white sm:text-2xl">{item.title}</h3>
                {item.caption && (
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    Title: {item.caption.title} | Author: {item.caption.author} |
                    Date: {item.caption.date}
                  </p>
                )}
              </div>

              <div className="space-y-6 p-5 sm:p-6">
                <section aria-label="The Output" className="space-y-4">
                  <h4 className="font-heading text-sm uppercase tracking-[0.16em] text-cyan-200 sm:text-base">
                    a) The Output
                  </h4>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {item.outputEmbeds.map((embed, index) => (
                      <div
                        key={`${item.id}-${embed.label}`}
                        className="overflow-hidden rounded-lg border border-cyan-300/20 bg-[#0A1628]/70"
                      >
                        <p className="border-b border-cyan-300/20 px-3 py-2 text-xs font-medium text-cyan-100 sm:text-sm">
                          {embed.label}
                        </p>
                        <div className="aspect-video">
                          <iframe
                            src={embed.url}
                            title={`${item.title} embedded output ${index + 1}`}
                            className="h-full w-full"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                        {embed.altText && (
                          <p className="border-t border-cyan-300/20 px-3 py-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
                            Alt text: {embed.altText}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                <section aria-label="The Description" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.16em] text-cyan-200 sm:text-base">
                    b) The Description
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                    <span className="font-semibold text-cyan-100">Dataset:</span>{' '}
                    {item.description.dataset}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                    <span className="font-semibold text-cyan-100">Source:</span>{' '}
                    {item.description.source}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                    <span className="font-semibold text-cyan-100">Problem Solved:</span>{' '}
                    {item.description.problem}
                  </p>
                  {item.importance && (
                    <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                      <span className="font-semibold text-cyan-100">Importance:</span>{' '}
                      {item.importance}
                    </p>
                  )}
                </section>

                <section aria-label="Predictive Skills" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.16em] text-cyan-200 sm:text-base">
                    c) Predictive Skills
                  </h4>
                  <ul className="grid gap-3 text-sm text-slate-100 sm:text-base">
                    {item.predictiveSkills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-white/10 bg-[#102038] px-4 py-3 leading-relaxed"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-label="The So What" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.16em] text-cyan-200 sm:text-base">
                    d) The So What
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-100 sm:text-base">{item.soWhat}</p>
                </section>

                <section aria-label="The Learning Reflection" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.16em] text-cyan-200 sm:text-base">
                    e) The Learning Reflection
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-100 sm:text-base">{item.reflection}</p>
                  {item.reflectionDetails && (
                    <div className="grid gap-3 pt-2 text-sm leading-relaxed text-slate-100 sm:text-base">
                      <p>
                        <span className="font-semibold text-cyan-100">Growth and Competencies:</span>{' '}
                        {item.reflectionDetails.growth}
                      </p>
                      <p>
                        <span className="font-semibold text-cyan-100">Accomplishments:</span>{' '}
                        {item.reflectionDetails.accomplishments}
                      </p>
                      <p>
                        <span className="font-semibold text-cyan-100">Critique:</span>{' '}
                        {item.reflectionDetails.critique}
                      </p>
                      <p>
                        <span className="font-semibold text-cyan-100">Practical Alternative:</span>{' '}
                        {item.reflectionDetails.alternative}
                      </p>
                      <p>
                        <span className="font-semibold text-cyan-100">Short-term Goal:</span>{' '}
                        {item.reflectionDetails.shortTermGoal}
                      </p>
                      <p>
                        <span className="font-semibold text-cyan-100">Long-term Goal:</span>{' '}
                        {item.reflectionDetails.longTermGoal}
                      </p>
                    </div>
                  )}
                </section>
              </div>
            </MotionArticle>
          ))}
        </MotionDiv>
      ) : (
        <MotionArticle
          variants={sectionMotion}
          initial="hidden"
          animate="show"
          className="rounded-2xl border border-white/10 bg-soft-slate p-8"
        >
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-cyan-300">
                {activePeriod.heading}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                {activePeriod.status}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
                {activePeriod.summary}
          </p>

                {activePeriod.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {activePeriod.links.map((link) => (
                      <a
                        key={`${activeOutputTab}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
        </MotionArticle>
      )}
    </MotionSection>
  )
}

export default OutputsPage
