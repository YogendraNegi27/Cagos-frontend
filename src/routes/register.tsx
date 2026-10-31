import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Building2, Check, Gift } from 'lucide-react'
import { seoHead } from '../lib/seo'
import { AuthPageShell } from '../components/cagos/marketing/AuthPageShell'
import { FREE_TRIAL_SHORT } from '../lib/marketing-copy'

export const Route = createFileRoute('/register')({
  head: () => seoHead({ path: '/register', title: 'Create your CAGOS workspace | Free 14-day trial', description: 'Start your free 14-day trial of CAGOS — no credit card required.', noindex: true }),
  component: GlobalRegister,
})

function GlobalRegister() {
  const [step, setStep] = useState(1)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firmName, setFirmName] = useState('')
  const [firmSlug, setFirmSlug] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const heading = useRef<HTMLHeadingElement>(null)
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) { initialRender.current = false; return }
    heading.current?.focus({ preventScroll: true })
    heading.current?.scrollIntoView({ block: 'nearest' })
  }, [step])

  const changeStep = (next: number) => { setError(''); setStep(next) }

  return <AuthPageShell registration>
    <section className="registration-card" aria-labelledby="register-title">
      <aside className="registration-intro">
        <span className="registration-symbol"><Building2 size={24} aria-hidden="true" /></span>
        <p className="registration-eyebrow">A CLEARER WAY TO PRACTISE</p>
        <h1 id="register-title">Create your<br className="registration-desktop-break" /> CAGOS workspace</h1>
        <p className="registration-description">Your clients, team and everyday work. Beautifully connected.</p>
        <div className="registration-trial"><Gift size={20} aria-hidden="true" /><div><strong>{FREE_TRIAL_SHORT}</strong><span>All features. No credit card required.</span></div></div>
        <ul className="registration-benefits">{['Built for Indian CA firms', 'One connected workspace', 'Your own client portal'].map(text => <li key={text}><Check size={16} aria-hidden="true" />{text}</li>)}</ul>
      </aside>
      <div className="registration-form-panel">
        <ol className="registration-progress" aria-label="Registration progress">
          {['Your details', 'Your firm'].map((label, index) => <li key={label} aria-current={step === index + 1 ? 'step' : undefined} className={step >= index + 1 ? 'is-current' : ''}><span>{step > index + 1 ? <Check size={12} aria-hidden="true" /> : index + 1}</span>{label}</li>)}
        </ol>
        <h2 ref={heading} tabIndex={-1}>{step === 1 ? 'Let’s start with you.' : 'Make it your workspace.'}</h2>
        <p className="registration-step-copy">{step === 1 ? 'Just a few details to get you started.' : 'Tell us a little about your CA firm.'}</p>
        {error && <div className="registration-notice" role="status">{error}</div>}
        {step === 1 ? <form className="registration-form" onSubmit={e => { e.preventDefault(); if (name.trim() && email.trim() && password.length >= 8) changeStep(2) }}>
          <div><label htmlFor="register-name">Full name</label><input id="register-name" name="name" autoComplete="name" value={name} onChange={e => setName(e.target.value)} required maxLength={120} pattern=".*\S.*" title="Enter your full name" placeholder="Your full name" /></div>
          <div><label htmlFor="register-email">Email address</label><input id="register-email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} value={email} onChange={e => setEmail(e.target.value)} required maxLength={254} placeholder="you@yourfirm.com" /></div>
          <div><label htmlFor="register-password">Create password</label><input id="register-password" name="password" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} aria-describedby="password-hint" placeholder="At least 8 characters" /><small id="password-hint">Use at least 8 characters.</small></div>
          <button type="submit" className="registration-submit">Continue <ArrowRight size={17} aria-hidden="true" /></button>
        </form> : <form className="registration-form" onSubmit={e => { e.preventDefault(); setError('Account creation is not available in this frontend preview. Your details have not been submitted.') }}>
          <div><label htmlFor="register-firm">CA firm name</label><input id="register-firm" name="organization" autoComplete="organization" value={firmName} onChange={e => {setFirmName(e.target.value); setFirmSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))}} required maxLength={160} pattern=".*\S.*" placeholder="Acme & Associates" /></div>
          <div><label htmlFor="register-slug">Workspace URL</label><div className="registration-url"><span>app.cagos.io/</span><input id="register-slug" name="workspace" autoComplete="off" autoCapitalize="none" spellCheck={false} value={firmSlug} onChange={e => setFirmSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))} required maxLength={63} pattern="[a-z0-9]+(-[a-z0-9]+)*" title="Use letters, numbers and single hyphens between words" placeholder="your-firm" /></div></div>
          <div className="registration-field-row"><div><label htmlFor="register-phone">Phone <span>(optional)</span></label><input id="register-phone" name="tel" type="tel" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} maxLength={30} placeholder="+91" /></div><div><label htmlFor="register-city">City <span>(optional)</span></label><input id="register-city" name="city" autoComplete="address-level2" value={city} onChange={e => setCity(e.target.value)} maxLength={100} placeholder="Mumbai" /></div></div>
          <div className="registration-actions"><button type="button" className="registration-back" onClick={() => changeStep(1)}><ArrowLeft size={16} aria-hidden="true" />Back</button><button type="submit" className="registration-submit">Start free trial <ArrowRight size={17} aria-hidden="true" /></button></div>
        </form>}
        <p className="registration-signin">Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </section>
  </AuthPageShell>
}
