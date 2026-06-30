import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { importantDates } from '../data/dates'

export function ImportantDates() {
  return (
    <>
      <PageHeader
        badge="Schedule"
        title="Important Dates"
        subtitle="Mark your calendar for key submission and registration deadlines."
      />

      <AnimatedSection className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="relative space-y-0">
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-linear-to-b from-gold-500 to-brand-600 md:left-1/2 md:-translate-x-px" />

            {importantDates.map((item, i) => (
              <StaggerItem key={item.event}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative mb-8 flex items-center gap-6 md:mb-12 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`} />
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-gold-500 to-gold-400 shadow-lg shadow-gold-500/30">
                    <Calendar className="h-5 w-5 text-brand-950" />
                  </div>
                  <div
                    className={`card-elevated flex-1 rounded-2xl p-6 ${
                      item.status === 'highlight'
                        ? 'border-gold-300/50 bg-linear-to-br from-gold-50/80 to-brand-50'
                        : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 md:hidden" />
                      <div>
                        <h3 className="font-display font-semibold text-brand-900">{item.event}</h3>
                        <p className="mt-1 text-lg font-semibold text-gold-600">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </>
  )
}
