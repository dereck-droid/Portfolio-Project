"use client";

export default function ReferralIllustration() {
  const people = [
    { id: 'A', x: 160, y: 240 },
    { id: 'B', x: 320, y: 180 },
    { id: 'C', x: 160, y: 460 },
    { id: 'D', x: 310, y: 560 },
    { id: 'E', x: 90, y: 380 },
  ];

  const brokenPaths = [
    { cls: 'rf-broken-a', d: 'M180,220 C260,190 300,260 340,230' },
    { cls: 'rf-broken-b', d: 'M340,200 C380,280 200,320 170,440' },
    { cls: 'rf-broken-c', d: 'M110,380 C140,320 190,340 180,260' },
    { cls: 'rf-broken-d', d: 'M170,480 C230,520 270,500 300,540' },
    { cls: 'rf-broken-e', d: 'M100,400 C60,460 120,510 150,480' },
    { cls: 'rf-broken-f', d: 'M330,200 C370,160 280,140 200,220' },
  ];

  const convergenceLines = [
    { from: people[0], da: 460, d: `M160,240 C300,240 500,350 800,450` },
    { from: people[1], da: 420, d: `M320,180 C460,200 600,320 800,450` },
    { from: people[2], da: 500, d: `M160,460 C300,460 500,450 800,450` },
    { from: people[3], da: 440, d: `M310,560 C450,540 600,500 800,450` },
    { from: people[4], da: 480, d: `M90,380 C250,380 500,420 800,450` },
  ];

  const neuralArcs = [
    { d: 'M760,420 C770,400 790,395 810,410', op: 0.5 },
    { d: 'M780,470 C800,485 820,480 830,460', op: 0.4 },
    { d: 'M770,440 C785,425 815,425 830,440', op: 0.6 },
    { d: 'M785,430 C790,415 810,415 815,430', op: 0.35 },
    { d: 'M775,455 C790,465 810,465 825,455', op: 0.45 },
  ];

  const neuralPulses = [
    { cx: 762, cy: 422, cls: 'rf-np-1' },
    { cx: 828, cy: 462, cls: 'rf-np-2' },
    { cx: 810, cy: 410, cls: 'rf-np-3' },
    { cx: 830, cy: 440, cls: 'rf-np-4' },
    { cx: 775, cy: 455, cls: 'rf-np-5' },
    { cx: 825, cy: 455, cls: 'rf-np-6' },
  ];

  const cardinalTicks = [
    { x1: 800, y1: 340, x2: 800, y2: 355 },
    { x1: 800, y1: 545, x2: 800, y2: 560 },
    { x1: 690, y1: 450, x2: 705, y2: 450 },
    { x1: 895, y1: 450, x2: 910, y2: 450 },
  ];

  const innerTicks = [
    { x1: 800, y1: 425, x2: 800, y2: 430 },
    { x1: 800, y1: 470, x2: 800, y2: 475 },
    { x1: 775, y1: 450, x2: 780, y2: 450 },
    { x1: 820, y1: 450, x2: 825, y2: 450 },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes rf-draw { to { stroke-dashoffset: 0; } }
        @keyframes rf-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes rf-crawl { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -60; } }
        @keyframes rf-crawl-r { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 60; } }
        @keyframes rf-flicker-a { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        @keyframes rf-flicker-b { 0%, 100% { opacity: 0.3; } 40% { opacity: 0.7; } }
        @keyframes rf-flicker-c { 0%, 100% { opacity: 0.4; } 60% { opacity: 0.85; } }
        @keyframes rf-neural-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        @keyframes rf-pulse-ring { 0% { r: 8; opacity: 0.8; } 80% { r: 60; opacity: 0; } 100% { r: 60; opacity: 0; } }
        @keyframes rf-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes rf-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes rf-send-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes rf-scan { 0% { transform: translateY(0); opacity: 0; } 4% { opacity: 0.04; } 96% { opacity: 0.02; } 100% { transform: translateY(900px); opacity: 0; } }

        .rf-grid-line { stroke: #1a2a3a; stroke-width: 0.5; }
        .rf-grid-fine { stroke: #141e28; stroke-width: 0.25; }

        .rf-frag-a { opacity: 0; animation: rf-fade-in 0.4s ease-out 0.2s forwards; }
        .rf-frag-b { opacity: 0; animation: rf-fade-in 0.4s ease-out 0.4s forwards; }
        .rf-frag-c { opacity: 0; animation: rf-fade-in 0.4s ease-out 0.6s forwards; }
        .rf-frag-d { opacity: 0; animation: rf-fade-in 0.4s ease-out 0.8s forwards; }
        .rf-frag-e { opacity: 0; animation: rf-fade-in 0.4s ease-out 1.0s forwards; }

        .rf-broken-a { stroke-dasharray: 12 8; animation: rf-crawl 3s linear infinite; }
        .rf-broken-b { stroke-dasharray: 16 10; animation: rf-crawl-r 4s linear infinite; }
        .rf-broken-c { stroke-dasharray: 10 12; animation: rf-crawl 3.5s linear infinite; }
        .rf-broken-d { stroke-dasharray: 14 6; animation: rf-crawl-r 2.8s linear infinite; }
        .rf-broken-e { stroke-dasharray: 8 14; animation: rf-crawl 4.2s linear infinite; }
        .rf-broken-f { stroke-dasharray: 18 8; animation: rf-crawl-r 3.2s linear infinite; }

        .rf-flicker-a { animation: rf-flicker-a 3.4s ease-in-out infinite; }
        .rf-flicker-b { animation: rf-flicker-b 4.1s ease-in-out infinite; }
        .rf-flicker-c { animation: rf-flicker-c 3.8s ease-in-out infinite; }

        .rf-conv-1 { stroke-dasharray: 460; stroke-dashoffset: 460; animation: rf-draw 0.6s ease-out 1.4s forwards; }
        .rf-conv-2 { stroke-dasharray: 420; stroke-dashoffset: 420; animation: rf-draw 0.6s ease-out 1.5s forwards; }
        .rf-conv-3 { stroke-dasharray: 500; stroke-dashoffset: 500; animation: rf-draw 0.6s ease-out 1.6s forwards; }
        .rf-conv-4 { stroke-dasharray: 440; stroke-dashoffset: 440; animation: rf-draw 0.6s ease-out 1.7s forwards; }
        .rf-conv-5 { stroke-dasharray: 480; stroke-dashoffset: 480; animation: rf-draw 0.6s ease-out 1.8s forwards; }

        .rf-breathe { animation: rf-flicker-a 3s ease-in-out 2.2s infinite alternate; opacity: 0.45; }

        .rf-ai-node { opacity: 0; animation: rf-fade-in 0.5s ease-out 2.0s forwards; }
        .rf-ring-spin { animation: rf-ring-spin-kf 22s linear infinite; transform-origin: 800px 450px; }
        .rf-ring-spin-rev { animation: rf-ring-spin-rev-kf 16s linear infinite; transform-origin: 800px 450px; }
        @keyframes rf-ring-spin-kf { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rf-ring-spin-rev-kf { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

        .rf-np-1 { animation: rf-neural-pulse 2.0s ease-in-out 2.2s infinite; }
        .rf-np-2 { animation: rf-neural-pulse 2.0s ease-in-out 2.4s infinite; }
        .rf-np-3 { animation: rf-neural-pulse 2.0s ease-in-out 2.6s infinite; }
        .rf-np-4 { animation: rf-neural-pulse 2.0s ease-in-out 2.8s infinite; }
        .rf-np-5 { animation: rf-neural-pulse 2.0s ease-in-out 3.0s infinite; }
        .rf-np-6 { animation: rf-neural-pulse 2.0s ease-in-out 3.2s infinite; }

        .rf-ring-ai { animation: rf-pulse-ring 2.8s ease-out 2.1s infinite; }
        .rf-ring-out { animation: rf-pulse-ring 2.8s ease-out 3.4s infinite; }

        .rf-line-out { stroke-dasharray: 380; stroke-dashoffset: 380; animation: rf-draw 0.45s ease-out 2.8s forwards; }

        .rf-bubble-group { opacity: 0; animation: rf-fade-in 0.5s ease-out 3.2s forwards; }
        .rf-tl-1 { opacity: 0; animation: rf-fade-in 0.3s ease-out 3.4s forwards; }
        .rf-tl-2 { opacity: 0; animation: rf-fade-in 0.3s ease-out 3.6s forwards; }
        .rf-tl-3 { opacity: 0; animation: rf-fade-in 0.3s ease-out 3.8s forwards; }
        .rf-cursor-blink { animation: rf-blink 0.9s linear 4.0s infinite; }
        .rf-bubble-float { animation: rf-float 5.5s ease-in-out 3.8s infinite; }
        .rf-send-pulse { animation: rf-send-pulse 1.8s ease-in-out 4.2s infinite; }
        .rf-scan { animation: rf-scan 9s linear 1s infinite; }
      `}</style>
      <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ display: 'block' }}>
        <defs>
          {/* Gradients */}
          <radialGradient id="rf-bgMain" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#0e1820" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </radialGradient>
          <radialGradient id="rf-aiHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="rf-bubbleHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="rf-fragHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="rf-orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="1" />
            <stop offset="40%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>

          {/* Filters */}
          <filter id="rf-fBlurHard" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <filter id="rf-fBlurMed" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id="rf-fBlurSoft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id="rf-fOrbGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="1600" height="900" fill="url(#rf-bgMain)" />

        {/* Grid lines */}
        <g>
          {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((y) => (
            <line key={`gh-${y}`} x1="0" y1={y} x2="1600" y2={y} className="rf-grid-line" />
          ))}
          {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600].map((x) => (
            <line key={`gv-${x}`} x1={x} y1="0" x2={x} y2="900" className="rf-grid-line" />
          ))}
          {[50, 150, 250, 350, 450, 550, 650, 750, 850].map((y) => (
            <line key={`gfh-${y}`} x1="0" y1={y} x2="1600" y2={y} className="rf-grid-fine" />
          ))}
          {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250, 1350, 1450, 1550].map((x) => (
            <line key={`gfv-${x}`} x1={x} y1="0" x2={x} y2="900" className="rf-grid-fine" />
          ))}
        </g>

        {/* Scan line */}
        <rect x="0" y="0" width="1600" height="2" fill="#3b82f6" opacity="0" className="rf-scan" />

        {/* ===== CHAOS FRAGMENTS (left side) ===== */}
        <g>
          {/* Broken connector paths */}
          {brokenPaths.map((bp, i) => (
            <path key={`bp-${i}`} d={bp.d} fill="none" stroke="#1e3a5f" strokeWidth="1.5" opacity="0.5" className={bp.cls} />
          ))}

          {/* Person icons */}
          {people.map((p, i) => {
            const fragCls = `rf-frag-${String.fromCharCode(97 + i)}`;
            const flickerCls = i < 3 ? ['rf-flicker-a', 'rf-flicker-b', 'rf-flicker-c'][i] : (i === 3 ? 'rf-flicker-a' : 'rf-flicker-b');
            return (
              <g key={`person-${p.id}`} className={fragCls}>
                {/* Halo */}
                <circle cx={p.x} cy={p.y} r="50" fill="url(#rf-fragHalo)" opacity="0.5" className={flickerCls} />
                {/* Glow */}
                <circle cx={p.x} cy={p.y - 16} r="18" fill="#3b82f6" opacity="0.15" filter="url(#rf-fBlurMed)" />
                {/* Head */}
                <circle cx={p.x} cy={p.y - 16} r="12" fill="#060e1a" stroke="#3b82f6" strokeWidth="1.5" opacity="0.85" />
                {/* Shoulders */}
                <path
                  d={`M${p.x - 18},${p.y + 10} C${p.x - 18},${p.y - 2} ${p.x + 18},${p.y - 2} ${p.x + 18},${p.y + 10}`}
                  fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" opacity="0.85"
                />
              </g>
            );
          })}
        </g>

        {/* ===== CONVERGENCE LINES ===== */}
        <g>
          {convergenceLines.map((cl, i) => {
            const convCls = `rf-conv-${i + 1}`;
            return (
              <g key={`conv-${i}`}>
                {/* Glow pass */}
                <path d={cl.d} fill="none" stroke="#3b82f6" strokeWidth={5 + i * 0.2} opacity={0.25 + i * 0.01} filter="url(#rf-fBlurSoft)" className={convCls} />
                {/* Core */}
                <path d={cl.d} fill="none" stroke="#60a5fa" strokeWidth={1.5 + i * 0.05} className={convCls} />
                {/* Highlight */}
                <path d={cl.d} fill="none" stroke="#bfdbfe" strokeWidth={0.4 + i * 0.025} opacity={0.6 + i * 0.01} className={convCls} />
              </g>
            );
          })}
        </g>

        {/* ===== AI SYNTHESIS NODE (800, 450) ===== */}
        <g className="rf-ai-node">
          {/* Halo */}
          <circle cx="800" cy="450" r="160" fill="url(#rf-aiHalo)" opacity="0.6" />

          {/* Pulse ring */}
          <circle cx="800" cy="450" r="8" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0" className="rf-ring-ai" />

          {/* Outer circle with glow */}
          <circle cx="800" cy="450" r="108" fill="none" stroke="#1e3a5f" strokeWidth="1" opacity="0.6" filter="url(#rf-fBlurSoft)" />
          <circle cx="800" cy="450" r="108" fill="none" stroke="#2563eb" strokeWidth="0.8" opacity="0.5" />

          {/* Inner fill circle */}
          <circle cx="800" cy="450" r="106" fill="#060e1a" opacity="0.85" />

          {/* Spinning dashed orbit rings */}
          <circle cx="800" cy="450" r="86" fill="none" stroke="#1e40af" strokeWidth="0.6" strokeDasharray="8 12" opacity="0.4" className="rf-ring-spin" />
          <circle cx="800" cy="450" r="66" fill="none" stroke="#1e40af" strokeWidth="0.5" strokeDasharray="6 10" opacity="0.3" className="rf-ring-spin-rev" />

          {/* Static dashed circles */}
          <circle cx="800" cy="450" r="48" fill="none" stroke="#1e3a5f" strokeWidth="0.4" strokeDasharray="4 8" opacity="0.35" />
          <circle cx="800" cy="450" r="28" fill="none" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="3 6" opacity="0.3" />

          {/* Neural arcs */}
          {neuralArcs.map((arc, i) => (
            <path key={`arc-${i}`} d={arc.d} fill="none" stroke="#60a5fa" strokeWidth="0.8" opacity={arc.op} strokeLinecap="round" />
          ))}

          {/* Neural pulse dots */}
          {neuralPulses.map((np, i) => (
            <circle key={`np-${i}`} cx={np.cx} cy={np.cy} r="2" fill="#93c5fd" opacity="0.3" className={np.cls} />
          ))}

          {/* Cardinal tick lines */}
          {cardinalTicks.map((t, i) => (
            <line key={`ct-${i}`} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
          ))}

          {/* Core */}
          <circle cx="800" cy="450" r="22" fill="#1e3a5f" opacity="0.6" filter="url(#rf-fBlurSoft)" />
          <circle cx="800" cy="450" r="22" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
          <circle cx="800" cy="450" r="9" fill="#e0f2fe" opacity="0.9" />
          <circle cx="800" cy="450" r="4.5" fill="#93c5fd" />

          {/* Inner tick lines */}
          {innerTicks.map((t, i) => (
            <line key={`it-${i}`} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#60a5fa" strokeWidth="0.5" opacity="0.6" />
          ))}
        </g>

        {/* ===== OUTPUT LINE ===== */}
        <g>
          {/* Glow pass */}
          <path d="M908,450 L1140,450 L1140,310" fill="none" stroke="#3b82f6" strokeWidth="5" opacity="0.25" filter="url(#rf-fBlurSoft)" className="rf-line-out" />
          {/* Core */}
          <path d="M908,450 L1140,450 L1140,310" fill="none" stroke="#60a5fa" strokeWidth="1.5" className="rf-line-out" />
          {/* Highlight */}
          <path d="M908,450 L1140,450 L1140,310" fill="none" stroke="#bfdbfe" strokeWidth="0.4" opacity="0.6" className="rf-line-out" />
          {/* Elbow dot */}
          <circle cx="1140" cy="450" r="3" fill="#60a5fa" opacity="0" className="rf-bubble-group" />
        </g>

        {/* ===== CHAT BUBBLE OUTPUT ===== */}
        <g>
          {/* Halo */}
          <circle cx="1330" cy="270" r="180" fill="url(#rf-bubbleHalo)" opacity="0.5" className="rf-breathe" />
          {/* Pulse ring */}
          <circle cx="1330" cy="270" r="8" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0" className="rf-ring-out" />

          {/* Floating wrapper */}
          <g className="rf-bubble-float">
            <g className="rf-bubble-group">
              {/* Shadow */}
              <rect x="1115" y="148" width="440" height="260" rx="20" fill="#000" opacity="0.3" filter="url(#rf-fBlurMed)" />
              {/* Main rect double stroke */}
              <rect x="1110" y="140" width="440" height="260" rx="20" fill="#0a1628" stroke="#1e3a5f" strokeWidth="1" />
              <rect x="1110" y="140" width="440" height="260" rx="20" fill="none" stroke="#2563eb" strokeWidth="0.5" opacity="0.4" />

              {/* Tail polygon */}
              <polygon points="1140,400 1140,420 1120,410" fill="#0a1628" stroke="#1e3a5f" strokeWidth="1" strokeLinejoin="round" />

              {/* Header bar */}
              <line x1="1130" y1="176" x2="1530" y2="176" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
              {/* Header dots */}
              <circle cx="1138" cy="158" r="4" fill="#1e3a5f" opacity="0.6" />
              <circle cx="1152" cy="158" r="4" fill="#1e3a5f" opacity="0.6" />
              <circle cx="1166" cy="158" r="4" fill="#1e3a5f" opacity="0.6" />

              {/* Send button */}
              <g className="rf-send-pulse">
                <rect x="1494" y="148" width="44" height="22" rx="6" fill="#1e40af" opacity="0.5" />
                <text x="1516" y="163" textAnchor="middle" fill="#93c5fd" fontSize="10" fontFamily="monospace" opacity="0.8">Send</text>
              </g>

              {/* Text lines */}
              <g className="rf-tl-1">
                <rect x="1140" y="192" width="280" height="8" rx="4" fill="#1e3a5f" opacity="0.6" />
              </g>
              <g className="rf-tl-2">
                <rect x="1140" y="216" width="340" height="8" rx="4" fill="#1e3a5f" opacity="0.5" />
              </g>
              <g className="rf-tl-3">
                <rect x="1140" y="240" width="220" height="8" rx="4" fill="#1e3a5f" opacity="0.4" />
              </g>

              {/* Blinking cursor */}
              <rect x="1364" y="238" width="2" height="12" fill="#60a5fa" className="rf-cursor-blink" />

              {/* Status row */}
              <g opacity="0.5">
                <circle cx="1148" cy="375" r="4" fill="#22c55e" opacity="0.7" />
                <text x="1160" y="379" fill="#60a5fa" fontSize="10" fontFamily="monospace" opacity="0.6">Sent</text>
                {/* Copy icon */}
                <rect x="1480" y="367" width="14" height="14" rx="2" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
                <rect x="1484" y="371" width="14" height="14" rx="2" fill="none" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
                <text x="1510" y="379" fill="#60a5fa" fontSize="10" fontFamily="monospace" opacity="0.5">Copy</text>
              </g>
            </g>
          </g>
        </g>

        {/* ===== TRAVELLING ORBS ===== */}
        {/* Orb 1: convergence from person A */}
        <g>
          <circle r="14" fill="url(#rf-orbGrad)" opacity="0" filter="url(#rf-fOrbGlow)">
            <animateMotion
              path="M160,240 C300,240 500,350 800,450"
              begin="2.0s" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.8;1" dur="1.8s" begin="2.0s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#e0f2fe" opacity="0">
            <animateMotion
              path="M160,240 C300,240 500,350 800,450"
              begin="2.0s" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="1.8s" begin="2.0s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Orb 2: convergence from person B */}
        <g>
          <circle r="16" fill="url(#rf-orbGrad)" opacity="0" filter="url(#rf-fOrbGlow)">
            <animateMotion
              path="M320,180 C460,200 600,320 800,450"
              begin="2.6s" dur="1.9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.8;1" dur="1.9s" begin="2.6s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#e0f2fe" opacity="0">
            <animateMotion
              path="M320,180 C460,200 600,320 800,450"
              begin="2.6s" dur="1.9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="1.9s" begin="2.6s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Orb 3: convergence from person C */}
        <g>
          <circle r="14" fill="url(#rf-orbGrad)" opacity="0" filter="url(#rf-fOrbGlow)">
            <animateMotion
              path="M160,460 C300,460 500,450 800,450"
              begin="3.1s" dur="1.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.8;1" dur="1.7s" begin="3.1s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#e0f2fe" opacity="0">
            <animateMotion
              path="M160,460 C300,460 500,450 800,450"
              begin="3.1s" dur="1.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="1.7s" begin="3.1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Output orb: along output line */}
        <g>
          <circle r="14" fill="url(#rf-orbGrad)" opacity="0" filter="url(#rf-fOrbGlow)">
            <animateMotion
              path="M908,450 L1140,450 L1140,310"
              begin="3.8s" dur="2.0s" repeatCount="indefinite"
              keyPoints="0;0.5;1" keyTimes="0;0.5;1"
              calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
            <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.1;0.8;1" dur="2.0s" begin="3.8s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#e0f2fe" opacity="0">
            <animateMotion
              path="M908,450 L1140,450 L1140,310"
              begin="3.8s" dur="2.0s" repeatCount="indefinite"
              keyPoints="0;0.5;1" keyTimes="0;0.5;1"
              calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="2.0s" begin="3.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </>
  );
}
