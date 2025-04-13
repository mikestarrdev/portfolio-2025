import { useEffect } from 'react'

export default function useActiveNavLink(sectionRefs, setActiveSection) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {
        // Fires when top of the section hits 20% from top of viewport
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0.0,
      }
    )

    for (const ref of Object.values(sectionRefs.current)) {
      if (ref) observer.observe(ref)
    }

    return () => observer.disconnect()
  }, [sectionRefs, setActiveSection])
}
