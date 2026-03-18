import { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Code2, Menu, Moon, Sun, X } from 'lucide-react'
import Snowfall from 'react-snowfall'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/outputs', label: 'ITC-C506 Outputs' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function SiteLayout() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const year = useMemo(() => new Date().getFullYear(), [])

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className={`min-h-screen bg-grid text-white antialiased ${darkMode ? 'theme-dark' : 'theme-light'} flex flex-col`}>
      <Snowfall className="pointer-events-none fixed inset-0 z-30" snowflakeCount={120} />

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
          <NavLink
            to="/"
            className="group inline-flex items-center gap-2 font-heading text-sm uppercase tracking-[0.25em] text-cyan-300"
            aria-label="Go to Home page"
          >
            <Code2 className="h-4 w-4 transition group-hover:rotate-6" />
            Kc Sarmiento
          </NavLink>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-cyan-400/20 text-cyan-200'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
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
              {navItems.map((item) => (
                <NavLink
                  key={`mobile-${item.to}`}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? 'bg-cyan-400/20 text-cyan-100'
                        : 'text-slate-200 hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-auto border-t border-white/10 px-4 py-6 text-center text-xs text-slate-300 sm:px-6">
        © {year} Kc Sarmiento | Jose Rizal University | ITC-C506 ePortfolio |
        kc.sarmiento@my.jru.edu | GitHub: github.com/kcsarmiento
      </footer>
    </div>
  )
}

export default SiteLayout
