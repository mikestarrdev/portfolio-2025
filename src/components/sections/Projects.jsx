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
      <div className="prose prose-invert xl:-ml-20">
        <h2 className="text-md sticky top-0 z-10 bg-[#0a192f] py-4 font-semibold text-[#ccd6f6] lg:hidden">
          Projects
        </h2>
        <div className="lg:space-y-4">
          {projects.map(project => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg py-6 transition hover:bg-[#112240] lg:-ml-6 lg:flex-row lg:items-start lg:space-x-8 lg:p-6"
            >
              {/* Image and content layout */}
              <div className="flex w-full flex-col-reverse transition-transform hover:scale-[1.01] md:flex-row">
                <img
                  src={project.image}
                  alt={project.title}
                  className="my-4 mt-1 mr-6 aspect-[4/3] w-1/2 rounded object-cover shadow-lg md:w-1/4 lg:mb-0"
                />
                <div className="md:max-w-4/5">
                  <h3 className="mb-2 flex items-center font-semibold text-[#ccd6f6]">
                    {project.title}
                  </h3>
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
          ))}
        </div>
      </div>
    </section>
  )
}
