// const NICHES = [
//   { name: 'Web3 & Blockchain',    count: '50+', icon: '' },
//   { name: 'AI & Machine Learning', count: '100+', icon: '' },
//   { name: 'Product & Design',      count: '70+', icon: '' },
//   { name: 'Founders & Startups',   count: '100+', icon: '' },
//   { name: 'Open Source',           count: '100+',  icon: '' },
// ]

// const STATS = [
//   { num: '1,200+', label: 'Total Members' },
//   { num: '48',     label: 'Events Hosted' },
//   { num: '12',     label: 'Active Chapters' },
//   { num: '30+',     label: 'Partner Orgs' },
// ]

// const Community = () => (
//   <section id="community" className="py-28 relative overflow-hidden" style={{ background: '#0d0000' }}>
//     <div className="absolute inset-0 tribal-pattern opacity-20 pointer-events-none" />

//     {/* Large watermark */}
//     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
//       <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '300px', color: '#f5a000', letterSpacing: '-0.05em', lineHeight: 1, whiteSpace: 'nowrap' }}>
//         TRIBE
//       </div>
//     </div>

//     <div className="relative z-10 max-w-7xl mx-auto px-6">
//       {/* Top row */}
//       <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//         <div>
//           <div className="flex items-center gap-3 mb-5">
//             <div className="section-line" />
//             <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
//               Our Community
//             </span>
//           </div>
//           <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,58px)', lineHeight: 1, color: 'white', letterSpacing: '-0.01em' }}>
//             Find Your<br /><span style={{ color: '#f5a000' }}>Niche</span> in the Tribe
//           </h2>
//           <p className="mt-6 text-gray-400 leading-relaxed" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.75' }}>
//             A safe, enabling environment on Telegram and in-person, consisting of diverse people all working together to grow a collaborative system.
//           </p>
//           <a href="https://talenttribe.atcafrica.com/community" className="mt-8 btn-orange px-8 py-4 rounded text-sm inline-block">
//             Join our Community →
//           </a>
//         </div>

//         {/* Niche list */}
//         <div className="space-y-3">
//           {NICHES.map((c, i) => (
//             <div
//               key={i}
//               className="card-hover flex items-center justify-between px-6 py-5 rounded-xl"
//               style={{ background: 'rgba(61,0,0,0.4)', border: '1px solid rgba(245,160,0,0.12)' }}
//             >
//               <div className="flex items-center gap-4">
//                 <div className="text-2xl">{c.icon}</div>
//                 <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: 'white' }}>{c.name}</span>
//               </div>
//               <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '20px', color: '#f5a000' }}>{c.count}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Stats row */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {STATS.map((s, i) => (
//           <div
//             key={i}
//             className="text-center py-10 px-6 rounded-xl"
//             style={{ background: 'rgba(61,0,0,0.3)', border: '1px solid rgba(245,160,0,0.12)' }}
//           >
//             <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '40px', color: '#f5a000', lineHeight: 1 }}>{s.num}</div>
//             <div className="mt-2" style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '12px', letterSpacing: '0.1em', color: '#9a9090', textTransform: 'uppercase' }}>
//               {s.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// export default Community



const NICHES = [
  { name: 'Web3 & Blockchain', count: '50+', icon: '' },
  { name: 'AI & Machine Learning', count: '100+', icon: '' },
  { name: 'Product & Design', count: '70+', icon: '' },
  { name: 'Founders & Startups', count: '100+', icon: '' },
  { name: 'Open Source', count: '100+', icon: '' },
]

const STATS = [
  { num: '1,200+', label: 'Total Members' },
  { num: '48', label: 'Events Hosted' },
  { num: '12', label: 'Active Chapters' },
  { num: '30+', label: 'Partner Orgs' },
]

const Community = () => (
  <section id="community" className="py-28 relative overflow-hidden" style={{ background: '#ffffff' }}>
    {/* Large watermark */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.09]">
      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '300px', color: '#c47f02', letterSpacing: '-0.05em', lineHeight: 1, whiteSpace: 'nowrap' }}>
        TRIBE
      </div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      {/* Top row */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="section-line" />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#c47f00', textTransform: 'uppercase' }}>
              Our Community
            </span>
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,58px)', lineHeight: 1, color: '#1a0000', letterSpacing: '-0.01em' }}>
            Find Your<br /><span style={{ color: '#c47f00' }}>Niche</span> in the Tribe
          </h2>
          <p className="mt-6 leading-relaxed" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.75', color: '#5a4a4a' }}>
            A safe, enabling environment on Telegram and in-person, consisting of diverse people all working together to grow a collaborative system.
          </p>
          <a href="https://talenttribe.atcafrica.com/community" className="mt-8 btn-orange px-8 py-4 rounded text-sm inline-block">
            Join our Community →
          </a>
        </div>

        {/* Niche list */}
        <div className="space-y-3">
          {NICHES.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-5 rounded-xl"
              style={{
                background: '#fff8f0',
                border: '1px solid #ede0d0',
                boxShadow: '0 2px 12px rgba(61,0,0,0.05)',
                transition: 'box-shadow 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(61,0,0,0.1)'; e.currentTarget.style.transform = 'translateX(4px)' }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 12px rgba(61,0,0,0.05)'; e.currentTarget.style.transform = 'translateX(0)' }}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{c.icon}</div>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: '#1a0000' }}>{c.name}</span>
              </div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '20px', color: '#c47f00' }}>{c.count}</div>
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
            style={{ background: '#fff8f0', border: '1px solid #ede0d0', boxShadow: '0 2px 12px rgba(61,0,0,0.05)' }}
          >
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: '40px', color: '#c47f00', lineHeight: 1 }}>{s.num}</div>
            <div className="mt-2" style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '12px', letterSpacing: '0.1em', color: '#7a6060', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Community