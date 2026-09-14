import type { MouseEvent } from 'react';
import { ArrowDown } from 'lucide-react';

import heroBackground from '../assets/hero-background.jpg';


export default function Hero() {
  const handleScrollDown = (event: MouseEvent<HTMLAnchorElement>, targetId: string): void => {
    event.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <section
      id="hero"
      className="relative flex min-h-[88svh] scroll-mt-20 items-end overflow-hidden bg-ink-950 sm:min-h-screen"
    >
      <img
        src={heroBackground}
        alt="A collection of British souvenirs, tea and London keepsakes"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/40 to-ink-950/85"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
        <div className="max-w-4xl animate-fade-in text-left">
          {/* Tagline / Eyebrow */}
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white">
            <span className="h-px w-10 bg-heritage-500" />
            Curated in the heart of historic York
          </p>

          {/* Headline */}
          <h1 className="max-w-4xl font-display text-3xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.04]">
            “Take a piece of UK home <span className="text-red-600">wherever you are</span>”
          </h1>
          {/* Description & Action CTA row */}
          <div className="mt-8 flex flex-col gap-5 border-t border-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-white/85">
              Authentic British keepsakes and enduring apparel, selected to make every memory of your visit last.
            </p>

            <a
              href="#about"
              onClick={(e) => handleScrollDown(e, '#about')}
              aria-label="Discover our story"
              className="group flex min-h-12 w-fit items-center gap-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Discover our story
              <span className="grid size-10 place-items-center rounded-full border border-white/40 transition-transform group-hover:translate-y-1">
                <ArrowDown className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


