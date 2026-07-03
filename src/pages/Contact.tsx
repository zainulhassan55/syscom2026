import { Mail, MapPin } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { conference } from '../data/conference'

export function Contact() {
  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Reach out to the SysCom 2026 organizing committee."
      />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="card-elevated rounded-3xl border-l-4 border-l-gold-500 p-10 text-center md:p-14">
            <Mail className="mx-auto h-12 w-12 text-gold-500" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              All questions about submissions should e-mail to:
            </p>
            <a
              href={`mailto:${conference.submissionEmail}`}
              className="mt-4 inline-block font-display text-2xl font-bold text-brand-800 transition hover:text-gold-600 md:text-3xl"
            >
              {conference.submissionEmail}
            </a>
          </div>

          <div className="mt-10 card-elevated rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <MapPin className="h-5 w-5 text-brand-700" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-brand-900">{conference.venue}</p>
                <p className="mt-1 text-slate-600">{conference.address}</p>
                <p className="text-slate-500">{conference.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Asia University, Wufeng, Taichung"
              src={`https://maps.google.com/maps?q=${conference.mapQuery}&output=embed`}
              className="h-80 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
