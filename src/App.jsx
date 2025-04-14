import { useRef, useState } from 'react'
import useActiveNavLink from './hooks/useActiveNavLink'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'
import { CursorGradient } from './components/CursorGradient'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [hoverNavId, setHoverNavId] = useState(null)
  const sectionRefs = useRef({})
  useActiveNavLink(sectionRefs, setActiveSection)

  const handleScrollToSection = id => {
    const section = sectionRefs.current[id]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="font-inter bg-[#0a192f] text-[#8892b0]">
      <CursorGradient />
      <div className="max-w-8xl mx-auto flex flex-col px-2 sm:px-6 md:px-8 lg:flex-row lg:px-6 lg:text-lg xl:px-10">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          hoverNavId={hoverNavId}
          setHoverNavId={setHoverNavId}
          handleScrollToSection={handleScrollToSection}
        />
        <MainContent sectionRefs={sectionRefs} />
      </div>
    </div>
  )
}
