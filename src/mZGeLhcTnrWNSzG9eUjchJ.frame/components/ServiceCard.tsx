import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type Props = {
  href: string
  title: string
  image: string
  icon: React.ReactNode
  index?: number
}

export function ServiceCard({ href, title, image, icon, index = 0 }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -22 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.42 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
        scale: 1.012,
        boxShadow: '0 8px 24px rgba(16,90,120,0.2)',
      }}
      whileTap={{ scale: 0.98 }}
      className="list-none"
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-[calc(var(--k)*84)] items-center overflow-hidden rounded-[calc(var(--k)*18)] border border-white/95 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(240,252,254,0.92)_50%,rgba(216,246,250,0.96)_100%)] shadow-[0_3px_12px_rgba(16,90,120,0.13)] backdrop-blur-sm transition-all duration-200"
      >
        <div className="relative h-full w-[31%] shrink-0 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-left"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            loading="lazy"
          />
        </div>

        <div className="flex min-w-0 flex-1 items-center px-[calc(var(--k)*10)]">
          <span className="flex size-[calc(var(--k)*36)] shrink-0 items-center justify-center text-teal transition-transform duration-200 group-hover:scale-110">
            {icon}
          </span>
          <span
            className="mx-[calc(var(--k)*12)] h-[calc(var(--k)*38)] w-[calc(var(--k)*2)] shrink-0 rounded-full bg-teal/70"
            aria-hidden
          />
          <span className="min-w-0 flex-1 text-[length:calc(var(--k)*28)] font-bold leading-tight tracking-[-0.01em] text-navy">
            {title}
          </span>
        </div>

        <span className="mr-[calc(var(--k)*16)] flex size-[calc(var(--k)*40)] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(16,90,120,0.18)] transition-transform duration-200 group-hover:scale-105">
          <ArrowRight className="size-[58%] text-teal transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.8} />
        </span>
      </a>
    </motion.li>
  )
}
