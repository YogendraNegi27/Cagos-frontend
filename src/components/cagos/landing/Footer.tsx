import KilnWordmarkFooter from '../../ui/kiln-wordmark-footer'

const navigation = [
  [{ label: 'Client CRM', href: '/products/client-crm' }, { label: 'Compliance', href: '/products/compliance' }, { label: 'Billing', href: '/products/billing' }, { label: 'Workflow', href: '/products/workflow' }, { label: 'HRMS', href: '/products/hrms' }, { label: 'Document vault', href: '/products/document-vault' }],
  [{ label: 'Solo practitioners', href: '/solutions/solo' }, { label: 'Growing firms', href: '/solutions/smb' }, { label: 'Enterprise', href: '/solutions/enterprise' }, { label: 'Tax practices', href: '/solutions/tax' }, { label: 'Audit firms', href: '/solutions/audit' }, { label: 'Advisory firms', href: '/solutions/advisors' }],
  [{ label: 'Pricing', href: '/pricing' }, { label: 'Blog & insights', href: '/resources/blog' }, { label: 'Tax calendar', href: '/resources/calendar' }, { label: 'Help centre', href: '/resources/help' }, { label: 'API docs', href: '/resources/api' }, { label: 'Compare CAGOS', href: '/vs/' }],
]
const connect = [[{ label: 'Talk to sales ↗', href: '/contact' }, { label: 'Start free trial ↗', href: '/register' }, { label: 'Sign in ↗', href: '/login' }, { label: 'Follow on X ↗', href: 'https://x.com/CAGos' }]]
const footerLinks = [{ label: 'Contact', href: '/contact' }, { label: 'Help', href: '/resources/help' }]

export const Footer = () => <KilnWordmarkFooter
  className="cagos-wordmark-footer"
  brand="CAGOS"
  wordmark="CAGOS"
  motto={['Less chasing.', 'More advising.']}
  address={['Your practice. Beautifully organised.', 'Clients, compliance, people and payments.', 'Built for Indian Chartered Accountants.']}
  navigationTitle="Explore your workspace"
  navigation={navigation}
  followTitle="Let’s connect"
  socials={connect}
  year={2026}
  registry="Made for the way your practice works."
  legal={footerLinks}
  surface="#e3ecd9"
  deep="#d4e2c9"
  ink="#244f38"
  paper="#f5f8ef"
  fontSans="Geist, Onest, system-ui, sans-serif"
  weight={0.85}
/>
