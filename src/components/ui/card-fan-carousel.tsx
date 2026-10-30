import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, CalendarDays, FileCheck2, FolderLock, Receipt, Users, Workflow, UserRound, BarChart3 } from 'lucide-react'

const cards = [
  { title: 'Compliance', detail: 'Stay ahead of every deadline.', metric: '12', metricLabel: 'filings this week', items: ['GSTR-3B preparation', 'ITR document review'], icon: CalendarDays, to: '/products/compliance', label: 'DUE DATES' },
  { title: 'Client CRM', detail: 'Keep every client relationship in view.', metric: '128', metricLabel: 'active clients', items: ['Mehta Industries', 'Kapoor & Co.'], icon: Users, to: '/products/client-crm', label: 'CLIENTS' },
  { title: 'Billing', detail: 'Make invoicing and follow-ups simpler.', metric: '₹2.4L', metricLabel: 'collected this month', items: ['3 invoices due', '98% collection rate'], icon: Receipt, to: '/products/billing', label: 'PAYMENTS' },
  { title: 'Workflow', detail: 'Move work forward, together.', metric: '86', metricLabel: 'tasks completed', items: ['12 in progress', '4 need review'], icon: Workflow, to: '/products/workflow', label: 'TEAMWORK' },
  { title: 'Document vault', detail: 'Keep the right files close at hand.', metric: '42', metricLabel: 'files organised', items: ['8 awaiting client', 'All files accounted'], icon: FolderLock, to: '/products/document-vault', label: 'DOCUMENTS' },
  { title: 'HRMS', detail: 'Bring your people and practice together.', metric: '24', metricLabel: 'team members', items: ['96% attendance', '3 leave requests'], icon: UserRound, to: '/products/hrms', label: 'YOUR TEAM' },
  { title: 'Tax practices', detail: 'Give tax work a clearer path.', metric: '18', metricLabel: 'returns on track', items: ['GST and ITR', 'TDS checklist'], icon: FileCheck2, to: '/solutions/tax', label: 'TAX WORK' },
  { title: 'Growing firms', detail: 'Make room for your next chapter.', metric: '+24%', metricLabel: 'practice growth', items: ['More clients', 'Clearer visibility'], icon: BarChart3, to: '/solutions/smb', label: 'GROWTH' },
] as const

export default function CardFanCarousel() {
  const [active, setActive] = useState(0)
  const change = (step: number) => setActive(current => (current + step + cards.length) % cards.length)
  const selected = cards[active]
  return <section className="practice-fan fresh-wrap" aria-labelledby="practice-fan-title">
    <div className="practice-fan-heading"><span className="fresh-eyebrow">YOUR PRACTICE, CONNECTED</span><h2 id="practice-fan-title">Everything in its place.<br /><em>Everyone on the same page.</em></h2><p>Explore the tools that bring your CA practice together.</p></div>
    <div className="practice-fan-stage" aria-label="Explore CAGOS tools">
      {cards.map((card, index) => {
        const offset = ((index - active + cards.length + Math.floor(cards.length / 2)) % cards.length) - Math.floor(cards.length / 2)
        const Icon = card.icon
        return <button key={card.title} type="button" className={`practice-fan-card${offset === 0 ? ' is-active' : ''}`} style={{ '--fan-x': `${offset * 62}%`, '--fan-rotation': `${offset * 7}deg`, '--fan-y': `${Math.abs(offset) * 13}px`, '--fan-scale': 1 - Math.abs(offset) * .07, opacity: Math.abs(offset) > 3 ? 0 : 1, zIndex: 10 - Math.abs(offset) } as React.CSSProperties} onClick={() => setActive(index)} tabIndex={Math.abs(offset) <= 3 ? 0 : -1} aria-label={`Show ${card.title}`} aria-pressed={offset === 0}>
          <span className="practice-fan-card-top"><span>CAGOS <i> / </i> WORKSPACE</span><span>0{index + 1}</span></span><span className="practice-fan-icon"><Icon size={30} strokeWidth={1.6} /></span><span className="practice-fan-label">{card.label}</span><strong>{card.title}</strong><span className="practice-fan-card-detail">{card.detail}</span><span className="practice-fan-metric"><b>{card.metric}</b><small>{card.metricLabel}</small></span><span className="practice-fan-items">{card.items.map(item => <span key={item}>{item}</span>)}</span><span className="practice-fan-decoration" aria-hidden="true"><span /><span /><span /></span>
        </button>
      })}
    </div>
    <div className="practice-fan-controls"><button type="button" onClick={() => change(-1)} aria-label="Previous tool"><ArrowLeft size={18} /></button><span aria-live="polite">{String(active + 1).padStart(2, '0')} <span>/</span> {String(cards.length).padStart(2, '0')}</span><button type="button" onClick={() => change(1)} aria-label="Next tool"><ArrowRight size={18} /></button></div>
    <Link className="practice-fan-link" to={selected.to}>Explore {selected.title} <ArrowRight size={16} aria-hidden="true" /></Link>
  </section>
}
