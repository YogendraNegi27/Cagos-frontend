
import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";

export function MegaFooter() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Top: Brand + Newsletter */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="CAGos"
                className="w-10 h-10 object-contain dark:invert"
              />
              <Link to="/" className="text-2xl font-extrabold tracking-tight">
                CA<span className="text-brand-400">Gos</span>
              </Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The intelligent operating system built exclusively for chartered accountants to manage, automate, and scale their practice.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {[Twitter, Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-900 rounded-2xl p-7 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-600/8 rounded-full blur-2xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Subscribe to the CA Growth Newsletter</h4>
                  <p className="text-sm text-slate-400">Weekly practice management tips + compliance deadline reminders.</p>
                </div>
                <div className="flex w-full md:w-auto gap-2 flex-shrink-0">
                  <input
                    type="email"
                    placeholder="name@firm.com"
                    className="bg-slate-800 border border-slate-700 focus:border-brand-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none w-full md:w-56 transition-colors placeholder:text-slate-500"
                  />
                  <button className="bg-brand-600 hover:bg-brand-500 text-white rounded-xl px-4 py-2.5 text-sm font-bold transition-colors flex items-center gap-1.5 flex-shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20 border-b border-slate-800/70 pb-20">
          <div>
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Products</h5>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><Link to="/products/client-crm"       className="hover:text-brand-400 transition-colors">Client CRM</Link></li>
              <li><Link to="/products/compliance"        className="hover:text-brand-400 transition-colors">Compliance Hub</Link></li>
              <li><Link to="/products/billing"           className="hover:text-brand-400 transition-colors">Billing & Payments</Link></li>
              <li><Link to="/products/workflow"          className="hover:text-brand-400 transition-colors">Workflow Engine</Link></li>
              <li><Link to="/products/hrms"              className="hover:text-brand-400 transition-colors">HRMS Module</Link></li>
              <li><Link to="/products/document-vault"    className="hover:text-brand-400 transition-colors">Document Vault</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Solutions</h5>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><Link to="/solutions/solo"             className="hover:text-brand-400 transition-colors">Solo Practitioners</Link></li>
              <li><Link to="/solutions/smb"              className="hover:text-brand-400 transition-colors">Mid-size Firms</Link></li>
              <li><Link to="/solutions/enterprise"       className="hover:text-brand-400 transition-colors">Large Enterprises</Link></li>
              <li><Link to="/solutions/tax"              className="hover:text-brand-400 transition-colors">Tax Consultants</Link></li>
              <li><Link to="/solutions/audit"            className="hover:text-brand-400 transition-colors">Audit Firms</Link></li>
              <li><Link to="/solutions/advisors"         className="hover:text-brand-400 transition-colors">Financial Advisors</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Resources</h5>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><Link to="/resources/help"             className="hover:text-brand-400 transition-colors">Help Center</Link></li>
              <li><Link to="/resources/calendar"         className="hover:text-brand-400 transition-colors">Tax Calendar 2026</Link></li>
              <li><Link to="/resources/api"              className="hover:text-brand-400 transition-colors">API Documentation</Link></li>
              <li><Link to="/resources/case-studies"     className="hover:text-brand-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/resources/blog"             className="hover:text-brand-400 transition-colors">Blog & Guides</Link></li>
              <li>
                <Link to="/resources/webinars" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  Webinars
                  <span className="bg-brand-500/20 text-brand-400 text-[9px] px-2 py-0.5 rounded-full font-bold">LIVE</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Compare</h5>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><Link to="/vs"                 className="hover:text-brand-400 transition-colors">All comparisons</Link></li>
              <li><Link to="/vs/cleartax"        className="hover:text-brand-400 transition-colors">CAGos vs ClearTax</Link></li>
              <li><Link to="/vs/tally"           className="hover:text-brand-400 transition-colors">CAGos vs Tally</Link></li>
              <li><Link to="/vs/winman"          className="hover:text-brand-400 transition-colors">CAGos vs Winman</Link></li>
              <li><Link to="/vs/zoho-books"      className="hover:text-brand-400 transition-colors">CAGos vs Zoho Books</Link></li>
              <li><Link to="/vs/quickbooks-india" className="hover:text-brand-400 transition-colors">vs QuickBooks India</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h5>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  Careers
                  <span className="bg-blue-500/20 text-blue-400 text-[9px] px-2 py-0.5 rounded-full font-bold">HIRING</span>
                </a>
              </li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Partners Program</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Media Kit</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Support</h5>
            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <p className="text-xs text-slate-500 mb-1">Email</p>
                <a href="mailto:support@cagos.in" className="text-brand-400 hover:text-brand-300 transition-colors font-medium">
                  support@cagos.in
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Toll-free</p>
                <a href="tel:18001234567" className="text-white font-bold text-base hover:text-brand-300 transition-colors">
                  1800-123-4567
                </a>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <p className="text-xs font-semibold text-white mb-2">Support Hours (IST)</p>
                <p className="text-xs text-slate-400">Mon – Sat: 9:00 AM – 8:00 PM</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-semibold">Online now</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 CAGos Technologies Pvt. Ltd.</span>
            <span className="hidden md:inline text-slate-700">·</span>
            <span className="flex items-center gap-1">Made with <span className="text-red-500">❤️</span> in India</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {["Terms of Service", "Privacy Policy", "Security (SOC-2)", "Cookie Policy", "Sitemap"].map((link) => (
              <a key={link} href="#" className="hover:text-brand-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
