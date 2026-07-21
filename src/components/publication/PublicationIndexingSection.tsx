import { AnimatedSection } from '../ui/AnimatedSection'
import {
  indexingLogos,
  publicationIndexingContent,
  SCITEPRESS_URL,
} from '../../data/publication'
import { publicAsset } from '../../utils/publicAsset'

interface PublicationIndexingSectionProps {
  className?: string
}

export function PublicationIndexingSection({ className = 'bg-surface py-16 md:py-24' }: PublicationIndexingSectionProps) {
  const { title, paragraphs, note } = publicationIndexingContent

  return (
    <AnimatedSection className={className}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 content-justify">
        <h2 className="font-display text-2xl font-bold text-brand-900 sm:text-3xl">{title}</h2>
        <div className="mt-4 h-0.5 w-16 rounded-full bg-linear-to-r from-gold-500 to-gold-300" />

        <div className="mt-8 space-y-5 text-slate-600 leading-relaxed">
          <p>
            All the accepted and presented paper will be published in the Conference Proceedings with{' '}
            <a
              href={SCITEPRESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 transition hover:text-gold-600"
            >
              SCITEPRESS
            </a>
            , Portugal.
          </p>
          <p>{paragraphs[1]}</p>
          <p>{paragraphs[2]}</p>
        </div>

        <div className="mt-10 inline-flex max-w-full rounded-2xl bg-white px-8 py-6 shadow-sm ring-1 ring-slate-100 sm:px-10 sm:py-8">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-12">
            {indexingLogos.map(({ src, alt }) => (
              <img
                key={src}
                src={publicAsset(src)}
                alt={alt}
                className="h-24 w-auto max-w-[280px] object-contain sm:h-28 sm:max-w-[320px] md:h-32 md:max-w-[360px]"
              />
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-slate-500 italic">{note}</p>
      </div>
    </AnimatedSection>
  )
}
