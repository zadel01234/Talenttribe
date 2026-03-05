// import { useState, useEffect } from 'react'
// import ShieldLogo from './ShieldLogo'

// const SLIDES = [
//   { title: 'Community of Talent', accent: 'Shaping the',   sub: 'Oyo Ecosystem' },
//   { title: 'Learn. Grow.',        accent: 'Connect.',       sub: 'With Your Tribe' },
//   { title: 'Building',            accent: "Tomorrow's",     sub: 'Tech Leaders' },
// ]

// const Hero = () => {
//   const [slide, setSlide] = useState(0)

//   useEffect(() => {
//     const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000)
//     return () => clearInterval(t)
//   }, [])

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden"
//       style={{ background: 'linear-gradient(135deg,#3d0000 0%,#1a0000 50%,#0d0000 100%)' }}
//     >
//       {/* Tribal pattern bg */}
//       <div className="absolute inset-0 tribal-pattern opacity-30 pointer-events-none" />

//       {/* Geometric background shapes */}
//       <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden">
//         <svg viewBox="0 0 600 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <polygon points="600,0 600,700 100,700" fill="#f5a000" opacity="0.08" />
//           <polygon points="600,0 600,400 250,0"  fill="#ffd700" opacity="0.06" />
//           {[...Array(8)].map((_, i) => (
//             <polygon
//               key={i}
//               points={`${300 + i * 30},${100 + i * 50} ${500 + i * 10},${200 + i * 50} ${400 + i * 20},${350 + i * 40}`}
//               fill="none"
//               stroke="#f5a000"
//               strokeWidth="0.8"
//               opacity={0.3 - i * 0.03}
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* ── Left col ────────────────────────────────────── */}
//           <div>
//             <div className="anim-fade-up flex items-center gap-3 mb-8">
//               <div className="section-line" />
//               <span
//                 style={{
//                   fontFamily: 'Space Grotesk',
//                   fontSize: '11px',
//                   fontWeight: 600,
//                   letterSpacing: '0.25em',
//                   color: '#f5a000',
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 Oyo State · Nigeria · 2024
//               </span>
//             </div>

//             {/* Slideshow headline */}
//             <div className="relative overflow-hidden" style={{ minHeight: '180px' }}>
//               {SLIDES.map((s, i) => (
//                 <div
//                   key={i}
//                   className={`hero-slide ${i === slide ? 'active' : ''}`}
//                   style={{ position: i === 0 ? 'relative' : 'absolute', top: 0 }}
//                 >
//                   <h1
//                     style={{
//                       fontFamily: 'Space Grotesk',
//                       fontWeight: 800,
//                       fontSize: 'clamp(44px,6vw,78px)',
//                       lineHeight: 1,
//                       color: '#fff',
//                       letterSpacing: '-0.01em',
//                     }}
//                   >
//                     {s.title}
//                     <br />
//                     <span style={{ color: '#f5a000' }}>{s.accent}</span>
//                     <br />
//                     {s.sub}
//                   </h1>
//                 </div>
//               ))}
//             </div>

//             <p
//               className="anim-fade-up delay-2 mt-8 mb-10 text-gray-300 leading-relaxed max-w-lg"
//               style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 400 }}
//             >
//               A platform for Oyo students to connect, create, and cultivate a culture of innovation
//               and growth. For both newbies and professionals in the ecosystem.
//             </p>

//             <div className="anim-fade-up delay-3 flex flex-wrap gap-4 mb-12">
//               <a
//                 href="https://talenttribe.atcafrica.com/community"
//                 className="btn-orange px-8 py-4 rounded text-sm flex items-center gap-2"
//               >
//                 Join Community
//                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </a>
//               {/* <a href="https://talenttribe.atcafrica.com/login" className="btn-outline px-8 py-4 rounded text-sm">
//                 Login
//               </a> */}
//               <a
//                 href="https://talenttribe.atcafrica.com/donate"
//                 style={{
//                   background: 'rgba(245,160,0,0.08)',
//                   border: '1px solid rgba(245,160,0,0.2)',
//                   color: '#f5a000',
//                   fontFamily: 'Space Grotesk',
//                   fontWeight: 600,
//                   fontSize: '13px',
//                   padding: '16px 28px',
//                   borderRadius: '4px',
//                   letterSpacing: '0.04em',
//                   transition: 'all 0.2s',
//                   textDecoration: 'none',
//                 }}
//               >
//                 Donate For a Talent ♥
//               </a>
//             </div>

//             {/* Slide dots */}
//             <div className="anim-fade-up delay-4 flex gap-2">
//               {SLIDES.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSlide(i)}
//                   className="rounded-full transition-all duration-300"
//                   style={{
//                     width: i === slide ? '28px' : '8px',
//                     height: '8px',
//                     background: i === slide ? '#f5a000' : 'rgba(245,160,0,0.3)',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* ── Right col ───────────────────────────────────── */}
//           <div className="hidden lg:block relative">
//             <div className="relative float-anim">
//               {/* Main visual card */}
//               <div
//                 className="relative rounded-2xl overflow-hidden"
//                 style={{
//                   background: 'rgba(61,0,0,0.5)',
//                   border: '1px solid rgba(245,160,0,0.25)',
//                   backdropFilter: 'blur(10px)',
//                   padding: '48px',
//                 }}
//               >
//                 <div className="tribal-pattern absolute inset-0 opacity-20" />
//                 <div className="relative z-10">
//                   <div className="flex items-center gap-4">
//                     <ShieldLogo size={80} />
//                     <div>
//                       <div
//                         style={{
//                           fontFamily: 'Space Grotesk',
//                           fontWeight: 700,
//                           fontSize: '30px',
//                           letterSpacing: '0.08em',
//                           color: '#fff',
//                           lineHeight: 1,
//                         }}
//                       >
//                         TALENT
//                       </div>
//                       <div
//                         style={{
//                           fontFamily: 'Space Grotesk',
//                           fontWeight: 500,
//                           fontSize: '21px',
//                           letterSpacing: '0.25em',
//                           color: '#f5a000',
//                         }}
//                       >
//                         TRIBE
//                       </div>
//                     </div>
//                   </div>
//                   <div style={{ fontFamily: 'Space Grotesk', fontSize: '52px', fontWeight: 800, color: '#f5a000',  lineHeight: 1, marginTop: '24px' }}>Learn.</div>
//                   <div style={{ fontFamily: 'Space Grotesk', fontSize: '52px', fontWeight: 800, color: '#ffd700',  lineHeight: 1 }}>Grow.</div>
//                   <div style={{ fontFamily: 'Space Grotesk', fontSize: '52px', fontWeight: 800, color: 'white',    lineHeight: 1 }}>Connect.</div>
//                   <div className="mt-6 h-px bg-gradient-to-r from-brand-orange to-transparent" />
//                   <p className="mt-4 text-gray-300 text-sm" style={{ fontFamily: 'Montserrat' }}>
//                     @oyotalenttribehq
//                   </p>
//                 </div>
//               </div>

//               {/* Floating stat — members */}
//               <div
//                 className="absolute -top-6 -right-8 rounded-xl px-5 py-4 text-center"
//                 style={{ background: '#f5a000', minWidth: '110px', boxShadow: '0 20px 40px rgba(245,160,0,0.3)' }}
//               >
//                 <div style={{ fontFamily: 'Space Grotesk', fontSize: '32px', fontWeight: 800, color: '#3d0000', lineHeight: 1 }}>1.2K+</div>
//                 <div style={{ fontFamily: 'Montserrat', fontSize: '10px', fontWeight: 600, color: '#5a0000', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Members</div>
//               </div>

//               {/* Floating stat — events */}
//               <div
//                 className="absolute -bottom-5 -left-8 rounded-xl px-5 py-4 text-center"
//                 style={{ background: 'rgba(13,0,0,0.9)', border: '1px solid rgba(245,160,0,0.4)', minWidth: '110px' }}
//               >
//                 <div style={{ fontFamily: 'Space Grotesk', fontSize: '32px', fontWeight: 800, color: '#f5a000', lineHeight: 1 }}>48+</div>
//                 <div style={{ fontFamily: 'Montserrat', fontSize: '10px', fontWeight: 600, color: '#9a9090', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Events</div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
//           <path d="M0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 60 Z" fill="#0d0000" />
//         </svg>
//       </div>
//     </section>
//   )
// }

// export default Hero


// import { useState, useEffect } from 'react'
// import ShieldLogo from './ShieldLogo'
// import hero from "../assets/hero1.jpg"

// const SLIDES = [
//   { title: 'Community of Talent', accent: 'Shaping the', sub: 'Oyo Ecosystem' },
//   { title: 'Learn. Grow.', accent: 'Connect.', sub: 'With Your Tribe' },
//   { title: 'Building', accent: "Tomorrow's", sub: 'Tech Leaders' },
// ]

// const Hero = () => {
//   const [slide, setSlide] = useState(0)

//   useEffect(() => {
//     const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000)
//     return () => clearInterval(t)
//   }, [])

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden mt-20"
//       style={{}}
//     >
//       {/* Hero image — full section cover */}
//       <div className="absolute inset-0">
//         <img src={hero} alt="" className="w-full h-full object-cover" />
//         {/* <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(61,0,0,0.55) 0%,rgba(26,0,0,0.45) 50%,rgba(13,0,0,0.35) 100%)' }} /> */}
//       </div>

//       {/* Tribal pattern bg */}
//       {/* <div className="absolute inset-0 tribal-pattern opacity-30 pointer-events-none" /> */}

//       {/* Geometric background shapes */}
//       <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden">
//         <svg viewBox="0 0 600 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <polygon points="600,0 600,700 100,700" fill="#f5a000" opacity="0.08" />
//           <polygon points="600,0 600,400 250,0" fill="#ffd700" opacity="0.06" />
//           {[...Array(8)].map((_, i) => (
//             <polygon
//               key={i}
//               points={`${300 + i * 30},${100 + i * 50} ${500 + i * 10},${200 + i * 50} ${400 + i * 20},${350 + i * 40}`}
//               fill="none"
//               stroke="#f5a000"
//               strokeWidth="0.8"
//               opacity={0.3 - i * 0.03}
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
//         <div className="grid grid-cols-1 items-center">

//           {/* ── Left col ────────────────────────────────────── */}
//           <div>
//             <div className="anim-fade-up flex items-center gap-3 mb-8">
//               <div className="section-line" />
//               <span
//                 style={{
//                   fontFamily: 'Space Grotesk',
//                   fontSize: '11px',
//                   fontWeight: 600,
//                   letterSpacing: '0.25em',
//                   color: '#f5a000',
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 Oyo State · Nigeria · 2024
//               </span>
//             </div>

//             {/* Slideshow headline */}
//             <div className="relative overflow-hidden" style={{ minHeight: '180px' }}>
//               {SLIDES.map((s, i) => (
//                 <div
//                   key={i}
//                   className={`hero-slide ${i === slide ? 'active' : ''}`}
//                   style={{ position: i === 0 ? 'relative' : 'absolute', top: 0 }}
//                 >
//                   <h1
//                     style={{
//                       fontFamily: 'Space Grotesk',
//                       fontWeight: 800,
//                       fontSize: 'clamp(44px,6vw,78px)',
//                       lineHeight: 1,
//                       color: '#fff',
//                       letterSpacing: '-0.01em',
//                     }}
//                   >
//                     {s.title}
//                     <br />
//                     <span style={{ color: '#f5a000' }}>{s.accent}</span>
//                     <br />
//                     {s.sub}
//                   </h1>
//                 </div>
//               ))}
//             </div>

//             <p
//               className="anim-fade-up delay-2 mt-8 mb-10 text-white-300 leading-relaxed max-w-lg"
//               style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 400 }}
//             >
//               A platform for Oyo students to connect, create, and cultivate a culture of innovation
//               and growth. For both newbies and professionals in the ecosystem.
//             </p>

//             <div className="anim-fade-up delay-3 flex flex-wrap gap-4 mb-12">
//               <a
//                 href="https://talenttribe.atcafrica.com/community"
//                 className="btn-orange px-8 py-4 rounded text-sm flex items-center gap-2"
//               >
//                 Join Community
//                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </a>
//               <a
//                 href="https://talenttribe.atcafrica.com/donate"
//                 style={{
//                   background: 'rgba(245,160,0,0.08)',
//                   border: '1px solid rgba(245,160,0,0.2)',
//                   color: '#f5a000',
//                   fontFamily: 'Space Grotesk',
//                   fontWeight: 600,
//                   fontSize: '13px',
//                   padding: '16px 28px',
//                   borderRadius: '4px',
//                   letterSpacing: '0.04em',
//                   transition: 'all 0.2s',
//                   textDecoration: 'none',
//                 }}
//               >
//                 Donate For a Talent ♥
//               </a>
//             </div>

//             {/* Slide dots */}
//             <div className="anim-fade-up delay-4 flex gap-2">
//               {SLIDES.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setSlide(i)}
//                   className="rounded-full transition-all duration-300"
//                   style={{
//                     width: i === slide ? '28px' : '8px',
//                     height: '8px',
//                     background: i === slide ? '#f5a000' : 'rgba(245,160,0,0.3)',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>



//         </div>
//       </div>

//       {/* Bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
//           <path d="M0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 60 Z" fill="#0d0000" />
//         </svg>
//       </div>
//     </section>
//   )
// }

// export default Hero



import { useState, useEffect } from 'react'
import ShieldLogo from './ShieldLogo'
import hero from "../assets/hero1.jpg"

const SLIDES = [
  { title: 'Community of Talent', accent: 'Shaping the', sub: 'Oyo Ecosystem' },
  { title: 'Learn. Grow.', accent: 'Connect.', sub: 'With Your Tribe' },
  { title: 'Building', accent: "Tomorrow's", sub: 'Tech Leaders' },
]

const Hero = () => {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{}}
    >
      {/* Hero image — full section cover */}
      <div className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,0,0,0.92) 0%, rgba(13,0,0,0.85) 40%, rgba(13,0,0,0.3) 70%, rgba(13,0,0,0.1) 100%)' }} />
      </div>

      {/* Tribal pattern bg */}
      {/* <div className="absolute inset-0 tribal-pattern opacity-30 pointer-events-none" /> */}

      {/* Geometric background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 600 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="600,0 600,700 100,700" fill="#f5a000" opacity="0.08" />
          <polygon points="600,0 600,400 250,0" fill="#ffd700" opacity="0.06" />
          {[...Array(8)].map((_, i) => (
            <polygon
              key={i}
              points={`${300 + i * 30},${100 + i * 50} ${500 + i * 10},${200 + i * 50} ${400 + i * 20},${350 + i * 40}`}
              fill="none"
              stroke="#f5a000"
              strokeWidth="0.8"
              opacity={0.3 - i * 0.03}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 items-center">

          {/* ── Left col ────────────────────────────────────── */}
          <div>
            <div className="anim-fade-up flex items-center gap-3 mb-8">
              <div className="section-line" />
              <span
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.25em',
                  color: '#f5a000',
                  textTransform: 'uppercase',
                }}
              >
                Oyo State · Nigeria · 2024
              </span>
            </div>

            {/* Slideshow headline */}
            <div className="relative overflow-hidden" style={{ minHeight: '180px' }}>
              {SLIDES.map((s, i) => (
                <div
                  key={i}
                  className={`hero-slide ${i === slide ? 'active' : ''}`}
                  style={{ position: i === 0 ? 'relative' : 'absolute', top: 0 }}
                >
                  <h1
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 800,
                      fontSize: 'clamp(44px,6vw,78px)',
                      lineHeight: 1,
                      color: '#fff',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {s.title}
                    <br />
                    <span style={{ color: '#f5a000' }}>{s.accent}</span>
                    <br />
                    {s.sub}
                  </h1>
                </div>
              ))}
            </div>

            <p
              className="anim-fade-up delay-2 mt-8 mb-10 text-gray-300 leading-relaxed max-w-lg"
              style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 400 }}
            >
              A platform for Oyo students to connect, create, and cultivate a culture of innovation
              and growth. For both newbies and professionals in the ecosystem.
            </p>

            <div className="anim-fade-up delay-3 flex flex-wrap gap-4 mb-12">
              <a
                href="https://talenttribe.atcafrica.com/community"
                className="btn-orange px-8 py-4 rounded text-sm flex items-center gap-2"
              >
                Join Community
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://talenttribe.atcafrica.com/donate"
                style={{
                  background: 'rgba(245,160,0,0.08)',
                  border: '1px solid rgba(245,160,0,0.2)',
                  color: '#f5a000',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 600,
                  fontSize: '13px',
                  padding: '16px 28px',
                  borderRadius: '4px',
                  letterSpacing: '0.04em',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
              >
                Donate For a Talent ♥
              </a>
            </div>

            {/* Slide dots */}
            <div className="anim-fade-up delay-4 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === slide ? '28px' : '8px',
                    height: '8px',
                    background: i === slide ? '#f5a000' : 'rgba(245,160,0,0.3)',
                  }}
                />
              ))}
            </div>
          </div>



        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 60 Z" fill="#0d0000" />
        </svg>
      </div>
    </section>
  )
}

export default Hero