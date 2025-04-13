import { useRef, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import useActiveNavLink from './hooks/useActiveNavLink';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const experience = [
  {
    title: 'Operations - Tech Marketing LLC',
    description: 'Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools.',
    date: '2024 - Present',
    tech: ['TypeScript', 'Node.js'],
  }, {
    title: 'Frontend Developer - AirSwap',
    description: 'Some description about the role and achievements. Some description about the role and achievements. Some description about the role and achievements. Some description about the role and achievements. Some description about the role and achievements.',
    date: '2023 - 2024',
    tech: ['TypeScript', 'JavaScript', 'React', 'TailwindCSS'],
  }, {
    title: 'Web Developer - RaidGuild',
    description: 'Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools.',
    date: '2022 - 2023',
    tech: ['TypeScript', 'Node.js'],
  }, {
    title: 'Director - Starr Conversions LLC',
    description: 'Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools. Another role with key contributions and tools.',
    date: '2014 — 2020',
    tech: ['TypeScript', 'Node.js'],
  }
]

const projects = [
  {
    title: 'Web App',
    description:
      'Exchange which has processed over $4B in trading volume. I built new features on the app',
    image: '/placeholder.png',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
  {
    title: 'Member Dashboard',
    description:
      'Exchange which has processed over $4B in trading volume. I built new features on the app',
    image: '/placeholder.png',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
  {
    title: 'AirSwap Debugger',
    description:
      'UI for market makers to debug their API connections',
    image: '/placeholder.png',
    tech: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
];

export default function App() {
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState('about');

  useActiveNavLink(sectionRefs, setActiveSection);

  return (
    <div className="bg-[#0a192f] text-[#8892b0] font-inter">
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto px-6 sm:px-10 lg:px-12 lg:text-lg">
        {/* Sidebar */}
        <aside className="w-full lg:sticky lg:top-0 lg:h-screen pt-14 lg:pt-22 pb-6">
          <div className="flex flex-col justify-between h-full lg:max-w-md mx-auto">
            <div className="space-y-10">
              {/* Top: Name, title, tagline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#ccd6f6]">Mike Starr</h1>
                <h2 className="text-xl lg:text-xl font-medium text-[#ccd6f6]">Front End Engineer</h2>
                <p className="text-gray-400 leading-relaxed lg:text-base">
                  I build accessible, pixel-perfect digital<br/> experiences for the web.
                </p>
              </div>

              {/* Nav links */}
              <nav className="hidden lg:block space-y-6 mt-18">
                {sections.map(({ id, label }) => (
                  <div key={id} className="flex items-center space-x-4">
                    <span
                      className={`h-px transition-all duration-300 bg-gray-400 ${
                        activeSection === id ? 'w-12 bg-white' : 'w-6'
                      }`}
                    />
                    <span
                      className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                        activeSection === id ? 'text-white' : 'text-[#8892b0]'
                      }`}>
                      {label}
                    </span>
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom: Social Icons */}
            <div className="flex space-x-6 text-gray-400 text-2xl lg:text-2xl lg:mt-10 lg:mb-24">
              <a href="/" aria-label="GitHub"><FaGithub /></a>
              <a href="/" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="/" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="w-full xl:w-4/5 pt-14 lg:pt-22 pb-32 space-y-16 xl:pr-16">
          <section
            id="about"
            ref={(el) => {
              sectionRefs.current.about = el;
            }}
          >
            <h2 className="lg:hidden sticky top-0 bg-[#0a192f] py-4 z-10 text-[#ccd6f6] font-semibold">About</h2>
            <p className="mt-6 md:mt-0 text-base">
              I’m a frontend developer who thrives at the intersection of engineering and marketing. I build fast, conversion-focused web experiences — from React-based interfaces to high-performing WordPress and Shopify landing pages — with a strong eye for performance, usability, and analytics.
            </p>
            <br />
            <p className="text-base">
              Most recently, I contributed to a trading platform that processed over $4B in volume and built internal tools for affiliate marketers to launch, test, and scale campaigns. My background includes technical work on ad funnels, attribution tracking, and UI development, making me especially valuable to performance-driven teams.
            </p>
            <br />
            <p className="text-base">
              Outside of coding, you’ll find me climbing mountains, running trails, using the latest AI tools, studying product strategy, or deep-diving into analytics and growth.
            </p>
          </section>

          <section
            id="experience"
            ref={(el) => {
              sectionRefs.current.experience = el;
            }}
          >
            <h2 className="text-md font-bold lg:hidden sticky top-0 bg-[#0a192f] py-4 z-10 text-[#ccd6f6]">Experience</h2>
            <div className="flex flex-col mt-6 space-y-12 md:space-y-4">
              {experience.map(({ title, description, date, tech }) => (
                <div key={title} className="flex flex-col sm:flex-row sm:space-x-8 lg:p-6 lg:-ml-6 rounded-lg transition hover:bg-[#112240] cursor-pointer">
                  <div className="w-full sm:w-2/5 md:w-3/10 text-gray-400 mb-2 lg:mb-0 text-sm lg:text-sm">{date}</div>
                  <div className="w-full sm:w-full">
                    <h3 className="md:text-sm font-semibold mb-2 text-[#ccd6f6]">{title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{description}</p>
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
            <h2 className="text-md font-semibold lg:hidden sticky top-0 bg-[#0a192f] py-4 z-10 text-[#ccd6f6]">Projects</h2>
            <div className="lg:space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 py-6 lg:p-6 lg:-ml-6 rounded-lg transition hover:bg-[#112240] cursor-pointer"
                >
                  {/* div is only used to reposition the image on mobile */}
                  <div className="flex flex-col-reverse md:flex-row w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="flex mt-1 w-1/2 md:w-1/4 h-[100px] rounded shadow-lg my-4 lg:mb-0 mr-6"
                    />
                    <div className="md:max-w-4/5">
                      <h3 className="font-semibold mb-2 flex items-center text-[#ccd6f6]">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {project.description}
                      </p>
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
          <section>
            <p className="w-full md:w-4/5 text-sm">
              This site was coded in Cursor by yours truly. Built with Vite and TailwindCSS, deployed with Vercel. All text is set in the Inter typeface.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
