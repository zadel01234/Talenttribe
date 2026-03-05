// import ShieldLogo from './ShieldLogo'
// import TribalDivider from './TribalDivider'

// const SOCIAL = [
//   { label: 'FB',  href: 'https://facebook.com/oyotalenttribehq' },
//   { label: 'IG',  href: 'https://instagram.com/oyotalenttribehq' },
//   { label: 'IN',  href: 'https://linkedin.com/company/oyotalenttribehq' },
//   { label: 'SL',  href: 'https://slack.com' },
//   { label: 'X',   href: 'https://x.com/oyotalenttribehq' },
// ]

// const COLS = [
//   {
//     title: 'Navigate',
//     links: [
//       { label: 'Home',      href: 'https://talenttribe.atcafrica.com/' },
//       { label: 'About Us',  href: 'https://talenttribe.atcafrica.com/about' },
//       { label: 'Community', href: 'https://talenttribe.atcafrica.com/community' },
//       { label: 'Ecosystem', href: 'https://talenttribe.atcafrica.com/ecosystem' },
//       { label: 'Blog',      href: 'https://talenttribe.atcafrica.com/blog' },
//       { label: 'Chapters',  href: 'https://talenttribe.atcafrica.com/chapters' },
//     ],
//   },
//   {
//     title: 'Programs',
//     links: [
//       { label: 'SheInnovates',    href: 'https://talenttribe.atcafrica.com/sheinnovates' },
//       { label: 'BuildWithOyo',    href: 'https://talenttribe.atcafrica.com/buildwithoyo' },
//       { label: 'Technical Series',href: 'https://talenttribe.atcafrica.com/technical-series' },
//       { label: 'Hackathons',      href: 'https://talenttribe.atcafrica.com/hackathons' },
//       { label: 'Mentorship',      href: 'https://talenttribe.atcafrica.com/mentorship' },
//     ],
//   },
//   {
//     title: 'Connect',
//     links: [
//       { label: 'Register',        href: 'https://talenttribe.atcafrica.com/register' },
//       { label: 'Login',           href: 'https://talenttribe.atcafrica.com/login' },
//       { label: 'Donate a Talent', href: 'https://talenttribe.atcafrica.com/donate' },
//       { label: 'Partner With Us', href: 'https://talenttribe.atcafrica.com/partner' },
//       { label: 'Contact',         href: 'https://talenttribe.atcafrica.com/contact' },
//     ],
//   },
// ]

// const Footer = () => (
//   <footer style={{ background: '#080000', borderTop: '1px solid rgba(245,160,0,0.1)' }}>
//     <TribalDivider />
//     <div className="max-w-7xl mx-auto px-6 py-16">
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

//         {/* Brand col */}
//         <div className="lg:col-span-1">
//           <div className="flex items-center gap-3 mb-4">
//             <ShieldLogo size={32} />
//             <div>
//               <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: 'white', letterSpacing: '0.08em' }}>TALENT</div>
//               <div style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: '10px', letterSpacing: '0.25em', color: '#f5a000' }}>TRIBE</div>
//             </div>
//           </div>
//           <p style={{ fontFamily: 'Montserrat', fontSize: '13px', color: '#6a6060', lineHeight: '1.75', maxWidth: '240px' }}>
//             A community of creative minds driving the Oyo ecosystem through innovation and shared purpose.
//           </p>

//           {/* Social icons */}
//           <div className="mt-6 flex gap-3">
//             {SOCIAL.map((s) => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   width: '36px',
//                   height: '36px',
//                   border: '1px solid rgba(245,160,0,0.2)',
//                   borderRadius: '4px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: '#9a9090',
//                   fontSize: '11px',
//                   fontFamily: 'Space Grotesk',
//                   fontWeight: 700,
//                   textDecoration: 'none',
//                   transition: 'all 0.2s',
//                 }}
//                 onMouseEnter={(e) => { e.currentTarget.style.color = '#f5a000'; e.currentTarget.style.borderColor = '#f5a000'; }}
//                 onMouseLeave={(e) => { e.currentTarget.style.color = '#9a9090'; e.currentTarget.style.borderColor = 'rgba(245,160,0,0.2)'; }}
//               >
//                 {s.label}
//               </a>
//             ))}
//           </div>
//           <div className="mt-4" style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: '#f5a000', fontWeight: 500 }}>
//             @oyotalenttribehq
//           </div>
//         </div>

//         {/* Link cols */}
//         {COLS.map((col) => (
//           <div key={col.title}>
//             <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', color: 'white', textTransform: 'uppercase', marginBottom: '20px' }}>
//               {col.title}
//             </div>
//             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
//               {col.links.map((l) => (
//                 <li key={l.label}>
//                   <a
//                     href={l.href}
//                     style={{ fontFamily: 'Montserrat', fontSize: '13px', color: '#6a6060', textDecoration: 'none', transition: 'color 0.2s' }}
//                     onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a000')}
//                     onMouseLeave={(e) => (e.currentTarget.style.color = '#6a6060')}
//                   >
//                     {l.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Bottom bar */}
//       <div
//         style={{
//           borderTop: '1px solid rgba(245,160,0,0.1)',
//           paddingTop: '28px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           gap: '12px',
//         }}
//       >
//         <span style={{ fontFamily: 'Montserrat', fontSize: '12px', color: '#4a4040' }}>
//           © 2024 Talent Tribe. All rights reserved. Oyo State, Nigeria.
//         </span>
//         <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(245,160,0,0.4)', textTransform: 'uppercase' }}>
//           Learn · Grow · Connect
//         </span>
//       </div>
//     </div>
//   </footer>
// )

// export default Footer


import ShieldLogo from './ShieldLogo'
import TribalDivider from './TribalDivider'
import { Facebook, Instagram, Linkedin, Slack, Twitter } from "lucide-react"

const SOCIAL = [
  { icon: Facebook, href: 'https://facebook.com/oyotalenttribehq' },
  { icon: Instagram, href: 'https://instagram.com/oyotalenttribehq' },
  { icon: Linkedin, href: 'https://linkedin.com/company/oyotalenttribehq' },
  { icon: Slack, href: 'https://slack.com' },
  { icon: Twitter, href: 'https://x.com/oyotalenttribehq' },
]

const COLS = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: 'https://talenttribe.atcafrica.com/' },
      { label: 'About Us', href: 'https://talenttribe.atcafrica.com/about' },
      { label: 'Community', href: 'https://talenttribe.atcafrica.com/community' },
      { label: 'Ecosystem', href: 'https://talenttribe.atcafrica.com/ecosystem' },
      { label: 'Blog', href: 'https://talenttribe.atcafrica.com/blog' },
      { label: 'Chapters', href: 'https://talenttribe.atcafrica.com/chapters' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'SheInnovates', href: 'https://talenttribe.atcafrica.com/sheinnovates' },
      { label: 'BuildWithOyo', href: 'https://talenttribe.atcafrica.com/buildwithoyo' },
      { label: 'Technical Series', href: 'https://talenttribe.atcafrica.com/technical-series' },
      { label: 'Hackathons', href: 'https://talenttribe.atcafrica.com/hackathons' },
      { label: 'Mentorship', href: 'https://talenttribe.atcafrica.com/mentorship' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Register', href: 'https://talenttribe.atcafrica.com/register' },
      { label: 'Login', href: 'https://talenttribe.atcafrica.com/login' },
      { label: 'Donate a Talent', href: 'https://talenttribe.atcafrica.com/donate' },
      { label: 'Partner With Us', href: 'https://talenttribe.atcafrica.com/partner' },
      { label: 'Contact', href: 'https://talenttribe.atcafrica.com/contact' },
    ],
  },
]

const Footer = () => (
  <footer style={{ background: '#080000', borderTop: '1px solid rgba(245,160,0,0.1)' }}>
    <TribalDivider />
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Brand col */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <ShieldLogo size={32} />
            <div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: 'white', letterSpacing: '0.08em' }}>TALENT</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 500, fontSize: '10px', letterSpacing: '0.25em', color: '#f5a000' }}>TRIBE</div>
            </div>
          </div>
          <p style={{ fontFamily: 'Montserrat', fontSize: '13px', color: '#6a6060', lineHeight: '1.75', maxWidth: '240px' }}>
            A community of creative minds driving the Oyo ecosystem through innovation and shared purpose.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex gap-3">
            {SOCIAL.map((s, i) => {
              const Icon = s.icon

              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(245,160,0,0.2)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9a9090',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#f5a000'
                    e.currentTarget.style.borderColor = '#f5a000'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9a9090'
                    e.currentTarget.style.borderColor = 'rgba(245,160,0,0.2)'
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              )
            })}
          </div>
          <div className="mt-4" style={{ fontFamily: 'Space Grotesk', fontSize: '12px', color: '#f5a000', fontWeight: 500 }}>
            @oyotalenttribehq
          </div>
        </div>

        {/* Link cols */}
        {COLS.map((col) => (
          <div key={col.title}>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em', color: 'white', textTransform: 'uppercase', marginBottom: '20px' }}>
              {col.title}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{ fontFamily: 'Montserrat', fontSize: '13px', color: '#6a6060', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f5a000')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6a6060')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(245,160,0,0.1)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span style={{ fontFamily: 'Montserrat', fontSize: '12px', color: '#4a4040' }}>
          © 2024 Talent Tribe. All rights reserved. Oyo State, Nigeria.
        </span>
        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(245,160,0,0.4)', textTransform: 'uppercase' }}>
          Learn · Grow · Connect
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
