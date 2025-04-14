import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Portfolio } from './sections/Portfolio'
import { Projects } from './sections/Projects'

export const MainContent = ({ sectionRefs }) => {
  return (
    <main className="w-full space-y-16 pt-14 pr-8 pb-32 pl-4 lg:pt-22 xl:w-4/5 xl:pr-24">
      <About sectionRefs={sectionRefs} />
      <Experience sectionRefs={sectionRefs} />
      <Projects sectionRefs={sectionRefs} />
      <Portfolio />
    </main>
  )
}
