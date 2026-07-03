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
          <StaggerContainer className="space-y-12">
            {keynoteSpeakers.map((speaker) => (
              <StaggerItem key={speaker.id}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="card-elevated overflow-hidden rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Photo column — full portrait visible */}
                    <div className="flex shrink-0 items-center justify-center bg-slate-50 px-6 py-8 md:w-[340px] md:py-10">
                      <SpeakerPhoto name={speaker.name} image={speaker.image} />
                    </div>

                    {/* Bio */}
                    <div className="flex flex-1 flex-col justify-center border-t border-slate-100 p-8 md:border-t-0 md:border-l md:p-10">
                      <span className="no-justify text-xs font-semibold uppercase tracking-widest text-gold-600">
                        Keynote Speaker
                      </span>
                      <h3 className="font-display mt-2 text-2xl font-bold text-brand-900 md:text-3xl">
                        {speaker.name}
                      </h3>
                      <p className="no-justify mt-2 font-medium text-brand-700">{speaker.title}</p>
                      <p className="no-justify text-sm text-slate-500">{speaker.affiliation}</p>

                      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                        {speaker.bio.map((paragraph) => (
                          <p key={paragraph.slice(0, 48)} className="leading-relaxed">{paragraph}</p>
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
