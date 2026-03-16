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

function BlogPage() {
  const selectedPost = portfolioData.blogPosts[0]

  return (
    <MotionSection
      id="blog"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6"
    >
      <MotionDiv variants={sectionMotion} className="space-y-3">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-cyan-300">Blog</p>
        <h2 className="font-heading text-3xl text-white sm:text-4xl">Full Article</h2>
        <p className="max-w-4xl text-slate-200">
          This section now opens directly to the complete blog post instead of showing
          multiple article cards.
        </p>
      </MotionDiv>

      {selectedPost && (
        <MotionArticle
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
        </MotionArticle>
      )}
    </MotionSection>
  )
}

export default BlogPage
