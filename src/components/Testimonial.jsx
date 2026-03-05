const TESTIMONIALS = [
  {
    name: 'Akinlabi Zainab Ololade',
    role: 'Community Member',
    quote:
      "As a member of the Talent Tribe community, I've felt supported and motivated. The environment encourages growth, collaboration, and continuous learning. I'm truly grateful to be part of such a positive and empowering community.",
    initial: 'AZ',
  },
  {
    name: 'Adewale Festus',
    role: 'Developer · Ibadan Chapter',
    quote:
      "The Technical Series has completely transformed how I approach problems. Getting hands-on experience with real projects gave me the confidence to start building things I'd always dreamed of.",
    initial: 'AF',
  },
  {
    name: 'Oluwaseun Praise',
    role: 'Designer · BuildWithOyo',
    quote:
      "SheInnovates was the turning point in my career. The mentorship and network I gained opened doors I didn't even know existed. Talent Tribe truly walks the talk on empowerment.",
    initial: 'OP',
  },
]

const Testimonial = () => (
  <section className="py-28" style={{ background: '#0d0000' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="section-line" />
          <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
            Testimonials
          </span>
          <div className="section-line" />
        </div>
        <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: 'white' }}>
          What They Say <span style={{ color: '#f5a000' }}>About Us</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial-card rounded-2xl p-8">
            {/* Opening quote */}
            <div style={{ fontFamily: 'Georgia', fontSize: '72px', color: '#f5a000', opacity: 0.3, lineHeight: 0.8, marginBottom: '16px' }}>"</div>
            <p style={{ fontFamily: 'Montserrat', fontSize: '15px', lineHeight: '1.8', color: '#d0c8c8', fontStyle: 'italic' }}>
              {t.quote}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div
                className="pulse-ring w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#f5a000,#ffd700)' }}
              >
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '14px', color: '#3d0000' }}>
                  {t.initial}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', color: 'white' }}>{t.name}</div>
                <div style={{ fontFamily: 'Montserrat', fontSize: '12px', color: '#f5a000', marginTop: '2px' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonial
