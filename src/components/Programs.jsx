const PROGRAMS = [
  {
    name: 'SheInnovates',
    tag: 'Women in Tech',
    emoji: '👩‍💻',
    color: '#ff6b9d',
    desc: 'A dedicated initiative designed to empower women and bridge the gender gap in the technology sector.',
    badge: 'Initiative',
    href: 'https://talenttribe.atcafrica.com/sheinnovates',
  },
  {
    name: 'BuildWithOyo',
    tag: 'Flagship Annual',
    emoji: '🏗️',
    color: '#f5a000',
    desc: 'Our flagship annual program focused on discovering, developing, and nurturing tech talent across Oyo State.',
    badge: 'Annual Program',
    href: 'https://talenttribe.atcafrica.com/buildwithoyo',
  },
  {
    name: 'Technical Series',
    tag: 'Monthly Sessions',
    emoji: '⚡',
    color: '#ffd700',
    desc: 'A dedicated monthly program featuring live, hands-on sessions providing the practical experience needed to build, innovate, and grow.',
    badge: 'Monthly',
    href: 'https://talenttribe.atcafrica.com/technical-series',
  },
]

const Programs = () => (
  <section id="ecosystem" className="py-28" style={{ background: 'rgba(26,0,0,0.5)' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="section-line" />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
              Programs & Events
            </span>
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: 'white', letterSpacing: '-0.01em' }}>
            Where Talent<br /><span style={{ color: '#f5a000' }}>Gets Activated</span>
          </h2>
        </div>
        <p style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.75', color: '#9a9090' }}>
          From hackathons to mentorship sessions, our programs are designed to unlock potential at every stage of your tech journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {PROGRAMS.map((prog, i) => (
          <a key={i} href={prog.href} className="program-card rounded-xl p-8 cursor-pointer block" style={{ textDecoration: 'none' }}>
            <div className="flex items-start justify-between mb-6">
              <div style={{ fontSize: '52px', lineHeight: 1 }}>{prog.emoji}</div>
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: `${prog.color}20`,
                  color: prog.color,
                  fontFamily: 'Space Grotesk',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                }}
              >
                {prog.badge}
              </span>
            </div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: prog.color, textTransform: 'uppercase', marginBottom: '8px' }}>
              {prog.tag}
            </div>
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '26px', color: 'white', lineHeight: '1.2' }}>
              {prog.name}
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '1.7' }}>
              {prog.desc}
            </p>
            <div className="mt-8 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '12px', color: prog.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <span>Learn More</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Programs
