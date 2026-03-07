import { ReactNode } from "react";

interface ProjectCardProps {
  id: string;
  headline: string;
  subhead: string;
  tagline: string;
  problem: string;
  solution: string;
  techStack: string[];
  imageSlug: string;
  imageAlt: string;
  illustration?: ReactNode;
}

export default function ProjectCard({
  id,
  headline,
  subhead,
  tagline,
  problem,
  solution,
  techStack,
  imageSlug,
  illustration,
}: ProjectCardProps) {
  return (
    <article
      id={id}
      className="bg-surface border border-border rounded-lg overflow-hidden"
    >
      {/* Illustration or placeholder */}
      {illustration ? (
        <div className="border-b border-border">
          {illustration}
        </div>
      ) : (
        <div className="relative aspect-video bg-[#0a0a0a] border-b border-border flex items-center justify-center">
          <div className="text-center px-6">
            <div className="font-mono text-xs text-text-secondary mb-2 uppercase tracking-widest">
              Project Image
            </div>
            <div className="font-mono text-sm text-accent/60 border border-accent/20 rounded px-4 py-2">
              [ image: {imageSlug}.png ]
            </div>
          </div>
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Headline */}
        <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-tight">
          {headline}
        </h3>
        <p className="mt-2 font-mono text-xs text-text-secondary">{subhead}</p>

        {/* Tagline */}
        <p className="mt-4 text-accent italic">{tagline}</p>

        {/* Problem/Solution */}
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-2">
              The Problem
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {problem}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-secondary mb-2">
              What I Built
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {solution}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded bg-bg border border-border text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
