import React from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  href: string
  title: string
  image: string
  imagePosition: string
  icon: React.ReactNode
}

export function ServiceCard({ href, title, image, imagePosition, icon }: Props) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex h-[calc(var(--k)*88)] items-center overflow-hidden rounded-[calc(var(--k)*18)] border border-white bg-[linear-gradient(90deg,#ffffff_0%,#f0fcfd_45%,#d8f5f8_100%)] shadow-[0_3px_10px_rgba(16,90,120,0.16)] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.99]"
      >
        <img
          src={image}
          alt=""
          className="h-full w-[36.5%] shrink-0 object-cover [clip-path:ellipse(100%_150%_at_0%_50%)]"
          style={{ objectPosition: imagePosition }}
        />
        <span className="ml-[calc(var(--k)*24)] block size-[calc(var(--k)*40)] shrink-0 text-teal">{icon}</span>
        <span className="mx-[calc(var(--k)*18)] h-[calc(var(--k)*42)] w-[calc(var(--k)*2.5)] shrink-0 rounded-full bg-teal" aria-hidden />
        <span className="min-w-0 flex-1 pt-[0.12em] text-[length:calc(var(--k)*31)] font-semibold leading-none whitespace-nowrap text-navy">
          {title}
        </span>
        <span className="mr-[calc(var(--k)*24)] flex size-[calc(var(--k)*46)] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(16,90,120,0.18)] transition-transform duration-150 ease-out group-hover:translate-x-0.5">
          <ArrowRight className="size-[58%] text-teal" strokeWidth={2.6} />
        </span>
      </a>
    </li>
  )
}
