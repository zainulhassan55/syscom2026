import { publicAsset } from '../../utils/publicAsset'

interface SiteLogoProps {
  className?: string
}

export function SiteLogo({
  className = 'h-10 w-auto max-w-[200px] object-contain sm:h-12 sm:max-w-[240px]',
}: SiteLogoProps) {
  return (
    <img
      src={publicAsset('logo.svg')}
      alt="SysCom 2026 — Smart Systems and Advanced Computing"
      className={className}
    />
  )
}
