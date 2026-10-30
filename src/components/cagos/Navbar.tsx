import { Link } from '@tanstack/react-router'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { CompanyBrand } from '../ui/company-brand'
import { useEffect, useId, useRef, useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
const groups = [
{name:'Product',links:[['Client CRM','/products/client-crm'],['Compliance','/products/compliance'],['Billing','/products/billing'],['Workflow','/products/workflow'],['HRMS','/products/hrms'],['Document vault','/products/document-vault']]},
{name:'Solutions',links:[['Solo practitioners','/solutions/solo'],['Growing firms','/solutions/smb'],['Enterprise','/solutions/enterprise'],['Tax practices','/solutions/tax'],['Audit firms','/solutions/audit'],['Advisory','/solutions/advisors']]},
{name:'Resources',links:[['Blog & insights','/resources/blog'],['Tax calendar','/resources/calendar'],['Help centre','/resources/help'],['Case studies','/resources/case-studies'],['Webinars','/resources/webinars'],['API docs','/resources/api'],['Compare','/vs/']]}]
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const root = useRef<HTMLElement>(null)
  const id = useId()
  const { theme, toggleTheme } = useTheme()
  const close = () => { setActive(null); setOpen(false) }

  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) close()
    }
    const resize = () => close()
    document.addEventListener('pointerdown', outside)
    window.addEventListener('resize', resize)
    return () => {
      document.removeEventListener('pointerdown', outside)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <header ref={root} className="fresh-nav cagos-pill-nav" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) close()
  }} onKeyDown={event => {
    if (event.key === 'Escape') {
      const trigger = active ? root.current?.querySelector<HTMLButtonElement>(`[data-dropdown="${active}"]`) : root.current?.querySelector<HTMLButtonElement>('.fresh-mobile')
      close()
      trigger?.focus()
    }
  }}>
    <div className="fresh-nav-inner">
      <Link to="/" className="fresh-brand" onClick={close}><CompanyBrand width={140}/></Link>
      <button className="fresh-mobile" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls={`${id}-navigation`} onClick={() => { setOpen(!open); setActive(null) }}>{open ? <X/> : <Menu/>}</button>
      <nav id={`${id}-navigation`} className={`fresh-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {groups.map(group => <div className="pill-dropdown" key={group.name}>
          <button data-dropdown={group.name} className="pill-nav-trigger" aria-expanded={active === group.name} aria-controls={`${id}-${group.name}`} onClick={() => setActive(active === group.name ? null : group.name)}>{group.name}</button>
          <div id={`${id}-${group.name}`} className={`pill-dropdown-panel ${active === group.name ? 'is-active' : ''}`} inert={active !== group.name} aria-hidden={active !== group.name}>
            <div className="pill-dropdown-content">{group.links.map(([label, to]) => <Link key={to} to={to as never} onClick={close}>{label}</Link>)}</div>
          </div>
        </div>)}
        <Link to="/pricing" onClick={close}>Pricing</Link><Link to="/contact" onClick={close}>Contact</Link><button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}</button><Link to="/login" className="fresh-login" onClick={close}>Log in</Link><Link to="/register" className="fresh-button" onClick={close}>Start free trial</Link>
      </nav>
    </div>
  </header>
}
