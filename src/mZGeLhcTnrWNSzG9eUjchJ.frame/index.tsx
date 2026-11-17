import React from 'react'
import { Phone, Globe, MapPin, CalendarDays, Zap, Brain, Bone, ContactRound } from 'lucide-react'

import { ContactButton } from './components/ContactButton'
import { ServiceCard } from './components/ServiceCard'
import { WhatsAppIcon, SpineIcon } from './components/ClinicIcons'
import { Waves } from './components/Waves'

export const args = {
  phone: '+91 9664081742',
  website: 'www.drdeepakmasterphysio.com',
  address: '201, Mauli Desire 2, Daftary Road, Malad (East), Mumbai - 400097.',
  slogan: 'Your single visit can change your life.',
}

export const argTypes = {
  phone: { control: 'text' },
  website: { control: 'text' },
  address: { control: 'text' },
  slogan: { control: 'text' },
}

type Props = Partial<typeof args>

const REF = 'https://cdn.magicpatterns.com/uploads/eTKW9QwSt6P12s9durm11E/image.png'
const HERO = 'https://cdn.magicpatterns.com/patterns/generated-images/f0e39c6a-cd46-4262-ba20-74e932fd333a.jpg'

export default function Home(props: Props) {
  const { phone, website, address, slogan } = { ...args, ...props }
  const tel = 'tel:' + phone.replace(/\s/g, '')
  const wa = 'https://wa.me/' + phone.replace(/\D/g, '')
  const site = 'https://' + website
  const map = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)
  const enquire = (topic: string) =>
    wa + '?text=' + encodeURIComponent(`Hello Dr. Deepak, I would like to ${topic}.`)
  const contactCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Dr. Deepak H. Master PT.',
    'N:Master;Deepak H.;;;',
    `TEL;TYPE=WORK,VOICE:${phone}`,
    `URL:${site}`,
    `ADR;TYPE=WORK:;;${address};`,
    'END:VCARD',
  ].join('\r\n')
  const contactCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(contactCard)}`

  return (
    <main className="clinic-page relative h-[100dvh] w-full overflow-hidden bg-white font-sans text-ink">
      <Waves />

      <div className="relative z-10 flex min-h-full flex-col">
        {/* Hero: logo, doctor, qualifications over the clinic photo */}
        <section className="relative flex min-h-0 flex-1 flex-col items-center">
          <div className="relative z-10 flex flex-col items-center pt-[calc(var(--k)*28)] text-center">
            <div
              role="img"
              aria-label="Master's Physiotherapy & Matrix Centre logo"
              className="h-[calc(var(--k)*118)] w-[calc(var(--k)*128)] mix-blend-multiply"
              style={{
                backgroundImage: `url(${REF})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '703.125% auto',
                backgroundPosition: '49.48% 5.8%',
              }}
            />
            <h1 className="mt-[calc(var(--k)*6)] text-[length:calc(var(--k)*46)] font-bold leading-none tracking-[-0.01em] whitespace-nowrap text-navy">
              Dr. Deepak H. Master PT.
            </h1>
            <p className="mt-[calc(var(--k)*12)] rounded-full bg-[linear-gradient(90deg,#0f9a9d,#14b3b5_50%,#0f9a9d)] px-[calc(var(--k)*26)] pb-[calc(var(--k)*3)] pt-[calc(var(--k)*6)] text-[length:calc(var(--k)*25)] font-medium leading-tight whitespace-nowrap text-white shadow-[0_2px_6px_rgba(16,167,169,0.3)]">
              Senior Consulting Physiotherapist
            </p>
            <div className="mt-[calc(var(--k)*12)] text-[length:calc(var(--k)*21.5)] font-semibold leading-[1.18] whitespace-nowrap text-ink">
              <p>Specialist in Pain Management &amp; Restricted Movement</p>
              <p>Certified Matrix Rhythm Therapy Practitioner</p>
              <p>By Dr. Randoll Institute, Munich, Germany</p>
              <p>Certified Manual Therapist (ISOMT)</p>
            </div>
          </div>
          <img
            src={HERO}
            alt="Physiotherapy clinic interior"
            className="mt-[calc(var(--k)*8)] block h-auto w-full shrink-0 rounded-[calc(var(--k)*12)] object-contain shadow-[0_4px_12px_rgba(16,90,120,0.16)]"
          />
        </section>

        {/* Everything below the hero, at its natural size */}
        <div className="relative mx-auto flex w-[min(100%,calc(var(--k)*1120))] shrink-0 flex-col px-[calc(var(--k)*30)] pb-[calc(var(--k)*58)]">
        <nav aria-label="Contact" className="grid grid-cols-4 gap-[calc(var(--k)*20)] px-[calc(var(--k)*8)]">
          <ContactButton href={wa} label="WhatsApp" icon={<WhatsAppIcon className="h-full w-full text-[#25B03D]" />} />
          <ContactButton href={tel} label="Call" icon={<Phone className="h-full w-full fill-[#1A6FD8] text-[#1A6FD8]" strokeWidth={1.5} />} />
          <ContactButton href={site} label="Website" icon={<Globe className="h-full w-full text-[#1A6FD8]" strokeWidth={2.2} />} />
          <ContactButton href={map} label="Location" icon={<MapPin className="h-full w-full fill-teal text-teal [&>circle]:fill-white [&>circle]:stroke-white" strokeWidth={1.8} />} />
        </nav>

        <ul className="mt-[calc(var(--k)*28)] flex flex-col gap-[calc(var(--k)*10)]">
          <ServiceCard
            href={enquire('book an appointment')}
            title="Book Appointment"
            image="https://cdn.magicpatterns.com/patterns/generated-images/db01ace4-7076-4f5e-83ab-12fba68e9d55.jpg"
            imagePosition="40% 60%"
            icon={<CalendarDays className="h-full w-full" strokeWidth={1.8} />}
          />
          <ServiceCard
            href={enquire('enquire about Pain Management')}
            title="Pain Management"
            image="https://cdn.magicpatterns.com/patterns/generated-images/4ae895e1-6611-4419-8497-3956572da63d.jpg"
            imagePosition="52% 45%"
            icon={<Zap className="h-full w-full fill-teal" strokeWidth={1.4} />}
          />
          <ServiceCard
            href={enquire('enquire about Ortho Rehab')}
            title="Ortho Rehab"
            image="https://cdn.magicpatterns.com/patterns/generated-images/b6951a63-5c78-44d3-898c-d573d3859916.jpg"
            imagePosition="45% 55%"
            icon={<Bone className="h-full w-full" strokeWidth={1.6} />}
          />
          <ServiceCard
            href={enquire('enquire about Neuro Rehab')}
            title="Neuro Rehab"
            image="https://cdn.magicpatterns.com/patterns/generated-images/8001b07b-50ce-43da-8d54-94167baaa17b.jpg"
            imagePosition="45% 55%"
            icon={<Brain className="h-full w-full" strokeWidth={1.6} />}
          />
          <ServiceCard
            href={enquire('enquire about Spine Care')}
            title="Spine Care"
            image="https://cdn.magicpatterns.com/patterns/generated-images/75eaf8f6-7509-4867-a7c6-6f64cb41da34.jpg"
            imagePosition="50% 45%"
            icon={<SpineIcon className="h-full w-full" />}
          />
        </ul>

        <a
          href={contactCardUrl}
          download="Dr-Deepak-H-Master.vcf"
          className="mt-[calc(var(--k)*18)] flex h-[calc(var(--k)*68)] items-center justify-center gap-[calc(var(--k)*12)] rounded-[calc(var(--k)*18)] bg-[linear-gradient(100deg,#0b8e98,#1fb6c1_50%,#0b7f8f)] text-[length:calc(var(--k)*27)] font-semibold text-white shadow-[0_4px_12px_rgba(16,90,120,0.2)] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
        >
          <ContactRound className="size-[calc(var(--k)*32)]" strokeWidth={2} />
          <span>Save Contact</span>
        </a>

        {/* Slogan */}
        <div className="relative mt-[calc(var(--k)*30)] overflow-hidden rounded-full bg-[linear-gradient(100deg,#0b8e98_0%,#1fb6c1_30%,#45d0d8_58%,#1aa9b6_80%,#0b7f8f_100%)] py-[calc(var(--k)*12)] text-center shadow-[0_6px_14px_rgba(16,120,140,0.28)]">
          <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
            <path d="M0 40 C120 22 260 36 400 6 L400 40 Z" fill="white" opacity="0.14" />
            <path d="M210 40 C290 34 350 22 400 4" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" fill="none" />
          </svg>
          <p className="relative text-[length:calc(var(--k)*34)] font-medium italic leading-tight whitespace-nowrap text-white">
            {slogan}
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-[calc(var(--k)*28)] flex flex-col items-center gap-[calc(var(--k)*10)] text-[length:calc(var(--k)*23)] font-medium leading-none whitespace-nowrap text-navy">
          <div className="flex items-center gap-[calc(var(--k)*30)]">
            <a href={tel} className="flex items-center gap-[calc(var(--k)*14)] hover:text-teal">
              <span className="flex size-[calc(var(--k)*32)] items-center justify-center rounded-full bg-teal">
                <Phone className="size-[60%] fill-white text-white" strokeWidth={1} />
              </span>
              <span className="pt-[0.15em]">{phone}</span>
            </a>
            <span className="h-[calc(var(--k)*30)] w-px bg-teal" aria-hidden />
            <a href={site} target="_blank" rel="noreferrer" className="flex items-center gap-[calc(var(--k)*14)] hover:text-teal">
              <span className="flex size-[calc(var(--k)*32)] items-center justify-center rounded-full bg-teal">
                <Globe className="size-[66%] text-white" strokeWidth={2} />
              </span>
              <span className="pt-[0.15em]">{website}</span>
            </a>
          </div>
          <a href={map} target="_blank" rel="noreferrer" className="flex items-center gap-[calc(var(--k)*10)] text-[length:calc(var(--k)*21)] hover:text-teal">
            <MapPin className="size-[calc(var(--k)*30)] shrink-0 fill-teal text-teal [&>circle]:fill-white [&>circle]:stroke-white" strokeWidth={1.6} />
            <span className="pt-[0.15em]">{address}</span>
          </a>
        </footer>
        </div>
      </div>
    </main>
  )
}
