const PLACEHOLDERS = [
  { bg: '#3d1500', label: 'Community Event' },
  { bg: '#1a0030', label: 'Hackathon' },
  { bg: '#003d00', label: 'Workshop' },
  { bg: '#3d3000', label: 'SheInnovates' },
  { bg: '#00203d', label: 'BuildWithOyo' },
  { bg: '#3d0030', label: 'Tech Series' },
]

const Gallery = () => (
  <section className="py-28" style={{ background: 'rgba(13,0,0,1)' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
              Gallery
            </span>
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1, color: 'white' }}>
            In <span style={{ color: '#f5a000' }}>Pictures</span>
          </h2>
        </div>
        <a
          href="https://talenttribe.atcafrica.com/gallery"
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 600,
            fontSize: '13px',
            color: '#f5a000',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          View All
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {PLACEHOLDERS.map((p, i) => (
          <div
            key={i}
            className="gallery-img rounded-xl"
            style={{
              background: `radial-gradient(circle at center, ${p.bg} 0%, #0d0000 80%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '12px',
              cursor: 'pointer',
              minHeight: '200px',
            }}
          >
            <div className="tribal-pattern absolute inset-0 opacity-15" />
            <div style={{ fontSize: '36px' }}>📸</div>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '13px', color: 'rgba(245,160,0,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery
