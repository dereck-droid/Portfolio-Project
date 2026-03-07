export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Contact
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Let&apos;s talk.
        </h2>
        <p className="mt-4 text-text-secondary max-w-lg">
          I&apos;m open to AI enablement and automation roles — and select
          consulting engagements. If you&apos;re building something that
          matters, I&apos;d like to hear about it.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          {/* Email */}
          <a
            href="mailto:dereck@advancedleadsolutions.com"
            className="group flex items-center gap-3 bg-surface border border-border rounded-lg px-6 py-4 hover:border-accent/50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <div className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                Email
              </div>
              <div className="text-sm text-text-primary group-hover:text-accent transition-colors">
                dereck@advancedleadsolutions.com
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dereck-johnson-074988250/"
            className="group flex items-center gap-3 bg-surface border border-border rounded-lg px-6 py-4 hover:border-accent/50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <div>
              <div className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                LinkedIn
              </div>
              <div className="text-sm text-text-primary group-hover:text-accent transition-colors">
                Connect on LinkedIn
              </div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Dereck Johnson / Advanced Lead
            Solutions
          </p>
          <p className="font-mono text-xs text-text-secondary">
            Greenville, SC
          </p>
        </div>
      </div>
    </section>
  );
}
