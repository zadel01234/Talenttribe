// const PARTNERS = [
//   'Enforca', 'Mind AI', 'Tranarc', 'Blockchain Hub', 'TechOyo',
//   'Enforca', 'Mind AI', 'Tranarc', 'Blockchain Hub', 'TechOyo',
// ]

// const Partners = () => (
//   <section
//     className="py-8 overflow-hidden"
//     style={{
//       background: 'rgba(26,0,0,0.8)',
//       borderTop: '1px solid rgba(245,160,0,0.12)',
//       borderBottom: '1px solid rgba(245,160,0,0.12)',
//     }}
//   >
//     <div className="flex items-center gap-8 px-6 mb-5">
//       <span
//         style={{
//           fontFamily: 'Space Grotesk',
//           fontSize: '11px',
//           fontWeight: 600,
//           letterSpacing: '0.2em',
//           color: '#f5a000',
//           textTransform: 'uppercase',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         Our Partners
//       </span>
//       <div className="h-px flex-1 bg-gradient-to-r from-brand-orange/40 to-transparent" />
//     </div>

//     <div className="overflow-hidden">
//       <div className="marquee-track gap-16 items-center">
//         {[...PARTNERS, ...PARTNERS].map((p, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-3 px-8 whitespace-nowrap"
//             style={{ minWidth: 'max-content' }}
//           >
//             <div className="w-2 h-2 rounded-full" style={{ background: '#f5a000' }} />
//             <span
//               style={{
//                 fontFamily: 'Space Grotesk',
//                 fontSize: '16px',
//                 fontWeight: 700,
//                 color: 'rgba(255,255,255,0.4)',
//                 letterSpacing: '0.06em',
//                 textTransform: 'uppercase',
//               }}
//             >
//               {p}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )

// export default Partners


// import logo3MTT from "../assets/logos/3MTT.jpg";
// import logoCirvee from "../assets/logos/cirvee wordmark for white bg.png";
// import logoCMX from "../assets/logos/cmx Ibadan.jpg";
// import logoCortouch from "../assets/logos/Cortouch-Media-logo (1).png";
// import logoEkoss360 from "../assets/logos/Ekoss360.jpeg";
// import logoGDGLadoke from "../assets/logos/gdg ladoke.jpg";
// import logoGDGOgbomoso from "../assets/logos/GDG Ogbomoso logo_PqwVypB.jpg";
// import logoGDGUI from "../assets/logos/gdg ui.png";
// import logoGDG from "../assets/logos/GDG.jpg";
// import logoGDGIbadan from "../assets/logos/GDGIbadanLogo-ezgif.com-webp-to-jpg-converter.jpg";
// import logoGrowth from "../assets/logos/growth.jpg";
// import logoHackathon from "../assets/logos/hackathon.jpg";
// import logoIbadanTechExpo from "../assets/logos/ibadan tech expo.jfif";
// import logoInterswitch from "../assets/logos/Interswitch.png";
// import logoLarva from "../assets/logos/Larva.png";
// import logoLooped from "../assets/logos/looped.jpg";
// import logoMentor from "../assets/logos/mentor.png";
// import logoMicrosoft from "../assets/logos/Microsoft.png";
// import logoNotzero from "../assets/logos/Notzero.jpg";
// import logoOyo from "../assets/logos/Oyo.jpg";
// import logoRe from "../assets/logos/re.png";
// import logoSafenet from "../assets/logos/safenet.jpeg";
// import logoSEBS from "../assets/logos/SEBS.png";
// import logoSheInnovate from "../assets/logos/she innovate.png";
// import logoSkyGrid from "../assets/logos/SkyGrid.jpg";
// import logoSQI from "../assets/logos/SQI_logo (1).png";
// import logoTalenxify from "../assets/logos/talenxify logo.png";
// import logoTechCabal from "../assets/logos/Tech-Cabal.gif";
// import logoTheCMGuide from "../assets/logos/cm.PNG";
// import logoVarsityScape from "../assets/logos/varsity scape.png";
// import logoZeeh from "../assets/logos/zeeh.jpg";
// import logoTechpoint from "../assets/logos/TECHPOINT.png";
// import logoIMG from "../assets/logos/IMG-20251211-WA0137.jpg";

// const PARTNERS = [
//   // Text-only partners (no logo available)
//   { name: 'Enforca', logo: null },
//   { name: 'Mind AI', logo: null },
//   { name: 'Tranarc', logo: null },
//   { name: 'Blockchain Hub', logo: null },
//   { name: 'TechOyo', logo: null },
//   // Logo partners
//   { name: '3MTT', logo: logo3MTT },
//   { name: 'Cirvee', logo: logoCirvee },
//   { name: 'CMX Ibadan', logo: logoCMX },
//   { name: 'Cortouch Media', logo: logoCortouch },
//   { name: 'Ekoss360', logo: logoEkoss360 },
//   { name: 'GDG Ladoke', logo: logoGDGLadoke },
//   { name: 'GDG Ogbomoso', logo: logoGDGOgbomoso },
//   { name: 'GDG UI', logo: logoGDGUI },
//   { name: 'GDG', logo: logoGDG },
//   { name: 'GDG Ibadan', logo: logoGDGIbadan },
//   { name: 'Growth', logo: logoGrowth },
//   { name: 'Hackathon', logo: logoHackathon },
//   { name: 'Ibadan Tech Expo', logo: logoIbadanTechExpo },
//   { name: 'Interswitch', logo: logoInterswitch },
//   { name: 'Larva', logo: logoLarva },
//   { name: 'Looped', logo: logoLooped },
//   { name: 'Mentor', logo: logoMentor },
//   { name: 'Microsoft', logo: logoMicrosoft },
//   { name: 'Notzero', logo: logoNotzero },
//   { name: 'Oyo State', logo: logoOyo },
//   { name: 'Re', logo: logoRe },
//   { name: 'Safenet', logo: logoSafenet },
//   { name: 'SEBS', logo: logoSEBS },
//   { name: 'She Innovate', logo: logoSheInnovate },
//   { name: 'SkyGrid', logo: logoSkyGrid },
//   { name: 'SQI', logo: logoSQI },
//   { name: 'Talenxify', logo: logoTalenxify },
//   { name: 'Tech Cabal', logo: logoTechCabal },
//   { name: 'The CM Guide', logo: logoTheCMGuide },
//   { name: 'Varsity Scape', logo: logoVarsityScape },
//   { name: 'Zeeh', logo: logoZeeh },
//   { name: 'Techpoint', logo: logoTechpoint },
//   { name: 'IMG Partner', logo: logoIMG },
// ]

// const TRACK = [...PARTNERS, ...PARTNERS]

// const PartnerItem = ({ partner }) => {
//   if (partner.logo) {
//     return (
//       <div
//         className="flex items-center justify-center px-8"
//         style={{ minWidth: 'max-content' }}
//       >
//         <img
//           src={partner.logo}
//           alt={partner.name}
//           title={partner.name}
//           style={{
//             height: '36px',
//             width: 'auto',
//             maxWidth: '120px',
//             objectFit: 'contain',
//             filter: 'grayscale(100%) brightness(0.65)',
//             transition: 'filter 0.3s ease',
//             display: 'block',
//           }}
//           onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) brightness(1)' }}
//           onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(100%) brightness(0.65)' }}
//         />
//       </div>
//     )
//   }

//   return (
//     <div
//       className="flex items-center gap-3 px-8 whitespace-nowrap"
//       style={{ minWidth: 'max-content' }}
//     >
//       <div className="w-2 h-2 rounded-full" style={{ background: '#f5a000' }} />
//       <span
//         style={{
//           fontFamily: 'Space Grotesk',
//           fontSize: '16px',
//           fontWeight: 700,
//           color: 'rgba(255,255,255,0.4)',
//           letterSpacing: '0.06em',
//           textTransform: 'uppercase',
//         }}
//       >
//         {partner.name}
//       </span>
//     </div>
//   )
// }

// const Partners = () => (
//   <section
//     className="py-8 overflow-hidden"
//     style={{
//       background: 'rgba(26,0,0,0.8)',
//       borderTop: '1px solid rgba(245,160,0,0.12)',
//       borderBottom: '1px solid rgba(245,160,0,0.12)',
//     }}
//   >
//     <div className="flex items-center gap-8 px-6 mb-5">
//       <span
//         style={{
//           fontFamily: 'Space Grotesk',
//           fontSize: '11px',
//           fontWeight: 600,
//           letterSpacing: '0.2em',
//           color: '#f5a000',
//           textTransform: 'uppercase',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         Our Partners
//       </span>
//       <div className="h-px flex-1 bg-gradient-to-r from-brand-orange/40 to-transparent" />
//     </div>

//     <div className="overflow-hidden">
//       <div className="marquee-track gap-6 items-center">
//         {TRACK.map((partner, i) => (
//           <PartnerItem key={i} partner={partner} />
//         ))}
//       </div>
//     </div>
//   </section>
// )

// export default Partners


import logo3MTT from "../assets/logos/3MTT.jpg";
import logoCirvee from "../assets/logos/cirvee wordmark for white bg.png";
import logoCMX from "../assets/logos/cmx Ibadan.jpg";
import logoCortouch from "../assets/logos/Cortouch-Media-logo (1).png";
import logoEkoss360 from "../assets/logos/Ekoss360.jpeg";
import logoGDGLadoke from "../assets/logos/gdg ladoke.jpg";
import logoGDGOgbomoso from "../assets/logos/GDG Ogbomoso logo_PqwVypB.jpg";
import logoGDGUI from "../assets/logos/gdg ui.PNG";
import logoGDG from "../assets/logos/GDG.jpg";
import logoGDGIbadan from "../assets/logos/GDGIbadanLogo-ezgif.com-webp-to-jpg-converter.jpg";
import logoGrowth from "../assets/logos/growth.jpg";
import logoIbadanTechExpo from "../assets/logos/ibadan tech expo.jfif";
import logoInterswitch from "../assets/logos/Interswitch.png";
import logoLarva from "../assets/logos/Larva.png";
import logoLooped from "../assets/logos/looped.jpg";
import logoMicrosoft from "../assets/logos/Microsoft.png";
import logoNotzero from "../assets/logos/Notzero.jpg";
import logoOyo from "../assets/logos/Oyo.jpg";
import logoSafenet from "../assets/logos/safenet.jpeg";
import logoSEBS from "../assets/logos/SEBS.png";
import logoSheInnovate from "../assets/logos/she innovate.png";
import logoSkyGrid from "../assets/logos/SkyGrid.jpg";
import logoSQI from "../assets/logos/SQI_logo (1).png";
import logoTalenxify from "../assets/logos/talenxify logo.png";
import logoTechCabal from "../assets/logos/Tech-Cabal.gif";
import logoTheCMGuide from "../assets/logos/cm.PNG";
import logoVarsityScape from "../assets/logos/varsity scape.png";
import logoZeeh from "../assets/logos/zeeh.jpg";
import logoTechpoint from "../assets/logos/TECHPOINT.png";
import logoIMG from "../assets/logos/IMG-20251211-WA0137.jpg";

const PARTNERS = [
  { name: '3MTT', image: logo3MTT },
  { name: 'Cirvee', image: logoCirvee },
  { name: 'CMX Ibadan', image: logoCMX },
  { name: 'Cortouch Media', image: logoCortouch },
  { name: 'Ekoss360', image: logoEkoss360 },
  { name: 'GDG Ladoke', image: logoGDGLadoke },
  { name: 'GDG Ogbomoso', image: logoGDGOgbomoso },
  { name: 'GDG UI', image: logoGDGUI },
  { name: 'GDG', image: logoGDG },
  { name: 'GDG Ibadan', image: logoGDGIbadan },
  { name: 'Growth Hackers Africa', image: logoGrowth },
  { name: 'Ibadan Tech Expo', image: logoIbadanTechExpo },
  { name: 'Interswitch', image: logoInterswitch },
  { name: 'Larva', image: logoLarva },
  { name: 'Looped', image: logoLooped },
  { name: 'Microsoft', image: logoMicrosoft },
  { name: 'Notzero', image: logoNotzero },
  { name: 'Oyo State', image: logoOyo },
  { name: 'Safenet', image: logoSafenet },
  { name: 'SEBS', image: logoSEBS },
  { name: 'She Innovate', image: logoSheInnovate },
  { name: 'SkyGrid', image: logoSkyGrid },
  { name: 'SQI College of ICT', image: logoSQI },
  { name: 'Talenxify', image: logoTalenxify },
  { name: 'Tech Cabal', image: logoTechCabal },
  { name: 'The CM Guide', image: logoTheCMGuide },
  { name: 'Varsity Scape', image: logoVarsityScape },
  { name: 'Zeeh Africa', image: logoZeeh },
  { name: 'Techpoint Africa', image: logoTechpoint },
  { name: 'Oluseun Onigbinde RC', image: logoIMG },
]

const splitIntoRows = (arr, numRows) => {
  const itemsPerRow = Math.ceil(arr.length / numRows)
  const rows = []
  for (let i = 0; i < numRows; i++) {
    rows.push(arr.slice(i * itemsPerRow, (i + 1) * itemsPerRow))
  }
  return rows
}

const desktopRows = splitIntoRows(PARTNERS, 2)
const mobileRows = splitIntoRows(PARTNERS, 3)

const MarqueeRow = ({ partners, reverse = false, speed = 25 }) => {
  const marqueeList = [...partners, ...partners, ...partners]

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-6 md:gap-8 lg:p-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {marqueeList.map((partner, index) => (
          <div
            key={index}
            className="group relative w-24 h-24 md:w-36 md:h-36 flex-shrink-0 bg-white rounded-lg md:rounded-xl border border-gray-200 p-3 md:p-5 transition-all duration-300 hover:border-[#f5a000] hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
            />
            {/* Tooltip */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
              <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                {partner.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="relative w-full bg-white py-12 md:py-20 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: '#f5a000' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#f5a000' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 lg:px-16 text-center">
        <span
          className="inline-block px-8 md:px-12 py-2 rounded-full text-xs md:text-sm mb-6 md:mb-8 font-medium text-white"
          style={{ background: '#f5a000', fontFamily: 'Space Grotesk', letterSpacing: '0.15em' }}
        >
          PARTNERS
        </span>

        <p
          className="text-base md:text-xl text-gray-900 mb-10 md:mb-16 font-medium"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Meet our Official Partners for Build with Oyo
        </p>

        {/* Desktop/Tablet: 2 Rows */}
        <div className="hidden md:flex flex-col gap-6">
          {desktopRows.map((row, idx) => (
            <MarqueeRow key={idx} partners={row} reverse={idx % 2 === 1} speed={25 + idx * 2} />
          ))}
        </div>

        {/* Mobile: 3 Rows */}
        <div className="flex md:hidden flex-col gap-4">
          {mobileRows.map((row, idx) => (
            <MarqueeRow key={idx} partners={row} reverse={idx % 2 === 1} speed={20 + idx * 2} />
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          display: flex;
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          animation: marquee-reverse linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}