import { motion } from 'framer-motion'
import { AlertTriangle, Shield, EyeOff } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionTitle } from '../components/ui/SectionTitle'
import {
  reviewIntro,
  plagiarismPolicyIntro,
  plagiarismSanctions,
  doubleBlindNote,
} from '../data/review'

export function PaperReview() {
  return (
    <>
      <PageHeader
        badge="Review Process"
        title="Paper Review"
        subtitle="Learn about our peer review process, evaluation criteria, and plagiarism policy."
      />

      <AnimatedSection className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-slate-600">{reviewIntro}</p>
        </div>
      </AnimatedSection>

      <section className="bg-surface-muted py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Shield className="h-8 w-8 text-brand-700" />
            <h2 className="font-display text-2xl font-bold text-brand-900">Plagiarism Policy</h2>
          </div>

          <p className="text-slate-600 leading-relaxed">{plagiarismPolicyIntro}</p>

          <ol className="mt-6 space-y-3">
            {plagiarismSanctions.map((sanction, i) => (
              <motion.li
                key={sanction}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-elevated flex items-start gap-4 rounded-xl p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600">
                  {i + 1}
                </span>
                <span className="pt-1 text-slate-700 leading-relaxed">{sanction}</span>
              </motion.li>
            ))}
          </ol>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <p className="text-sm text-amber-900 leading-relaxed">
              Similarity rate must not exceed <strong>15%</strong>. Self-plagiarism of authors&apos; own published papers is strictly prohibited.
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Authors" title="Double-Blind Review" align="left" />
          <div className="card-elevated flex items-start gap-4 rounded-2xl p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
              <EyeOff className="h-6 w-6 text-brand-700" />
            </div>
            <p className="text-slate-600 leading-relaxed">{doubleBlindNote}</p>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
