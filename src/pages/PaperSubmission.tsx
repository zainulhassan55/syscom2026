import { ExternalLink, FileText, Upload } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionTitle } from '../components/ui/SectionTitle'
import {
  CMT_SUBMISSION_URL,
  submissionGuidelines,
  submissionMethodNote,
} from '../data/submission'

export function PaperSubmission() {
  return (
    <>
      <PageHeader
        badge="Submit"
        title="Paper Submission"
        subtitle="Submit your manuscript via the official Microsoft CMT portal."
      />

      <AnimatedSection className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-slate-600 leading-relaxed">
            {submissionGuidelines.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-surface-muted py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Portal" title="Submission Method" align="left" />

          <div className="card-elevated rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <Upload className="h-7 w-7 text-brand-700" />
              </div>
              <div>
                <p className="text-slate-700 leading-relaxed">
                  Authors are requested to submit their papers via{' '}
                  <a
                    href={CMT_SUBMISSION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-brand-700 underline decoration-gold-500/60 underline-offset-2 transition hover:text-gold-600"
                  >
                    Microsoft CMT
                    <ExternalLink className="h-4 w-4" />
                  </a>{' '}
                  in PDF format before the deadline.
                </p>
                <p className="mt-5 text-sm text-slate-500 leading-relaxed">{submissionMethodNote}</p>
              </div>
            </div>

            <a
              href={CMT_SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm"
            >
              <FileText className="h-5 w-5" />
              Go to Microsoft CMT
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
