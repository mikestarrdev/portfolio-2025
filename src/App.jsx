import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import useActiveNavLink from './hooks/useActiveNavLink'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

const experience = [
  {
    title: 'Operations - Tech Marketing LLC',
    description:
      'Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools.',
    date: '2024 - Present',
    tech: ['TypeScript', 'Node.js'],
  },
  {
    title: 'Frontend Developer - AirSwap',
    description:
      'Some description about the role and achievements. Some description about the role and achievements. Some description about the role and achievements. Some description about the role and achievements. Some description about the role and achievements.',
    date: '2023 - 2024',
    tech: ['TypeScript', 'JavaScript', 'React', 'TailwindCSS'],
  },
  {
    title: 'Web Developer - RaidGuild',
    description:
      'Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools.',
    date: '2022 - 2023',
    tech: ['TypeScript', 'Node.js'],
  },
  {
    title: 'Director - Starr Conversions LLC',
    description:
      'Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools.',
    date: '2014 — 2020',
    tech: ['TypeScript', 'Node.js'],
  },
]

const projects = [
  {
    title: 'Web App',
    description:
      'Exchange which has processed over $4B in trading volume. I built new features on the app',
    image: '/placeholder.png',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
  {
    title: 'Member Dashboard',
    description:
      'Exchange which has processed over $4B in trading volume. I built new features on the app',
    image: '/placeholder.png',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
  {
    title: 'AirSwap Debugger',
    description: 'UI for market makers to debug their API connections',
    image: '/placeholder.png',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
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
      <div className="max-w-8xl mx-auto flex flex-col px-6 sm:px-10 lg:flex-row lg:px-12 lg:text-lg">
        {/* Sidebar */}
        <aside className="w-full pt-14 pb-6 lg:sticky lg:top-0 lg:h-screen lg:pt-22">
          <div className="mx-auto flex h-full flex-col justify-between lg:max-w-md">
            <div className="space-y-10">
              {/* Top: Name, title, tagline */}
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold text-[#ccd6f6] md:text-5xl">Mike Starr</h1>
                <h2 className="text-xl font-medium text-[#ccd6f6] lg:text-xl">
                  Front End Engineer
                </h2>
                <p className="leading-relaxed text-gray-400 lg:text-base">
                  I build accessible, pixel-perfect digital
                  <br /> experiences for the web.
                </p>
              </div>

              {/* Nav links */}
              <nav className="mt-18 hidden space-y-6 lg:block">
                {sections.map(({ id, label }) => {
                  const isActive = activeSection === id || hoverNavId === id

                  return (
                    <div
                      key={id}
                      onClick={() => handleScrollToSection(id)}
                      onMouseEnter={() => setHoverNavId(id)}
                      onMouseLeave={() => setHoverNavId(null)}
                      className="flex items-center space-x-4 hover:cursor-pointer"
                    >
                      <span
                        className={`h-px bg-gray-400 transition-all duration-300 ${
                          isActive ? 'w-14 bg-white' : 'w-6'
                        }`}
                      />
                      <span
                        className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-[#8892b0]'
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  )
                })}
              </nav>
            </div>

            {/* Bottom: Social Icons */}
            <div className="flex space-x-6 text-2xl text-gray-400 lg:mt-10 lg:mb-24 lg:text-2xl">
              <a href="/" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="/" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="/" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="w-full space-y-16 pt-14 pb-32 lg:pt-22 xl:w-4/5 xl:pr-16">
          <section
            id="about"
            ref={el => {
              sectionRefs.current.about = el
            }}
          >
            <h2 className="sticky top-0 z-10 bg-[#0a192f] py-4 font-semibold text-[#ccd6f6] lg:hidden">
              About
            </h2>
            <p className="mt-6 text-base md:mt-0">
              I’m a frontend developer who thrives at the intersection of engineering and marketing.
              I build fast, conversion-focused web experiences — from React-based interfaces to
              high-performing WordPress and Shopify landing pages — with a strong eye for
              performance, usability, and analytics.
            </p>
            <br />
            <p className="text-base">
              Most recently, I contributed to a trading platform that processed over $4B in volume
              and built internal tools for affiliate marketers to launch, test, and scale campaigns.
              My background includes technical work on ad funnels, attribution tracking, and UI
              development, making me especially valuable to performance-driven teams.
            </p>
            <br />
            <p className="text-base">
              Outside of coding, you’ll find me climbing mountains, running trails, using the latest
              AI tools, studying product strategy, or deep-diving into analytics and growth.
            </p>
          </section>

          <section
            id="experience"
            ref={el => {
              sectionRefs.current.experience = el
            }}
          >
            <h2 className="text-md sticky top-0 z-10 bg-[#0a192f] py-4 font-bold text-[#ccd6f6] lg:hidden">
              Experience
            </h2>
            <div className="mt-6 flex flex-col space-y-12 md:space-y-4">
              {experience.map(({ title, description, date, tech }) => (
                <div
                  key={title}
                  className="flex cursor-pointer flex-col rounded-lg transition hover:bg-[#112240] sm:flex-row sm:space-x-8 lg:-ml-6 lg:p-6"
                >
                  <div className="mb-2 w-full text-sm text-gray-400 sm:w-2/5 md:w-3/10 lg:mb-0 lg:text-sm">
                    {date}
                  </div>
                  <div className="w-full sm:w-full">
                    <h3 className="mb-2 font-semibold text-[#ccd6f6] md:text-sm">{title}</h3>
                    <p className="mb-2 text-sm text-gray-400">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.map(t => (
                        <span
                          key={t}
                          className="rounded-full bg-[#0f2c3f] px-3 py-1 text-xs font-medium text-[#7dd3fc]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            ref={el => {
              sectionRefs.current.projects = el
            }}
          >
            <h2 className="text-md sticky top-0 z-10 bg-[#0a192f] py-4 font-semibold text-[#ccd6f6] lg:hidden">
              Projects
            </h2>
            <div className="lg:space-y-4">
              {projects.map(project => (
                <div
                  key={project.title}
                  className="flex cursor-pointer flex-col rounded-lg py-6 transition hover:bg-[#112240] lg:-ml-6 lg:flex-row lg:items-start lg:space-x-8 lg:p-6"
                >
                  {/* div is only used to reposition the image on mobile */}
                  <div className="flex w-full flex-col-reverse md:flex-row">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="my-4 mt-1 mr-6 flex h-[100px] w-1/2 rounded shadow-lg md:w-1/4 lg:mb-0"
                    />
                    <div className="md:max-w-4/5">
                      <h3 className="mb-2 flex items-center font-semibold text-[#ccd6f6]">
                        {project.title}
                      </h3>
                      <p className="mb-3 text-sm text-gray-400">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className="rounded-full bg-[#0f2c3f] px-3 py-1 text-xs font-medium text-[#7dd3fc]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <p className="w-full text-sm md:w-4/5">
              This site was coded in Cursor by yours truly. Built with Vite and TailwindCSS,
              deployed with Vercel. All text is set in the Inter typeface.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
