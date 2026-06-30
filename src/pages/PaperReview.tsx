import { motion } from 'framer-motion'
import { ClipboardList, Star, MessageSquare } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'

const reviewCriteria = [
  { title: 'Originality', desc: 'Novelty and significance of the contribution to the field.' },
  { title: 'Technical Quality', desc: 'Soundness of methodology, analysis, and experimental validation.' },
  { title: 'Relevance', desc: 'Alignment with conference tracks and current research trends.' },
  { title: 'Clarity', desc: 'Quality of writing, organization, and presentation of results.' },
]

const reviewSteps = [
  'Each paper is assigned to at least three expert reviewers.',
  'Reviews are conducted using a double-blind peer review process.',
  'Reviewers evaluate papers based on standardized criteria.',
  'Program committee makes final acceptance decisions.',
  'Authors receive detailed feedback with the notification.',
]

export function PaperReview() {
  return (
    <>
      <PageHeader
        badge="Review Process"
        title="Paper Review"
        subtitle="Learn about our rigorous double-blind peer review process."
      />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviewCriteria.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <Star className="mb-3 h-8 w-8 text-primary-500" />
                  <h3 className="font-display font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardList className="h-8 w-8 text-primary-500" />
            <h2 className="font-display text-2xl font-bold text-slate-900">Review Process Steps</h2>
          </div>
          <ol className="space-y-4">
            {reviewSteps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {i + 1}
                </span>
                <span className="text-slate-700">{step}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <MessageSquare className="mx-auto h-10 w-10 text-primary-500" />
          <p className="mt-4 text-slate-600">
            Interested in becoming a reviewer? Contact us at{' '}
            <a href="mailto:review@syscom2026.org" className="font-medium text-primary-600 hover:underline">
              review@syscom2026.org
            </a>
          </p>
        </div>
      </AnimatedSection>
    </>
  )
}
