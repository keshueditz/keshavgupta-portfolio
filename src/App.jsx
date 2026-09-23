import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import VideoEditing from './components/VideoEditing.jsx'
import MotionGraphics from './components/MotionGraphics.jsx'
import GraphicDesign from './components/GraphicDesign.jsx'
import SkillsEducation from './components/SkillsEducation.jsx'
import CreativeProcess from './components/CreativeProcess.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <VideoEditing />
        <MotionGraphics />
        <GraphicDesign />
        <SkillsEducation />
        <CreativeProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
