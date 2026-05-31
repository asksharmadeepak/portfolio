"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const navItems = [
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [lastScrollY])

  if (!mounted) return null

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 72
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <header
      className={`
        fixed w-full z-40 transition-all duration-300
        ${isVisible ? "top-0" : "-top-20"}
        ${theme === "dark" ? "bg-gray-900/95" : "bg-white/95"}
        backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50
      `}
    >
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 shrink-0"
        >
          DS
        </button>
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                  ${
                    activeSection === id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }
                `}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="/Deepak_Sharma_Resume.pdf"
          download
          className="hidden sm:inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-colors shrink-0"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
