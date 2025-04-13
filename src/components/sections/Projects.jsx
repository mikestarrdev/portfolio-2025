import { projects } from '../../data/projects'

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
      </div>
    </section>
  )
}
