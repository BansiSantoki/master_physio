import React from 'react'

/** The flowing cyan waves at the top corners and along the bottom edge, as in the reference. */
export function Waves() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#e9f9fb_0%,#ffffff_22%,#ffffff_60%,#eefafc_100%)]" />
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute left-0 top-0 h-[calc(var(--k)*200)] w-[45%]">
        <path d="M0 0 H400 C300 20 180 40 110 90 C70 118 30 150 0 190 Z" fill="#cdf1f6" opacity="0.7" />
        <path d="M0 0 H260 C170 30 90 60 40 110 C22 128 8 145 0 160 Z" fill="#9fe2ea" opacity="0.55" />
      </svg>
      <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute right-0 top-[calc(var(--k)*90)] h-[calc(var(--k)*160)] w-[38%]">
        <path d="M400 10 C300 30 190 70 120 120 C200 100 310 100 400 120 Z" fill="#bdebf2" opacity="0.6" />
      </svg>
      <svg viewBox="0 0 800 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[calc(var(--k)*58)] w-full">
        <path d="M0 30 C150 0 300 50 450 28 C600 6 700 20 800 8 V60 H0 Z" fill="#bfeef4" />
        <path d="M0 44 C180 22 330 60 520 40 C640 28 720 34 800 24 V60 H0 Z" fill="#5ccfdc" opacity="0.75" />
        <path d="M0 54 C200 42 380 62 560 50 C680 44 740 48 800 42 V60 H0 Z" fill="#1fb3c2" opacity="0.8" />
      </svg>
    </div>
  )
}
