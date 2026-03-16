import { useState } from 'react'
import { motion } from 'framer-motion'
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

function OutputsPage() {
  const [activeOutputTab, setActiveOutputTab] = useState('prelim')

  return (
    <MotionSection
      id="outputs"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6"
    >
      <MotionDiv variants={sectionMotion} className="space-y-3">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">
          ITC-C506 Prelim Period
        </p>
        <h2 className="font-heading text-3xl text-white sm:text-4xl">Course Outputs</h2>
        <p className="max-w-4xl text-slate-200">
          Each exercise below is organized by the rubric-critical sections: The Output,
          The Description, Predictive Skills, The So What, and The Learning Reflection.
        </p>
      </MotionDiv>

      <MotionDiv variants={sectionMotion} className="flex flex-wrap gap-3">
        {['prelim', 'midterm', 'finals'].map((period) => (
          <button
            key={period}
            type="button"
            onClick={() => setActiveOutputTab(period)}
            className={`rounded-md px-4 py-2 text-sm font-medium uppercase tracking-wider transition ${
              activeOutputTab === period
                ? 'bg-cyan-400 text-slate-900'
                : 'border border-white/15 text-slate-200 hover:bg-white/10'
            }`}
          >
            {period}
          </button>
        ))}
      </MotionDiv>

      {activeOutputTab === 'prelim' ? (
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-6"
        >
          {portfolioData.prelimOutputs.map((item) => (
            <MotionArticle
              variants={sectionMotion}
              key={item.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-soft-slate"
            >
              <div className="border-b border-white/10 px-5 py-4 sm:px-6">
                <p className="font-heading text-xs uppercase tracking-[0.25em] text-cyan-300">
                  {item.exerciseLabel} | {item.exerciseCode}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                {item.caption && (
                  <p className="mt-2 text-xs text-slate-300">
                    Title: {item.caption.title} | Author: {item.caption.author} |
                    Date: {item.caption.date}
                  </p>
                )}
              </div>

              <div className="space-y-6 p-5 sm:p-6">
                <section aria-label="The Output" className="space-y-4">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-cyan-200">
                    a) The Output
                  </h4>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {item.outputEmbeds.map((embed, index) => (
                      <div
                        key={`${item.id}-${embed.label}`}
                        className="overflow-hidden rounded-lg border border-cyan-300/20 bg-[#0A1628]/70"
                      >
                        <p className="border-b border-cyan-300/20 px-3 py-2 text-xs text-cyan-100">
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
                          <p className="border-t border-cyan-300/20 px-3 py-2 text-xs text-slate-200">
                            Alt text: {embed.altText}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                <section aria-label="The Description" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-cyan-200">
                    b) The Description
                  </h4>
                  <p className="text-sm text-slate-100">
                    <span className="font-semibold text-cyan-100">Dataset:</span>{' '}
                    {item.description.dataset}
                  </p>
                  <p className="text-sm text-slate-100">
                    <span className="font-semibold text-cyan-100">Source:</span>{' '}
                    {item.description.source}
                  </p>
                  <p className="text-sm text-slate-100">
                    <span className="font-semibold text-cyan-100">Problem Solved:</span>{' '}
                    {item.description.problem}
                  </p>
                  {item.importance && (
                    <p className="text-sm text-slate-100">
                      <span className="font-semibold text-cyan-100">Importance:</span>{' '}
                      {item.importance}
                    </p>
                  )}
                </section>

                <section aria-label="Predictive Skills" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-cyan-200">
                    c) Predictive Skills
                  </h4>
                  <ul className="grid gap-2 text-sm text-slate-100">
                    {item.predictiveSkills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-white/10 bg-[#102038] px-3 py-2"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-label="The So What" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-cyan-200">
                    d) The So What
                  </h4>
                  <p className="text-sm text-slate-100">{item.soWhat}</p>
                </section>

                <section aria-label="The Learning Reflection" className="space-y-2">
                  <h4 className="font-heading text-sm uppercase tracking-[0.2em] text-cyan-200">
                    e) The Learning Reflection
                  </h4>
                  <p className="text-sm text-slate-100">{item.reflection}</p>
                  {item.reflectionDetails && (
                    <div className="grid gap-2 pt-2 text-sm text-slate-100">
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
          <p className="font-heading text-xs uppercase tracking-[0.25em] text-cyan-300">
            {portfolioData.futureProofing[activeOutputTab].heading}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            {portfolioData.futureProofing[activeOutputTab].status}
          </h3>
          <p className="mt-3 max-w-3xl text-slate-200">
            {portfolioData.futureProofing[activeOutputTab].summary}
          </p>
        </MotionArticle>
      )}
    </MotionSection>
  )
}

export default OutputsPage
