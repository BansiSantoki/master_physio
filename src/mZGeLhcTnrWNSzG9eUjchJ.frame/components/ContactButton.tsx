import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  href: string
  label: string
  icon: React.ReactNode
  index?: number
}

export function ContactButton({ href, label, icon, index = 0 }: Props) {
  const external = href.startsWith('http')
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 340,
        damping: 24,
        delay: 0.28 + index * 0.06,
      }}
      whileHover={{
        y: -4,
        scale: 1.04,
        boxShadow: '0 8px 20px rgba(16,90,120,0.22)',
      }}
      whileTap={{ scale: 0.93 }}
      className="flex h-[calc(var(--k)*110)] min-w-0 flex-col items-center justify-center gap-[calc(var(--k)*7)] rounded-[calc(var(--k)*22)] border border-white/95 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(242,252,254,0.92)_50%,rgba(224,249,252,0.96)_100%)] shadow-[0_4px_14px_rgba(16,90,120,0.12)] backdrop-blur-sm transition-shadow duration-200"
    >
      <motion.span
        className="flex size-[calc(var(--k)*48)] items-center justify-center"
        whileHover={{ rotate: [0, -7, 7, 0], scale: 1.08 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.span>
      <span className="text-[length:calc(var(--k)*23)] font-bold leading-none tracking-tight text-navy">
        {label}
      </span>
    </motion.a>
  )
}
