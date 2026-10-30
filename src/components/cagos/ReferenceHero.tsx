import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  FolderLock,
  IndianRupee,
  LayoutDashboard,
  Layers3,
  Pause,
  Play,
  Search,
  Users,
  Workflow,
} from 'lucide-react'

import './reference-hero.css'

const views = [
  {
    name: 'Practice overview',
    label: 'YOUR PRACTICE, AT A GLANCE',
    title: 'A clearer view. A stronger practice.',
    metrics: [
      ['Active clients', '128', '8 new this month'],
      ['Tasks completed', '86', 'Across your team'],
      ['Fees collected', '₹2.4L', 'This month'],
      ['Awaiting review', '12', 'Ready for your team'],
    ],
    table: 'Your focus today',
    rows: [
      ['GSTR-3B preparation', 'Mehta Industries', 'In progress'],
      ['ITR document review', 'Kapoor & Co.', 'In review'],
      ['Monthly retainer invoice', 'Verma Enterprises', 'Completed'],
      ['Client onboarding', 'Shah & Associates', 'In progress'],
    ],
    chart: 'Collections overview',
  },
  {
    name: 'Compliance workspace',
    label: 'EVERY DEADLINE. A CLEAR NEXT STEP.',
    title: 'Keep client work moving forward.',
    metrics: [
      ['Active workflows', '47', 'Across your clients'],
      ['In preparation', '23', 'Owners assigned'],
      ['Ready for review', '12', 'Keep work moving'],
      ['Completed', '86', 'This month'],
    ],
    table: 'Compliance work queue',
    rows: [
      ['GST return preparation', 'Mehta Industries', 'In progress'],
      ['TDS return checklist', 'Verma Enterprises', 'In review'],
      ['ITR document collection', 'Kapoor & Co.', 'Completed'],
      ['ROC working papers', 'Shah & Associates', 'In progress'],
    ],
    chart: 'Work completed',
  },
  {
    name: 'Billing & collections',
    label: 'FROM CLIENT WORK TO COLLECTIONS',
    title: 'Great work. Smoother collections.',
    metrics: [
      ['Fees collected', '₹2.4L', 'This month'],
      ['Invoices paid', '58', 'Payments received'],
      ['Outstanding', '₹84K', 'Follow-ups in view'],
      ['Active retainers', '32', 'All in one place'],
    ],
    table: 'Recent client invoices',
    rows: [
      ['Monthly GST retainer', 'Mehta Industries', 'Completed'],
      ['Tax advisory services', 'Kapoor & Co.', 'In review'],
      ['Audit engagement', 'Verma Enterprises', 'In progress'],
      ['Compliance retainer', 'Shah & Associates', 'Completed'],
    ],
    chart: 'Monthly collections',
  },
] as const

/** A lightweight animated CAGos demo inside the reference's actual MacBook frame. */
function WorkspaceFilm() {
  return (
    <div
      className="reference-screen"
      role="img"
      aria-label="Animated illustrative CAGos workspace showing clients, compliance and billing. All figures are sample data."
    >
      <div aria-hidden="true" className="reference-screen-inner">
        <div className="reference-app-header">
          <span className="reference-app-brand">
            <Layers3 />
            <b>CAGos</b>
          </span>
          <span>
            Sharma &amp; Associates <ChevronDown />
          </span>
          <span className="reference-app-search">
            <Search /> Search your workspace
          </span>
          <Bell />
          <span className="reference-app-avatar">AS</span>
        </div>
        <div className="reference-app-body">
          <aside className="reference-app-sidebar">
            {[
              LayoutDashboard,
              Users,
              CalendarDays,
              Workflow,
              IndianRupee,
              FolderLock,
            ].map((Icon, i) => (
              <span
                className={i === 0 ? 'reference-nav-selected' : undefined}
                key={i}
              >
                <Icon />
              </span>
            ))}
            <span>
              <CircleHelp />
            </span>
          </aside>
          <div className="reference-app-pages">
            {views.map((view, i) => (
              <div
                className={`reference-app-page reference-app-page-${i}`}
                key={view.name}
              >
                <div className="reference-app-breadcrumb">
                  Workspace <span>/</span>
                  <b>{view.name}</b>
                  <span className="reference-app-period">
                    This month <ChevronDown />
                  </span>
                </div>
                <div className="reference-app-greeting">
                  <div>
                    <small>{view.label}</small>
                    <strong>{view.title}</strong>
                    <p>Clients, people and progress. All in one place.</p>
                  </div>
                  <span className="reference-new-task">+ New task</span>
                </div>
                <div className="reference-app-metrics">
                  {view.metrics.map(([label, value, note]) => (
                    <div key={label}>
                      <span>
                        {label}
                        <ArrowUpRight />
                      </span>
                      <strong>{value}</strong>
                      <small>
                        <span>↗</span> {note}
                      </small>
                    </div>
                  ))}
                </div>
                <div className="reference-app-panels">
                  <div className="reference-work-list">
                    <header>
                      <b>{view.table}</b>
                      <span>View all ↗</span>
                    </header>
                    <div className="reference-work-labels">
                      <span>CLIENT WORK</span>
                      <span>STATUS</span>
                    </div>
                    {view.rows.map(([title, client, status], j) => (
                      <div className="reference-work-row" key={title}>
                        <span
                          className={`reference-task-check ${status === 'Completed' ? 'reference-task-done' : ''}`}
                        >
                          {status === 'Completed' && <Check />}
                        </span>
                        <div>
                          <b>{title}</b>
                          <small>{client}</small>
                        </div>
                        <span
                          className={`reference-task-status reference-task-status-${status.replaceAll(' ', '-').toLowerCase()}`}
                        >
                          {status}
                        </span>
                        <span className="reference-task-avatar">
                          {['AS', 'RK', 'PM', 'AS'][j]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="reference-chart-panel">
                    <header>
                      <b>{view.chart}</b>
                      <span>6 months</span>
                    </header>
                    <strong>
                      {i === 1 ? '86' : '₹12.8L'} <small>↗ This year</small>
                    </strong>
                    <div className="reference-bar-chart">
                      {[36, 50, 43, 64, 58, 77, 63, 87, 79, 96, 83, 100].map(
                        (height, j) => (
                          <span
                            key={j}
                            style={{
                              height: `${height}%`,
                              animationDelay: `${j * 70}ms`,
                            }}
                          />
                        ),
                      )}
                    </div>
                    <div className="reference-chart-axis">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>Jun</span>
                    </div>
                    <div className="reference-chart-key">
                      <span /> {i === 1 ? 'Tasks completed' : 'Fees collected'}
                    </div>
                  </div>
                </div>
                <div className="reference-app-footer">
                  <span>
                    <span /> Your practice, connected.
                  </span>
                  <span>Illustrative workspace · Sample data</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="reference-demo-cursor">
          <svg viewBox="0 0 20 24">
            <path d="M2 1v19l5-5 4 8 4-2-4-8h7z" />
          </svg>
        </span>
      </div>
    </div>
  )
}

const clamp = (value: number) => Math.max(0, Math.min(1, value))
const ease = (value: number) => value * value * (3 - 2 * value)

export function ReferenceHero() {
  const root = useRef<HTMLElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  // One passive listener and at most one update per animation frame. No React
  // renders while scrolling, and no animation work once this section is offscreen.
  useEffect(() => {
    const section = root.current
    if (!section) return
    const preference = matchMedia('(prefers-reduced-motion: reduce)')
    const nav = document.querySelector<HTMLElement>('.fresh-nav')
    let frame = 0
    let inRange = true
    let stageHeight = 600
    let scrollDistance = 600
    let laptopTravel = 360
    let lastProgress = -1
    let measuredWidth = innerWidth
    let stableHeight = document.documentElement.clientHeight
    const copy = section.querySelector<HTMLElement>('.reference-hero-copy')
    const laptop = section.querySelector<HTMLElement>('.reference-hero-macbook')
    let disposed = false

    const update = () => {
      frame = 0
      const pinTop = nav?.getBoundingClientRect().height ?? 86
      const progress = preference.matches
        ? 0
        : clamp((pinTop - section.getBoundingClientRect().top) / scrollDistance)
      if (Math.abs(progress - lastProgress) < 0.0001) return
      lastProgress = progress
      const expand = 1 - ease(clamp(progress / 0.3))
      const text = ease(clamp(progress / 0.46))
      section.style.setProperty(
        '--hero-edge',
        `${(innerWidth < 600 ? 12 : 32) * expand}px`,
      )
      section.style.setProperty('--hero-radius', `${24 * expand}px`)
      section.style.setProperty('--hero-bottom', `${24 * expand}px`)
      section.style.setProperty('--hero-copy-opacity', String(1 - text))
      section.style.setProperty(
        '--hero-copy-y',
        `${-stageHeight * 0.35 * text}px`,
      )
      section.style.setProperty(
        '--hero-laptop-y',
        `${laptopTravel * (1 - progress)}px`,
      )
      section.style.setProperty('--hero-blur', `${progress * 6}px`)
      section.style.setProperty('--hero-shade', String(progress * 0.35))
      if (copy) copy.inert = progress > 0.46
    }
    const schedule = () => {
      if (inRange && !frame) frame = requestAnimationFrame(update)
    }
    const measure = () => {
      const pinTop = nav?.getBoundingClientRect().height ?? 86
      // Keep mobile browser chrome from resizing the sticky scene on every scroll.
      if (innerWidth >= 600 || innerWidth !== measuredWidth)
        stableHeight = document.documentElement.clientHeight
      measuredWidth = innerWidth
      stageHeight = Math.max(
        innerWidth < 600 ? 580 : 360,
        stableHeight - pinTop,
      )
      section.style.setProperty('--hero-stage-height', `${stageHeight}px`)
      section.style.setProperty('--hero-pin-top', `${pinTop}px`)
      const laptopHeight = laptop?.getBoundingClientRect().height ?? stageHeight
      const copyBottom = (copy?.offsetTop ?? 0) + (copy?.offsetHeight ?? 0)
      laptopTravel =
        Math.max(stageHeight * 0.6, copyBottom + 24) -
        (stageHeight - laptopHeight) / 2
      scrollDistance = Math.max(1, section.offsetHeight - stageHeight)
      lastProgress = -1
      schedule()
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        inRange = entry.isIntersecting
        if (inRange) schedule()
      },
      { rootMargin: '100px 0px' },
    )
    observer.observe(section)
    const navObserver = new ResizeObserver(measure)
    if (nav) navObserver.observe(nav)
    measure()
    void document.fonts.ready.then(() => {
      if (!disposed) measure()
    })
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', measure)
    preference.addEventListener('change', measure)
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      navObserver.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', measure)
      preference.removeEventListener('change', measure)
    }
  }, [])

  // Defer the 2.2 MB film until visible; pause both films in background tabs,
  // outside this hero, on user request, or when reduced motion is enabled.
  useEffect(() => {
    const section = root.current
    const player = video.current
    if (!section || !player) return
    const preference = matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let disposed = false
    const sync = () => {
      const running =
        visible && !document.hidden && !paused && !preference.matches
      section.dataset.running = String(running)
      if (!running) {
        player.pause()
        return
      }
      if (!player.getAttribute('src')) {
        player.src = '/hero-media/abstract-loop.mp4'
        player.load()
      }
      void player
        .play()
        .then(() => {
          if (
            disposed ||
            !visible ||
            document.hidden ||
            paused ||
            preference.matches
          )
            player.pause()
        })
        .catch(() => {
          /* The local poster remains visible if autoplay is unavailable. */
        })
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        sync()
      },
      { threshold: 0.01 },
    )
    observer.observe(section)
    document.addEventListener('visibilitychange', sync)
    preference.addEventListener('change', sync)
    return () => {
      disposed = true
      observer.disconnect()
      player.pause()
      document.removeEventListener('visibilitychange', sync)
      preference.removeEventListener('change', sync)
    }
  }, [paused])

  return (
    <>
      <section
        ref={root}
        className="cagos-reference-hero"
        aria-labelledby="reference-hero-title"
        data-running="false"
      >
        <div className="reference-hero-stage">
          <div className="reference-hero-canvas">
            <div className="reference-hero-background" aria-hidden="true">
              <div className="reference-hero-film">
                <video
                  ref={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/hero-media/abstract-poster.jpg"
                />
              </div>
            </div>
            <div className="reference-hero-shade" aria-hidden="true" />
            <div className="reference-hero-copy">
              <Layers3 className="reference-hero-mark" aria-hidden="true" />
              <p className="reference-hero-eyebrow">
                The connected OS for Indian CA firms
              </p>
              <h1
                id="reference-hero-title"
                className="reference-hero-title"
                data-speakable
              >
                One practice. 360° visibility.
              </h1>
              <p className="reference-hero-description" data-speakable>
                Clients, compliance, team and billing for your CA practice.
                Finally in one place.
              </p>
              <Link to="/register" className="reference-hero-cta">
                <span>Start your free trial</span>
                <span aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
            <div className="reference-hero-laptop-layer">
              <div className="reference-hero-macbook">
                <img
                  src="/hero-media/macbook-frame.png"
                  width={1741}
                  height={1054}
                  alt=""
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                />
                <div className="reference-os-bar" aria-hidden="true">
                  <Layers3 />
                  <b>CAGos</b>
                  <span>File</span>
                  <span>Edit</span>
                  <span>View</span>
                  <span>Window</span>
                  <span>Help</span>
                  <span className="reference-os-right">
                    <Search /> <span>9:41 AM</span>
                  </span>
                </div>
                <WorkspaceFilm />
              </div>
            </div>
            <div className="reference-hero-controls">
              <span className="reference-hero-scroll" aria-hidden="true">
                <ArrowDown /> Scroll to explore
              </span>
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={
                  paused ? 'Play hero animation' : 'Pause hero animation'
                }
                aria-pressed={paused}
              >
                {paused ? <Play size={15} /> : <Pause size={15} />}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="reference-practice-intro"
        aria-labelledby="reference-practice-title"
      >
        <div className="reference-practice-layout">
          <div className="reference-practice-copy">
            <div className="reference-practice-badge">
              <Layers3 aria-hidden="true" />
              <span>
                CAGos<small>BUILT FOR INDIAN CA FIRMS</small>
              </span>
            </div>
            <h2
              id="reference-practice-title"
              className="reference-practice-title"
            >
              Cloud-based practice management for Indian CA firms.
            </h2>
          </div>
          <div className="reference-practice-summary">
            <p>
              Bring your clients, compliance deadlines, documents and billing
              into one cloud-based workspace. Keep your team connected and your
              practice moving forward.
            </p>
            <Link to="/contact" className="reference-hero-cta">
              <span>Book a demo</span>
              <span aria-hidden="true">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
