export default function ComplianceFlagship() {
  const techStack = [
    "n8n",
    "JavaScript",
    "Supabase + pgvector",
    "Azure OpenAI",
    "Cohere",
    "Google Drive",
  ];

  return (
    <section id="compliance" className="pt-0 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Flagship Project
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight max-w-4xl">
          AI-Powered Compliance Gap Detection System
        </h2>
        <p className="mt-3 font-mono text-sm text-text-secondary">
          Enterprise Regulatory Intelligence — Federally Insured Credit Union
        </p>

        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl text-accent font-medium italic max-w-3xl">
          &ldquo;I built a compliance AI that found gaps their own team had
          missed — including a material GLBA violation.&rdquo;
        </p>
        <p className="mt-3 text-text-secondary max-w-3xl">
          Enterprise RAG system for a federally insured credit union. 100%
          accuracy confirmed by the client&apos;s compliance team.
        </p>

        {/* Stats callouts */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">
              100%
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-text-secondary">
              Accuracy
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">
              300+
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-text-secondary">
              Documents Indexed
            </div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-accent">
              100%
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-text-secondary">
              Consistency
            </div>
          </div>
        </div>

        {/* Two-column content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: The Situation + What I Built */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              The Situation
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              A federally insured credit union was approaching the $500M asset
              threshold — a regulatory milestone that triggers materially higher
              federal examination scrutiny. Their compliance team was manually
              cross-referencing regulatory requirements against dozens of
              internal policy documents, one at a time. A single missed gap can
              mean fines ranging from $25,000 to $500,000+ per violation.
            </p>

            <h3 className="text-xl font-bold text-text-primary mb-4">
              What I Built
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              A production-ready AI compliance system from the ground up. The
              system ingests internal policy documents, indexes them against
              federal regulatory requirements, and answers compliance questions
              with sourced, verifiable answers — not hallucinations.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              The model was explicitly constrained to report only what existed in
              the document store. No gap-filling with general knowledge. No
              inferences. In compliance work, a confident wrong answer is worse
              than an honest &ldquo;I don&apos;t know.&rdquo;
            </p>

            {/* Confidence tiers */}
            <h4 className="font-mono text-sm font-semibold text-text-primary mb-3 uppercase tracking-widest">
              Confidence-Tiered Output
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded bg-status-green/15 text-status-green border border-status-green/30">
                  COVERED
                </span>
                <span className="text-sm text-text-secondary">
                  Explicit, verifiable coverage found with citations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded bg-status-red/15 text-status-red border border-status-red/30">
                  MISSING
                </span>
                <span className="text-sm text-text-secondary">
                  No relevant policy found after exhaustive search
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded bg-status-amber/15 text-status-amber border border-status-amber/30">
                  UNCLEAR
                </span>
                <span className="text-sm text-text-secondary">
                  Partial information exists, flagged for human review
                </span>
              </div>
            </div>
          </div>

          {/* Right: Results + Details */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">
              The Results
            </h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-text-primary">100% accuracy</strong>{" "}
                  across all five test categories — confirmed by the
                  client&apos;s compliance team
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-text-primary">
                    Surfaced previously undetected violations
                  </strong>{" "}
                  in the client&apos;s existing policy library
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-text-primary">
                    Identified a material GLBA gap
                  </strong>{" "}
                  — a required Privacy Notice document that was missing entirely
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-text-primary">
                    Handled complex multi-area questions
                  </strong>{" "}
                  touching fraud reporting, timing requirements, and electronic
                  transfer procedures simultaneously
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                <span>
                  <strong className="text-text-primary">
                    Security architecture approved by SVP of IT
                  </strong>{" "}
                  — client-hosted Azure environment, zero external data
                  dependencies
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-text-secondary italic">
              The system was confirmed production-ready. The engagement did not
              advance due to budget constraints on the client&apos;s side.
            </p>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-16">
          <h4 className="font-mono text-sm font-semibold text-text-primary mb-6 uppercase tracking-widest">
            Multi-Pass RAG Architecture
          </h4>
          <div className="bg-surface border border-border rounded-lg p-6 md:p-8 overflow-x-auto">
            <ArchitectureDiagram />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1.5 rounded bg-surface border border-border text-text-secondary"
            >
              {tech}
            </span>
          ))}
          <span className="font-mono text-xs px-3 py-1.5 rounded bg-surface border border-border text-text-secondary italic">
            Deployed within client&apos;s Azure environment. Zero external data
            dependencies.
          </span>
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 1000 380"
      className="w-full min-w-[700px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="1000" height="380" fill="transparent" />

      {/* --- Row 1: Document Ingestion → Analysis & Metadata → Chunking → Vector Store --- */}

      {/* Document Ingestion */}
      <rect
        x="10"
        y="30"
        width="145"
        height="52"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="82"
        y="52"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        Document
      </text>
      <text
        x="82"
        y="70"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        Ingestion
      </text>

      {/* Arrow 1 */}
      <line
        x1="155"
        y1="56"
        x2="190"
        y2="56"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* Document Analysis & Metadata Extraction */}
      <rect
        x="190"
        y="24"
        width="175"
        height="64"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="277"
        y="45"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        Document Analysis
      </text>
      <text
        x="277"
        y="61"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        &amp; Metadata
      </text>
      <text
        x="277"
        y="77"
        textAnchor="middle"
        fill="#888"
        fontSize="9"
        fontFamily="JetBrains Mono, monospace"
      >
        type-aware tagging
      </text>

      {/* Arrow 2 */}
      <line
        x1="365"
        y1="56"
        x2="400"
        y2="56"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* Chunking Pipeline */}
      <rect
        x="400"
        y="30"
        width="145"
        height="52"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="472"
        y="52"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        Chunking
      </text>
      <text
        x="472"
        y="70"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        Pipeline
      </text>

      {/* Arrow 3 */}
      <line
        x1="545"
        y1="56"
        x2="580"
        y2="56"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* Vector Store */}
      <rect
        x="580"
        y="30"
        width="145"
        height="52"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="652"
        y="52"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        Vector Store
      </text>
      <text
        x="652"
        y="70"
        textAnchor="middle"
        fill="#888"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
      >
        pgvector
      </text>

      {/* --- Arrows from Vector Store down to 3 passes --- */}
      <line
        x1="652"
        y1="82"
        x2="652"
        y2="120"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line
        x1="652"
        y1="120"
        x2="150"
        y2="120"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line
        x1="652"
        y1="120"
        x2="652"
        y2="145"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />
      <line
        x1="150"
        y1="120"
        x2="150"
        y2="145"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />
      <line
        x1="652"
        y1="120"
        x2="880"
        y2="120"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line
        x1="880"
        y1="120"
        x2="880"
        y2="145"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* --- Row 2: Three Parallel Retrieval Passes --- */}

      {/* Pass 1: Semantic */}
      <rect
        x="50"
        y="145"
        width="200"
        height="52"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="150"
        y="167"
        textAnchor="middle"
        fill="#3b82f6"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        PASS 1
      </text>
      <text
        x="150"
        y="185"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
      >
        Semantic Search
      </text>

      {/* Pass 2: Keyword */}
      <rect
        x="552"
        y="145"
        width="200"
        height="52"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="652"
        y="167"
        textAnchor="middle"
        fill="#3b82f6"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        PASS 2
      </text>
      <text
        x="652"
        y="185"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
      >
        Keyword Search
      </text>

      {/* Pass 3: Category-Filtered */}
      <rect
        x="780"
        y="145"
        width="200"
        height="52"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="880"
        y="167"
        textAnchor="middle"
        fill="#3b82f6"
        fontSize="10"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        PASS 3
      </text>
      <text
        x="880"
        y="185"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
      >
        Category-Filtered
      </text>

      {/* --- Arrows from 3 passes down to Reranking --- */}
      <line
        x1="150"
        y1="197"
        x2="150"
        y2="225"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line
        x1="652"
        y1="197"
        x2="652"
        y2="225"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line
        x1="880"
        y1="197"
        x2="880"
        y2="225"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line
        x1="150"
        y1="225"
        x2="880"
        y2="225"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <line
        x1="500"
        y1="225"
        x2="500"
        y2="245"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* Cohere Reranking */}
      <rect
        x="380"
        y="245"
        width="240"
        height="44"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="500"
        y="273"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="12"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        Cohere Reranking
      </text>

      {/* Arrow to LLM */}
      <line
        x1="500"
        y1="289"
        x2="500"
        y2="310"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* LLM */}
      <rect
        x="420"
        y="310"
        width="160"
        height="40"
        rx="6"
        fill="#161616"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />
      <text
        x="500"
        y="336"
        textAnchor="middle"
        fill="#f0f0f0"
        fontSize="12"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        LLM Analysis
      </text>

      {/* Arrow to Output */}
      <line
        x1="580"
        y1="330"
        x2="640"
        y2="330"
        stroke="#3b82f6"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* Confidence Output Badges */}
      <rect
        x="640"
        y="310"
        width="120"
        height="40"
        rx="6"
        fill="rgba(34,197,94,0.1)"
        stroke="#22c55e"
        strokeWidth="1.5"
      />
      <text
        x="700"
        y="336"
        textAnchor="middle"
        fill="#22c55e"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="700"
      >
        COVERED
      </text>

      <rect
        x="770"
        y="310"
        width="110"
        height="40"
        rx="6"
        fill="rgba(239,68,68,0.1)"
        stroke="#ef4444"
        strokeWidth="1.5"
      />
      <text
        x="825"
        y="336"
        textAnchor="middle"
        fill="#ef4444"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="700"
      >
        MISSING
      </text>

      <rect
        x="890"
        y="310"
        width="100"
        height="40"
        rx="6"
        fill="rgba(245,158,11,0.1)"
        stroke="#f59e0b"
        strokeWidth="1.5"
      />
      <text
        x="940"
        y="336"
        textAnchor="middle"
        fill="#f59e0b"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="700"
      >
        UNCLEAR
      </text>

      {/* Arrowhead marker */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
        </marker>
      </defs>
    </svg>
  );
}
