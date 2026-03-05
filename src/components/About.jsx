// const ITEMS = [
//   {
//     label: 'Mission',
//     title: 'Our Mission',
//     icon: '🎯',
//     body: "Talent Tribe is a community for Oyo students to collaborate, innovate, and foster growth and opportunity. A platform to connect, create, and cultivate a culture of innovation.",
//     body2: "We create opportunities for Oyo's tech-savvy to develop essential skills, collaborate with like-minded peers, and launch successful careers in technology.",
//     accent: '#f5a000',
//     flip: false,
//   },
//   {
//     label: 'Vision',
//     title: 'Our Vision',
//     icon: '🔭',
//     body: "Driving innovation and opportunity for Oyo's students through collaboration and community.",
//     body2: "We nurture well-rounded individuals with strong academic foundations, creative thinking skills, and a global perspective on what's possible.",
//     accent: '#ffd700',
//     flip: true,
//   },
//   {
//     label: 'Community',
//     title: 'Our Community',
//     icon: '🤝',
//     body: "Our community is a safe, enabling environment on Telegram chat, consisting of diverse people all working together to grow a collaborative system.",
//     body2: "Currently we have smaller communities called chapters in various cities across Oyo State, each driving local impact.",
//     accent: '#f5a000',
//     flip: false,
//   },
// ]

// const About = () => (
//   <section id="about" className="py-28" style={{ background: '#0d0000' }}>
//     <div className="max-w-7xl mx-auto px-6">
//       {/* Header */}
//       <div className="text-center mb-20">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <div className="section-line" />
//           <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
//             Who We Are
//           </span>
//           <div className="section-line" />
//         </div>
//         <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: 'white', letterSpacing: '-0.01em' }}>
//           Built for <span style={{ color: '#f5a000' }}>Builders</span>
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.7' }}>
//           From first-year students to seasoned professionals — everyone has a place in the tribe.
//         </p>
//       </div>

//       <div className="space-y-20">
//         {ITEMS.map((item, idx) => (
//           <div
//             key={idx}
//             className="grid lg:grid-cols-2 gap-16 items-center"
//           >
//             {/* Visual */}
//             <div className={`relative ${item.flip ? 'lg:order-2' : ''}`}>
//               <div
//                 className="relative rounded-2xl overflow-hidden"
//                 style={{
//                   background: `linear-gradient(135deg, ${item.accent}15 0%, rgba(61,0,0,0.4) 100%)`,
//                   border: `1px solid ${item.accent}30`,
//                   padding: '60px 48px',
//                   minHeight: '280px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <div className="tribal-pattern absolute inset-0 opacity-10" />
//                 <div className="relative z-10 text-center">
//                   <div style={{ fontSize: '72px', lineHeight: 1 }}>{item.icon}</div>
//                   <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: item.accent, marginTop: '16px' }}>{item.label}</div>
//                   <div className="mt-3 h-0.5 w-12 mx-auto" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />
//                 </div>
//               </div>
//               <div
//                 className="absolute -bottom-3 -right-3 w-16 h-16 rounded"
//                 style={{ background: item.accent, opacity: 0.15, transform: 'rotate(15deg)' }}
//               />
//             </div>

//             {/* Text */}
//             <div className={item.flip ? 'lg:order-1' : ''}>
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="h-px w-8" style={{ background: item.accent }} />
//                 <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: item.accent, textTransform: 'uppercase' }}>
//                   {item.label}
//                 </span>
//               </div>
//               <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '40px', lineHeight: '1.1', color: 'white', letterSpacing: '-0.01em' }}>
//                 {item.title}
//               </h3>
//               <p className="mt-5 leading-relaxed text-gray-300" style={{ fontFamily: 'Montserrat', fontSize: '15px', lineHeight: '1.75' }}>
//                 {item.body}
//               </p>
//               <p className="mt-4 leading-relaxed text-gray-400" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '1.75' }}>
//                 {item.body2}
//               </p>
//               <div className="mt-8">
//                 <a
//                   href="https://talenttribe.atcafrica.com/about"
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     fontFamily: 'Space Grotesk',
//                     fontWeight: 600,
//                     fontSize: '13px',
//                     color: item.accent,
//                     letterSpacing: '0.06em',
//                     textTransform: 'uppercase',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   Learn More
//                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// export default About



// import comm from "../assets/comm3.jpg";
// import mission from "../assets/misson.jpg";
// import vision from "../assets/vision.jpg";
// const ITEMS = [
//   {
//     label: 'Mission',
//     title: 'Our Mission',
//     image: mission,
//     body: "Talent Tribe is a community for Oyo students to collaborate, innovate, and foster growth and opportunity. A platform to connect, create, and cultivate a culture of innovation.",
//     body2: "We create opportunities for Oyo's tech-savvy to develop essential skills, collaborate with like-minded peers, and launch successful careers in technology.",
//     accent: '#f5a000',
//     flip: false,
//   },
//   {
//     label: 'Vision',
//     title: 'Our Vision',
//     image: vision,
//     body: "Driving innovation and opportunity for Oyo's students through collaboration and community.",
//     body2: "We nurture well-rounded individuals with strong academic foundations, creative thinking skills, and a global perspective on what's possible.",
//     accent: '#ffd700',
//     flip: true,
//   },
//   {
//     label: 'Community',
//     title: 'Our Community',
//     image: comm,
//     body: "Our community is a safe, enabling environment on Telegram chat, consisting of diverse people all working together to grow a collaborative system.",
//     body2: "Currently we have smaller communities called chapters in various cities across Oyo State, each driving local impact.",
//     accent: '#f5a000',
//     flip: false,
//   },
// ]

// const About = () => (
//   <section id="about" className="py-28" style={{ background: '#fff' }}>
//     <div className="max-w-7xl mx-auto px-6">
//       {/* Header */}
//       <div className="text-center mb-20">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <div className="section-line" />
//           <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
//             Who We Are
//           </span>
//           <div className="section-line" />
//         </div>
//         <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: 'white', letterSpacing: '-0.01em' }}>
//           Built for <span style={{ color: '#f5a000' }}>Builders</span>
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.7' }}>
//           From first-year students to seasoned professionals — everyone has a place in the tribe.
//         </p>
//       </div>

//       <div className="space-y-20">
//         {ITEMS.map((item, idx) => (
//           <div key={idx} className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Image Card */}
//             <div className={`relative ${item.flip ? 'lg:order-2' : ''}`}>
//               <div
//                 className="relative rounded-2xl overflow-hidden"
//                 style={{
//                   border: `1px solid ${item.accent}30`,
//                   minHeight: '320px',
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.label}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     minHeight: '320px',
//                     objectFit: 'cover',
//                     display: 'block',
//                   }}
//                 />
//                 {/* Gradient overlay */}
//                 <div
//                   style={{
//                     position: 'absolute',
//                     inset: 0,
//                     background: `linear-gradient(to top, rgba(13,0,0,0.85) 0%, rgba(13,0,0,0.1) 50%, transparent 100%)`,
//                   }}
//                 />
//                 {/* Label badge */}
//                 <div
//                   style={{
//                     position: 'absolute',
//                     bottom: '24px',
//                     left: '24px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                   }}
//                 >
//                   <div style={{ width: '32px', height: '2px', background: item.accent }} />
//                   <span style={{
//                     fontFamily: 'Space Grotesk',
//                     fontWeight: 800,
//                     fontSize: '20px',
//                     color: item.accent,
//                     letterSpacing: '0.04em',
//                   }}>
//                     {item.label}
//                   </span>
//                 </div>
//               </div>
//               {/* Corner accent */}
//               <div
//                 className="absolute -bottom-3 -right-3 w-16 h-16 rounded"
//                 style={{ background: item.accent, opacity: 0.15, transform: 'rotate(15deg)' }}
//               />
//             </div>

//             {/* Text */}
//             <div className={item.flip ? 'lg:order-1' : ''}>
//               <div className="flex items-center gap-3 mb-5">
//                 <div className="h-px w-8" style={{ background: item.accent }} />
//                 <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', color: item.accent, textTransform: 'uppercase' }}>
//                   {item.label}
//                 </span>
//               </div>
//               <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '40px', lineHeight: '1.1', color: 'white', letterSpacing: '-0.01em' }}>
//                 {item.title}
//               </h3>
//               <p className="mt-5 leading-relaxed text-gray-300" style={{ fontFamily: 'Montserrat', fontSize: '15px', lineHeight: '1.75' }}>
//                 {item.body}
//               </p>
//               <p className="mt-4 leading-relaxed text-gray-400" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '1.75' }}>
//                 {item.body2}
//               </p>
//               <div className="mt-8">
//                 <a
//                   href="https://talenttribe.atcafrica.com/about"
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     fontFamily: 'Space Grotesk',
//                     fontWeight: 600,
//                     fontSize: '13px',
//                     color: item.accent,
//                     letterSpacing: '0.06em',
//                     textTransform: 'uppercase',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   Learn More
//                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// export default About





// import comm from "../assets/comm3.jpg";
// import mission from "../assets/misson.jpg";
// import vision from "../assets/vision.jpg";

// const ITEMS = [
//   {
//     label: 'Mission',
//     title: 'Our Mission',
//     image: mission,
//     body: "Talent Tribe is a community for Oyo students to collaborate, innovate, and foster growth and opportunity. A platform to connect, create, and cultivate a culture of innovation.",
//     body2: "We create opportunities for Oyo's tech-savvy to develop essential skills, collaborate with like-minded peers, and launch successful careers in technology.",
//     accent: '#f5a000',
//     flip: false,
//   },
//   {
//     label: 'Vision',
//     title: 'Our Vision',
//     image: vision,
//     body: "Driving innovation and opportunity for Oyo's students through collaboration and community.",
//     body2: "We nurture well-rounded individuals with strong academic foundations, creative thinking skills, and a global perspective on what's possible.",
//     accent: '#c47f00',
//     flip: true,
//   },
//   {
//     label: 'Community',
//     title: 'Our Community',
//     image: comm,
//     body: "Our community is a safe, enabling environment on Telegram chat, consisting of diverse people all working together to grow a collaborative system.",
//     body2: "Currently we have smaller communities called chapters in various cities across Oyo State, each driving local impact.",
//     accent: '#f5a000',
//     flip: false,
//   },
// ]

// const About = () => (
//   <section id="about" className="py-28" style={{ background: '#ffffff' }}>
//     <div className="max-w-7xl mx-auto px-6">

//       {/* Header */}
//       <div className="text-center mb-20">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, #f5a000)' }} />
//           <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
//             Who We Are
//           </span>
//           <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, #f5a000)' }} />
//         </div>
//         <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: '#111111', letterSpacing: '-0.01em' }}>
//           Built for <span style={{ color: '#f5a000' }}>Builders</span>
//         </h2>
//         <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.7', color: '#666666' }}>
//           From first-year students to seasoned professionals — everyone has a place in the tribe.
//         </p>
//       </div>

//       <div className="space-y-24">
//         {ITEMS.map((item, idx) => (
//           <div key={idx} className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* Image Card */}
//             <div className={`relative ${item.flip ? 'lg:order-2' : ''}`}>
//               {/* Decorative background blob behind card */}
//               <div
//                 style={{
//                   position: 'absolute',
//                   inset: '-12px',
//                   background: `${item.accent}10`,
//                   borderRadius: '24px',
//                   zIndex: 0,
//                 }}
//               />
//               <div
//                 className="relative rounded-2xl overflow-hidden"
//                 style={{
//                   border: `1.5px solid ${item.accent}30`,
//                   minHeight: '340px',
//                   zIndex: 1,
//                   boxShadow: `0 8px 40px ${item.accent}18`,
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.label}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     minHeight: '340px',
//                     objectFit: 'cover',
//                     display: 'block',
//                   }}
//                 />
//                 {/* Gradient overlay — lighter for white bg context */}
//                 <div
//                   style={{
//                     position: 'absolute',
//                     inset: 0,
//                     background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)`,
//                   }}
//                 />
//                 {/* Label badge */}
//                 <div
//                   style={{
//                     position: 'absolute',
//                     bottom: '24px',
//                     left: '24px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                   }}
//                 >
//                   <div style={{ width: '32px', height: '2px', background: item.accent }} />
//                   <span style={{
//                     fontFamily: 'Space Grotesk',
//                     fontWeight: 800,
//                     fontSize: '20px',
//                     color: item.accent,
//                     letterSpacing: '0.04em',
//                   }}>
//                     {item.label}
//                   </span>
//                 </div>
//               </div>
//               {/* Corner accent square */}
//               <div
//                 className="absolute -bottom-3 -right-3 w-14 h-14 rounded"
//                 style={{ background: item.accent, opacity: 0.12, transform: 'rotate(15deg)', zIndex: 0 }}
//               />
//             </div>

//             {/* Text */}
//             <div className={item.flip ? 'lg:order-1' : ''}>
//               {/* Label pill */}
//               <div
//                 className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
//                 style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}30` }}
//               >
//                 <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.accent }} />
//                 <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: item.accent, textTransform: 'uppercase' }}>
//                   {item.label}
//                 </span>
//               </div>

//               <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', lineHeight: '1.1', color: '#111111', letterSpacing: '-0.01em' }}>
//                 {item.title}
//               </h3>

//               {/* Amber underline accent */}
//               <div style={{ width: '48px', height: '3px', background: item.accent, borderRadius: '2px', marginTop: '14px', marginBottom: '20px' }} />

//               <p style={{ fontFamily: 'Montserrat', fontSize: '15px', lineHeight: '1.8', color: '#444444' }}>
//                 {item.body}
//               </p>
//               <p className="mt-4" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '1.8', color: '#777777' }}>
//                 {item.body2}
//               </p>

//               <div className="mt-8">
//                 <a
//                   href="https://talenttribe.atcafrica.com/about"
//                   style={{
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                     fontFamily: 'Space Grotesk',
//                     fontWeight: 700,
//                     fontSize: '13px',
//                     color: '#ffffff',
//                     letterSpacing: '0.06em',
//                     textTransform: 'uppercase',
//                     textDecoration: 'none',
//                     background: item.accent,
//                     padding: '10px 22px',
//                     borderRadius: '8px',
//                     transition: 'opacity 0.2s ease',
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
//                   onMouseLeave={e => e.currentTarget.style.opacity = '1'}
//                 >
//                   Learn More
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// export default About


import { useEffect, useRef } from "react";
import comm from "../assets/comm3.jpg";
import mission from "../assets/misson.jpg";
import vision from "../assets/vision.jpg";

const ITEMS = [
  {
    label: 'Mission',
    title: 'Our Mission',
    image: mission,
    body: "Talent Tribe is a community for Oyo students to collaborate, innovate, and foster growth and opportunity. A platform to connect, create, and cultivate a culture of innovation.",
    body2: "We create opportunities for Oyo's tech-savvy to develop essential skills, collaborate with like-minded peers, and launch successful careers in technology.",
    accent: '#f5a000',
    flip: false,
  },
  {
    label: 'Vision',
    title: 'Our Vision',
    image: vision,
    body: "Driving innovation and opportunity for Oyo's students through collaboration and community.",
    body2: "We nurture well-rounded individuals with strong academic foundations, creative thinking skills, and a global perspective on what's possible.",
    accent: '#c47f00',
    flip: true,
  },
  {
    label: 'Community',
    title: 'Our Community',
    image: comm,
    body: "Our community is a safe, enabling environment on Telegram chat, consisting of diverse people all working together to grow a collaborative system.",
    body2: "Currently we have smaller communities called chapters in various cities across Oyo State, each driving local impact.",
    accent: '#f5a000',
    flip: false,
  },
]

const useInView = (threshold = 0.15) => {
  const ref = useRef(null)
  const observedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observedRef.current) {
          el.classList.add('in-view')
          observedRef.current = true
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

const AnimatedCard = ({ item, idx }) => {
  const cardRef = useInView(0.15)
  const textRef = useInView(0.15)

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image Card */}
      <div
        ref={cardRef}
        className={`relative reveal-card ${item.flip ? 'lg:order-2' : ''}`}
        style={{ '--delay': `${idx * 0.1}s` }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '-12px',
            background: `${item.accent}10`,
            borderRadius: '24px',
            zIndex: 0,
          }}
        />
        <div
          className="relative rounded-2xl overflow-hidden image-zoom-wrap"
          style={{
            border: `1.5px solid ${item.accent}30`,
            minHeight: '340px',
            zIndex: 1,
            boxShadow: `0 8px 40px ${item.accent}18`,
          }}
        >
          <img
            src={item.image}
            alt={item.label}
            className="zoom-img"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '340px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)`,
            }}
          />
          {/* Label badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              className="label-line"
              style={{ width: '32px', height: '2px', background: item.accent }}
            />
            <span style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 800,
              fontSize: '20px',
              color: item.accent,
              letterSpacing: '0.04em',
            }}>
              {item.label}
            </span>
          </div>
        </div>
        <div
          className="absolute -bottom-3 -right-3 w-14 h-14 rounded corner-spin"
          style={{ background: item.accent, opacity: 0.12, transform: 'rotate(15deg)', zIndex: 0 }}
        />
      </div>

      {/* Text */}
      <div
        ref={textRef}
        className={`reveal-text ${item.flip ? 'lg:order-1' : ''}`}
        style={{ '--delay': `${idx * 0.1 + 0.15}s` }}
      >
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
          style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}30` }}
        >
          <div className="dot-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.accent }} />
          <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: item.accent, textTransform: 'uppercase' }}>
            {item.label}
          </span>
        </div>

        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)', lineHeight: '1.1', color: '#111111', letterSpacing: '-0.01em' }}>
          {item.title}
        </h3>

        <div
          className="underline-bar"
          style={{ width: '48px', height: '3px', background: item.accent, borderRadius: '2px', marginTop: '14px', marginBottom: '20px' }}
        />

        <p style={{ fontFamily: 'Montserrat', fontSize: '15px', lineHeight: '1.8', color: '#444444' }}>
          {item.body}
        </p>
        <p className="mt-4" style={{ fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '1.8', color: '#777777' }}>
          {item.body2}
        </p>

        <div className="mt-8">
          <a
            href="https://talenttribe.atcafrica.com/about"
            className="learn-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '13px',
              color: '#ffffff',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              background: item.accent,
              padding: '10px 22px',
              borderRadius: '8px',
            }}
          >
            Learn More
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}

const About = () => {
  const headerRef = useInView(0.2)

  return (
    <section id="about" className="py-28" style={{ background: '#ffffff' }}>
      <style>{`
        /* ── Reveal animations ── */
        .reveal-card {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease var(--delay, 0s), transform 0.7s ease var(--delay, 0s);
        }
        .reveal-card.lg\\:order-2 {
          transform: translateX(40px);
        }
        .reveal-card.in-view {
          opacity: 1;
          transform: translateX(0);
        }

        .reveal-text {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease var(--delay, 0s), transform 0.7s ease var(--delay, 0s);
        }
        .reveal-text.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-header {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-header.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Image hover zoom ── */
        .image-zoom-wrap {
          overflow: hidden;
        }
        .zoom-img {
          transition: transform 0.6s ease;
        }
        .image-zoom-wrap:hover .zoom-img {
          transform: scale(1.05);
        }

        /* ── Underline bar expand ── */
        .underline-bar {
          transition: width 0.5s ease 0.3s;
        }
        .in-view .underline-bar {
          width: 48px;
        }
        .reveal-text:not(.in-view) .underline-bar {
          width: 0px;
        }

        /* ── Corner square slow spin ── */
        @keyframes slowspin {
          from { transform: rotate(15deg); }
          to   { transform: rotate(375deg); }
        }
        .corner-spin {
          animation: slowspin 12s linear infinite;
        }

        /* ── Dot pulse ── */
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.5); }
        }
        .dot-pulse {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        /* ── Learn More button ── */
        .learn-btn {
          transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .learn-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245,160,0,0.35);
        }
        .learn-btn:hover .btn-arrow {
          animation: arrow-nudge 0.4s ease forwards;
        }
        @keyframes arrow-nudge {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(5px); }
          100% { transform: translateX(0); }
        }

        /* ── Label line slide ── */
        .reveal-card.in-view .label-line {
          animation: line-grow 0.5s ease 0.4s both;
        }
        @keyframes line-grow {
          from { width: 0; }
          to   { width: 32px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="reveal-header text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, #f5a000)' }} />
            <span style={{ fontFamily: 'Space Grotesk', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', color: '#f5a000', textTransform: 'uppercase' }}>
              Who We Are
            </span>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, #f5a000)' }} />
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1, color: '#111111', letterSpacing: '-0.01em' }}>
            Built for <span style={{ color: '#f5a000' }}>Builders</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.7', color: '#666666' }}>
            From first-year students to seasoned professionals — everyone has a place in the tribe.
          </p>
        </div>

        <div className="space-y-24">
          {ITEMS.map((item, idx) => (
            <AnimatedCard key={idx} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default About