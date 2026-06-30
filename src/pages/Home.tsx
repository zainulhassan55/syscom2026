import { Link } from 'react-router-dom'
import { Award, Users, Globe, BookOpen, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { HeroSection } from '../components/home/HeroSection'
import { SectionTitle } from '../components/ui/SectionTitle'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { TracksGrid } from '../components/ui/TrackCard'
import { aimAndScope, bestPaperAward } from '../data/conference'

const stats = [
  { icon: BookOpen, value: '10', label: 'Research Tracks', desc: 'Specialized domains' },
  { icon: Users, value: '500+', label: 'Attendees', desc: 'Global researchers' },
  { icon: Globe, value: '40+', label: 'Countries', desc: 'Worldwide reach' },
  { icon: Award, value: '01', label: 'Best Paper', desc: 'Prestigious award' },
]

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop'

export function Home() {
  return (
    <>
      <HeroSection />

      {/* About — split layout */}
      <AnimatedSection className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 rounded-3xl bg-brand-600/10 blur-xl" aria-hidden="true" />
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/15"
              >
                <img
                  src={ABOUT_IMAGE}
                  alt="Researchers collaborating on smart systems"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-brand-900/40 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-4 rounded-2xl border border-gold-500/30 bg-white p-5 shadow-xl sm:-right-8"
              >
                <p className="font-display text-3xl font-bold text-brand-800">Dec 19–20</p>
                <p className="text-sm text-slate-500">Taichung, Taiwan 2026</p>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionTitle
                label="About the Conference"
                title="Aim & Scope"
                description={aimAndScope.intro}
                align="left"
              />
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {aimAndScope.paragraphs.slice(0, 3).map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
              <Link
                to="/call-for-papers"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 transition hover:text-gold-600"
              >
                Read full scope
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats bento grid */}
      <section className="bg-brand-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label center mx-auto">By the Numbers</span>
            <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">
              A Global Research Platform
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark group rounded-2xl p-7 transition hover:border-gold-500/30"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gold-500/15 p-3">
                  <Icon className="h-6 w-6 text-gold-400" />
                </div>
                <p className="font-display text-4xl font-bold text-gold-400">{value}</p>
                <p className="mt-1 font-semibold text-white">{label}</p>
                <p className="mt-1 text-sm text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <AnimatedSection className="bg-surface-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Research Areas"
            title="Conference Tracks"
            description="Ten specialized tracks spanning the full spectrum of smart systems and advanced computing research."
          />
          <TracksGrid />
        </div>
      </AnimatedSection>

      {/* Best paper award */}
      <AnimatedSection className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-800 to-brand-950 p-10 md:p-14">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px',
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-gold-500 to-gold-400 shadow-xl shadow-gold-500/30"
              >
                <Award className="h-14 w-14 text-brand-950" />
              </motion.div>
              <div className="flex-1">
                <span className="section-label">Recognition</span>
                <h3 className="font-display mt-3 text-3xl font-bold text-white">{bestPaperAward.title}</h3>
                <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">{bestPaperAward.description}</p>
              </div>
              <Link
                to="/paper-submission"
                className="btn-gold shrink-0 rounded-2xl px-7 py-3.5 text-sm"
              >
                Submit Your Paper
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="border-t border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="section-label center mx-auto">Join Us</span>
          <h2 className="font-display mt-4 text-3xl font-bold text-brand-900 md:text-4xl">
            Be Part of SysCom 2026 in Taichung
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Connect with leading researchers, share your work, and shape the future of smart systems technology.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/paper-submission" className="btn-gold rounded-2xl px-8 py-4 text-base">
              Submit Your Paper
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl border-2 border-brand-200 px-8 py-4 font-semibold text-brand-800 transition hover:border-brand-400 hover:bg-brand-50"
            >
              Contact Organizers
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
