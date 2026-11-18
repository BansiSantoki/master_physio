import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Globe, MapPin, ContactRound } from 'lucide-react'

import { ContactButton } from './components/ContactButton'
import { ServiceCard } from './components/ServiceCard'
import {
  WhatsAppIcon,
  CallIcon,
  WebsiteIcon,
  LocationIcon,
  CalendarCheckIcon,
  LightningIcon,
  KneeJointIcon,
  BrainIcon,
  SpineCareIcon,
} from './components/ClinicIcons'

import bgImage from '../assets/background.jpg'
import logoImg from '../assets/logo.png'
import thumbBookAppointment from '../assets/thumb_book_appointment.png'
import thumbPainManagement from '../assets/thumb_pain_management.png'
import thumbOrthoRehab from '../assets/thumb_ortho_rehab.png'
import thumbNeuroRehab from '../assets/thumb_neuro_rehab.png'
import thumbSpineCare from '../assets/thumb_spine_care.png'

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

export default function Home(props: Props) {
  const { phone, website, address, slogan } = { ...args, ...props }
  const tel = 'tel:' + phone.replace(/\s/g, '')
  const wa = 'https://wa.me/' + phone.replace(/\D/g, '')
  const site = 'https://' + website.replace(/^https?:\/\//, '')
  const map = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)
  const enquire = (topic: string) =>
    wa + '?text=' + encodeURIComponent(`Hello Dr. Deepak, I would like to ${topic}.`)

  const contactCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Dr. Deepak H. Master PT.',
    'N:Master;Deepak;H.;Dr.;PT.',
    'ORG:Master\'s Physiotherapy & Matrix Centre',
    'TITLE:Senior Consulting Physiotherapist',
    `TEL;TYPE=CELL,VOICE:${phone}`,
    `URL:${site}`,
    `ADR;TYPE=WORK:;;201, Mauli Desire 2, Daftary Road;Malad (East), Mumbai;;400097;India`,
    'NOTE:Specialist in Pain Management & Restricted Movement. Certified Matrix Rhythm Therapy Practitioner.',
    'END:VCARD',
  ].join('\r\n')
  const contactCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(contactCard)}`

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0d1b30] p-0 sm:py-6">
      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="clinic-page relative flex h-[calc(var(--k)*1600)] w-[calc(var(--k)*900)] flex-col justify-between overflow-hidden bg-cover bg-top bg-no-repeat font-sans text-ink shadow-[0_12px_45px_rgba(0,0,0,0.45)] sm:rounded-[calc(var(--k)*36)]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Top Header Section */}
        <section className="relative z-10 flex flex-col items-center pt-[calc(var(--k)*48)] text-center px-[calc(var(--k)*36)]">
          {/* Logo Mark with spring entrance and subtle hover rotate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            whileHover={{ scale: 1.06, rotate: [0, -3, 3, 0] }}
            className="flex items-center justify-center cursor-pointer"
          >
            <img
              src={logoImg}
              alt="Master's Physiotherapy Logo"
              className="h-[calc(var(--k)*122)] w-auto object-contain select-none filter drop-shadow-sm"
            />
          </motion.div>

          {/* Doctor Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-[calc(var(--k)*8)] text-[length:calc(var(--k)*48)] font-bold leading-tight tracking-[-0.015em] whitespace-nowrap text-navy"
          >
            Dr. Deepak H. Master PT.
          </motion.h1>

          {/* Specialty Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.18 }}
            whileHover={{ scale: 1.05 }}
            className="mt-[calc(var(--k)*10)] flex items-center justify-center cursor-default"
          >
            <span className="rounded-full bg-[linear-gradient(90deg,#0ea5a8_0%,#14b8b2_50%,#0ea5a8_100%)] px-[calc(var(--k)*28)] py-[calc(var(--k)*6)] text-[length:calc(var(--k)*24)] font-semibold leading-tight whitespace-nowrap text-white shadow-[0_2px_8px_rgba(14,165,168,0.35)]">
              Senior Consulting Physiotherapist
            </span>
          </motion.div>

          {/* Qualifications & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="mt-[calc(var(--k)*12)] flex flex-col items-center text-[length:calc(var(--k)*22.5)] font-semibold leading-[1.3] text-ink"
          >
            <p>Specialist in Pain Management &amp; Restricted Movement</p>
            <p>Certified Matrix Rhythm Therapy Practitioner</p>
            <p>By Dr. Randoll Institute, Munich, Germany</p>
            <p>Certified Manual Therapist (ISOMT)</p>
          </motion.div>
        </section>

        {/* Clear Spacer so clinic room (bed, neon runner, spine, ball) shines through in the background */}
        <div className="h-[calc(var(--k)*130)] shrink-0 pointer-events-none" aria-hidden />

        {/* Interactive Content: Quick Actions, Services, Save Contact, Slogan, Footer */}
        <div className="relative z-10 flex flex-col px-[calc(var(--k)*44)] pb-[calc(var(--k)*38)]">
          {/* 4 Quick Action Contact Buttons */}
          <nav aria-label="Quick Actions" className="grid grid-cols-4 gap-[calc(var(--k)*16)]">
            <ContactButton href={wa} label="WhatsApp" icon={<WhatsAppIcon />} index={0} />
            <ContactButton href={tel} label="Call" icon={<CallIcon />} index={1} />
            <ContactButton href={site} label="Website" icon={<WebsiteIcon />} index={2} />
            <ContactButton href={map} label="Location" icon={<LocationIcon />} index={3} />
          </nav>

          {/* 5 Service Cards */}
          <ul className="mt-[calc(var(--k)*22)] flex flex-col gap-[calc(var(--k)*11)]">
            <ServiceCard
              href={enquire('book an appointment')}
              title="Book Appointment"
              image={thumbBookAppointment}
              icon={<CalendarCheckIcon className="size-full" />}
              index={0}
            />
            <ServiceCard
              href={enquire('enquire about Pain Management')}
              title="Pain Management"
              image={thumbPainManagement}
              icon={<LightningIcon className="size-full" />}
              index={1}
            />
            <ServiceCard
              href={enquire('enquire about Ortho Rehab')}
              title="Ortho Rehab"
              image={thumbOrthoRehab}
              icon={<KneeJointIcon className="size-full" />}
              index={2}
            />
            <ServiceCard
              href={enquire('enquire about Neuro Rehab')}
              title="Neuro Rehab"
              image={thumbNeuroRehab}
              icon={<BrainIcon className="size-full" />}
              index={3}
            />
            <ServiceCard
              href={enquire('enquire about Spine Care')}
              title="Spine Care"
              image={thumbSpineCare}
              icon={<SpineCareIcon className="size-full" />}
              index={4}
            />
          </ul>

          {/* Save Contact Button */}
          <motion.a
            href={contactCardUrl}
            download="Dr-Deepak-H-Master.vcf"
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.8 }}
            whileHover={{
              scale: 1.025,
              y: -3,
              boxShadow: '0 8px 24px rgba(15,154,157,0.4)',
            }}
            whileTap={{ scale: 0.96 }}
            className="group relative mt-[calc(var(--k)*18)] flex h-[calc(var(--k)*66)] items-center justify-center gap-[calc(var(--k)*12)] overflow-hidden rounded-[calc(var(--k)*18)] bg-[linear-gradient(100deg,#0a939e_0%,#18b8c8_50%,#088295_100%)] text-[length:calc(var(--k)*27)] font-bold text-white shadow-[0_4px_16px_rgba(14,140,155,0.32)] backdrop-blur-sm transition-all duration-200"
          >
            {/* Animated shimmer light effect */}
            <motion.div
              className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.28)_50%,transparent_100%)]"
              animate={{ translateX: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', repeatDelay: 1 }}
            />
            <ContactRound className="size-[calc(var(--k)*32)] transition-transform duration-200 group-hover:scale-110" strokeWidth={2.2} />
            <span className="tracking-wide">Save Contact</span>
          </motion.a>

          {/* Slogan Pill Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            className="relative mt-[calc(var(--k)*18)] overflow-hidden rounded-full bg-[linear-gradient(90deg,#1fc2d0_0%,#0ea5b6_40%,#088295_100%)] py-[calc(var(--k)*13)] px-[calc(var(--k)*18)] text-center shadow-[0_4px_16px_rgba(14,140,155,0.32)]"
          >
            <svg
              viewBox="0 0 500 50"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <path d="M0 50 C150 25 320 42 500 8 L500 50 Z" fill="white" opacity="0.18" />
              <path d="M250 50 C360 42 430 26 500 6" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
            </svg>
            {/* Soft wave shimmer */}
            <motion.div
              className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.22)_50%,transparent_100%)]"
              animate={{ translateX: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', repeatDelay: 1.5 }}
            />
            <p className="relative text-[length:calc(var(--k)*33)] font-medium italic leading-tight text-white tracking-wide">
              {slogan}
            </p>
          </motion.div>

          {/* Footer Contact Info */}
          <motion.footer
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1 }}
            className="mt-[calc(var(--k)*18)] flex flex-col items-center gap-[calc(var(--k)*8)] text-navy"
          >
            {/* Phone & Website Row */}
            <div className="flex items-center justify-center gap-[calc(var(--k)*24)] text-[length:calc(var(--k)*22)] font-bold">
              <motion.a
                href={tel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-[calc(var(--k)*10)] transition-colors hover:text-teal"
              >
                <span className="flex size-[calc(var(--k)*28)] items-center justify-center rounded-full bg-teal text-white shadow-sm">
                  <Phone className="size-[55%] fill-white text-white" strokeWidth={1} />
                </span>
                <span>{phone}</span>
              </motion.a>
              <span className="h-[calc(var(--k)*24)] w-[calc(var(--k)*2)] rounded-full bg-teal/60" aria-hidden />
              <motion.a
                href={site}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-[calc(var(--k)*10)] transition-colors hover:text-teal"
              >
                <span className="flex size-[calc(var(--k)*28)] items-center justify-center rounded-full bg-teal text-white shadow-sm">
                  <Globe className="size-[60%] text-white" strokeWidth={2.2} />
                </span>
                <span>{website}</span>
              </motion.a>
            </div>

            {/* Address Row */}
            <motion.a
              href={map}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-[calc(var(--k)*8)] text-[length:calc(var(--k)*20)] font-semibold text-center leading-tight transition-colors hover:text-teal"
            >
              <span className="flex size-[calc(var(--k)*26)] shrink-0 items-center justify-center text-teal">
                <MapPin
                  className="size-[90%] fill-teal text-teal [&>circle]:fill-white [&>circle]:stroke-white"
                  strokeWidth={1.8}
                />
              </span>
              <span>{address}</span>
            </motion.a>
          </motion.footer>
        </div>
      </motion.main>
    </div>
  )
}
