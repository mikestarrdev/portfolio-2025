import { experience } from '../../data/experience'

export const Experience = ({ sectionRefs }) => {
  return (
    <section
      id="experience"
      ref={el => {
        sectionRefs.current.experience = el
      }}
    >
      <div className="xl:-ml-20">
        <h2 className="sticky top-2 z-10 bg-[#0a192f]/25 py-4 font-semibold text-[#ccd6f6] backdrop-blur-3xl lg:hidden">
          Experience
        </h2>
        <div className="mt-6 flex flex-col space-y-12 md:space-y-2">
          {experience.map(({ title, description, date, tech, website }) => {
            const Wrapper = website ? 'a' : 'div'
            const wrapperProps = website
              ? {
                  href: website,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {}

            return (
              <Wrapper
                key={title}
                {...wrapperProps}
                className="flex cursor-pointer flex-col rounded-lg transition hover:bg-[#112240] sm:flex-row sm:space-x-8 lg:-ml-6 lg:p-6"
              >
                <div className="mb-2 w-full text-sm text-gray-400 sm:w-2/5 md:w-3/10 lg:mt-0.5 lg:mb-0 lg:text-sm">
                  {date}
                </div>
                <div className="w-full sm:w-full">
                  <h3 className="mb-2 font-semibold text-[#ccd6f6] md:text-base">{title}</h3>
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
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
