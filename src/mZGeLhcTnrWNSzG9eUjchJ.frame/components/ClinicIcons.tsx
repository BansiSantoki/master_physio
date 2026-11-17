import React from 'react'

type IconProps = { className?: string }

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.3c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4a10.4 10.4 0 0 1-1.7-5.6C5.1 9.9 10 5.2 16 5.2s10.9 4.7 10.9 10.6S22 26.3 16 26.3z"
      />
      <path
        fill="currentColor"
        d="M22 18.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.2 1.4 3.4 2.4 3.6 5.8 5c2.2.9 3 1 4.1.8.7-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5-.3-.2-.6-.4z"
      />
    </svg>
  )
}

/** A stacked column of vertebrae, drawn in the card's turquoise. */
export function SpineIcon({ className }: IconProps) {
  const discs = [3, 8.5, 14, 19.5, 25]
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      {discs.map((y, i) => (
        <g key={y} transform={`translate(${i % 2 === 0 ? 0 : 0.8} 0)`}>
          <rect x="11" y={y} width="10" height="4.2" rx="1.6" fill="currentColor" />
          <rect x="8" y={y + 1.2} width="3.5" height="1.8" rx="0.9" fill="currentColor" />
          <rect x="20.5" y={y + 1.2} width="3.5" height="1.8" rx="0.9" fill="currentColor" />
        </g>
      ))}
    </svg>
  )
}
