import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`section-label mb-4 ${align === 'center' ? 'center mx-auto' : ''}`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-display text-2xl font-bold sm:text-3xl md:text-4xl ${
          light ? 'text-white' : 'text-brand-900'
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className={`mt-4 h-0.5 w-16 rounded-full bg-linear-to-r from-gold-500 to-gold-300 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
