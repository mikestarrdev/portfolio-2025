import { useRef, useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const projects = [
  {
    title: 'Spotify Clone',
    description:
      'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
    image: '/placeholder.png',
    stars: 677,
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
  {
    title: 'Portfolio Site',
    description:
      'This website you’re viewing. Built with Tailwind, hosted on Netlify.',
    image: '/placeholder.png',
    tech: ['React', 'Tailwind', 'Netlify'],
  },
];

export default function App() {
  const sectionRefs = useRef({});
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0.1 }
    );

    for (const section of sections) {
      const ref = sectionRefs.current[section.id];
      if (ref) {
        observer.observe(ref);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a192f] text-white font-[Inter]">
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto px-6 sm:px-10 lg:px-12 lg:text-lg">
        {/* Sidebar */}
        <aside className="w-full lg:sticky lg:top-0 lg:h-screen pt-12 lg:pt-24 pb-6">
          <div className="flex flex-col justify-between h-full lg:max-w-md mx-auto">
            <div className="space-y-10">
              {/* Top: Name, title, tagline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-extrabold">Mike Starr</h1>
                <h2 className="text-xl lg:text-2xl font-medium text-gray-300">Front End Engineer</h2>
                <p className="text-gray-400 leading-relaxed lg:text-xl">
                  I build accessible, pixel-perfect digital<br/> experiences for the web.
                </p>
              </div>

              {/* Nav links */}
              <nav className="hidden lg:block space-y-6 mt-24">
                {sections.map(({ id, label }) => (
                  <div key={id} className="flex items-center space-x-4">
                    <span
                      className={`h-px transition-all duration-300 bg-gray-400 ${
                        active === id ? 'w-12 bg-white' : 'w-6'
                      }`}
                    />
                    <span
                      className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                        active === id ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom: Social Icons */}
            <div className="flex space-x-6 text-gray-400 text-2xl lg:text-4xl lg:mt-10 lg:mb-24">
              <a href="/" aria-label="GitHub"><FaGithub /></a>
              <a href="/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="/" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="w-full pt-10 lg:pt-24 pb-32 space-y-16">
          <section
            id="about"
            ref={(el) => {
              sectionRefs.current.about = el;
            }}
          >
            <h2 className="font-bold lg:hidden sticky top-0 bg-[#0a192f] py-4 z-10">About</h2>
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              I’m a frontend developer who thrives at the intersection of engineering and marketing. I build fast, conversion-focused web experiences — from React-based interfaces to high-performing WordPress and Shopify landing pages — with a strong eye for performance, usability, and analytics.
              </p>
              <br />
              <p className="text-gray-300 max-w-2xl leading-relaxed">
              Most recently, I contributed to a trading platform that processed over $4B in volume and built internal tools for affiliate marketers to launch, test, and scale campaigns. My background includes technical work on ad funnels, attribution tracking, and UI development, making me especially valuable to performance-driven teams.
              </p>
              <br />
              <p className="text-gray-300 max-w-2xl leading-relaxed">
              Outside of coding, you’ll find me running desert trails, studying product strategy, or deep-diving into the latest in analytics and growth.
            </p>
          </section>

          <section
            id="experience"
            ref={(el) => {
              sectionRefs.current.experience = el;
            }}
          >
            <h2 className="text-md font-bold lg:hidden sticky top-0 bg-[#0a192f] py-4 z-10">Experience</h2>
            <div className="space-y-8">
              {[{
                title: 'Web developer - RaidGuild',
                description: 'Some description about the role and achievements.',
                date: '2021 — Present',
                tech: ['JavaScript', 'React'],
              }, {
                title: 'Frontend Developer - AirSwap',
                description: 'Another role with key contributions and tools.',
                date: '2019 — 2021',
                tech: ['TypeScript', 'Node.js'],
              }].map(({ title, description, date, tech }) => (
                <div key={title} className="lg:flex lg:space-x-8 lg:p-6 text-md rounded-lg transition hover:bg-[#112240] cursor-pointer">
                  <div className="w-full lg:w-1/5 text-gray-400 mb-2 lg:mb-0">{date}</div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="text-md font-semibold mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.map(t => (
                        <span key={t} className="bg-[#0f2c3f] text-[#7dd3fc] text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="projects"
            ref={(el) => {
              sectionRefs.current.projects = el;
            }}
          >
            <h2 className="text-md font-semibold lg:hidden sticky top-0 bg-[#0a192f] py-4 z-10">Projects</h2>
            <div className="lg:space-y-12">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 py-6 lg:p-6 rounded-lg transition hover:bg-[#112240] cursor-pointer"
                >
                  {/* div is only used to reposition the image on mobile */}
                  <div className='flex flex-col-reverse lg:flex-row'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-1/2 lg:w-1/5 rounded shadow-lg my-4 lg:mb-0 mr-6"
                    />
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {project.description}
                      </p>
                      {project.stars && (
                        <p className="text-gray-400 mb-2">
                          <span className="inline-block mr-1">⭐</span>
                          {project.stars}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-[#0f2c3f] text-[#7dd3fc] text-xs font-medium px-3 py-1 rounded-full"
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
        </main>
      </div>
    </div>
  );
}
