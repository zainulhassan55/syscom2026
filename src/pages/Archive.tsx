import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowLeft, BookOpen } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { archiveEditions } from '../data/archive'

export function Archive() {
  const { edition } = useParams<{ edition: string }>()
  const key = edition === '2nd-edition' ? '2nd' : edition === '1st-edition' ? '1st' : null
  const data = key ? archiveEditions[key] : null

  if (!data) {
    return (
      <>
        <PageHeader title="Archive" subtitle="Past editions of SysCom conference." />
        <div className="py-20 text-center">
          <p className="text-slate-600">Edition not found.</p>
          <Link to="/" className="mt-4 inline-block text-brand-700 hover:underline">
            Go Home
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader badge="Archive" title={data.title} subtitle={data.subtitle} />

      <AnimatedSection className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-brand-700 hover:text-gold-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to SysCom 2026
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-elevated rounded-3xl p-10 text-center md:p-14"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-50">
              <BookOpen className="h-10 w-10 text-brand-700" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Conference Proceedings · {data.year}
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold text-brand-900 md:text-3xl">
              {data.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-600 leading-relaxed">{data.subtitle}</p>

            <a
              href={data.proceedingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-10 inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base"
            >
              {data.proceedingsLabel}
              <ExternalLink className="h-5 w-5" />
            </a>

            <p className="mt-6 break-all text-sm text-slate-400">{data.proceedingsUrl}</p>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {edition !== '1st-edition' && (
              <Link
                to="/archive/1st-edition"
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                ← SysCom&apos;s 1st Edition
              </Link>
            )}
            {edition !== '2nd-edition' && (
              <Link
                to="/archive/2nd-edition"
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                SysCom&apos;s 2nd Edition →
              </Link>
            )}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
