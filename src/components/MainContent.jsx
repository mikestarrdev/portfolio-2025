import { About } from './sections/about'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'

export const MainContent = ({ sectionRefs }) => {
  return (
    <main className="w-full space-y-16 pt-14 pb-32 lg:pt-22 xl:w-4/5 xl:pr-16">
      <About sectionRefs={sectionRefs} />
      <Experience sectionRefs={sectionRefs} />
      <Projects sectionRefs={sectionRefs} />

      <section>
        <p className="w-full text-sm md:w-4/5 xl:-ml-20">
          This site was coded in Cursor by yours truly. Built with Vite and TailwindCSS, deployed
          with Vercel. All text is set in the Inter typeface.
        </p>
      </section>
    </main>
  )
}
