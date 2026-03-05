// import { useEffect } from 'react'
// import Nav        from './components/Nav'
// import Hero       from './components/Hero'
// import Partners   from './components/Partners'
// import About      from './components/About'
// import Programs   from './components/Programs'
// import Community  from './components/Community'
// import Chapters   from './components/Chapters'
// import Testimonial from './components/Testimonial'
// import Gallery    from './components/Gallery'
// import CTA        from './components/CTA'
// import Footer     from './components/Footer'
// import Blog from "../src/Blog"
// const App = () => {
//   // Scroll-reveal via IntersectionObserver
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = '1'
//             entry.target.style.transform = 'translateY(0)'
//           }
//         })
//       },
//       { threshold: 0.08 },
//     )

//     document.querySelectorAll('.scroll-reveal').forEach((el) => {
//       el.style.opacity = '0'
//       el.style.transform = 'translateY(28px)'
//       el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
//       observer.observe(el)
//     })

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div>
//       <Nav />
//       <Hero />
//       <About />
//       <Partners />
//       <Programs />
//       <Community />
//       <Chapters />
//       {/* <Testimonial /> */}
//       <Gallery />
//       <CTA />
//       <Footer />
//       <Blog />
//     </div>
//   )
// }

// export default App


// import { useEffect } from 'react'
// import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'

// import Nav from './components/Nav'
// import Hero from './components/Hero'
// import About from './components/About'
// import Partners from './components/Partners'
// import Programs from './components/Programs'
// import Community from './components/Community'
// import Chapters from './components/Chapters'
// import Gallery from './components/Gallery'
// import CTA from './components/CTA'
// import Footer from './components/Footer'
// import Blog from './Blog'

// const ScrollReveal = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = '1'
//             entry.target.style.transform = 'translateY(0)'
//           }
//         })
//       },
//       { threshold: 0.08 },
//     )

//     document.querySelectorAll('.scroll-reveal').forEach((el) => {
//       el.style.opacity = '0'
//       el.style.transform = 'translateY(28px)'
//       el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
//       observer.observe(el)
//     })

//     return () => observer.disconnect()
//   }, [])

//   return null
// }

// const ScrollToTop = () => {
//   const { pathname } = useLocation()
//   useEffect(() => { window.scrollTo(0, 0) }, [pathname])
//   return null
// }

// const HomePage = () => (
//   <>
//     <Hero />
//     <About />
//     <Partners />
//     <Programs />
//     <Community />
//     <Chapters />
//     <Gallery />
//     <CTA />
//   </>
// )

// const App = () => (
//   <HashRouter>
//     <ScrollReveal />
//     <ScrollToTop />
//     <Nav />
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/blog" element={<Blog />} />
//     </Routes>
//     <Footer />
//   </HashRouter>
// )

// export default App


import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Partners from './components/Partners'
import Programs from './components/Programs'
import Community from './components/Community'
import Chapters from './components/Chapters'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Blog from './Blog'

const ScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.08 },
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Partners />
    <Programs />
    <Community />
    <Chapters />
    <Gallery />
    <CTA />
  </>
)

const AppLayout = () => {
  // With HashRouter, the route lives in `pathname` (e.g. "/" or "/blog")
  // NOT in `hash` — that's always empty inside HashRouter
  const { pathname } = useLocation()
  const isLightPage = pathname === '/blog'

  return (
    <>
      <ScrollReveal />
      <ScrollToTop />
      <Nav lightBackground={isLightPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

const App = () => (
  <HashRouter>
    <AppLayout />
  </HashRouter>
)

export default App