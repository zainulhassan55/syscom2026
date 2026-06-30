import {
  Cloud,
  Database,
  Link2,
  Radio,
  Shield,
  Car,
  Heart,
  Factory,
  Lock,
  Atom,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { tracks } from '../../data/tracks'
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  database: Database,
  link: Link2,
  radio: Radio,
  shield: Shield,
  car: Car,
  heart: Heart,
  factory: Factory,
  lock: Lock,
  atom: Atom,
}

export function TrackCard({ id, title, icon }: (typeof tracks)[0]) {
  const Icon = iconMap[icon] || Cloud

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card-elevated group relative overflow-hidden rounded-2xl p-6"
    >
      <div className="absolute top-0 left-0 h-full w-1 bg-linear-to-b from-gold-500 to-brand-600 transition-all group-hover:w-1.5" />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Track {String(id).padStart(2, '0')}
          </span>
          <h3 className="font-display mt-1.5 text-base font-semibold leading-snug text-brand-900">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export function TracksGrid() {
  return (
    <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tracks.map((track) => (
        <StaggerItem key={track.id}>
          <TrackCard {...track} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
