import React from 'react'

type IconProps = { className?: string }

export function WhatsAppIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 4C12.95 4 4 12.95 4 24C4 27.87 5.1 31.48 7.02 34.56L4.5 44L14.15 41.51C17.11 43.28 20.44 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4Z"
        fill="#25D366"
      />
      <path
        d="M34.2 29.1C33.64 28.82 30.88 27.46 30.37 27.27C29.86 27.08 29.49 26.99 29.12 27.55C28.75 28.11 27.69 29.35 27.37 29.72C27.05 30.09 26.73 30.14 26.17 29.86C25.61 29.58 23.81 28.99 21.68 27.09C20.02 25.61 18.9 23.78 18.58 23.22C18.26 22.66 18.54 22.36 18.82 22.08C19.07 21.83 19.38 21.43 19.66 21.11C19.94 20.79 20.03 20.56 20.22 20.19C20.41 19.82 20.32 19.5 20.18 19.22C20.04 18.94 18.93 16.2 18.47 15.09C18.02 14.01 17.56 14.16 17.22 14.14C16.9 14.12 16.53 14.12 16.16 14.12C15.79 14.12 15.19 14.26 14.68 14.82C14.17 15.38 12.74 16.72 12.74 19.45C12.74 22.18 14.73 24.82 15.01 25.19C15.29 25.56 18.66 30.76 23.82 32.99C25.05 33.52 26.01 33.84 26.76 34.08C28 34.47 29.14 34.41 30.03 34.28C31.02 34.13 33.08 33.03 33.51 31.81C33.94 30.59 33.94 29.54 33.81 29.32C33.68 29.1 33.31 28.98 32.75 28.7L34.2 29.1Z"
        fill="white"
      />
    </svg>
  )
}

export function CallIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
        fill="#1A73E8"
      />
    </svg>
  )
}

export function WebsiteIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#1A73E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function LocationIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
        fill="#0f9a9d"
      />
      <circle cx="12" cy="9" r="2.8" fill="white" />
    </svg>
  )
}

export function CalendarCheckIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0f9a9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}

export function LightningIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#0f9a9d" stroke="#0f9a9d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export function KneeJointIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="#0f9a9d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 4 C14 8, 17 11, 20 13 C22.5 14.8, 24 16.5, 23 18.5 C22 20.2, 19.5 20.5, 17 19 C15 18, 13 17, 11 17 C9 17, 8 18.5, 8 20 C8 23, 9 26, 10 28" />
      <path d="M14 20 C14 23, 14.5 26, 15 28" />
    </svg>
  )
}

export function BrainIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="#0f9a9d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 6 C13 6 10 7.5 9 10 C7 10.5 5 12.5 5 15 C5 17 6.2 18.7 8 19.3 C8 21.5 9.5 23.5 11.5 24.3 C12.8 25.5 14.4 26 16 26" />
      <path d="M16 6 C19 6 22 7.5 23 10 C25 10.5 27 12.5 27 15 C27 17 25.8 18.7 24 19.3 C24 21.5 22.5 23.5 20.5 24.3 C19.2 25.5 17.6 26 16 26" />
      <path d="M16 6 V26" />
      <path d="M11 14 C13 14 14 12 16 12 C18 12 19 14 21 14" />
      <path d="M10 19 C12 19 13.5 17.5 16 17.5 C18.5 17.5 20 19 22 19" />
    </svg>
  )
}

export function SpineCareIcon({ className = 'w-full h-full' }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="#0f9a9d" aria-hidden>
      <g transform="translate(4, 2)">
        <rect x="10" y="2" width="8" height="3" rx="1.2" />
        <rect x="7" y="3" width="2.5" height="1.5" rx="0.6" />
        <rect x="18.5" y="3" width="2.5" height="1.5" rx="0.6" />

        <rect x="10.8" y="6.5" width="8" height="3" rx="1.2" />
        <rect x="7.8" y="7.5" width="2.5" height="1.5" rx="0.6" />
        <rect x="19.3" y="7.5" width="2.5" height="1.5" rx="0.6" />

        <rect x="11.5" y="11" width="8" height="3" rx="1.2" />
        <rect x="8.5" y="12" width="2.5" height="1.5" rx="0.6" />
        <rect x="20" y="12" width="2.5" height="1.5" rx="0.6" />

        <rect x="11.2" y="15.5" width="8" height="3" rx="1.2" />
        <rect x="8.2" y="16.5" width="2.5" height="1.5" rx="0.6" />
        <rect x="19.7" y="16.5" width="2.5" height="1.5" rx="0.6" />

        <rect x="9.8" y="20" width="8" height="3" rx="1.2" />
        <rect x="6.8" y="21" width="2.5" height="1.5" rx="0.6" />
        <rect x="18.3" y="21" width="2.5" height="1.5" rx="0.6" />

        <rect x="7.5" y="24.5" width="8" height="3" rx="1.2" />
        <rect x="4.5" y="25.5" width="2.5" height="1.5" rx="0.6" />
        <rect x="16" y="25.5" width="2.5" height="1.5" rx="0.6" />
      </g>
    </svg>
  )
}
