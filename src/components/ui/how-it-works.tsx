import { useEffect, useRef, useState } from 'react'
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from 'motion/react'
import { Pin } from 'lucide-react'
import './how-it-works.css'

export interface Step { title: string; description: string; number?: string }

/** Pinned note journey adapted from the supplied HowItWorks component. */
export default function HowItWorks({ features }: { features: Step[] }) {
  const board = useRef<HTMLOListElement>(null)
  const visible = useInView(board, { margin: '100px' })
  const reduced = useReducedMotion()
  const [connector, setConnector] = useState({ path: '', width: 1000, height: 600 })

  useEffect(() => {
    const element = board.current
    if (!element) return
    let frame = 0
    const measure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect()
        const notes = Array.from(element.children).filter(node => node.tagName === 'LI')
        const points = notes.map(node => {
          const rect = node.getBoundingClientRect()
          return { x: rect.left - bounds.left + rect.width / 2, y: rect.top - bounds.top + rect.height / 2 }
        })
        const path = points.map((point, index) => {
          if (!index) return `M ${point.x} ${point.y}`
          const previous = points[index - 1]
          const middle = (previous.y + point.y) / 2
          return `C ${previous.x} ${middle}, ${point.x} ${middle}, ${point.x} ${point.y}`
        }).join(' ')
        setConnector({ path, width: Math.max(1, bounds.width), height: Math.max(1, bounds.height) })
      })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    Array.from(element.children).forEach(node => { if (node.tagName === 'LI') observer.observe(node) })
    measure()
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [features.length])

  if (!features.length) return null
  return <LazyMotion features={domAnimation}>
    <div className="cagos-how-it-works">
      <ol className="hiw-board" ref={board} aria-label="How it works">
        {features.length > 1 && <svg className="hiw-connector" viewBox={`0 0 ${connector.width} ${connector.height}`} aria-hidden="true" preserveAspectRatio="none">
          <m.path d={connector.path} fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="8 6" strokeLinecap="round"
            animate={{ strokeDashoffset: visible && !reduced ? -140 : 0 }}
            transition={{ duration: 4, repeat: visible && !reduced ? Infinity : 0, ease: 'linear' }}/>
        </svg>}
        {features.map((step, index) => <li className={`hiw-note hiw-tone-${index % 3}`} key={`${index}-${step.title}`}>
          <m.div className="hiw-paper" initial={{y:reduced?0:12}} whileInView={{y:0}} viewport={{once:true,amount:.15}} transition={{duration:.4}}>
            <Pin className="hiw-pin" size={28} fill="currentColor" aria-hidden="true"/>
            <div className="hiw-note-content">
              <span className="hiw-number" aria-hidden="true">{step.number ?? String(index + 1).padStart(2,'0')}</span>
              <h3>{step.title}</h3><p>{step.description}</p>
            </div>
          </m.div>
        </li>)}
      </ol>
    </div>
  </LazyMotion>
}
