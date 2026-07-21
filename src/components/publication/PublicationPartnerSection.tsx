import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionTitle } from '../ui/SectionTitle'
import { publicationPartnerImage } from '../../data/publication'
import { publicAsset } from '../../utils/publicAsset'

export function PublicationPartnerSection() {
  return (
    <AnimatedSection className="border-t border-slate-200 bg-surface-muted py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionTitle title="Publication Partner" />
        <img
          src={publicAsset(publicationPartnerImage)}
          alt="SysCom 2026 publication partner"
          className="mx-auto max-h-32 w-auto max-w-full object-contain sm:max-h-40"
        />
      </div>
    </AnimatedSection>
  )
}
