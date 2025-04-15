export const About = ({ sectionRefs }) => {
  return (
    <section
      id="about"
      ref={el => {
        sectionRefs.current.about = el
      }}
    >
      <div className="xl:-ml-22">
        <h2 className="sticky top-0 z-10 -ml-10 w-screen bg-[#0a192f] py-4 pl-10 font-semibold text-[#ccd6f6] backdrop-blur-3xl md:-ml-12 lg:hidden">
          About
        </h2>

        <p className="mt-6 text-base md:mt-0">
          I'm a frontend developer with a focus on eCommerce, performance marketing, and
          peer-to-peer platforms. I build fast, conversion-optimized web experiences using
          TypeScript, React-based interfaces, and high-performing WordPress and Shopify landing
          pages — all with a sharp eye for performance, usability, and analytics.
        </p>
        <br />
        <p className="text-base">
          In 2022, I completed a full-stack coding bootcamp, logging over 600 hours of hands-on
          coursework. It gave me a practical, end-to-end understanding of the web stack — from
          crafting responsive UIs in React to managing backend logic with Node.js and APIs.
        </p>
        <br />
        <p className="text-base">
          Most recently, I helped build internal tools for a trading platform that processed over
          $4B in volume. These tools empowered affiliate marketers to launch, test, and scale
          campaigns quickly. My experience spans ad funnels, attribution tracking, and UI
          development, making me especially valuable to performance-focused teams.
        </p>
        <br />
        <p className="text-base">
          When I’m not coding, I’m probably climbing mountains, trail running, weightlifting, cold
          plunging in the wild, testing my own campaigns, exploring new AI tools — or eating like
          it’s a sport.
        </p>
      </div>
    </section>
  )
}
