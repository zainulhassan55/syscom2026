import { PageHeader } from '../components/ui/PageHeader'
import { PublicationIndexingSection } from '../components/publication/PublicationIndexingSection'

export function PublicationIndexing() {
  return (
    <>
      <PageHeader
        badge="Authors"
        title="Publication and Indexing"
        subtitle="Conference proceedings publication and indexing information for SysCom 2026."
      />
      <PublicationIndexingSection />
    </>
  )
}
