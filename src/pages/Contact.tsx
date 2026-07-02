import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { conference } from '../data/conference'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Reach out to the SysCom 2026 organizing committee."
      />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="card-elevated rounded-2xl border-l-4 border-l-gold-500 p-8">
                <h2 className="font-display text-xl font-bold text-brand-900">Paper Submissions</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  All questions about submissions should e-mail to:
                </p>
                <a
                  href={`mailto:${conference.submissionEmail}`}
                  className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-brand-700 transition hover:text-gold-600"
                >
                  <Mail className="h-5 w-5" />
                  {conference.submissionEmail}
                </a>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <MapPin className="h-5 w-5 text-brand-700" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{conference.venue}</p>
                    <p className="text-slate-600">{conference.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <Mail className="h-5 w-5 text-brand-700" />
                  </div>
                  <a
                    href={`mailto:${conference.email}`}
                    className="text-slate-600 transition hover:text-brand-700"
                  >
                    {conference.email}
                  </a>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
                <iframe
                  title="Taichung Map"
                  src="https://maps.google.com/maps?q=Taichung,Taiwan&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-emerald-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-emerald-900">Message Sent!</h3>
                  <p className="mt-2 text-emerald-700">We will get back to you within 2 business days.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card-elevated space-y-5 rounded-2xl p-8">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold flex w-full items-center justify-center gap-2 rounded-xl py-3.5"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
