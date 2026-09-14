import type { MouseEvent } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { QUICK_LINKS } from '../../data/contactDetails';

export default function Footer() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string): void => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-ink-950 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-3 md:gap-8">
        <div>
          <span className="font-display text-lg text-white">Brit &amp; Beyond Ltd</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Authentic British keepsakes and heritage apparel, chosen in York and sent to every
            corner of the world.
          </p>
        </div>

        <div>
          <span className="text-sm font-medium text-white">Quick links</span>
          <ul className="mt-4 ">
            {QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="flex min-h-[48px] items-center text-sm text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-sm font-medium text-white">Visit the shop</span>
          <div className="mt-4 flex gap-3 text-sm text-white/60">
            <MapPin aria-hidden="true" size={18} className="mt-0.5 flex-shrink-0" />
            <span>
              15 High Ousegate
              <br />
              York, England YO1 8RZ
            </span>
          </div>
          <div className="mt-3 flex gap-3 text-sm text-white/60">
            <Mail aria-hidden="true" size={18} className="mt-0.5 flex-shrink-0" />
            <a href="mailto:hello@britandbeyond.co.uk" className="hover:text-white">
         Brittandbeyonduk@gmail.com
            </a>
          </div>
          <div className="mt-3 flex gap-3 text-sm text-white/60">
            <Phone aria-hidden="true" size={18} className="mt-0.5 flex-shrink-0" />
            <a href="tel:+441904000000" className="hover:text-white">
              +44 7587 704 077
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40 sm:px-8">
        Crafted with British pride &bull; Brit and Beyond Ltd
      </div>
    </footer>
  );
}