import { Footer } from "./components/Footer"
import {Header} from "./components/Header"
import { Hero } from "./components/Hero"
import { Menu } from "./components/Menu"
import { Reviews } from "./components/Reviews"


function App() {
  
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <Header />
      {/* ==================== HERO ==================== */}
      <Hero />
      {/* ==================== MENU ==================== */}
      <Menu />
      {/* ==================== REVIEWS ==================== */}
      <Reviews />
      {/* ==================== FOOTER ==================== */}
      <Footer />
    </>
  )
}

export default App
