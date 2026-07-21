export const SCITEPRESS_URL = 'https://www.scitepress.org/HomePage.aspx'

export const publicationPartnerImage = 'Publication Partner.jpeg'

export const indexingLogos = [
  { src: 'scopus_logo.png', alt: 'Scopus' },
  { src: 'Elseviers-report-on-ai-adoption.webp', alt: 'Elsevier' },
] as const

export const publicationIndexingContent = {
  title: 'Publication and Indexing (SysCom 2026)',
  paragraphs: [
    `All the accepted and presented paper will be published in the Conference Proceedings with SCITEPRESS (${SCITEPRESS_URL}), Portugal.`,
    'The Conference Proceeding will be available at the SCITEPRESS Digital Library.',
    'The Proceedings will be submitted for evaluation for indexing by:',
  ],
  note: 'Note that the indexing will be based on the necessary requirements are met, but without any guarantees/commitment of the proceedings being actually indexed there.',
}
