import { motion } from 'framer-motion'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { committees } from '../data/committees'

function CommitteeGroup({ title, members }: { title: string; members: typeof committees.organizing }) {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="mb-8 font-display text-2xl font-bold text-slate-900">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-primary-400 to-accent-500 font-display text-xl font-bold text-white">
              {member.name.split(' ').slice(-1)[0][0]}
            </div>
            <h3 className="font-display font-semibold text-slate-900">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-primary-600">{member.role}</p>
            <p className="mt-1 text-xs text-slate-500">{member.affiliation}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  )
}

export function Committees() {
  return (
    <>
      <PageHeader
        badge="Team"
        title="Committees"
        subtitle="Meet the organizing, technical, and advisory committees behind SysCom 2026."
      />

      <div className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CommitteeGroup title="Organizing Committee" members={committees.organizing} />
          <CommitteeGroup title="Technical Program Committee" members={committees.technical} />
          <CommitteeGroup title="Advisory Board" members={committees.advisory} />
        </div>
      </div>
    </>
  )
}
