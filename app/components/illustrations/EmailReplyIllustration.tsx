"use client";

export default function EmailReplyIllustration() {
  return (
    <>
      <style jsx>{`
        @keyframes em-draw { to { stroke-dashoffset: 0; } }
        @keyframes em-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes em-line-breathe { from { opacity: 0.5; } to { opacity: 1.0; } }
        @keyframes em-trace-fwd { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -80; } }
        @keyframes em-trace-rev { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 80; } }
        @keyframes em-trace-fwd2 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -50; } }
        @keyframes em-orbit-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes em-orbit-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes em-ai-pulse { 0% { r: 28; opacity: 0.6; } 80% { r: 70; opacity: 0; } 100% { r: 70; opacity: 0; } }
        @keyframes em-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes em-flicker-a { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        @keyframes em-flicker-b { 0%, 100% { opacity: 0.3; } 40% { opacity: 0.7; } }
        @keyframes em-scan { 0% { transform: translateY(0); opacity: 0; } 4% { opacity: 0.04; } 96% { opacity: 0.02; } 100% { transform: translateY(900px); opacity: 0; } }

        .em-grid-line { stroke: #1a2a3a; stroke-width: 0.5; }
        .em-grid-fine { stroke: #141e28; stroke-width: 0.25; }
        .em-env-body { opacity: 0; animation: em-fade-in 0.4s ease-out 0.1s forwards; }
        .em-env-flap { stroke-dasharray: 380; stroke-dashoffset: 380; animation: em-draw 0.5s ease-out 0.2s forwards; }
        .em-env-lines { opacity: 0; animation: em-fade-in 0.3s ease-out 0.55s forwards; }
        .em-line-in { stroke-dasharray: 310; stroke-dashoffset: 310; animation: em-draw 0.4s cubic-bezier(0.25,0,0.1,1) 0.65s forwards; }
        .em-line-out { stroke-dasharray: 290; stroke-dashoffset: 290; animation: em-draw 0.4s cubic-bezier(0.25,0,0.1,1) 1.35s forwards; }
        .em-breathe { animation: em-line-breathe 3s ease-in-out 1.4s infinite alternate; }
        .em-ai-node { opacity: 0; animation: em-fade-in 0.5s ease-out 1.0s forwards; }
        .em-tr-a { animation: em-trace-fwd 5s linear infinite; }
        .em-tr-b { animation: em-trace-rev 6s linear infinite; }
        .em-tr-c { animation: em-trace-fwd2 4s linear infinite; }
        .em-orbit-cw { animation: em-orbit-cw 18s linear infinite; transform-origin: 800px 450px; }
        .em-orbit-ccw { animation: em-orbit-ccw 24s linear infinite; transform-origin: 800px 450px; }
        .em-ai-ring-1 { animation: em-ai-pulse 2.8s ease-out 1.1s infinite; }
        .em-ai-ring-2 { animation: em-ai-pulse 2.8s ease-out 1.8s infinite; }
        .em-compose-frame { opacity: 0; animation: em-fade-in 0.5s ease-out 1.7s forwards; }
        .em-compose-row-1 { opacity: 0; animation: em-fade-in 0.25s ease-out 1.82s forwards; }
        .em-compose-row-2 { opacity: 0; animation: em-fade-in 0.25s ease-out 1.96s forwards; }
        .em-compose-row-3 { opacity: 0; animation: em-fade-in 0.25s ease-out 2.10s forwards; }
        .em-compose-send { opacity: 0; animation: em-fade-in 0.3s ease-out 2.38s forwards; }
        .em-cursor { animation: em-blink 1.1s step-end 2.5s infinite; }
        .em-fc-a { animation: em-flicker-a 3.4s ease-in-out infinite; }
        .em-scan { animation: em-scan 10s linear 2s infinite; }
      `}</style>
      <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ display: 'block' }}>
        <defs>
          <radialGradient id="em-bgMain" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#0c1520" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </radialGradient>
          <radialGradient id="em-aiGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="1" />
            <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="em-envHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="em-composeHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="em-orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="em-fBlurHard"><feGaussianBlur stdDeviation="22" /></filter>
          <filter id="em-fBlurMed"><feGaussianBlur stdDeviation="10" /></filter>
          <filter id="em-fBlurSoft"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="em-fBlurXS"><feGaussianBlur stdDeviation="2" /></filter>
          <filter id="em-fOrbGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <rect width="1600" height="900" fill="url(#em-bgMain)" />

        {/* Grid */}
        <g className="em-grid-line">
          <line x1="100" y1="0" x2="100" y2="900" /><line x1="200" y1="0" x2="200" y2="900" />
          <line x1="300" y1="0" x2="300" y2="900" /><line x1="400" y1="0" x2="400" y2="900" />
          <line x1="500" y1="0" x2="500" y2="900" /><line x1="600" y1="0" x2="600" y2="900" />
          <line x1="700" y1="0" x2="700" y2="900" /><line x1="800" y1="0" x2="800" y2="900" />
          <line x1="900" y1="0" x2="900" y2="900" /><line x1="1000" y1="0" x2="1000" y2="900" />
          <line x1="1100" y1="0" x2="1100" y2="900" /><line x1="1200" y1="0" x2="1200" y2="900" />
          <line x1="1300" y1="0" x2="1300" y2="900" /><line x1="1400" y1="0" x2="1400" y2="900" />
          <line x1="1500" y1="0" x2="1500" y2="900" />
          <line x1="0" y1="100" x2="1600" y2="100" /><line x1="0" y1="200" x2="1600" y2="200" />
          <line x1="0" y1="300" x2="1600" y2="300" /><line x1="0" y1="400" x2="1600" y2="400" />
          <line x1="0" y1="500" x2="1600" y2="500" /><line x1="0" y1="600" x2="1600" y2="600" />
          <line x1="0" y1="700" x2="1600" y2="700" /><line x1="0" y1="800" x2="1600" y2="800" />
        </g>
        <g className="em-grid-fine">
          <line x1="150" y1="0" x2="150" y2="900" /><line x1="250" y1="0" x2="250" y2="900" />
          <line x1="350" y1="0" x2="350" y2="900" /><line x1="450" y1="0" x2="450" y2="900" />
          <line x1="550" y1="0" x2="550" y2="900" /><line x1="650" y1="0" x2="650" y2="900" />
          <line x1="750" y1="0" x2="750" y2="900" /><line x1="850" y1="0" x2="850" y2="900" />
          <line x1="950" y1="0" x2="950" y2="900" /><line x1="1050" y1="0" x2="1050" y2="900" />
          <line x1="1150" y1="0" x2="1150" y2="900" /><line x1="1250" y1="0" x2="1250" y2="900" />
          <line x1="1350" y1="0" x2="1350" y2="900" /><line x1="1450" y1="0" x2="1450" y2="900" />
          <line x1="0" y1="150" x2="1600" y2="150" /><line x1="0" y1="250" x2="1600" y2="250" />
          <line x1="0" y1="350" x2="1600" y2="350" /><line x1="0" y1="450" x2="1600" y2="450" />
          <line x1="0" y1="550" x2="1600" y2="550" /><line x1="0" y1="650" x2="1600" y2="650" />
          <line x1="0" y1="750" x2="1600" y2="750" /><line x1="0" y1="850" x2="1600" y2="850" />
        </g>
        <rect className="em-scan" x="0" y="0" width="1600" height="1.5" fill="#3b82f6" />

        {/* Incoming Envelope */}
        <circle cx="290" cy="450" r="130" fill="url(#em-envHalo)" filter="url(#em-fBlurHard)" opacity="0.45" className="em-env-body" />
        <g className="em-env-body">
          <rect x="110" y="332" width="360" height="236" rx="8" fill="#080f1a" stroke="#1d4ed8" strokeWidth="1.4" />
          <rect x="110" y="332" width="360" height="2" rx="1" fill="#3b82f6" opacity="0.55" />
          <circle cx="124" cy="346" r="3" fill="#1d4ed8" opacity="0.6" />
          <circle cx="456" cy="346" r="3" fill="#1d4ed8" opacity="0.6" />
          <circle cx="124" cy="554" r="3" fill="#1d4ed8" opacity="0.4" />
          <circle cx="456" cy="554" r="3" fill="#1d4ed8" opacity="0.4" />
        </g>
        <path className="em-env-flap" d="M110,332 L290,468 L470,332" fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path className="em-env-flap" d="M110,332 L290,468 L470,332" fill="none" stroke="#bfdbfe" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <path className="em-env-flap em-breathe" d="M110,332 L290,468 L470,332" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#em-fBlurSoft)" opacity="0.3" />
        <g className="em-env-lines">
          <rect x="148" y="488" width="180" height="7" rx="3.5" fill="#1e3a6a" />
          <rect x="148" y="503" width="244" height="6" rx="3" fill="#152236" />
          <rect x="148" y="516" width="220" height="6" rx="3" fill="#152236" />
          <rect x="148" y="529" width="160" height="6" rx="3" fill="#152236" />
        </g>

        {/* Connector: envelope -> AI */}
        <line className="em-line-in em-breathe" x1="470" y1="450" x2="685" y2="450" stroke="#3b82f6" strokeWidth="6" opacity="0.22" filter="url(#em-fBlurSoft)" />
        <line className="em-line-in" x1="470" y1="450" x2="685" y2="450" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <line className="em-line-in" x1="470" y1="450" x2="685" y2="450" stroke="#bfdbfe" strokeWidth="0.6" strokeLinecap="round" opacity="0.75" />
        <circle cx="470" cy="450" r="3.5" fill="#60a5fa" className="em-env-lines" />

        {/* AI Node */}
        <circle cx="800" cy="450" r="160" fill="url(#em-aiGlow)" filter="url(#em-fBlurHard)" opacity="0.55" className="em-ai-node" />
        <circle cx="800" cy="450" r="90" fill="url(#em-aiGlow)" filter="url(#em-fBlurMed)" opacity="0.4" className="em-ai-node" />
        <circle className="em-ai-ring-1" cx="800" cy="450" r="28" fill="none" stroke="#3b82f6" strokeWidth="1.2" />
        <circle className="em-ai-ring-2" cx="800" cy="450" r="28" fill="none" stroke="#93c5fd" strokeWidth="0.7" />

        {/* Circuit traces */}
        <g className="em-ai-node" fill="none" stroke="#1d4ed8" strokeWidth="0.9" strokeLinecap="round">
          <path className="em-tr-a" d="M800,378 L800,350 L840,350" strokeDasharray="14 8" />
          <path className="em-tr-b" d="M800,378 L800,328 L758,328 L758,308" strokeDasharray="12 9" />
          <path className="em-tr-c" d="M778,382 L778,338 L718,338" strokeDasharray="10 10" />
          <path className="em-tr-a" d="M822,382 L822,318 L872,318 L872,298" strokeDasharray="14 7" />
          <path className="em-tr-b" d="M800,522 L800,550 L840,550" strokeDasharray="12 8" />
          <path className="em-tr-c" d="M800,522 L800,572 L748,572 L748,592" strokeDasharray="10 9" />
          <path className="em-tr-a" d="M778,518 L778,558 L718,558" strokeDasharray="14 8" />
          <path className="em-tr-b" d="M822,518 L822,578 L882,578 L882,598" strokeDasharray="12 9" />
          <path className="em-tr-c" d="M728,450 L698,450 L698,408" strokeDasharray="10 8" />
          <path className="em-tr-a" d="M728,428 L688,428 L688,388 L668,388" strokeDasharray="14 7" />
          <path className="em-tr-b" d="M728,472 L688,472 L688,512 L658,512" strokeDasharray="12 9" />
          <path className="em-tr-c" d="M872,450 L902,450 L902,408" strokeDasharray="10 8" />
          <path className="em-tr-a" d="M872,428 L912,428 L912,388 L932,388" strokeDasharray="14 7" />
          <path className="em-tr-b" d="M872,472 L912,472 L912,512 L942,512" strokeDasharray="12 9" />
          <path className="em-tr-a" d="M740,390 L718,368 L718,342" strokeDasharray="8 10" opacity="0.6" />
          <path className="em-tr-c" d="M860,390 L882,368 L902,368" strokeDasharray="8 10" opacity="0.6" />
          <path className="em-tr-b" d="M740,510 L718,532 L698,532" strokeDasharray="8 10" opacity="0.6" />
          <path className="em-tr-a" d="M860,510 L882,532 L912,532" strokeDasharray="8 10" opacity="0.6" />
        </g>

        {/* Trace endpoint dots */}
        <g className="em-ai-node em-fc-a" fill="#1d4ed8">
          <circle cx="840" cy="350" r="2.5" opacity="0.7" /><circle cx="758" cy="308" r="2.5" opacity="0.6" />
          <circle cx="718" cy="338" r="2" opacity="0.5" /><circle cx="872" cy="298" r="2.5" opacity="0.6" />
          <circle cx="840" cy="550" r="2.5" opacity="0.7" /><circle cx="748" cy="592" r="2.5" opacity="0.6" />
          <circle cx="718" cy="558" r="2" opacity="0.5" /><circle cx="882" cy="598" r="2.5" opacity="0.6" />
          <circle cx="698" cy="408" r="2.5" opacity="0.6" /><circle cx="668" cy="388" r="2" opacity="0.5" />
          <circle cx="658" cy="512" r="2" opacity="0.5" /><circle cx="902" cy="408" r="2.5" opacity="0.6" />
          <circle cx="932" cy="388" r="2" opacity="0.5" /><circle cx="942" cy="512" r="2" opacity="0.5" />
          <circle cx="718" cy="342" r="2" opacity="0.5" /><circle cx="902" cy="368" r="2" opacity="0.5" />
          <circle cx="698" cy="532" r="2" opacity="0.5" /><circle cx="912" cy="532" r="2" opacity="0.5" />
        </g>

        {/* Orbit rings */}
        <circle className="em-orbit-cw em-ai-node" cx="800" cy="450" r="95" fill="none" stroke="#1d4ed8" strokeWidth="0.7" strokeDasharray="12 18" opacity="0.5" />
        <circle className="em-orbit-ccw em-ai-node" cx="800" cy="450" r="78" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="6 22" opacity="0.35" />

        {/* Node body */}
        <g className="em-ai-node">
          <circle cx="800" cy="450" r="72" fill="#060e1a" stroke="#1d4ed8" strokeWidth="1.2" />
          <circle cx="800" cy="450" r="55" fill="#08121e" stroke="#3b82f6" strokeWidth="0.9" opacity="0.8" />
          <circle cx="800" cy="450" r="30" fill="#0d1e30" stroke="#3b82f6" strokeWidth="1.4" />
          <circle cx="800" cy="450" r="30" fill="#1d4ed8" filter="url(#em-fBlurSoft)" opacity="0.5" />
          <polygon points="800,424 820,436 820,460 800,472 780,460 780,436" fill="none" stroke="#3b82f6" strokeWidth="1.1" opacity="0.8" />
          <circle cx="800" cy="450" r="7" fill="#93c5fd" filter="url(#em-fBlurXS)" opacity="0.7" />
          <circle cx="800" cy="450" r="4" fill="#e0f2fe" />
          <circle cx="800" cy="450" r="2" fill="#ffffff" />
          <line x1="800" y1="378" x2="800" y2="390" stroke="#3b82f6" strokeWidth="1.2" opacity="0.6" />
          <line x1="800" y1="510" x2="800" y2="522" stroke="#3b82f6" strokeWidth="1.2" opacity="0.6" />
          <line x1="728" y1="450" x2="740" y2="450" stroke="#3b82f6" strokeWidth="1.2" opacity="0.6" />
          <line x1="860" y1="450" x2="872" y2="450" stroke="#3b82f6" strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* Connector: AI -> compose */}
        <line className="em-line-out em-breathe" x1="915" y1="450" x2="1100" y2="450" stroke="#3b82f6" strokeWidth="6" opacity="0.22" filter="url(#em-fBlurSoft)" />
        <line className="em-line-out" x1="915" y1="450" x2="1100" y2="450" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <line className="em-line-out" x1="915" y1="450" x2="1100" y2="450" stroke="#bfdbfe" strokeWidth="0.6" strokeLinecap="round" opacity="0.75" />
        <circle cx="1100" cy="450" r="3.5" fill="#60a5fa" className="em-compose-frame" />

        {/* Compose Window */}
        <circle cx="1340" cy="450" r="145" fill="url(#em-composeHalo)" filter="url(#em-fBlurHard)" opacity="0.45" className="em-compose-frame" />
        <g className="em-compose-frame">
          <rect x="1118" y="300" width="448" height="300" rx="10" fill="#080f1a" stroke="#1d4ed8" strokeWidth="1.5" />
          <rect x="1118" y="300" width="448" height="38" rx="10" fill="#0d1e35" />
          <rect x="1118" y="320" width="448" height="18" fill="#0d1e35" />
          <rect x="1118" y="337" width="448" height="1.5" fill="#3b82f6" opacity="0.45" />
          <circle cx="1140" cy="319" r="5" fill="#1d4ed8" opacity="0.7" />
          <circle cx="1158" cy="319" r="5" fill="#1d4ed8" opacity="0.5" />
          <circle cx="1176" cy="319" r="5" fill="#1d4ed8" opacity="0.35" />
          <rect x="1200" y="314" width="80" height="7" rx="3.5" fill="#1e3a6a" opacity="0.6" />
        </g>

        {/* TO field */}
        <g className="em-compose-row-1">
          <rect x="1118" y="338" width="448" height="36" fill="#0a1320" />
          <rect x="1118" y="373" width="448" height="1" fill="#1e3a6a" opacity="0.6" />
          <rect x="1132" y="350" width="28" height="13" rx="6.5" fill="#1d4ed8" opacity="0.55" />
          <rect x="1170" y="350" width="130" height="13" rx="6.5" fill="#1e3a6a" />
          <circle cx="1184" cy="356" r="5" fill="#3b82f6" opacity="0.7" />
          <rect x="1194" y="353" width="96" height="6" rx="3" fill="#1d4ed8" opacity="0.6" />
        </g>

        {/* Subject field */}
        <g className="em-compose-row-2">
          <rect x="1118" y="374" width="448" height="36" fill="#0a1320" />
          <rect x="1118" y="409" width="448" height="1" fill="#1e3a6a" opacity="0.6" />
          <rect x="1132" y="386" width="36" height="13" rx="6.5" fill="#1d4ed8" opacity="0.45" />
          <rect x="1178" y="386" width="200" height="9" rx="4.5" fill="#1e3a6a" />
        </g>

        {/* Body text */}
        <g className="em-compose-row-3">
          <rect x="1118" y="410" width="448" height="124" fill="#080f1a" />
          <rect x="1136" y="424" width="120" height="7" rx="3.5" fill="#1e3a6a" />
          <rect x="1136" y="440" width="360" height="6" rx="3" fill="#152236" />
          <rect x="1136" y="452" width="332" height="6" rx="3" fill="#152236" />
          <rect x="1136" y="464" width="350" height="6" rx="3" fill="#152236" />
          <rect x="1136" y="476" width="290" height="6" rx="3" fill="#152236" />
          <rect x="1136" y="492" width="180" height="6" rx="3" fill="#152236" />
          <rect x="1136" y="504" width="100" height="6" rx="3" fill="#152236" />
          <rect className="em-cursor" x="1240" y="504" width="2" height="8" rx="1" fill="#60a5fa" />
        </g>

        {/* Send bar */}
        <g className="em-compose-send">
          <rect x="1118" y="534" width="448" height="1.5" fill="#1e3a6a" opacity="0.6" />
          <rect x="1118" y="536" width="448" height="64" rx="10" fill="#0a1320" />
          <rect x="1118" y="536" width="448" height="20" fill="#0a1320" />
          <rect x="1134" y="550" width="90" height="34" rx="8" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="1" />
          <rect x="1134" y="550" width="90" height="34" rx="8" fill="#3b82f6" filter="url(#em-fBlurSoft)" opacity="0.35" />
          <line x1="1155" y1="567" x2="1204" y2="567" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="1194,560 1204,567 1194,574" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="1248" cy="567" r="4" fill="#1e3a6a" />
          <circle cx="1264" cy="567" r="4" fill="#1e3a6a" />
          <circle cx="1280" cy="567" r="4" fill="#1e3a6a" />
          <rect x="1310" y="562" width="36" height="9" rx="4.5" fill="#152236" />
          <line x1="1520" y1="560" x2="1532" y2="574" stroke="#1e3a6a" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="1532" y1="560" x2="1520" y2="574" stroke="#1e3a6a" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* Traveling orb */}
        <circle r="16" fill="url(#em-orbGrad)" filter="url(#em-fOrbGlow)">
          <animateMotion path="M470,450 L685,450 L915,450 L1100,450" begin="2.0s" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1" />
          <animate attributeName="opacity" values="0;0;0.38;0.38;0" keyTimes="0;0.001;0.06;0.94;1" dur="12s" begin="2.0s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#e8f4ff">
          <animateMotion path="M470,450 L685,450 L915,450 L1100,450" begin="2.0s" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1" />
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.001;0.05;0.95;1" dur="12s" begin="2.0s" repeatCount="indefinite" />
        </circle>
      </svg>
    </>
  );
}
