export const About = ({ sectionRefs }) => {
  return (
    <section
      id="about"
      ref={el => {
        sectionRefs.current.about = el
      }}
    >
      <div className="xl:-ml-20">
        <h2 className="sticky top-0 z-10 bg-[#0a192f] py-4 font-semibold text-[#ccd6f6] lg:hidden">
          About
        </h2>
        <p className="mt-6 text-base md:mt-0">
          I’m a frontend developer who thrives at the intersection of{' '}
          <span className="font-semibold text-[#ccd6f6]">engineering</span> and{' '}
          <span className="font-semibold text-[#ccd6f6]">marketing</span>. I build{' '}
          <span className="font-semibold text-[#ccd6f6]">fast, conversion-focused</span> web
          experiences — from{' '}
          <span className="font-semibold text-[#ccd6f6]">React-based interfaces</span> to{' '}
          <span className="font-semibold text-[#ccd6f6]">
            high-performing WordPress and Shopify landing pages
          </span>{' '}
          — with a strong eye for <span className="font-semibold text-[#ccd6f6]">performance</span>,{' '}
          <span className="font-semibold text-[#ccd6f6]">usability</span>, and{' '}
          <span className="font-semibold text-[#ccd6f6]">analytics</span>.
        </p>
        <br />
        <p className="text-base">
          Most recently, I contributed to a{' '}
          <span className="font-semibold text-[#ccd6f6]">
            trading platform that processed over $4B in volume
          </span>{' '}
          and built internal tools that empowered{' '}
          <span className="font-semibold text-[#ccd6f6]">
            affiliate marketers to launch, test, and scale campaigns
          </span>
          . My background spans <span className="font-semibold text-[#ccd6f6]">ad funnels</span>,{' '}
          <span className="font-semibold text-[#ccd6f6]">attribution tracking</span>, and{' '}
          <span className="font-semibold text-[#ccd6f6]">UI development</span>, making me especially
          valuable to <span className="font-semibold text-[#ccd6f6]">performance-driven teams</span>
          .
        </p>
        <br />
        <p className="text-base">
          Outside of coding, you’ll find me{' '}
          <span className="font-semibold text-[#ccd6f6]">climbing mountains</span>,{' '}
          <span className="font-semibold text-[#ccd6f6]">running desert trails</span>, experimenting
          with the <span className="font-semibold text-[#ccd6f6]">latest AI tools</span>, or
          deep-diving into <span className="font-semibold text-[#ccd6f6]">product strategy</span>{' '}
          and <span className="font-semibold text-[#ccd6f6]">growth analytics</span>.
        </p>
      </div>
    </section>
  )
}
