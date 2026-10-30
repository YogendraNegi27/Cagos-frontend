import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import {
  Clock,
  Shield,
  Users,
  Send,
  Cloud,
  Settings,
  ChevronRight,
} from 'lucide-react'

import { Reveal, IconSparkle, IconCheck } from '../primitives'
import { FREE_TRIAL_CTA } from '../../../lib/marketing-copy'

/* ===================== Right-side editor mock ===================== */

const EditorToolbar = () => (
  <div className="mkt-toolbar">
    <div className="mkt-toolbar-left">
      <span className="mkt-toolbar-icon"><Settings size={14} /></span>
      <span>Custom Workflow</span>
    </div>
    <div className="mkt-toolbar-right">
      <span className="mkt-toolbar-item">GST 3B · Acme &amp; Co</span>
      <span className="mkt-toolbar-sep" />
      <span className="mkt-toolbar-item">
        <Cloud size={12} />
        <span>Built on Cloudflare</span>
      </span>
    </div>
  </div>
)

const roleEntries = [
  { initials: 'RM', name: 'CA Ramesh Mehta', role: 'Partner', color: 'bg-brand-500' },
  { initials: 'PS', name: 'CA Priya Sharma', role: 'Manager', color: 'bg-blue-500' },
  { initials: 'AJ', name: 'Ankit Patel', role: 'Staff', color: 'bg-amber-500' },
]

const WorkflowNode = ({
  label,
  sub,
  active,
  icon,
}: {
  label: string
  sub?: string
  active?: boolean
  icon: ReactNode
}) => (
  <div
    className={`mkt-node ${
      active ? 'mkt-node-active' : 'mkt-node-idle'
    }`}
  >
    <span className="mkt-node-icon">{icon}</span>
    <div className="mkt-node-body">
      <span className="mkt-node-label">{label}</span>
      {sub && <span className="mkt-node-sub">{sub}</span>}
    </div>
  </div>
)

export const MakeItYourOwn = () => (
  <section className="container">
    <div className="split">
      <Reveal>
        <div>
          <p className="eyebrow">Make it your own</p>
          <h2 className="h-section">
            One platform,<br />
            infinite<br />
            possibilities
          </h2>
          <p className="section-sub">
            Customise workflows, reminders, and roles for each client
            without ever touching code.
          </p>
          <ul className="check-list">
            {[
              'Custom workflows per client',
              'Role-based access for your staff',
              'Built on Cloudflare',
            ].map((t, i) => (
              <li key={i} className="check-item">
                <span className="check-dot">
                  <IconCheck />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <Link to="/register" className="btn btn-primary">
            <IconSparkle /> {FREE_TRIAL_CTA}
          </Link>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="mkt-editor-shot">
          <EditorToolbar />
          <div className="mkt-editor-body">
            {/* ── Left: Role-based access ── */}
            <div className="mkt-editor-panel mkt-panel-team">
              <div className="mkt-panel-title">
                <Users size={14} />
                Role-based access
              </div>
              <div className="mkt-team-list">
                {roleEntries.map((p) => (
                  <div key={p.name} className="mkt-team-item">
                    <span className={`mkt-team-avatar ${p.color}`}>
                      {p.initials}
                    </span>
                    <div className="mkt-team-info">
                      <span className="mkt-team-name">{p.name}</span>
                      <span className="mkt-team-role">{p.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Main: workflow canvas ── */}
            <div className="mkt-editor-canvas">
              <div className="mkt-canvas-title">
                GST 3B workflow — Acme &amp; Co
              </div>
              <div className="mkt-canvas-flow">
                <WorkflowNode
                  label="Deadline detected"
                  sub="10 days before due"
                  active
                  icon={<Clock size={14} />}
                />
                <div className="mkt-canvas-arrow">
                  <ChevronRight size={16} />
                </div>
                <WorkflowNode
                  label="Reminder sent"
                  sub="WhatsApp + Email"
                  icon={<Send size={14} />}
                />
                <div className="mkt-canvas-arrow">
                  <ChevronRight size={16} />
                </div>
                <WorkflowNode
                  label="Role assigned"
                  sub="CA Ramesh Mehta"
                  icon={<Shield size={14} />}
                />
                <div className="mkt-canvas-arrow">
                  <ChevronRight size={16} />
                </div>
                <WorkflowNode
                  label="Filing completed"
                  sub="✓ Auto-reconciled"
                  icon={<Clock size={14} />}
                />
              </div>
              <div className="mkt-canvas-foot">
                <span className="mkt-canvas-badge">
                  <Cloud size={10} />
                  Deployed to Cloudflare
                </span>
              </div>
            </div>

            {/* ── Right: Rule config ── */}
            <div className="mkt-editor-panel mkt-panel-rules">
              <div className="mkt-panel-title">
                <Settings size={14} />
                Rule configuration
              </div>
              <div className="mkt-rules">
                <div className="mkt-rule">
                  <span className="mkt-rule-label">Channel</span>
                  <span className="mkt-rule-value">WhatsApp, Email</span>
                </div>
                <div className="mkt-rule">
                  <span className="mkt-rule-label">Frequency</span>
                  <span className="mkt-rule-value">Every 3 days</span>
                </div>
                <div className="mkt-rule">
                  <span className="mkt-rule-label">Assignee</span>
                  <span className="mkt-rule-value">CA Ramesh Mehta</span>
                </div>
                <div className="mkt-rule">
                  <span className="mkt-rule-label">Condition</span>
                  <span className="mkt-rule-value">Due date &lt; 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)
