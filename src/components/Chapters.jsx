const CHAPTERS = [
  { city: 'Ibadan',    tag: 'Main Chapter',     count: '450+',  color: '#f5a000' },
  { city: 'Ogbomoso', tag: 'Growth Chapter',    count: '180+',  color: '#ffd700' },
  { city: 'Oyo Town', tag: 'Emerging Chapter',  count: '95+',   color: '#f5a000' },
  { city: 'Iseyin',   tag: 'New Chapter',        count: '60+',   color: '#ffd700' },
  { city: 'Saki',     tag: 'Upcoming',           count: 'Coming', color: '#f5a000' },
  { city: 'Eruwa',    tag: 'Upcoming',           count: 'Coming', color: '#ffd700' },
]

const Chapters = () => (
  <section id="chapters" className="py-28" style={{ background: 'rgba(20,0,0,0.8)' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="section-line" />
          <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
            Our Chapters
          </span>
          <div className="section-line" />
        </div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: 'white' }}>
          Present <span style={{ color: '#f5a000' }}>Everywhere</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto" style={{ fontFamily: 'Montserrat', fontSize: '16px' }}>
          Talent Tribe chapters spreading across Oyo State — creating local hubs where builders connect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CHAPTERS.map((ch, i) => (
          <div
            key={i}
            className="card-hover relative rounded-xl overflow-hidden p-8"
            style={{ background: 'rgba(61,0,0,0.4)', border: '1px solid rgba(245,160,0,0.12)', minHeight: '160px' }}
          >
            <div className="tribal-pattern absolute inset-0 opacity-10" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span style={{ fontFamily: 'Space Grotesk', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', color: ch.color, textTransform: 'uppercase' }}>
                  {ch.tag}
                </span>
                <svg className="w-4 h-4" style={{ color: ch.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '36px', color: 'white', lineHeight: 1 }}>
                {ch.city}
              </h3>
              <div className="mt-3" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: ch.color }}>
                {ch.count} {ch.count !== 'Coming' ? 'members' : 'soon'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Chapters
