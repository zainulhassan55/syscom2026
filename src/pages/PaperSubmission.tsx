import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, FileText, CheckCircle } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'

export function PaperSubmission() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        badge="Submit"
        title="Paper Submission"
        subtitle="Upload your manuscript through our online submission portal."
      />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
            >
              <CheckCircle className="mx-auto h-16 w-16 text-emerald-500" />
              <h3 className="mt-4 font-display text-xl font-bold text-emerald-900">Submission Received!</h3>
              <p className="mt-2 text-emerald-700">
                Your paper has been submitted successfully. You will receive a confirmation email shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="card-elevated space-y-6 rounded-2xl p-8">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Paper Title</label>
                <input
                  required
                  type="text"
                  placeholder="Enter your paper title"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Authors</label>
                <input
                  required
                  type="text"
                  placeholder="Author names (comma separated)"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Track</label>
                <select
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                >
                  <option value="">Select a track</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      Track {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Abstract</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Brief abstract (max 300 words)"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Upload Manuscript (PDF)</label>
                <div className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 transition hover:border-primary-400 hover:bg-primary-50/50">
                  <Upload className="h-10 w-10 text-slate-400" />
                  <p className="mt-2 text-sm text-slate-500">Drag & drop or click to upload</p>
                  <p className="text-xs text-slate-400">PDF only, max 10MB</p>
                </div>
              </div>
              <button
                type="submit"
                className="btn-gold flex w-full items-center justify-center gap-2 rounded-xl py-3.5"
              >
                <FileText className="h-5 w-5" />
                Submit Paper
              </button>
            </form>
          )}
        </div>
      </AnimatedSection>
    </>
  )
}
