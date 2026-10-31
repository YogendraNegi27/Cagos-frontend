import type { CSSProperties, ComponentType } from 'react'
import { useEffect, useRef } from 'react'
import { FileText, ShieldCheck, Clock3, FolderLock } from 'lucide-react'
import { CompanyBrand } from './company-brand'

type Feature = {
  name: string
  icon: ComponentType<{ size?: number }>
  title: string
  text: string
  to: string
  tasks: string[]
}

type StickyFeatureSectionProps = { features: Feature[] }

const images = [
  { id: 'photo-1450101499163-c8848c66ca85', alt: 'Professionals reviewing paperwork together' },
  { id: 'photo-1521737711867-e3b97375f902', alt: 'A team collaborating in a bright office' },
  { id: 'photo-1554224155-6726b3ff858f', alt: 'Financial documents and a calculator on a desk' },
  { id: 'photo-1499750310107-5fef28a66643', alt: 'An organised workspace with a laptop and documents' },
]

export function StickyFeatureSection({ features }: StickyFeatureSectionProps) {
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stack = stackRef.current
    if (!stack) return
    const cards = Array.from(stack.querySelectorAll<HTMLElement>('.sticky-feature-card'))
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let enabled = false
    const paint = () => {
      frame = 0
      const pin = parseFloat(getComputedStyle(stack).getPropertyValue('--stack-top'))
      // Read positions before writing styles; scroll never causes a React render.
      const tops = cards.map(card => card.getBoundingClientRect().top)
      cards.forEach((card, index) => {
        const progress = enabled && index < cards.length - 1
          ? Math.max(0, Math.min(1, 1 - (tops[index + 1] - pin) / (cards[index].offsetHeight + 48)))
          : 0
        card.style.setProperty('--stack-scale', String(1 - progress * .055))
        card.style.setProperty('--stack-shade', String(1 - progress * .12))
      })
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint) }
    const measure = () => {
      enabled = !reducedMotion.matches
      stack.dataset.animated = String(enabled)
      schedule()
    }
    const resize = new ResizeObserver(measure)
    cards.forEach(card => resize.observe(card))
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', measure)
    reducedMotion.addEventListener('change', measure)
    measure()
    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', measure)
      reducedMotion.removeEventListener('change', measure)
    }
  }, [])

  return (
    <div ref={stackRef} className="sticky-features" aria-label="CAGOS workspace modules">
      {features.map((feature, index) => {
        const photo = images[index % images.length]
        return (
          <article className="sticky-feature-card" key={feature.name} style={{ '--sticky-index': index } as CSSProperties}>
            <div className="sticky-feature-copy">
              <span className="sticky-feature-number">0{index + 1} / {feature.name.toUpperCase()}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <a href={feature.to}>Explore {feature.name.toLowerCase()} <span aria-hidden="true">↗</span></a>
            </div>
            {index === 0 ? <div className="compliance-showcase" aria-label="Compliance workspace preview">
              <div className="compliance-showcase-top"><span style={{display:'flex',alignItems:'center',gap:6}}><CompanyBrand width={80}/><b>/ Compliance</b></span><span className="compliance-preview-label">Product preview</span></div>
              <div className="compliance-showcase-title"><div><small>EVERY DEADLINE, IN VIEW</small><h4>Your compliance desk</h4></div><span className="compliance-count">4 active filings</span></div>
              <div className="compliance-summary"><span><b>03</b> In progress</span><span><b>01</b> Needs attention</span></div>
              <div className="compliance-filings">{[
                ['GSTR-1 Filing', 'Sunrise LLC · Dec 2026', '11 Jan 2027', 'In progress', '—'],
                ['GSTR-3B Filing', 'Sunrise LLC · Dec 2026', '20 Jan 2027', 'In progress', '—'],
                ['GST Registration', 'Service request · aabb', 'No deadline', 'In progress', 'Y'],
                ['GSTR-1 Filing', 'Sunrise LLC · Sep 2026', '10 Oct 2026', 'Overdue', 'Y'],
              ].map(([title, client, due, status, owner], row) => <div className={`compliance-filing ${row === 3 ? 'needs-attention' : ''}`} key={`${title}-${row}`}><span className="compliance-file-icon" aria-hidden="true">≡</span><div className="compliance-filing-name"><strong>{title}</strong><small>{client}</small></div><div className="compliance-filing-due"><small>Due date</small><strong>{due}</strong></div><span className="compliance-filing-status">{status}</span><span className="compliance-owner" aria-label={owner === 'Y' ? 'Assigned to Yogi' : 'Unassigned'}>{owner}</span></div>)}</div>
              <div className="compliance-showcase-footer"><span>● One organised view. Clear next steps.</span><span>GST · ITR · TDS · ROC</span></div>
            </div> : index === 3 ? <div className="documents-showcase" aria-label="Document vault product preview">
              <div className="compliance-showcase-top"><span style={{display:'flex',alignItems:'center',gap:6}}><CompanyBrand width={80}/><b>/ Document vault</b></span><FolderLock size={15} aria-hidden="true" /></div>
              <div className="compliance-showcase-title"><div><small>LESS FOLLOW-UP. MORE CLARITY.</small><h4>Every file, accounted for.</h4></div></div>
              <div className="documents-overview"><span><ShieldCheck size={17} /><b>Approved & organised</b><small>Firm files and client requests, together.</small></span><span className="documents-preview-tag">Product preview</span></div>
              <div className="documents-list">{[
                ['Filing acknowledgement', 'Sunrise LLC · PDF document', 'Approved'],
                ['PAN card', 'pp · Identity verification', 'Requested'],
                ['Address proof', 'pp · Business / residence', 'Requested'],
                ['Bank account details', 'aabb · Refund verification', 'Requested'],
              ].map(([name, detail, status]) => <div className={`documents-row ${status === 'Approved' ? 'is-approved' : ''}`} key={name}>
                <span className="documents-file-icon">{status === 'Approved' ? <ShieldCheck size={18} /> : <FileText size={18} />}</span>
                <div><strong>{name}</strong><small>{detail}</small></div>
                <span className="documents-status">{status === 'Approved' ? <ShieldCheck size={11} /> : <Clock3 size={11} />}{status}</span>
              </div>)}</div>
              <div className="documents-request-note"><Clock3 size={14} /><span>Waiting for client <b>3 document requests</b></span><span>26 Oct ’26</span></div>
            </div> : <div className="sticky-feature-image">
              <img src={`https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=1000&q=80`}
                srcSet={[400, 640, 1000].map(width => `https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=${width}&q=80 ${width}w`).join(', ')}
                sizes="(max-width: 800px) 90vw, 45vw" width={1000} height={750}
                alt={photo.alt} loading="lazy" decoding="async" />
            </div>}
          </article>
        )
      })}
    </div>
  )
}
