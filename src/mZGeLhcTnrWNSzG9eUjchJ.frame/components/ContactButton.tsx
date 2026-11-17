import React from 'react'

type Props = { href: string; label: string; icon: React.ReactNode }

export function ContactButton({ href, label, icon }: Props) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex h-[calc(var(--k)*110)] min-w-0 flex-col items-center justify-center gap-[calc(var(--k)*8)] rounded-[calc(var(--k)*24)] border border-white bg-[linear-gradient(160deg,#ffffff_0%,#effcfd_45%,#d6f4f7_100%)] shadow-[0_4px_12px_rgba(16,90,120,0.16)] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
    >
      <span className="block size-[calc(var(--k)*46)]">{icon}</span>
      <span className="text-[length:calc(var(--k)*24)] font-semibold leading-none whitespace-nowrap text-navy">
        {label}
      </span>
    </a>
  )
}
