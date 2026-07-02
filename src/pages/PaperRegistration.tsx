import { motion } from 'framer-motion'
import { MapPin, Globe2, GraduationCap, User } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { registrationFees } from '../data/registration'

const regionConfig = {
  local: {
    icon: MapPin,
    label: 'Local Authors',
    accent: 'border-brand-200 bg-brand-50',
    badge: 'bg-brand-700 text-white',
  },
  international: {
    icon: Globe2,
    label: 'International Authors',
    accent: 'border-gold-200 bg-gold-50/50',
    badge: 'bg-gold-500 text-brand-950',
  },
}

export function PaperRegistration() {
  const localFees = registrationFees.filter((f) => f.region === 'local')
  const intlFees = registrationFees.filter((f) => f.region === 'international')

  return (
    <>
      <PageHeader
        badge="Register"
        title="Paper Registration"
        subtitle="Registration fees for authors presenting at SysCom 2026."
      />

      <AnimatedSection className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-10 md:grid-cols-2">
            {(['local', 'international'] as const).map((region) => {
              const config = regionConfig[region]
              const fees = region === 'local' ? localFees : intlFees
              const Icon = config.icon

              return (
                <StaggerItem key={region}>
                  <div className={`card-elevated overflow-hidden rounded-2xl border-2 ${config.accent}`}>
                    <div className={`flex items-center gap-3 px-6 py-5 ${region === 'local' ? 'bg-brand-800' : 'bg-brand-900'}`}>
                      <Icon className="h-6 w-6 text-gold-400" />
                      <h3 className="font-display text-xl font-bold text-white">{config.label}</h3>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {fees.map((fee) => (
                        <motion.div
                          key={`${fee.category}-${fee.type}`}
                          whileHover={{ backgroundColor: 'rgba(248,250,252,0.8)' }}
                          className="flex items-center justify-between gap-4 px-6 py-6"
                        >
                          <div className="flex items-center gap-3">
                            {fee.type === 'Students' ? (
                              <GraduationCap className="h-5 w-5 text-brand-600" />
                            ) : (
                              <User className="h-5 w-5 text-brand-600" />
                            )}
                            <span className="font-medium text-slate-700">{fee.type}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-display text-2xl font-bold text-brand-900">
                              {fee.amount}
                              <span className="ml-1.5 text-base font-semibold text-gold-600">
                                {fee.currency}
                              </span>
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-surface-muted p-8 text-center">
            <p className="text-slate-600 leading-relaxed">
              At least one author of each accepted paper must complete registration before the conference.
              Please contact the organizing committee for any registration inquiries.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
