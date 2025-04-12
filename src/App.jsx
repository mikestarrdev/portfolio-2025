import { useRef, useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGoodreads,
} from 'react-icons/fa';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
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
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        {/* Sidebar */}
        <aside className="w-full md:w-1/2 px-6 sm:px-10 md:px-12 pt-12 md:pt-24 pb-16 md:sticky md:top-0 md:h-screen flex flex-col md:justify-between">
          {/* Top: Name, title, tagline */}
          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold">Mike Starr</h1>
            <h2 className="text-2xl font-medium text-gray-300">Front End Engineer</h2>
            <p className="text-gray-400 leading-relaxed text-xl">
              I build accessible, pixel-perfect digital <br /> experiences for the web.
            </p>
          </div>

          {/* Nav (Desktop Only) */}
          <nav className="hidden md:block mt-10 space-y-6">
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

          {/* Social Icons */}
          <div className="mt-10 flex space-x-6 text-gray-400 text-xl">
            <a href="/" aria-label="GitHub"><FaGithub /></a>
            <a href="/" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </aside>

        {/* Main */}
        <main className="w-full md:w-1/2 px-6 sm:px-10 md:px-12 pt-10 md:pt-24 pb-32 space-y-32">
          {/* About */}
          <section id="about" ref={(el) => (sectionRefs.current.about = el)}>
            <h2 className="text-3xl font-bold md:hidden sticky top-0 bg-[#0a192f] py-4 z-10">About</h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              In my spare time, I’m usually trail running, rock climbing, or deep diving on web dev projects and design systems.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" ref={(el) => (sectionRefs.current.experience = el)}>
            <h2 className="text-3xl font-bold md:hidden sticky top-0 bg-[#0a192f] py-4 z-10">Experience</h2>
            <div className="space-y-12">
              {[
                {
                  title: 'Frontend Engineer · Example Co',
                  date: '2022 — Present',
                  description: 'Worked on React components and accessibility-focused design systems.',
                  stack: ['React', 'Tailwind', 'JavaScript'],
                },
                {
                  title: 'Web Developer · Agency XYZ',
                  date: '2020 — 2022',
                  description: 'Built websites and landing pages for clients. Integrated WordPress themes.',
                  stack: ['HTML', 'CSS', 'WordPress', 'PHP'],
                },
                {
                  title: 'Intern Developer · Startup Hub',
                  date: '2019 — 2020',
                  description: 'Helped build a marketing dashboard and contributed to frontend UI polish.',
                  stack: ['Vue', 'Sass', 'Firebase'],
                },
                {
                  title: 'Freelancer · Various Clients',
                  date: '2018 — 2019',
                  description: 'Built custom websites for local businesses and optimized for SEO.',
                  stack: ['Bootstrap', 'JavaScript', 'cPanel'],
                },
              ].map(({ title, date, description, stack }) => (
                <div key={title} className="md:flex md:space-x-6">
                  <div className="w-32 text-sm text-gray-400 shrink-0">{date}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-400 mt-2 text-[15px] leading-relaxed">{description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800 text-sm px-2.5 py-1 rounded-full text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" ref={(el) => (sectionRefs.current.projects = el)}>
            <h2 className="text-3xl font-bold md:hidden sticky top-0 bg-[#0a192f] py-4 z-10">Projects</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Spotify Clone',
                  description: 'A full-stack clone of Spotify with user login and playlist UI.',
                  url: '#',
                  stack: ['React', 'Express', 'Spotify API', 'Heroku'],
                },
                {
                  title: 'Halcyon Theme',
                  description: 'Minimal dark VS Code theme with over 100k installs.',
                  url: '#',
                  stack: ['VS Code', 'JSON'],
                },
                {
                  title: 'Portfolio Site',
                  description: 'This website you’re viewing. Built with Tailwind, hosted on Netlify.',
                  url: '#',
                  stack: ['React', 'Tailwind', 'Netlify'],
                },
                {
                  title: 'AI Art Gallery',
                  description: 'Showcase of AI-generated artwork using Stable Diffusion.',
                  url: '#',
                  stack: ['Next.js', 'Tailwind', 'Replicate'],
                },
              ].map(({ title, description, stack, url }) => (
                <a
                  key={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg hover:bg-gray-800 transition duration-300 group"
                >
                  <h3 className="text-lg font-semibold group-hover:text-teal-400 transition">{title}</h3>
                  <p className="text-gray-400 mt-2 text-[15px] leading-relaxed">{description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-sm px-2.5 py-1 rounded-full text-white font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
