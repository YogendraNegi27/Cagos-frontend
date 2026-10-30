import { useId, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { CompanyBrand } from './company-brand'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

type FeatureItem = { title: string; desc: string; icon: LucideIcon }

// Adapted from the supplied FeaturesWithPanel. Each route supplies its own
// existing feature content; no demo videos or external requests are needed.
export default function FeaturesWithPanel({ items }: { items: FeatureItem[] }) {
  const [active, setActive] = useState(0)
  const id = useId()
  const reduced = useReducedMotion()
  const duration = reduced ? 0 : .28
  if (!items.length) return null
  const selected = items[active] ?? items[0]
  const preview = (item: FeatureItem, index: number) => {
    const Icon = item.icon
    return <div className="feature-panel-preview">
      <div className="feature-panel-brand"><span><CompanyBrand width={100}/></span><span>YOUR CONNECTED PRACTICE</span></div>
      <div className="feature-panel-art" aria-hidden="true"><span className="feature-panel-orbit"/><span className="feature-panel-icon"><Icon size={48}/></span><span className="feature-panel-index">0{index + 1}</span></div>
      <div className="feature-panel-copy"><span className="feature-panel-eyebrow">BUILT FOR INDIAN CA FIRMS</span><h3>{item.title}</h3><p>{item.desc}</p></div>
    </div>
  }
  return <div className="features-with-panel">
    <div className="feature-panel-list" aria-label="Explore features">
      {items.map((item, index) => <div className={`feature-panel-item ${active === index ? 'is-selected' : ''}`} key={item.title}>
        <button id={`${id}-trigger-${index}`} aria-expanded={active === index} aria-controls={`${id}-mobile-${index}`} onClick={() => setActive(index)}>
          <span className="feature-panel-number">{index + 1}</span><span>{item.title}</span>
        </button>
        <div className="feature-panel-mobile" id={`${id}-mobile-${index}`} role="region" aria-labelledby={`${id}-trigger-${index}`}>
          <AnimatePresence initial={false}>{active === index && <motion.div key={index} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration}} style={{overflow:'hidden'}}>{preview(item,index)}</motion.div>}</AnimatePresence>
        </div>
      </div>)}
    </div>
    <div className="feature-panel-desktop" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{opacity:0,y:reduced?0:12,scale:reduced?1:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:reduced?0:-8}} transition={{duration}}>{preview(selected,active)}</motion.div></AnimatePresence>
    </div>
  </div>
}
