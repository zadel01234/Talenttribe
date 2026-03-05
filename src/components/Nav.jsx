// import { useState, useEffect } from 'react'
// import ShieldLogo from './ShieldLogo'

// const NAV_LINKS = [
//   { label: 'Home',      href: 'https://talenttribe.atcafrica.com/' },
//   {
//     label: 'About us',
//     href: 'https://talenttribe.atcafrica.com/about',
//     dropdown: [
//       { label: 'Team',        href: 'https://talenttribe.atcafrica.com/team' },
//       { label: 'Initiatives', href: 'https://talenttribe.atcafrica.com/initiatives' },
//       { label: 'Programs',    href: 'https://talenttribe.atcafrica.com/programs' },
//     ],
//   },
//   { label: 'Community', href: 'https://talenttribe.atcafrica.com/community' },
//   {
//     label: 'Ecosystem',
//     href: 'https://talenttribe.atcafrica.com/ecosystem',
//     dropdown: [
//       { label: 'Startups in Ibadan', href: 'https://talenttribe.atcafrica.com/startups' },
//       { label: 'WorkSpaces in Ibadan', href: 'https://talenttribe.atcafrica.com/workspaces' },
//       { label: 'Tech Communities in Ibadan', href: 'https://talenttribe.atcafrica.com/techcommunities' },
//     ],
//   },
//   // { label: 'Blog',       href: 'https://talenttribe.atcafrica.com/blog' },
//   { label: 'Blog',       href: '/#/blog' },
//   { label: 'Chapters',   href: 'https://talenttribe.atcafrica.com/chapters' },
// ]

// const Nav = () => {
//   const [scrolled, setScrolled]     = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'nav-blur py-3' : 'py-5 bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <a href="https://talenttribe.atcafrica.com/" className="flex items-center gap-3 group">
//           <ShieldLogo size={36} />
//           <div>
//             <div
//               style={{
//                 fontFamily: 'Space Grotesk',
//                 fontWeight: 700,
//                 fontSize: '20px',
//                 letterSpacing: '0.08em',
//                 color: '#fff',
//                 lineHeight: 1,
//               }}
//             >
//               TALENT
//             </div>
//             <div
//               style={{
//                 fontFamily: 'Space Grotesk',
//                 fontWeight: 500,
//                 fontSize: '11px',
//                 letterSpacing: '0.25em',
//                 color: '#f5a000',
//               }}
//             >
//               TRIBE
//             </div>
//           </div>
//         </a>

//         {/* Desktop links */}
//         <div className="hidden lg:flex items-center gap-8">
//           {NAV_LINKS.map((link) => (
//             <div key={link.label} className="nav-item relative">
//               <a
//                 href={link.href}
//                 className="flex items-center gap-1 text-gray-300 hover:text-brand-orange transition-colors duration-200"
//                 style={{ fontFamily: 'Montserrat', fontWeight: 500, fontSize: '13px', letterSpacing: '0.04em' }}
//               >
//                 {link.label}
//                 {link.dropdown && (
//                   <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                     <polyline points="6 9 12 15 18 9" />
//                   </svg>
//                 )}
//               </a>

//               {link.dropdown && (
//                 <div
//                   className="dropdown-menu absolute top-full left-0 mt-2 w-44 py-2 rounded-md"
//                   style={{
//                     background: 'rgba(26,0,0,0.97)',
//                     border: '1px solid rgba(245,160,0,0.2)',
//                     backdropFilter: 'blur(20px)',
//                   }}
//                 >
//                   {link.dropdown.map((item) => (
//                     <a
//                       key={item.label}
//                       href={item.href}
//                       className="block px-4 py-2 text-sm text-gray-300 hover:text-brand-orange hover:bg-white/5 transition-colors"
//                       style={{ fontFamily: 'Montserrat', fontSize: '13px' }}
//                     >
//                       {item.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-3">
//           {/* <a href="https://talenttribe.atcafrica.com/register" className="btn-outline px-5 py-2.5 rounded text-sm">
//             Register
//           </a> */}
//           <a href="https://talenttribe.atcafrica.com/register" className="btn-outline px-5 py-2.5 rounded text-sm">
//             Register
//           </a>
//           <a href="https://talenttribe.atcafrica.com/login" className="btn-orange px-5 py-2.5 rounded text-sm">
//             Login
//           </a>
//         </div>

//         {/* Mobile toggle */}
//         <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             {mobileOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <div
//           className="lg:hidden px-6 pb-6 pt-4"
//           style={{ background: 'rgba(13,0,0,0.97)', borderTop: '1px solid rgba(245,160,0,0.15)' }}
//         >
//           {NAV_LINKS.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="block py-3 text-sm text-gray-300 border-b border-white/5"
//               onClick={() => setMobileOpen(false)}
//               style={{ fontFamily: 'Montserrat' }}
//             >
//               {link.label}
//             </a>
//           ))}
//           <div className="flex gap-3 mt-4">
//             <a
//               href="https://talenttribe.atcafrica.com/register"
//               className="btn-orange px-4 py-2.5 rounded text-sm flex-1 text-center"
//             >
//               Register
//             </a>
//             <a
//               href="https://talenttribe.atcafrica.com/login"
//               className="btn-outline px-4 py-2.5 rounded text-sm flex-1 text-center"
//             >
//               Login
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Nav




import { useState, useEffect, useRef } from 'react'
import ShieldLogo from './ShieldLogo'

const NAV_LINKS = [
  { label: 'Home', href: 'https://talenttribe.atcafrica.com/' },
  {
    label: 'About us',
    href: 'https://talenttribe.atcafrica.com/about',
    dropdown: [
      { label: 'Team', href: 'https://talenttribe.atcafrica.com/team' },
      { label: 'Initiatives', href: 'https://talenttribe.atcafrica.com/initiatives' },
      { label: 'Programs', href: 'https://talenttribe.atcafrica.com/programs' },
    ],
  },
  { label: 'Community', href: 'https://talenttribe.atcafrica.com/community' },
  {
    label: 'Ecosystem',
    href: 'https://talenttribe.atcafrica.com/ecosystem',
    dropdown: [
      { label: 'Startups in Ibadan', href: 'https://talenttribe.atcafrica.com/startups' },
      { label: 'WorkSpaces in Ibadan', href: 'https://talenttribe.atcafrica.com/workspaces' },
      { label: 'Tech Communities in Ibadan', href: 'https://talenttribe.atcafrica.com/techcommunities' },
    ],
  },
  { label: 'Blog', href: '/#/blog' },
  { label: 'Chapters', href: 'https://talenttribe.atcafrica.com/chapters' },
]

const Nav = ({ lightBackground = false }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // When scrolled → always use dark nav style regardless of page bg
  // When at top → use lightBackground prop to decide theme
  const isLight = !scrolled && lightBackground

  const linkColor = isLight ? '#1a1a1a' : 'rgba(255,255,255,0.85)'
  const linkHoverColor = '#f5a000'
  const logoTextColor = isLight ? '#1a1a1a' : '#ffffff'
  const subtitleColor = '#f5a000'
  const dropdownBg = isLight ? 'rgba(255,255,255,0.98)' : 'rgba(26,0,0,0.97)'
  const dropdownBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.2)'
  const dropdownText = isLight ? '#333333' : 'rgba(200,200,200,0.9)'
  const dropdownHoverBg = isLight ? 'rgba(245,160,0,0.06)' : 'rgba(255,255,255,0.05)'
  const mobileMenuBg = isLight ? 'rgba(255,255,255,0.99)' : 'rgba(13,0,0,0.97)'
  const mobileMenuBorder = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(245,160,0,0.15)'
  const mobileLinkColor = isLight ? '#222222' : 'rgba(200,200,200,0.9)'
  const mobileDivider = isLight ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.05)'
  const hamburgerColor = isLight ? '#1a1a1a' : '#ffffff'

  return (
    <nav
      className={`fixed top-0 left-0 mb-20 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur py-3' : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="https://talenttribe.atcafrica.com/" className="flex items-center gap-3 group">
          <ShieldLogo size={36} light={isLight} />
          <div>
            <div style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '20px',
              letterSpacing: '0.08em',
              color: logoTextColor,
              lineHeight: 1,
              transition: 'color 0.3s ease',
            }}>
              TALENT
            </div>
            <div style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: subtitleColor,
            }}>
              TRIBE
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="nav-item relative">
              <a
                href={link.href}
                className="flex items-center gap-1 transition-colors duration-200"
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 500,
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  color: linkColor,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = linkHoverColor}
                onMouseLeave={e => e.currentTarget.style.color = linkColor}
              >
                {link.label}
                {link.dropdown && (
                  <svg className="w-3.5 h-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </a>

              {link.dropdown && (
                <div
                  className="dropdown-menu absolute top-full left-0 mt-2 w-52 py-2 rounded-md shadow-lg"
                  style={{
                    background: dropdownBg,
                    border: `1px solid ${dropdownBorder}`,
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        fontSize: '13px',
                        fontFamily: 'Montserrat',
                        color: dropdownText,
                        textDecoration: 'none',
                        transition: 'color 0.2s, background 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#f5a000'
                        e.currentTarget.style.background = dropdownHoverBg
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = dropdownText
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {isLight ? (
            <>
              {/* Light mode: outlined amber button + solid amber button */}
              <a
                href="https://talenttribe.atcafrica.com/register"
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  color: '#f5a000',
                  border: '1.5px solid #f5a000',
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#f5a000'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#f5a000'
                }}
              >
                Register
              </a>
              <a
                href="https://talenttribe.atcafrica.com/login"
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  color: '#fff',
                  background: '#f5a000',
                  textDecoration: 'none',
                  border: '1.5px solid #f5a000',
                  transition: 'opacity 0.2s, box-shadow 0.2s',
                  boxShadow: '0 2px 12px rgba(245,160,0,0.25)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.88'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,160,0,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(245,160,0,0.25)'
                }}
              >
                Login
              </a>
            </>
          ) : (
            <>
              {/* Dark mode: original btn-outline + btn-orange classes */}
              <a href="https://talenttribe.atcafrica.com/register" className="btn-outline px-5 py-2.5 rounded text-sm">
                Register
              </a>
              <a href="https://talenttribe.atcafrica.com/login" className="btn-orange px-5 py-2.5 rounded text-sm">
                Login
              </a>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          style={{ color: hamburgerColor, transition: 'color 0.3s ease' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-6 pt-4"
          style={{
            background: mobileMenuBg,
            borderTop: `1px solid ${mobileMenuBorder}`,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm"
              style={{
                color: mobileLinkColor,
                borderBottom: `1px solid ${mobileDivider}`,
                fontFamily: 'Montserrat',
                textDecoration: 'none',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href="https://talenttribe.atcafrica.com/register"
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px',
                borderRadius: '6px',
                fontSize: '13px',
                fontFamily: 'Montserrat',
                fontWeight: 600,
                color: '#f5a000',
                border: '1.5px solid #f5a000',
                textDecoration: 'none',
              }}
            >
              Register
            </a>
            <a
              href="https://talenttribe.atcafrica.com/login"
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px',
                borderRadius: '6px',
                fontSize: '13px',
                fontFamily: 'Montserrat',
                fontWeight: 600,
                color: '#fff',
                background: '#f5a000',
                textDecoration: 'none',
              }}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav