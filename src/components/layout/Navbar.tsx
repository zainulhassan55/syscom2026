import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { archiveLinks } from '../../data/archive'
import { SiteLogo } from '../ui/SiteLogo'

type DropdownChild = { label: string; path?: string; href?: string }
type DropdownItem = { label: string; path?: string; children?: DropdownChild[] }

const mainLinks = [
  { label: 'Home', path: '/' },
  { label: 'Call for Papers', path: '/call-for-papers' },
  { label: 'Important Dates', path: '/important-dates' },
  { label: 'Keynote Speakers', path: '/keynote-speakers' },
  { label: 'Contact', path: '/contact' },
]

const papersDropdown: DropdownItem[] = [
  { label: 'Paper Submission', path: '/paper-submission' },
  { label: 'Paper Review', path: '/paper-review' },
  { label: 'Paper Registration', path: '/paper-registration' },
  { label: 'Publication and Indexing', path: '/publication-indexing' },
]

const moreDropdown: DropdownItem[] = [
  { label: 'Committees', path: '/committees' },
  {
    label: 'Archive',
    children: archiveLinks.map((link) => ({
      label: link.label,
      href: link.href,
      path: link.label.includes('2nd') ? '/archive/2nd-edition' : '/archive/1st-edition',
    })),
  },
]

function MobileNavDropdown({
  label,
  items,
  onClose,
}: {
  label: string
  items: DropdownItem[]
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)
  const [archiveOpen, setArchiveOpen] = useState(false)

  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-slate-800"
      >
        {label}
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="pb-3 pl-1">
          {items.map((item) =>
            item.children ? (
              <div key={item.label} className="mb-1">
                <button
                  type="button"
                  onClick={() => setArchiveOpen((prev) => !prev)}
                  aria-expanded={archiveOpen}
                  className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-slate-600"
                >
                  {item.label}
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${archiveOpen ? 'rotate-180' : ''}`} />
                </button>
                {archiveOpen && (
                  <div className="space-y-1 border-l-2 border-brand-100 pl-4">
                    {item.children.map((child) =>
                      child.href ? (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onClose}
                          className="block py-2.5 text-sm text-slate-600 active:text-brand-700"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.path}
                          to={child.path!}
                          onClick={onClose}
                          className="block py-2.5 text-sm text-slate-600 active:text-brand-700"
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                onClick={onClose}
                className="block py-2.5 text-sm text-slate-600 active:text-brand-700"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  )
}

function DesktopNavDropdown({
  label,
  items,
  dark,
}: {
  label: string
  items: DropdownItem[]
  dark: boolean
}) {
  const [open, setOpen] = useState(false)
  const [archiveOpen, setArchiveOpen] = useState(false)

  const triggerClass = dark
    ? 'text-slate-200 hover:text-white hover:bg-white/10'
    : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'

  const itemHover = dark ? 'hover:text-gold-400' : 'hover:text-brand-700 hover:bg-brand-50'

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
                        {item.children.map((child) =>
                          child.href ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`block px-4 py-2.5 text-sm text-slate-600 ${itemHover}`}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.path}
                              to={child.path!}
                              className={`block px-4 py-2.5 text-sm text-slate-600 ${itemHover}`}
                            >
                              {child.label}
                            </Link>
                          ),
                        )}
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

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close menu overlay"
            className="fixed inset-0 z-[9998] bg-brand-950/70 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 z-[9999] flex h-[100dvh] w-[min(100vw,360px)] flex-col bg-white shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-5 py-4">
              <SiteLogo className="h-9 max-w-[150px]" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-lg p-2 text-slate-600 active:bg-slate-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className="block border-b border-slate-100 py-4 text-base font-medium text-slate-800 active:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
              <MobileNavDropdown label="Papers" items={papersDropdown} onClose={onClose} />
              <MobileNavDropdown label="More" items={moreDropdown} onClose={onClose} />
            </nav>

            <div className="shrink-0 border-t border-slate-100 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <Link
                to="/paper-submission"
                onClick={onClose}
                className="btn-gold block rounded-xl py-3.5 text-center text-base font-semibold"
              >
                Submit Paper
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(!isHome)
  const [mobileOpen, setMobileOpen] = useState(false)
  const solid = scrolled || !isHome || mobileOpen
  const dark = isHome && !scrolled && !mobileOpen

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  useEffect(() => {
    setScrolled(!isHome || window.scrollY > 40)
  }, [isHome, location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(!isHome ? true : window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    closeMobile()
  }, [location.pathname, closeMobile])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile()
    }
    if (mobileOpen) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen, closeMobile])

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
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          solid ? 'glass-nav' : 'glass-nav-dark'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="min-w-0 shrink transition hover:opacity-90" onClick={closeMobile}>
            <SiteLogo className="h-8 max-w-[140px] sm:h-10 sm:max-w-[180px] lg:h-12 lg:max-w-[240px]" />
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
            <DesktopNavDropdown label="Papers" items={papersDropdown} dark={dark} />
            <DesktopNavDropdown label="More" items={moreDropdown} dark={dark} />
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/paper-submission"
              className="btn-gold hidden rounded-xl px-4 py-2 text-sm md:inline-block lg:px-5 lg:py-2.5"
            >
              Submit Paper
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className={`relative z-10 rounded-lg p-2.5 lg:hidden ${
                dark ? 'text-white active:bg-white/10' : 'text-brand-900 active:bg-slate-100'
              }`}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  )
}
