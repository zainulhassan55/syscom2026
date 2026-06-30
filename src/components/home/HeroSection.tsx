import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, Microscope } from 'lucide-react'
import { conference } from '../../data/conference'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="hero-bg absolute inset-0 scale-105" aria-hidden="true" />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-600/20 blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gold-500/10 blur-[80px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-24">
        {/* Left — Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2"
          >
            <Microscope className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-medium tracking-wide text-gold-300">
              3rd International Edition · 2026
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-brand-400"
          >
            International Conference on
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display mt-3 text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            Smart System &{' '}
            <span className="text-gold-gradient">Advanced Computing</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-5 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="font-display text-2xl font-bold text-white sm:text-3xl">
              {conference.shortTitle}
            </span>
            <span className="hidden h-8 w-px bg-white/20 sm:block" />
            <span className="hidden text-sm text-slate-400 sm:block">
              Taichung, Taiwan
            </span>
          </motion.div>

          {/* Date & location pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-gold-400" />
              <div className="text-left">
                <p className="text-xs text-slate-400">Conference Dates</p>
                <p className="text-sm font-semibold text-white">{conference.dates}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-gold-400" />
              <div className="text-left">
                <p className="text-xs text-slate-400">Venue</p>
                <p className="text-sm font-semibold text-white">{conference.location}</p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link
              to="/call-for-papers"
              className="btn-gold group inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base"
            >
              Call for Papers
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/important-dates"
              className="btn-outline-light inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold"
            >
              Important Dates
            </Link>
          </motion.div>
        </div>

        {/* Right — Hero image card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 w-full max-w-md flex-shrink-0 lg:mt-0 lg:max-w-lg"
        >
          <div className="relative">
            {/* Gold glow behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gold-500/20 blur-2xl" aria-hidden="true" />

            {/* Image frame */}
            <div className="hero-frame-shimmer relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40">
              <motion.img
                src={HERO_IMAGE}
                alt="Advanced computing and smart systems technology"
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-950/80 via-transparent to-transparent" />

              {/* Floating badge on image */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-brand-900/80 p-4 backdrop-blur-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                  Research Focus
                </p>
                <p className="mt-1 font-display text-lg font-bold text-white">
                  IoT · AI · Edge Computing · Smart Cities
                </p>
              </motion.div>
            </div>

            {/* Decorative floating stat */}
            <motion.div
              className="animate-float-gentle absolute -top-5 -right-4 rounded-2xl border border-gold-500/30 bg-brand-800/90 px-4 py-3 shadow-xl backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-display text-2xl font-bold text-gold-400">10+</p>
              <p className="text-xs text-slate-300">Research Tracks</p>
            </motion.div>

            <motion.div
              className="animate-float-gentle absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
              style={{ animationDelay: '1.5s' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="font-display text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-slate-300">Global Attendees</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave transition to next section */}
      <div className="wave-divider absolute bottom-0 left-0 right-0 h-20" aria-hidden="true" />
    </section>
  )
}
