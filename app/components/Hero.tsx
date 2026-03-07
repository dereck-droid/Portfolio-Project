import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center justify-center pt-16"
    >
      <div className="max-w-content mx-auto px-6 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border-2 border-border overflow-hidden">
              <Image
                src="/headshot.png"
                alt="Dereck Johnson"
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
              Dereck Johnson
            </h1>
            <p className="mt-4 text-base md:text-xl text-accent font-mono font-medium">
              I build AI systems that actually work in production.
            </p>
            <p className="mt-6 text-sm md:text-lg text-text-secondary max-w-xl leading-relaxed">
              AI automation consultant and AI-powered developer. I&apos;ve built
              enterprise compliance systems, agentic pipelines, and custom web
              apps that replace hours of manual work with automated processes.
              Based in Greenville, SC.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold text-sm rounded transition-colors"
              >
                View My Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-text-secondary text-text-primary font-semibold text-sm rounded transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
