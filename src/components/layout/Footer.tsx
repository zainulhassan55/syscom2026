import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { conference } from '../../data/conference'
import { SiteLogo } from '../ui/SiteLogo'

export function Footer() {
  return (
    <footer className="relative bg-brand-950 text-slate-400">
      {/* Gold top accent line */}
      <div className="h-1 bg-linear-to-r from-transparent via-gold-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-5 inline-block rounded-xl bg-white p-2.5 transition hover:opacity-90">
              <SiteLogo className="h-12 sm:h-14" />
            </Link>
            <p className="text-sm leading-relaxed">
              Premier international platform for deliberations on smart systems, advanced computing, and intelligent autonomous technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ['Call for Papers', '/call-for-papers'],
                ['Important Dates', '/important-dates'],
                ['Paper Submission', '/paper-submission'],
                ['Keynote Speakers', '/keynote-speakers'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="transition hover:text-gold-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-gold-400">
              Conference
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ['Committees', '/committees'],
                ['SysCom 2025 (2nd Edition)', 'https://link.springer.com/book/10.1007/978-3-031-40905-9'],
                ['SysCom 2024 (1st Edition)', 'https://ceur-ws.org/Vol-3080/'],
                ['Contact Us', '/contact'],
              ].map(([label, path]) => (
                <li key={path}>
                  {path.startsWith('http') ? (
                    <a href={path} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-400">
                      {label}
                    </a>
                  ) : (
                    <Link to={path} className="transition hover:text-gold-400">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-widest text-gold-400">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>
                  {conference.venue}
                  <br />
                  {conference.location}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                <a href={`mailto:${conference.email}`} className="hover:text-gold-400 transition">
                  {conference.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-sm sm:flex-row">
          <p>© 2026 SysCom Conference. All rights reserved.</p>
          <p className="text-gold-600/70">December 19–20, 2026 · Asia University, Taichung</p>
        </div>
      </div>
    </footer>
  )
}
