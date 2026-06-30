import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="page-header-bg absolute inset-0" aria-hidden="true" />
      <div className="page-header-overlay absolute inset-0" aria-hidden="true" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 h-1 w-20 origin-left rounded-full bg-linear-to-r from-gold-500 to-gold-300"
        />
      </div>
    </div>
  )
}
