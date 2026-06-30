import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { TracksGrid } from '../components/ui/TrackCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { aimAndScope, bestPaperAward } from '../data/conference'

export function CallForPapers() {
  return (
    <>
      <PageHeader
        badge="Authors"
        title="Call for Papers"
        subtitle="Submit your original research on smart systems and advanced computing."
      />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-600">{aimAndScope.intro}</p>
            <div className="mt-8 space-y-5 text-slate-600 leading-relaxed">
              {aimAndScope.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle label="Topics" title="Submission Tracks" align="left" />
          <TracksGrid />
        </div>
      </section>

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
            <h3 className="font-display text-xl font-bold text-amber-900">{bestPaperAward.title}</h3>
            <p className="mt-3 text-amber-800">{bestPaperAward.description}</p>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900">Submission Guidelines</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Papers must be written in English and follow IEEE conference format (6–8 pages).</li>
              <li>• All submissions will undergo double-blind peer review.</li>
              <li>• Simultaneous submission to other conferences is not permitted.</li>
              <li>• At least one author must register and present the paper at the conference.</li>
              <li>• Accepted papers will be published in the conference proceedings.</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
