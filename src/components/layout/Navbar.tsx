import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const mainLinks = [
  { label: 'Home', path: '/' },
  { label: 'Call for Papers', path: '/call-for-papers' },
  { label: 'Important Dates', path: '/important-dates' },
  { label: 'Keynote Speakers', path: '/keynote-speakers' },
  { label: 'Contact', path: '/contact' },
]

const papersDropdown = [
  { label: 'Paper Submission', path: '/paper-submission' },
  { label: 'Paper Review', path: '/paper-review' },
  { label: 'Paper Registration', path: '/paper-registration' },
]

const moreDropdown = [
  { label: 'Committees', path: '/committees' },
  {
    label: 'Archive',
    children: [
      { label: "SysCom's 2nd Edition", path: '/archive/2nd-edition' },
      { label: "SysCom's 1st Edition", path: '/archive/1st-edition' },
    ],
  },
]

function NavDropdown({
  label,
  items,
  mobile = false,
  dark = false,
  onClose,
}: {
  label: string
  items: Array<{ label: string; path?: string; children?: Array<{ label: string; path: string }> }>
  mobile?: boolean
  dark?: boolean
  onClose?: () => void
}) {
  const [open, setOpen] = useState(false)
  const [archiveOpen, setArchiveOpen] = useState(false)

  const triggerClass = dark
    ? 'text-slate-200 hover:text-white hover:bg-white/10'
    : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'

  const itemHover = dark ? 'hover:text-gold-400' : 'hover:text-brand-700 hover:bg-brand-50'

  if (mobile) {
    return (
      <div className="border-b border-slate-100 py-2">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-2 text-left font-medium text-slate-700"
        >
          {label}
          <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pl-4"
            >
              {items.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setArchiveOpen(!archiveOpen)}
                      className="flex w-full items-center justify-between py-2 text-sm text-slate-600"
                    >
                      {item.label}
                      <ChevronDown className={`h-3 w-3 transition ${archiveOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {archiveOpen &&
                      item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={onClose}
                          className="block py-2 pl-3 text-sm text-slate-500 hover:text-brand-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path!}
                    onClick={onClose}
                    className="block py-2 text-sm text-slate-600 hover:text-brand-600"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${triggerClass}`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 z-50 mt-1 min-w-[220px] rounded-xl border border-slate-100 bg-white py-2 shadow-xl shadow-brand-900/10"
          >
            {items.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setArchiveOpen(true)}
                  onMouseLeave={() => setArchiveOpen(false)}
                >
                  <span className={`flex cursor-default items-center justify-between px-4 py-2.5 text-sm text-slate-700 ${itemHover}`}>
                    {item.label}
                    <ChevronDown className="-rotate-90 h-3 w-3" />
                  </span>
                  <AnimatePresence>
                    {archiveOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        className="absolute top-0 left-full ml-1 min-w-[200px] rounded-xl border border-slate-100 bg-white py-2 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm text-slate-600 ${itemHover}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`block px-4 py-2.5 text-sm text-slate-600 ${itemHover}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(!isHome)
  const [mobileOpen, setMobileOpen] = useState(false)
  const solid = scrolled || !isHome
  const dark = isHome && !solid

  useEffect(() => {
    setScrolled(!isHome || window.scrollY > 40)
  }, [isHome, location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(!isHome ? true : window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const linkClass = dark
    ? 'text-slate-200 hover:text-white hover:bg-white/10'
    : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'

  const activeLinkClass = (path: string) =>
    location.pathname === path
      ? dark
        ? 'text-gold-400'
        : 'text-brand-700 bg-brand-50'
      : ''

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        solid ? 'glass-nav' : 'glass-nav-dark'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-gold-500 to-gold-400 shadow-lg shadow-gold-500/25 transition group-hover:scale-105">
            <span className="font-display text-base font-bold text-brand-950">SC</span>
          </div>
          <div className="hidden sm:block">
            <p className={`font-display text-lg font-bold leading-none ${dark ? 'text-white' : 'text-brand-900'}`}>
              SysCom
            </p>
            <p className={`text-xs font-medium ${dark ? 'text-gold-400' : 'text-gold-600'}`}>2026</p>
          </div>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${linkClass} ${activeLinkClass(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
          <NavDropdown label="Papers" items={papersDropdown} dark={dark} />
          <NavDropdown label="More" items={moreDropdown} dark={dark} />
        </div>

        <Link
          to="/paper-submission"
          className="btn-gold hidden rounded-xl px-5 py-2.5 text-sm md:inline-block"
        >
          Submit Paper
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className={`rounded-lg p-2 lg:hidden ${dark ? 'text-white' : 'text-brand-900'}`}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-brand-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 flex h-full w-[min(320px,85vw)] flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <span className="font-display text-xl font-bold text-brand-900">SysCom 2026</span>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-slate-500" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                {mainLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-slate-100 py-3.5 font-medium text-slate-700 hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                ))}
                <NavDropdown label="Papers" items={papersDropdown} mobile onClose={() => setMobileOpen(false)} />
                <NavDropdown label="More" items={moreDropdown} mobile onClose={() => setMobileOpen(false)} />
              </div>
              <div className="border-t border-slate-100 p-5">
                <Link
                  to="/paper-submission"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold block rounded-xl py-3.5 text-center text-sm"
                >
                  Submit Paper
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
