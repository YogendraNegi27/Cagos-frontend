import { useEffect, useId, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight, MessageCircle, Minus, Plus } from 'lucide-react'

export interface FAQItem { id?: string | number; question: string; answer: string; icon?: string; iconPosition?: 'left' | 'right' }
interface ScrollFAQAccordionProps { data: FAQItem[]; title?: string; description?: string; id?: string; className?: string; questionClassName?: string; answerClassName?: string; scrollDriven?: boolean }

/** Single-open FAQ with an optional scroll-driven homepage experience. */
export default function ScrollFAQAccordion({ data, title = 'A few questions. Clear answers.', description = 'Everything you need to know about running your CA practice with CAGos.', id = 'faq', className = '', questionClassName = '', answerClassName = '', scrollDriven = false }: ScrollFAQAccordionProps) {
  const instance = useId()
  const [open, setOpen] = useState<string | null>(null)
  const buttons = useRef<Array<HTMLButtonElement | null>>([])
  const track = useRef<HTMLDivElement>(null)
  const manuallyOpened = useRef(false)
  useEffect(() => {
    if (!scrollDriven || !data.length) return
    const element = track.current
    if (!element) return
    const motion = matchMedia('(prefers-reduced-motion: no-preference)')
    const pinned = matchMedia('(min-width: 900px) and (min-height: 1000px)')
    let frame = 0
    const update = () => {
      frame = 0
      if (!motion.matches) return
      const rect = element.getBoundingClientRect()
      if (rect.top >= innerHeight || rect.bottom <= 0) { manuallyOpened.current = false; return }
      if (manuallyOpened.current) return
      let index: number
      if (pinned.matches) {
        if (rect.top > 90 || rect.bottom < innerHeight) return
        const distance = Math.max(1, rect.height - innerHeight)
        index = Math.min(data.length - 1, Math.max(0, Math.floor((90 - rect.top) / distance * data.length)))
      } else {
        const line = innerHeight * .48
        let closest = Infinity
        index = 0
        buttons.current.forEach((button, i) => {
          if (!button) return
          const box = button.getBoundingClientRect()
          const distance = Math.abs(box.top + box.height / 2 - line)
          if (distance < closest) { closest = distance; index = i }
        })
      }
      setOpen(String(data[index].id ?? index))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); cancelAnimationFrame(frame) }
  }, [scrollDriven, data])
  return <div ref={track} className={scrollDriven ? 'cagos-faq-scroll-track' : undefined} style={scrollDriven ? { '--faq-steps': data.length } as React.CSSProperties : undefined}><section id={id} className={`cagos-faq ${className}`} aria-labelledby={`${instance}-title`}>
    <header className="cagos-faq-heading"><span className="cagos-faq-eyebrow"><MessageCircle size={15} aria-hidden="true" /> GOOD QUESTIONS, THOUGHTFUL ANSWERS</span><h2 id={`${instance}-title`}>{title}</h2><p>{description}</p></header>
    <div className="cagos-faq-conversation">{data.map((item, index) => {
      const key = String(item.id ?? index)
      const expanded = open === key
      const triggerId = `${instance}-q-${index}`
      const panelId = `${instance}-a-${index}`
      return <div key={key} className={`cagos-faq-item ${expanded ? 'is-open' : ''}`}>
        <h3><button ref={el => { buttons.current[index] = el }} type="button" id={triggerId} aria-expanded={expanded} aria-controls={panelId} className={`cagos-faq-question ${questionClassName}`} onClick={() => { manuallyOpened.current = true; setOpen(expanded ? null : key) }} onKeyDown={event => {
          const next = event.key === 'ArrowDown' ? (index + 1) % data.length : event.key === 'ArrowUp' ? (index - 1 + data.length) % data.length : event.key === 'Home' ? 0 : event.key === 'End' ? data.length - 1 : null
          if (next !== null) { event.preventDefault(); buttons.current[next]?.focus() }
        }}><span className="cagos-faq-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span className="cagos-faq-bubble">{item.icon && <span aria-hidden="true">{item.icon} </span>}{item.question}</span><span className="cagos-faq-toggle">{expanded ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}</span></button></h3>
        <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!expanded} className="cagos-faq-answer-wrap"><div className={`cagos-faq-answer ${answerClassName}`}><span className="cagos-faq-answer-label">CAGos</span><p>{item.answer}</p></div></div>
      </div>
    })}</div>
    <p className="cagos-faq-contact">Still have a question? <Link to="/contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></Link></p>
  </section></div>
}
