import { useRef, useEffect, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaGoodreads,
} from 'react-icons/fa';
import { SiCodepen } from 'react-icons/si';

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
              I build accessible, pixel-perfect digital <br/> experiences for the web.
            </p>
          </div>

          {/* Middle: Nav links (desktop only) */}
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


          {/* Bottom: Social Icons */}
          <div className="mt-10 flex space-x-6 text-gray-400 text-xl">
            <a href="/" aria-label="GitHub"><FaGithub /></a>
            <a href="/" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </aside>

        {/* Main */}
        <main className="w-full md:w-1/2 px-6 sm:px-10 md:px-12 pt-10 md:pt-24 pb-32 space-y-32">
          <section
            id="about"
            ref={(el) => {
              sectionRefs.current.about = el;
            }}
          >
            <h2 className="text-3xl font-bold md:hidden sticky top-0 bg-[#0a192f] py-4 z-10">About</h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section
            id="experience"
            ref={(el) => {
              sectionRefs.current.experience = el;
            }}
          >
            <h2 className="text-3xl font-bold md:hidden sticky top-0 bg-[#0a192f] py-4 z-10">Experience</h2>
            <div className="space-y-8">
              {[
                { title: 'Role One', description: 'Some brief description about the role, achievements, or stack used Some brief description about the role, achievements, or stack used Some brief description about the role, achievements, or stack used Some brief description about the role, achievements, or stack used Some brief description about the role, achievements, or stack used Some brief description about the role, achievements, or stack used Some brief description about the role, achievements, or stack used.' },
                { title: 'Role Two', description: 'Some brief descriptionSome brief descriptioSome brief description about the role, achievements, or stack usedn about the role, achievements, or stack used about the role, achievements, or stack used. Some brief description about the role, achievements, or stack used. Some brief description about the role, achievements, or stack used. Some brief description about the role, achievements, or stack used' },
              ].map(({ title, description }) => (
                <div className="p-6 rounded transition-colors duration-300 hover:bg-gray-800" key={title}>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-400 mt-2 text-[15px]">{description}</p>
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
            <h2 className="text-3xl font-bold md:hidden sticky top-0 bg-[#0a192f] py-4 z-10">Projects</h2>
            <div className="space-y-8">
              {[
                { title: 'Spotify Clone', description: 'Short summary of the project and the tech stack used. Short summary of the project and the tech stack used. Short summary of the project and the tech stack used.' },
                { title: 'Portfolio Site', description: 'Short summary of the project and the tech stack used.' },
              ].map(({ title, description }) => (
                <div className="p-6 rounded transition-colors duration-300 hover:bg-gray-800" key={title}>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-400 mt-2 text-[15px]">{description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
