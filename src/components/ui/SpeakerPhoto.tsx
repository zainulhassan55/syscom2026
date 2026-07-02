import { useState } from 'react'
import { User } from 'lucide-react'

interface SpeakerPhotoProps {
  name: string
  image: string
}

function getInitials(name: string) {
  return name
    .replace(/^Professor\s+/i, '')
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function SpeakerPhoto({ name, image }: SpeakerPhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-linear-to-br from-brand-800 to-brand-950">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold-500/40 bg-brand-700/50">
          <span className="font-display text-3xl font-bold text-gold-400">{getInitials(name)}</span>
        </div>
        <User className="mt-4 h-8 w-8 text-brand-400/50" />
        <p className="mt-2 px-4 text-center text-xs text-slate-400">
          Photo coming soon
        </p>
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={name}
      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  )
}
