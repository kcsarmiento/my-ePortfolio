import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Code2,
  Github,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from 'lucide-react'
import { portfolioData } from './data'

function App() {
  const sections = useMemo(
    () => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'outputs', label: 'ITC-C506 Outputs' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(true)
  const [activeOutputTab, setActiveOutputTab] = useState('prelim')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')

  const selectedPost = portfolioData.blogPosts[0]

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
      return
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false)
    setActiveSection(sectionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email format.'
    }

    if (!formData.message.trim()) {
      errors.message = 'Please write your message.'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters long.'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setSubmitState('idle')
    if (!validateForm()) return

    setSubmitState('sent')
    setFormData({ name: '', email: '', message: '' })
    setFormErrors({})
  }

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

  return (
    <div className={`min-h-screen bg-grid text-white antialiased ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-slate-900"
      >
        Skip to main content
      </a>

      <header className="site-header sticky top-0 z-40 border-b border-white/10 bg-[#0A1628]/90 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-[0.25em] text-cyan-300"
            aria-label="Go to Home page"
          >
            <Code2 className="h-4 w-4 transition group-hover:rotate-6" />
            Kc Sarmiento
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavClick(section.id)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  activeSection === section.id
                    ? 'bg-cyan-400/20 text-cyan-200'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-md border border-white/10 p-2 text-cyan-200 transition hover:bg-white/10"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded-md border border-white/10 p-2 text-cyan-200 transition hover:bg-white/10 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div id="mobile-nav" className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
            <div className="grid gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleNavClick(section.id)}
                  className={`rounded-md px-3 py-2 text-left text-sm transition ${
                    activeSection === section.id
                      ? 'bg-cyan-400/20 text-cyan-100'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="main-content" tabIndex={-1}>
        {activeSection === 'home' && (
          <>
            <motion.section
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
                    onClick={() => handleNavClick('outputs')}
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
            </motion.section>

            <motion.section
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-7xl px-4 pb-8 sm:px-6"
              aria-label="Featured work"
            >
              <motion.div variants={sectionMotion} className="mb-4">
                <p className="font-heading text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Featured Work
                </p>
                <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
                  ITC-C506 Prelim Highlights
                </h2>
              </motion.div>
              <motion.div variants={staggerContainer} className="grid gap-4 md:grid-cols-2">
                {portfolioData.prelimOutputs.slice(0, 2).map((output) => (
                  <motion.article
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
                      onClick={() => handleNavClick('outputs')}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                    >
                      Open full output card <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.article>
                ))}
              </motion.div>
            </motion.section>
          </>
        )}

        {activeSection === 'about' && (
          <motion.section
            id="about"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6"
          >
            <motion.div variants={sectionMotion} className="space-y-4">
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">
                About
              </p>
              <h2 className="font-heading text-3xl text-white sm:text-4xl">Academic Profile</h2>
              <p className="max-w-4xl text-slate-200">{portfolioData.identity.fullBio}</p>
            </motion.div>

            <motion.div variants={sectionMotion} className="grid gap-6 lg:grid-cols-3">
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
            </motion.div>
          </motion.section>
        )}

        {activeSection === 'outputs' && (
          <motion.section
            id="outputs"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6"
          >
            <motion.div variants={sectionMotion} className="space-y-3">
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">
                ITC-C506 Prelim Period
              </p>
              <h2 className="font-heading text-3xl text-white sm:text-4xl">Course Outputs</h2>
              <p className="max-w-4xl text-slate-200">
                Each exercise below is organized by the rubric-critical sections: The Output,
                The Description, Predictive Skills, The So What, and The Learning Reflection.
              </p>
            </motion.div>

            <motion.div variants={sectionMotion} className="flex flex-wrap gap-3">
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
            </motion.div>

            {activeOutputTab === 'prelim' ? (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="grid gap-6"
              >
                {portfolioData.prelimOutputs.map((item) => (
                  <motion.article
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
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.article
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
              </motion.article>
            )}
          </motion.section>
        )}

        {activeSection === 'blog' && (
          <motion.section
            id="blog"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6"
          >
            <motion.div variants={sectionMotion} className="space-y-3">
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">Blog</p>
              <h2 className="font-heading text-3xl text-white sm:text-4xl">Full Article</h2>
              <p className="max-w-4xl text-slate-200">
                This section now opens directly to the complete blog post instead of showing
                multiple article cards.
              </p>
            </motion.div>

            {selectedPost && (
              <motion.article
                id={`blog-post-${selectedPost.id}`}
                variants={sectionMotion}
                className="rounded-2xl border border-white/10 bg-soft-slate p-6 sm:p-8"
              >
                <p className="font-heading text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Full Blog Post
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{selectedPost.title}</h3>
                {selectedPost.author && (
                  <p className="mt-2 text-sm text-slate-100">By {selectedPost.author}</p>
                )}
                <p className="mt-2 text-sm text-cyan-100/90">
                  {selectedPost.date} | {selectedPost.readTime}
                </p>
                {selectedPost.updated && (
                  <p className="mt-1 text-sm text-slate-300">Updated: {selectedPost.updated}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedPost.categories.map((category) => (
                    <span
                      key={`${selectedPost.id}-detail-${category}`}
                      className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-100"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="prose prose-invert mt-6 max-w-none whitespace-pre-line text-slate-100">
                  {selectedPost.content}
                </div>
              </motion.article>
            )}
          </motion.section>
        )}

        {activeSection === 'contact' && (
          <motion.section
            id="contact"
            variants={sectionMotion}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-7xl px-4 py-20 sm:px-6"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
              <aside className="space-y-4 rounded-2xl border border-white/10 bg-soft-slate p-6">
                <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Contact
                </p>
                <h2 className="font-heading text-3xl text-white">Get in Touch</h2>
                <p className="text-slate-200">
                  For collaboration, academic inquiries, or project discussions, you can
                  contact me using the form or direct links below.
                </p>
                <a
                  href={`mailto:${portfolioData.identity.email}`}
                  className="inline-flex items-center gap-2 text-cyan-100 hover:text-cyan-200"
                >
                  <Mail className="h-4 w-4" /> {portfolioData.identity.email}
                </a>
                <a
                  href={portfolioData.identity.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-fit rounded-md border border-cyan-300/30 px-3 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/10"
                >
                  <Github className="mr-2 inline h-4 w-4" /> github.com/kcsarmiento
                </a>
                <p className="text-sm text-slate-300">LinkedIn link to be added later.</p>
              </aside>

              <form
                onSubmit={handleFormSubmit}
                noValidate
                className="space-y-4 rounded-2xl border border-white/10 bg-soft-slate p-6"
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-cyan-100">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, name: event.target.value }))
                    }
                    className="w-full rounded-md border border-white/15 bg-[#0A1628] px-3 py-2 text-white outline-none transition focus:border-cyan-300"
                    aria-invalid={Boolean(formErrors.name)}
                    aria-describedby={formErrors.name ? 'name-error' : undefined}
                  />
                  {formErrors.name && (
                    <p id="name-error" className="mt-1 text-sm text-rose-300">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-cyan-100">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="w-full rounded-md border border-white/15 bg-[#0A1628] px-3 py-2 text-white outline-none transition focus:border-cyan-300"
                    aria-invalid={Boolean(formErrors.email)}
                    aria-describedby={formErrors.email ? 'email-error' : undefined}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="mt-1 text-sm text-rose-300">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-cyan-100">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, message: event.target.value }))
                    }
                    className="w-full rounded-md border border-white/15 bg-[#0A1628] px-3 py-2 text-white outline-none transition focus:border-cyan-300"
                    aria-invalid={Boolean(formErrors.message)}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  />
                  {formErrors.message && (
                    <p id="message-error" className="mt-1 text-sm text-rose-300">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-2 font-semibold text-slate-900 transition hover:bg-cyan-300"
                >
                  <Send className="h-4 w-4" /> Send
                </button>
                {submitState === 'sent' && (
                  <p className="text-sm text-emerald-300">
                    Message drafted successfully. This demo form is ready for backend
                    integration.
                  </p>
                )}
              </form>
            </div>
          </motion.section>
        )}
      </main>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-xs text-slate-300 sm:px-6">
        © 2025 Kc Sarmiento | Jose Rizal University | ITC-C506 ePortfolio |
        kc.sarmiento@my.jru.edu | GitHub: github.com/kcsarmiento
      </footer>
    </div>
  )
}

export default App
