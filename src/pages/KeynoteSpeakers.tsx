import { motion } from 'framer-motion'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { SpeakerPhoto } from '../components/ui/SpeakerPhoto'
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-10">
            {keynoteSpeakers.map((speaker) => (
              <StaggerItem key={speaker.id}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="card-elevated group overflow-hidden rounded-2xl"
                >
                  <div className="grid md:grid-cols-[280px_1fr]">
                    {/* Photo — drop image at public/speakers/{slug}.jpg */}
                    <div className="relative h-72 overflow-hidden md:h-auto md:min-h-[320px]">
                      <SpeakerPhoto
                        name={speaker.name}
                        image={speaker.image}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-950/60 via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-transparent" />
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                        Keynote Speaker
                      </span>
                      <h3 className="font-display mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
                        {speaker.name}
                      </h3>
                      <p className="mt-2 font-medium text-brand-700">{speaker.title}</p>
                      <p className="text-sm text-slate-500">{speaker.affiliation}</p>

                      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                        {speaker.bio.map((paragraph) => (
                          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
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
