import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Sidebar = ({
  sections,
  activeSection,
  hoverNavId,
  setHoverNavId,
  handleScrollToSection,
}) => {
  return (
    <aside className="w-full pt-12 pb-6 sm:pt-14 md:pt-16 lg:sticky lg:top-0 lg:h-screen lg:pt-22">
      <div className="flex h-full flex-col justify-between pr-8 pl-4 lg:max-w-md lg:pr-0 xl:pl-30">
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-[#ccd6f6] md:text-5xl">Mike Starr</h1>
            <h2 className="text-xl font-medium text-[#ccd6f6] lg:text-xl">Front End Engineer</h2>
            <p className="leading-relaxed text-gray-400 lg:text-base">
              I build accessible, pixel-perfect digital
              <br /> experiences for the web.
            </p>
          </div>

          <nav className="mt-18 hidden space-y-6 lg:block">
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id || hoverNavId === id

              return (
                <button
                  key={id}
                  type="button"
                  tabIndex={0}
                  onClick={() => handleScrollToSection(id)}
                  onMouseEnter={() => setHoverNavId(id)}
                  onMouseLeave={() => setHoverNavId(null)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') handleScrollToSection(id)
                  }}
                  className="flex items-center space-x-4 border-none bg-transparent p-0 text-left hover:cursor-pointer"
                >
                  <span
                    className={`h-px bg-gray-400 transition-all duration-300 ${isActive ? 'w-14 bg-white' : 'w-6'}`}
                  />
                  <span
                    className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#8892b0]'}`}
                  >
                    {label}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>

        <div className="flex space-x-6 text-2xl text-gray-400 lg:mt-10 lg:mb-24 lg:text-2xl">
          <a href="https://github.com/mikestarrdev" target="_" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mike-starr" target="_" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          {/* <a href="/" aria-label="Instagram">
            <FaInstagram />
          </a> */}
        </div>
      </div>
    </aside>
  )
}
