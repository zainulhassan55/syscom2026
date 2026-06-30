import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
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
        subtitle="Have questions? Reach out to the SysCom 2026 organizing committee."
      />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900">Conference Secretariat</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                For inquiries regarding paper submission, registration, sponsorship, or general information,
                please contact us using the form or details below.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{conference.venue}</p>
                    <p className="text-slate-600">{conference.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <a href={`mailto:${conference.email}`} className="text-slate-600 hover:text-primary-600">
                    {conference.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="text-slate-600">{conference.phone}</span>
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
                <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary-500 to-accent-500 py-3.5 font-semibold text-white transition hover:brightness-110"
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
