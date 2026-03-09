import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages (to be implemented)
import Home from './pages/Home'
import About from './pages/About'
import Constitution from './pages/Constitution'
import Leadership from './pages/Leadership'
import Activities from './pages/Activities'
import EventTimeline from './pages/EventTimeline'
import Announcements from './pages/Announcements'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Support from './pages/Support'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content" style={{ minHeight: 'calc(100vh - 300px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/events-timeline" element={<EventTimeline />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/support" element={<Support />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
