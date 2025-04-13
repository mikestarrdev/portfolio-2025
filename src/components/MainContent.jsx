import { experience } from '../data/experience'
import { projects } from '../data/projects'

export const MainContent = ({ sectionRefs }) => {
  return (
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
          I’m a frontend developer who thrives at the intersection of engineering and marketing. I
          build fast, conversion-focused web experiences — from React-based interfaces to
          high-performing WordPress and Shopify landing pages — with a strong eye for performance,
          usability, and analytics.
        </p>
        <br />
        <p className="text-base">
          Most recently, I contributed to a trading platform that processed over $4B in volume and
          built internal tools for affiliate marketers to launch, test, and scale campaigns. My
          background includes technical work on ad funnels, attribution tracking, and UI
          development, making me especially valuable to performance-driven teams.
        </p>
        <br />
        <p className="text-base">
          Outside of coding, you’ll find me climbing mountains, running trails, using the latest AI
          tools, studying product strategy, or deep-diving into analytics and growth.
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
          This site was coded in Cursor by yours truly. Built with Vite and TailwindCSS, deployed
          with Vercel. All text is set in the Inter typeface.
        </p>
      </section>
    </main>
  )
}
