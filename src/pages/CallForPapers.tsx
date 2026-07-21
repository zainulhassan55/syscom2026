import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionTitle } from '../components/ui/SectionTitle'
import { PublicationIndexingSection } from '../components/publication/PublicationIndexingSection'
import {
  cfpIntro,
  conferenceTracks,
  conferenceTopics,
} from '../data/callForPapers'

export function CallForPapers() {
  return (
    <>
      <PageHeader
        badge="Authors"
        title="Call for Papers"
        subtitle="Submit your original research on smart systems and advanced computing."
      />

      {/* Intro */}
      <AnimatedSection className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 content-justify">
          <p className="text-lg leading-relaxed text-slate-600">{cfpIntro}</p>
        </div>
      </AnimatedSection>

      {/* Tracks */}
      <section className="bg-surface-muted py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Conference" title="Tracks" align="left" />
          <ol className="space-y-3">
            {conferenceTracks.map((track, i) => (
              <motion.li
                key={track}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="card-elevated flex items-start gap-4 rounded-xl p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-sm font-bold text-gold-400">
                  {i + 1}
                </span>
                <span className="pt-1 text-slate-700 leading-relaxed">
                  <span className="font-semibold text-brand-900">Track {i + 1} — </span>
                  {track}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Topics */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Research Areas" title="Topics" align="left" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {conferenceTopics.map((topic, i) => (
              <motion.li
                key={topic}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 10) * 0.03 }}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm text-slate-700 leading-relaxed"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                {topic}
              </motion.li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <PublicationIndexingSection />
    </>
  )
}
