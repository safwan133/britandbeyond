import { useCallback, useEffect, useState, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '../../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const handleNavClick = useCallback((event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsDrawerOpen(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled
        ? 'bg-parchment-light/95 text-ink-900 shadow-sm backdrop-blur-md'
        : 'bg-white/10 text-white backdrop-blur-md'
        }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#hero"
          onClick={(event) => handleNavClick(event, '#hero')}
          className="flex items-center gap-2 font-display text-lg tracking-tight"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-current text-xs"
          >
            B&amp;B
          </span>
          Brit &amp; Beyond
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="group relative py-1 text-sm font-medium"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-heritage-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
          aria-expanded={isDrawerOpen}
          className="flex h-12 w-12 items-center justify-center md:hidden"
        >
          <Menu aria-hidden="true" size={24} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isDrawerOpen}
      >
        <div
          onClick={() => setIsDrawerOpen(false)}
          className={`absolute inset-0 bg-ink-950/50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0'
            }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col bg-parchment-light px-6 py-6 text-ink-900 shadow-xl transition-transform duration-300 ease-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-base">Menu</span>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close menu"
              aria-expanded={isDrawerOpen}
              className="flex h-12 w-12 items-center justify-center"
            >
              <X aria-hidden="true" size={24} />
            </button>
          </div>
          <ul className="mt-6 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-ink-900/10">
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="flex min-h-[48px] items-center font-display text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}