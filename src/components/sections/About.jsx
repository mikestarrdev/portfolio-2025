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
          I'm a frontend developer with experience in{' '}
          <span className="text-[#ccd6f6]">eCommerce</span>,{' '}
          <span className="text-[#ccd6f6]">performance marketing</span>, and{' '}
          <span className="text-[#ccd6f6]">peer-to-peer exchanges</span>. I build fast,
          conversion-focused web experiences — using{' '}
          <span className="text-[#ccd6f6]">TypeScript</span>,{' '}
          <span className="text-[#ccd6f6]">React-based interfaces</span>, and{' '}
          <span className="text-[#ccd6f6]">
            high-performing WordPress and Shopify landing pages
          </span>{' '}
          — with a strong eye for <span className="text-[#ccd6f6]">performance</span>,{' '}
          <span className="text-[#ccd6f6]">usability</span>, and{' '}
          <span className="text-[#ccd6f6]">analytics</span>.
        </p>

        <br />

        <p className="text-base">
          I completed a <span className="text-[#ccd6f6]">full-stack coding bootcamp</span> in 2022,
          where I logged over <span className="text-[#ccd6f6]">600 hours</span> of hands-on
          coursework. It gave me a comprehensive, practical understanding of how the entire stack
          fits together — from building responsive UIs with{' '}
          <span className="text-[#ccd6f6]">React</span>, to managing backend logic with{' '}
          <span className="text-[#ccd6f6]">Node.js</span> and APIs.
        </p>

        <br />

        <p className="text-base">
          Most recently, I contributed to a trading platform that processed over{' '}
          <span className="text-[#ccd6f6]">$4B in volume</span>, building internal tools to help
          affiliate marketers{' '}
          <span className="text-[#ccd6f6]">launch, test, and scale campaigns</span> at speed. My
          background spans <span className="text-[#ccd6f6]">ad funnels</span>,{' '}
          <span className="text-[#ccd6f6]">attribution tracking</span>, and{' '}
          <span className="text-[#ccd6f6]">UI development</span>, making me especially valuable to{' '}
          <span className="text-[#ccd6f6]">performance-driven teams</span>.
        </p>

        <br />

        <p className="text-base">
          Outside of coding, you’ll find me{' '}
          <span className="text-[#ccd6f6]">climbing mountains</span>,{' '}
          <span className="text-[#ccd6f6]">trail running</span>,{' '}
          <span className="text-[#ccd6f6]">weight lifting</span>,{' '}
          <span className="text-[#ccd6f6]">cold plunging in the wild</span>, testing my own
          campaigns, experimenting with the <span className="text-[#ccd6f6]">latest AI tools</span>,
          or just stuffing my face with food to the point of satiety.{' '}
        </p>
      </div>
    </section>
  )
}
