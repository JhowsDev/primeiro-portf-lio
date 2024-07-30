import "./globalstyles.css"
import "./Reset.css"
import "./App.css"
import { Header } from "../components/Header"
import { PresentationCardSection } from "../components/Section/PresentationCardSection"
import { AboutMeSection } from "../components/Section/AboutMeSection"
import { TecnologiesSection } from "../components/Section/TecnologiesSection"
import { ProjectSection } from "../components/Section/ProjectSection/Index"
import { Footer } from "../components/Footer"

function App() {

  return (
    <>
      < Header />
      <main>
        <PresentationCardSection />
        <AboutMeSection />
        <TecnologiesSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  )
}

export default App
