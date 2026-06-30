import { motion } from 'framer-motion'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { keynoteSpeakers } from '../data/speakers'

export function KeynoteSpeakers() {
  return (
    <>
      <PageHeader
        badge="Speakers"
        title="Keynote Speakers"
        subtitle="Distinguished experts sharing insights on smart systems and advanced computing."
      />

      <AnimatedSection className="bg-surface-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keynoteSpeakers.map((speaker) => (
              <StaggerItem key={speaker.id}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="card-elevated group overflow-hidden rounded-2xl"
                >
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-950/90 via-brand-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                        Keynote Speaker
                      </span>
                      <h3 className="font-display mt-1 text-xl font-bold text-white">{speaker.name}</h3>
                      <p className="mt-1 text-sm text-slate-300">{speaker.title}</p>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 p-6">
                    <p className="text-sm font-semibold text-brand-700">{speaker.topic}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{speaker.bio}</p>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </>
  )
}
