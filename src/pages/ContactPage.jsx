import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Send } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const MotionSection = motion.section

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')

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

  return (
    <MotionSection
      id="contact"
      variants={sectionMotion}
      initial="hidden"
      animate="show"
      className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center px-4 py-20 sm:px-6"
    >
      <div className="w-full grid gap-8 lg:grid-cols-[1fr,1.2fr]">
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
    </MotionSection>
  )
}

export default ContactPage
