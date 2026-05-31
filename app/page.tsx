import Hero from "./components/Hero"
import About from "./components/About"
import Products from "./components/Products"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FloatingNav from "./components/floating-nav"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <FloatingNav />
        <Hero />
        <About />
        <Products />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
