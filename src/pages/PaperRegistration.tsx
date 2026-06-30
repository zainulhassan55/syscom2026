import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'

const plans = [
  {
    name: 'Student',
    early: '$150',
    regular: '$200',
    features: ['Conference access', 'Proceedings', 'Lunch & refreshments', 'Certificate of attendance'],
  },
  {
    name: 'Academic',
    early: '$250',
    regular: '$350',
    features: ['All student benefits', 'Workshop access', 'Networking dinner', 'Presentation slot (if author)'],
    popular: true,
  },
  {
    name: 'Industry',
    early: '$400',
    regular: '$500',
    features: ['All academic benefits', 'Exhibition access', 'VIP seating', 'Company logo in proceedings'],
  },
]

export function PaperRegistration() {
  return (
    <>
      <PageHeader
        badge="Register"
        title="Paper Registration"
        subtitle="Register to attend SysCom 2026 and present your accepted paper."
      />

      <AnimatedSection className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative rounded-2xl border p-8 ${
                    plan.popular
                      ? 'border-primary-300 bg-linear-to-br from-primary-50 to-white shadow-xl shadow-primary-500/10'
                      : 'border-slate-100 bg-white shadow-sm'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-slate-900">{plan.name}</h3>
                  <div className="mt-4">
                    <p className="text-sm text-slate-500">Early Bird</p>
                    <p className="font-display text-3xl font-bold text-primary-600">{plan.early}</p>
                    <p className="mt-1 text-sm text-slate-400">Regular: {plan.regular}</p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-4 w-4 shrink-0 text-primary-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
                      plan.popular
                        ? 'bg-linear-to-r from-primary-500 to-accent-500 text-white hover:brightness-110'
                        : 'border border-slate-200 text-slate-700 hover:border-primary-300 hover:text-primary-700'
                    }`}
                  >
                    Register Now
                  </button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-slate-600">
              At least one author of each accepted paper must register at the academic or industry rate.
              Registration includes publication in the conference proceedings.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
