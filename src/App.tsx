import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FairyLights from './components/FairyLights'
import MouseGradient from './components/MouseGradient'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary relative">
      <MouseGradient />
      <FairyLights />
      <NavBar />
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
