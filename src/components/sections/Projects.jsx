import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const Projects = ({ sectionRefs }) => {
  return (
    <section
      id="projects"
      ref={el => {
        sectionRefs.current.projects = el
      }}
    >
      <div className="xl:-ml-22">
        <h2 className="sticky top-0 z-10 -ml-10 w-screen bg-[#0a192f] py-4 pl-10 font-semibold text-[#ccd6f6] backdrop-blur-3xl md:-ml-12 lg:hidden">
          Projects
        </h2>

        <div className="lg:space-y-4">
          {projects.map(project => {
            const href = project.link || project.github
            return (
              <div
                key={project.title}
                className="flex flex-col rounded-lg py-6 transition hover:bg-[#112240] lg:-ml-6 lg:flex-row lg:items-start lg:space-x-8 lg:p-6"
              >
                {/* Image and content layout */}
                <div className="flex w-full flex-col-reverse transition-transform hover:scale-[1.01] md:flex-row">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="my-4 mt-4 mr-6 aspect-[4/3] h-[150px] w-[200px] rounded border border-[#8892b0]/20 object-cover shadow-lg lg:mt-1 lg:mb-0"
                  />
                  <div className="md:max-w-4/5">
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mb-2 flex items-center font-semibold text-[#ccd6f6]"
                      >
                        {project.title}
                        <ArrowUpRight className="ml-1 h-[14px] w-[14px] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                      </a>
                    ) : (
                      <h3 className="mb-2 font-semibold text-[#ccd6f6]">{project.title}</h3>
                    )}

                    <p className="mb-2 text-sm text-gray-400">{project.description}</p>

                    {/* External links */}
                    <div className="mb-2 flex flex-wrap gap-4 text-xs text-[#7dd3fc]">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          GitHub <FaExternalLinkAlt className="h-[10px] w-[10px]" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          App <FaExternalLinkAlt className="h-[10px] w-[10px]" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          Demo <FaExternalLinkAlt className="h-[10px] w-[10px]" />
                        </a>
                      )}
                    </div>

                    {/* Tech stack */}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
