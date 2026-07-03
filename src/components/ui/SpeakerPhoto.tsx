import { useState } from 'react'
import { User } from 'lucide-react'
import { publicAsset } from '../../utils/publicAsset'

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
  const src = publicAsset(image)

  if (failed) {
    return (
      <div className="flex aspect-[3/4] w-full max-w-[320px] flex-col items-center justify-center rounded-2xl bg-linear-to-br from-brand-100 to-brand-50">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold-500/40 bg-white shadow-md">
          <span className="font-display text-2xl font-bold text-brand-800">{getInitials(name)}</span>
        </div>
        <User className="mt-4 h-7 w-7 text-brand-400/60" />
        <p className="no-justify mt-2 text-center text-xs text-slate-500">Photo unavailable</p>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-[320px] items-center justify-center rounded-2xl bg-linear-to-br from-slate-100 to-brand-50 p-3 shadow-inner">
      <img
        src={src}
        alt={name}
        className="max-h-[420px] w-full rounded-xl object-contain object-center"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
