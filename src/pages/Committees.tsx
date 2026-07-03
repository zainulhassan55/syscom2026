import { motion } from 'framer-motion'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { committeeSections, type CommitteeMember } from '../data/committees'

function getInitials(name: string) {
  const parts = name.replace(/,?\s*Ph\.?D\.?/gi, '').trim().split(/\s+/)
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

function MemberCard({ member, index }: { member: CommitteeMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="card-elevated rounded-2xl p-6 text-center"
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand-700 to-brand-900 font-display text-lg font-bold text-gold-400">
        {getInitials(member.name)}
      </div>
      <h3 className="font-display text-base font-semibold leading-snug text-brand-900">{member.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{member.affiliation}</p>
    </motion.div>
  )
}

function MemberListItem({ member, index }: { member: CommitteeMember; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 12) * 0.03 }}
      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5"
    >
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
      <div>
        <p className="font-medium text-brand-900">{member.name}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{member.affiliation}</p>
      </div>
    </motion.li>
  )
}

function CommitteeGroup({ section }: { section: (typeof committeeSections)[0] }) {
  const isList = section.layout === 'list'
  const gridClass = isList
    ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3'
    : section.members.length === 1
      ? 'max-w-sm'
      : section.members.length === 2
        ? 'grid gap-6 sm:grid-cols-2'
        : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <AnimatedSection className="mb-16 last:mb-0">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-display text-2xl font-bold text-brand-900">{section.title}</h2>
        <div className="h-px flex-1 bg-linear-to-r from-gold-500/40 to-transparent" />
      </div>

      {isList ? (
        <ul className={gridClass}>
          {section.members.map((member, i) => (
            <MemberListItem key={member.name} member={member} index={i} />
          ))}
        </ul>
      ) : (
        <div className={gridClass}>
          {section.members.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      )}
    </AnimatedSection>
  )
}

export function Committees() {
  return (
    <>
      <PageHeader
        badge="Team"
        title="Committees"
        subtitle="Meet the organizing committee and program committee members of SysCom 2026."
      />

      <div className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {committeeSections.map((section) => (
            <CommitteeGroup key={section.id} section={section} />
          ))}
        </div>
      </div>
    </>
  )
}
