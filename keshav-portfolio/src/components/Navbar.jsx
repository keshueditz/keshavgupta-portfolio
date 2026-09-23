import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-ink-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="font-display text-lg sm:text-xl tracking-wide text-bone">
          KM<span className="text-brass">G</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-bone-muted hover:text-brass transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-brass/50 text-brass text-sm px-4 py-2 hover:bg-brass hover:text-ink transition-colors"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        >
          <span className={`block h-[1.5px] w-6 bg-bone transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-bone transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-bone transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ink border-b border-ink-border"
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-bone-muted hover:text-brass text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center border border-brass/50 text-brass px-4 py-2"
              >
                Get in touch
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
