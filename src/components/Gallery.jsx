// const PLACEHOLDERS = [
//   { bg: '#3d1500', label: 'Community Event' },
//   { bg: '#1a0030', label: 'Hackathon' },
//   { bg: '#003d00', label: 'Workshop' },
//   { bg: '#3d3000', label: 'SheInnovates' },
//   { bg: '#00203d', label: 'BuildWithOyo' },
//   { bg: '#3d0030', label: 'Tech Series' },
// ]

// const Gallery = () => (
//   <section className="py-28" style={{ background: 'rgba(13,0,0,1)' }}>
//     <div className="max-w-7xl mx-auto px-6">
//       <div className="flex items-end justify-between mb-16">
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <div className="section-line" />
//             <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
//               Gallery
//             </span>
//           </div>
//           <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1, color: 'white' }}>
//             In <span style={{ color: '#f5a000' }}>Pictures</span>
//           </h2>
//         </div>
//         <a
//           href="https://talenttribe.atcafrica.com/gallery"
//           style={{
//             fontFamily: 'Space Grotesk',
//             fontWeight: 600,
//             fontSize: '13px',
//             color: '#f5a000',
//             letterSpacing: '0.06em',
//             textTransform: 'uppercase',
//             textDecoration: 'none',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//           }}
//         >
//           View All
//           <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//         </a>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//         {PLACEHOLDERS.map((p, i) => (
//           <div
//             key={i}
//             className="gallery-img rounded-xl"
//             style={{
//               background: `radial-gradient(circle at center, ${p.bg} 0%, #0d0000 80%)`,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexDirection: 'column',
//               gap: '12px',
//               cursor: 'pointer',
//               minHeight: '200px',
//             }}
//           >
//             <div className="tribal-pattern absolute inset-0 opacity-15" />
//             <div style={{ fontSize: '36px' }}>📸</div>
//             <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '13px', color: 'rgba(245,160,0,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//               {p.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// export default Gallery



import comm from "../assets/comm3.jpg"
import hackathon from "../assets/hackathon.jpg"
import workshop from "../assets/workshop.jpg"
import sheinnovates from "../assets/she-innovate.jpg"
import buildwithoyo from "../assets/buildwithoyo.jpg"
import series from "../assets/series.jpg"



const PHOTOS = [
  { src: comm, label: 'Community Event' },
  { src: hackathon, label: 'Hackathon' },
  { src: workshop, label: 'Workshop' },
  { src: sheinnovates, label: 'She Innovates' },
  { src: buildwithoyo, label: 'BuildWithOyo' },
  { src: series, label: 'Tech Series' },
]

const Gallery = () => (
  <section className="py-28" style={{ background: '#ffffff' }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#c47f00', textTransform: 'uppercase' }}>
              Gallery
            </span>
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1, color: '#1a0000' }}>
            In <span style={{ color: '#c47f00' }}>Pictures</span>
          </h2>
        </div>
        <a
          href="https://talenttribe.atcafrica.com/gallery"
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 600,
            fontSize: '13px',
            color: '#c47f00',
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

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {PHOTOS.map((p, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden"
            style={{
              minHeight: '220px',
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(61,0,0,0.08)',
            }}
            onMouseOver={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'
              e.currentTarget.querySelector('.label-overlay').style.opacity = '1'
            }}
            onMouseOut={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)'
              e.currentTarget.querySelector('.label-overlay').style.opacity = '0'
            }}
          >
            <img
              src={p.src}
              alt={p.label}
              className="w-full h-full object-cover absolute inset-0"
              style={{ transition: 'transform 0.4s ease' }}
            />
            {/* Hover label overlay */}
            <div
              className="label-overlay absolute inset-0 flex items-end p-5"
              style={{
                background: 'linear-gradient(to top, rgba(26,0,0,0.7) 0%, transparent 60%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              <span style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '14px',
                color: '#fff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {p.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery