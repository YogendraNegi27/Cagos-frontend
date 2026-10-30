
import { Star, Quote } from "lucide-react";

import { useInView } from "../../../hooks/useInView";

const testimonials = [
  {
    quote: "CAGos completely transformed how we manage our 300+ client base. Compliance deadlines are never missed and billing is fully automated. It paid for itself in the first month.",
    name: "CA Ramesh Mehta",
    firm: "Mehta & Associates, Mumbai",
    initials: "RM",
    photo: "https://randomuser.me/api/portraits/med/men/32.jpg",
    tag: "300+ Clients",
    color: "brand",
    rating: 5,
  },
  {
    quote: "The client portal is a game-changer. Our clients love the transparency, and our firm looks incredibly professional. Onboarding new clients is now 3x faster.",
    name: "CA Priya Sharma",
    firm: "Sharma & Co., Delhi",
    initials: "PS",
    photo: "https://randomuser.me/api/portraits/med/women/44.jpg",
    tag: "3x Faster Onboarding",
    color: "blue",
    rating: 5,
  },
  {
    quote: "We went from Excel spreadsheets to a fully automated workflow in 2 weeks. Team productivity has doubled and compliance errors are down to near zero.",
    name: "CA Aditya Joshi",
    firm: "Joshi Tax Consultants, Pune",
    initials: "AJ",
    photo: "https://randomuser.me/api/portraits/med/men/52.jpg",
    tag: "2x Productivity",
    color: "amber",
    rating: 5,
  },
  {
    quote: "The HRMS module alone is worth the subscription. Managing 20 staff members, their payroll, leaves, and articleship records is now effortless.",
    name: "CA Sunita Patel",
    firm: "Patel & Partners, Ahmedabad",
    initials: "SP",
    photo: "https://randomuser.me/api/portraits/med/women/56.jpg",
    tag: "20-Member Team",
    color: "purple",
    rating: 5,
  },
  {
    quote: "Our revenue grew 38% in the first year because we could take on 2x more clients without adding staff. The ROI is incredible — best investment we've made.",
    name: "CA Vikram Nair",
    firm: "Nair Tax Advisory, Bangalore",
    initials: "VN",
    photo: "https://randomuser.me/api/portraits/med/men/67.jpg",
    tag: "38% Revenue Growth",
    color: "emerald",
    rating: 5,
  },
  {
    quote: "Switching from our old CRM was seamless. The onboarding team was fantastic and data migration was handled end-to-end. Zero disruption to our operations.",
    name: "CA Meera Gupta",
    firm: "Gupta Financial Services, Chennai",
    initials: "MG",
    photo: "https://randomuser.me/api/portraits/med/women/68.jpg",
    tag: "Seamless Migration",
    color: "rose",
    rating: 5,
  },
  {
    quote: "The compliance calendar catches deadlines our team would have missed. We've cut filing-prep review time by 60% and eliminated late-fee penalties entirely.",
    name: "CA Anand Verma",
    firm: "Verma Consultancy, Hyderabad",
    initials: "AV",
    photo: "https://randomuser.me/api/portraits/med/men/41.jpg",
    tag: "60% Faster Filing",
    color: "brand",
    rating: 5,
  },
  {
    quote: "Client communication is night and day. Payment-link shares over WhatsApp, document requests, and status updates flow from one screen. Our partners now focus on advisory, not chasing.",
    name: "CA Neha Reddy",
    firm: "Reddy & Associates, Bengaluru",
    initials: "NR",
    photo: "https://randomuser.me/api/portraits/med/women/72.jpg",
    tag: "Auto-Communication",
    color: "blue",
    rating: 5,
  },
  {
    quote: "We scaled from 80 to 220 clients without hiring a single new associate. CAGos is the operations leverage we didn't know was possible for a mid-tier firm.",
    name: "CA Karan Malhotra",
    firm: "Malhotra Capital, Gurgaon",
    initials: "KM",
    photo: "https://randomuser.me/api/portraits/med/men/76.jpg",
    tag: "2.7x Client Growth",
    color: "emerald",
    rating: 5,
  },
  {
    quote: "Articleship management used to be a spreadsheet nightmare. Stipend, attendance, leave, and ICAI submissions are now one dashboard. Truly built for Indian CA firms.",
    name: "CA Anjali Iyer",
    firm: "Iyer Tax Partners, Kolkata",
    initials: "AI",
    photo: "https://randomuser.me/api/portraits/med/women/81.jpg",
    tag: "ICAI-Ready",
    color: "purple",
    rating: 5,
  },
];

const colorMap: Record<string, { avatar: string; tag: string; quote: string }> = {
  brand:   { avatar: "bg-brand-500/15 text-brand-400 border border-brand-500/20",   tag: "bg-brand-500/10 text-brand-400 border-brand-500/20",   quote: "text-brand-500/40 group-hover:text-brand-400" },
  blue:    { avatar: "bg-blue-500/15 text-blue-400 border border-blue-500/20",     tag: "bg-blue-500/10 text-blue-400 border-blue-500/20",     quote: "text-blue-500/40 group-hover:text-blue-400" },
  amber:   { avatar: "bg-amber-500/15 text-amber-400 border border-amber-500/20",   tag: "bg-amber-500/10 text-amber-400 border-amber-500/20",   quote: "text-amber-500/40 group-hover:text-amber-400" },
  purple:  { avatar: "bg-purple-500/15 text-purple-400 border border-purple-500/20", tag: "bg-purple-500/10 text-purple-400 border-purple-500/20", quote: "text-purple-500/40 group-hover:text-purple-400" },
  emerald: { avatar: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20", tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", quote: "text-emerald-500/40 group-hover:text-emerald-400" },
  rose:    { avatar: "bg-rose-500/15 text-rose-400 border border-rose-500/20",     tag: "bg-rose-500/10 text-rose-400 border-rose-500/20",     quote: "text-rose-500/40 group-hover:text-rose-400" },
};

export function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className="relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center space-y-5 mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Trusted by 500+ CA Firms
          </div>
          <h2
            className={`text-4xl md:text-5xl font-extrabold text-white ${
              inView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Loved by India&apos;s top{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500">
              Chartered Accountants
            </span>
          </h2>
          <p
            className={`text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed ${
              inView ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            Real results from real CA firms — from solo practitioners to 100-staff enterprises.
          </p>
        </div>

        {/* Scrolling carousel */}
        <div className={`mb-16 overflow-hidden ${inView ? "animate-fade-in-up animation-delay-300" : "opacity-0"}`}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1020] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1020] to-transparent z-10 pointer-events-none" />

            <div
              className="flex animate-marquee hover:[animation-play-state:paused]"
              style={{ animationDuration: "60s", width: "max-content" }}
            >
              {[...testimonials, ...testimonials].map((t, idx) => {
                const c = colorMap[t.color];
                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[360px] mx-3.5 group p-6 rounded-2xl glass hover:bg-white/8 hover:shadow-xl hover:shadow-brand-500/8 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 via-slate-50/0 to-brand-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <Quote className={`w-6 h-6 transition-colors ${c.quote}`} />
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3 ${c.tag}`}>
                        {t.tag}
                      </span>

                      <p className="text-slate-400 leading-relaxed mb-5 text-sm">
                        &quot;{t.quote}&quot;
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                        <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 overflow-hidden ring-1 ring-white/10 ${c.avatar}`}>
                          <span aria-hidden className="absolute inset-0 flex items-center justify-center">
                            {t.initials}
                          </span>
                          <img
                            src={t.photo}
                            alt={t.name}
                            loading="lazy"
                            className="relative h-full w-full object-cover"
                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                          />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm">{t.name}</p>
                          <p className="text-xs text-slate-400">{t.firm}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
