const NICHES = [
  { name: 'Web3 & Blockchain',    count: '340+', icon: '🔗' },
  { name: 'AI & Machine Learning', count: '210+', icon: '🤖' },
  { name: 'Product & Design',      count: '180+', icon: '🎨' },
  { name: 'Founders & Startups',   count: '120+', icon: '🚀' },
  { name: 'Open Source',           count: '95+',  icon: '💻' },
]

const STATS = [
  { num: '1,200+', label: 'Total Members' },
  { num: '48',     label: 'Events Hosted' },
  { num: '12',     label: 'Active Chapters' },
  { num: '5+',     label: 'Partner Orgs' },
]

const Community = () => (
  <section id="community" className="py-28 relative overflow-hidden" style={{ background: '#0d0000' }}>
    <div className="absolute inset-0 tribal-pattern opacity-20 pointer-events-none" />

    {/* Large watermark */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '300px', color: '#f5a000', letterSpacing: '-0.05em', lineHeight: 1, whiteSpace: 'nowrap' }}>
        TRIBE
      </div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      {/* Top row */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="section-line" />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
              Our Community
            </span>
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,58px)', lineHeight: 1, color: 'white', letterSpacing: '-0.01em' }}>
            Find Your<br /><span style={{ color: '#f5a000' }}>Niche</span> in the Tribe
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.75' }}>
            A safe, enabling environment on Telegram and in-person, consisting of diverse people all working together to grow a collaborative system.
          </p>
          <a href="https://talenttribe.atcafrica.com/community" className="mt-8 btn-orange px-8 py-4 rounded text-sm inline-block">
            Join on Telegram →
          </a>
        </div>

        {/* Niche list */}
        <div className="space-y-3">
          {NICHES.map((c, i) => (
            <div
              key={i}
              className="card-hover flex items-center justify-between px-6 py-5 rounded-xl"
              style={{ background: 'rgba(61,0,0,0.4)', border: '1px solid rgba(245,160,0,0.12)' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{c.icon}</div>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: 'white' }}>{c.name}</span>
              </div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '20px', color: '#f5a000' }}>{c.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="text-center py-10 px-6 rounded-xl"
            style={{ background: 'rgba(61,0,0,0.3)', border: '1px solid rgba(245,160,0,0.12)' }}
          >
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '40px', color: '#f5a000', lineHeight: 1 }}>{s.num}</div>
            <div className="mt-2" style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '12px', letterSpacing: '0.1em', color: '#9a9090', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Community
