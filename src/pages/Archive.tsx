import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, FileText, Users, Globe, ArrowLeft } from 'lucide-react'
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
          <Link to="/" className="mt-4 inline-block text-primary-600 hover:underline">
            Go Home
          </Link>
        </div>
      </>
    )
  }

  const statItems = [
    { icon: FileText, value: data.stats.papers, label: 'Papers' },
    { icon: Users, value: data.stats.attendees, label: 'Attendees' },
    { icon: Globe, value: data.stats.countries, label: 'Countries' },
  ]

  return (
    <>
      <PageHeader badge="Archive" title={data.title} subtitle={data.theme} />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to SysCom 2026
          </Link>

          <div className="flex flex-wrap gap-6 text-slate-600">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary-500" />
              {data.dates}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-500" />
              {data.location}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {statItems.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <Icon className="mx-auto h-8 w-8 text-primary-500" />
                <p className="mt-2 font-display text-2xl font-bold text-slate-900">{value}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-slate-900">Highlights</h3>
            <ul className="mt-4 space-y-3">
              {data.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                  <span className="text-slate-700">{h}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex gap-4">
            {edition !== '1st-edition' && (
              <Link
                to="/archive/1st-edition"
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 hover:border-primary-300"
              >
                ← 1st Edition
              </Link>
            )}
            {edition !== '2nd-edition' && (
              <Link
                to="/archive/2nd-edition"
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 hover:border-primary-300"
              >
                2nd Edition →
              </Link>
            )}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
