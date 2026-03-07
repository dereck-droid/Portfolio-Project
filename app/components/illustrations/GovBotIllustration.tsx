"use client";

export default function GovBotIllustration() {
  return (
    <>
      <style jsx>{`
        @keyframes gb-draw-frame { to { stroke-dashoffset: 0; } }
        @keyframes gb-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gb-cursor-move {
          0%   { transform: translate(232px, 286px); }
          15%  { transform: translate(340px, 286px); }
          20%  { transform: translate(340px, 286px); }
          30%  { transform: translate(340px, 326px); }
          35%  { transform: translate(340px, 326px); }
          45%  { transform: translate(340px, 366px); }
          50%  { transform: translate(340px, 366px); }
          60%  { transform: translate(340px, 406px); }
          65%  { transform: translate(340px, 406px); }
          75%  { transform: translate(340px, 446px); }
          80%  { transform: translate(380px, 490px); }
          90%  { transform: translate(380px, 490px); }
          100% { transform: translate(232px, 286px); }
        }
        @keyframes gb-trail-fade {
          0%, 5% { opacity: 0.5; } 15% { opacity: 0.3; } 25% { opacity: 0.1; } 35%, 100% { opacity: 0; }
        }
        @keyframes gb-ripple { 0% { r: 6; opacity: 0.7; } 80% { r: 45; opacity: 0; } 100% { r: 45; opacity: 0; } }
        @keyframes gb-line-breathe { from { opacity: 0.5; } to { opacity: 1.0; } }
        @keyframes gb-orb-vis { 0%, 1% { opacity: 0; } 5%, 90% { opacity: 0.38; } 100% { opacity: 0; } }
        @keyframes gb-orb-vis-core { 0%, 1% { opacity: 0; } 5%, 90% { opacity: 1; } 100% { opacity: 0; } }
        @keyframes gb-scan { 0% { transform: translateY(0); opacity: 0; } 4% { opacity: 0.05; } 96% { opacity: 0.025; } 100% { transform: translateY(900px); opacity: 0; } }
        @keyframes gb-warm-pulse { 0%,100% { opacity: .07; } 50% { opacity: .13; } }
        @keyframes gb-submit-flash { 0%, 80% { fill: #0d1e35; } 85%, 95% { fill: #1d4ed8; } 100% { fill: #0d1e35; } }
        @keyframes gb-type-cursor { 0%, 45% { opacity: 1; } 46%, 100% { opacity: 0; } }

        .gb-grid-line { stroke: #1a2a3a; stroke-width: 0.5; }
        .gb-grid-fine { stroke: #141e28; stroke-width: 0.25; }
        .gb-browser-frame { stroke-dasharray: 1800; stroke-dashoffset: 1800; animation: gb-draw-frame 0.8s cubic-bezier(0.25,0,0.1,1) 0.2s forwards; }
        .gb-addr-bar { stroke-dasharray: 360; stroke-dashoffset: 360; animation: gb-draw-frame 0.35s ease-out 0.95s forwards; }
        .gb-field-1 { stroke-dasharray: 360; stroke-dashoffset: 360; animation: gb-draw-frame 0.3s ease-out 1.1s forwards; }
        .gb-field-2 { stroke-dasharray: 360; stroke-dashoffset: 360; animation: gb-draw-frame 0.3s ease-out 1.25s forwards; }
        .gb-field-3 { stroke-dasharray: 360; stroke-dashoffset: 360; animation: gb-draw-frame 0.3s ease-out 1.40s forwards; }
        .gb-field-4 { stroke-dasharray: 360; stroke-dashoffset: 360; animation: gb-draw-frame 0.3s ease-out 1.55s forwards; }
        .gb-field-5 { stroke-dasharray: 360; stroke-dashoffset: 360; animation: gb-draw-frame 0.3s ease-out 1.70s forwards; }
        .gb-submit-btn { stroke-dasharray: 300; stroke-dashoffset: 300; animation: gb-draw-frame 0.3s ease-out 1.85s forwards; }
        .gb-fill-1 { opacity: 0; animation: gb-fade-in 0.25s ease-out 1.45s forwards; }
        .gb-fill-2 { opacity: 0; animation: gb-fade-in 0.25s ease-out 1.60s forwards; }
        .gb-fill-3 { opacity: 0; animation: gb-fade-in 0.25s ease-out 1.75s forwards; }
        .gb-fill-4 { opacity: 0; animation: gb-fade-in 0.25s ease-out 1.90s forwards; }
        .gb-fill-5 { opacity: 0; animation: gb-fade-in 0.25s ease-out 2.05s forwards; }
        .gb-btn-fill { opacity: 0; animation: gb-fade-in 0.25s ease-out 2.20s forwards; }
        .gb-pipe-line { stroke-dasharray: 600; stroke-dashoffset: 600; animation: gb-draw-frame 0.5s ease-out 2.3s forwards; }
        .gb-node-1 { opacity: 0; animation: gb-fade-in 0.3s ease-out 2.55s forwards; }
        .gb-node-2 { opacity: 0; animation: gb-fade-in 0.3s ease-out 2.75s forwards; }
        .gb-node-3 { opacity: 0; animation: gb-fade-in 0.3s ease-out 2.95s forwards; }
        .gb-node-out { opacity: 0; animation: gb-fade-in 0.3s ease-out 3.15s forwards; }
        .gb-trail-1 { animation: gb-trail-fade 4s ease-in-out 1.15s infinite; }
        .gb-trail-2 { animation: gb-trail-fade 4s ease-in-out 1.20s infinite; }
        .gb-trail-3 { animation: gb-trail-fade 4s ease-in-out 1.25s infinite; }
        .gb-ripple-n1 { animation: gb-ripple 2.4s ease-out 2.6s infinite; }
        .gb-ripple-n2 { animation: gb-ripple 2.4s ease-out 2.8s infinite; }
        .gb-ripple-n3 { animation: gb-ripple 2.4s ease-out 3.0s infinite; }
        .gb-ripple-out { animation: gb-ripple 2.4s ease-out 3.2s infinite; }
        .gb-breathe { animation: gb-line-breathe 2.8s ease-in-out 2.5s infinite alternate; }
        .gb-orb-glow { animation: gb-orb-vis 10s ease-in-out 3.0s infinite; }
        .gb-orb-core { animation: gb-orb-vis-core 10s ease-in-out 3.0s infinite; }
        .gb-scan { animation: gb-scan 9s linear 1s infinite; }
        .gb-ambient-glow { animation: gb-warm-pulse 5s ease-in-out infinite; }
        .gb-btn-rect { animation: gb-submit-flash 4s ease-in-out 2.2s infinite; }
        .gb-type-cursor { animation: gb-type-cursor 0.85s linear 1.5s infinite; }
        .gb-tab-dot { opacity: 0; animation: gb-fade-in 0.2s ease-out 0.9s forwards; }
        .gb-url-text { opacity: 0; animation: gb-fade-in 0.3s ease-out 1.05s forwards; }
      `}</style>
      <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ display: 'block' }}>
        <defs>
          <radialGradient id="gb-bgGlow" cx="42%" cy="50%" r="62%">
            <stop offset="0%" stopColor="#0e1820" /><stop offset="100%" stopColor="#0d0d0d" />
          </radialGradient>
          <radialGradient id="gb-browserHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.3" /><stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gb-nodeHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" /><stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gb-outHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gb-orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" /><stop offset="30%" stopColor="#93c5fd" stopOpacity="0.9" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gb-pipelineAmbient" cx="75%" cy="55%" r="35%">
            <stop offset="0%" stopColor="#0d1e30" stopOpacity="1" /><stop offset="100%" stopColor="#0d0d0d" stopOpacity="0" />
          </radialGradient>
          <filter id="gb-fBlurHard"><feGaussianBlur stdDeviation="20" /></filter>
          <filter id="gb-fBlurMed"><feGaussianBlur stdDeviation="9" /></filter>
          <filter id="gb-fBlurSoft"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="gb-fOrbGlow" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="7" /></filter>
          <filter id="gb-fCursorGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="5" /></filter>
        </defs>

        <rect width="1600" height="900" fill="url(#gb-bgGlow)" />
        <rect width="1600" height="900" fill="url(#gb-pipelineAmbient)" className="gb-ambient-glow" />

        {/* Grid */}
        <g className="gb-grid-line">
          {[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="900" />)}
          {[100,200,300,400,500,600,700,800].map(y => <line key={`h${y}`} x1="0" y1={y} x2="1600" y2={y} />)}
        </g>
        <g className="gb-grid-fine">
          {[150,250,350,450,550,650,750,850,950,1050,1150,1250,1350,1450].map(x => <line key={`vf${x}`} x1={x} y1="0" x2={x} y2="900" />)}
          {[150,250,350,450,550,650,750,850].map(y => <line key={`hf${y}`} x1="0" y1={y} x2="1600" y2={y} />)}
        </g>
        <rect className="gb-scan" x="0" y="0" width="1600" height="1.5" fill="#3b82f6" />

        {/* Browser Window */}
        <rect x="160" y="180" width="660" height="540" rx="14" fill="url(#gb-browserHalo)" filter="url(#gb-fBlurHard)" opacity="0.6" />
        <rect className="gb-browser-frame" x="160" y="180" width="660" height="540" rx="12" fill="none" stroke="#3b82f6" strokeWidth="1.8" />
        {/* Chrome bar */}
        <rect x="160" y="180" width="660" height="52" fill="#091524" />
        <rect x="160" y="206" width="660" height="26" fill="#091524" />
        <rect x="160" y="232" width="660" height="1.5" fill="#1e3a6a" opacity="0.6" />
        {/* Tab dots */}
        <circle className="gb-tab-dot" cx="193" cy="207" r="6" fill="#1d3a5e" opacity="0.7" />
        <circle className="gb-tab-dot" cx="213" cy="207" r="6" fill="#1d3a5e" opacity="0.7" />
        <circle className="gb-tab-dot" cx="233" cy="207" r="6" fill="#1d3a5e" opacity="0.7" />
        {/* Address bar */}
        <rect className="gb-addr-bar" x="258" y="196" width="460" height="22" rx="4" fill="none" stroke="#1e3a6a" strokeWidth="1.2" />
        <rect className="gb-url-text" x="259" y="197" width="458" height="20" rx="3" fill="#060d18" />
        <circle className="gb-url-text" cx="276" cy="207" r="4" fill="#3b82f6" opacity="0.6" />
        <rect className="gb-url-text" x="288" y="202" width="180" height="9" rx="4" fill="#1e3a6a" opacity="0.8" />
        <rect className="gb-url-text" x="476" y="202" width="80" height="9" rx="4" fill="#1e3a6a" opacity="0.35" />
        <circle className="gb-tab-dot" cx="734" cy="207" r="5" fill="#1e3a6a" opacity="0.5" />
        <rect className="gb-tab-dot" x="748" y="202" width="10" height="10" rx="2" fill="#1e3a6a" opacity="0.4" />
        {/* Content area */}
        <rect x="160" y="232" width="660" height="488" fill="#060d18" />
        <rect x="160" y="660" width="660" height="60" fill="#060d18" />
        {/* Page header */}
        <rect x="160" y="232" width="660" height="28" fill="#091d38" opacity="0.9" />
        <rect x="160" y="260" width="660" height="1.5" fill="#1d4ed8" opacity="0.4" />
        <rect className="gb-fill-1" x="180" y="241" width="70" height="8" rx="3" fill="#1e3a6a" />
        <rect className="gb-fill-1" x="600" y="241" width="45" height="8" rx="3" fill="#1e3a6a" opacity="0.5" />
        <rect className="gb-fill-1" x="655" y="241" width="45" height="8" rx="3" fill="#1e3a6a" opacity="0.5" />
        <rect className="gb-fill-1" x="710" y="241" width="45" height="8" rx="3" fill="#1e3a6a" opacity="0.5" />
        {/* Form label */}
        <rect className="gb-fill-1" x="200" y="278" width="130" height="7" rx="3" fill="#1e3a6a" opacity="0.7" />
        <rect className="gb-fill-1" x="180" y="290" width="600" height="1" fill="#1e3a6a" opacity="0.3" />
        {/* Field 1 */}
        <rect className="gb-field-1" x="200" y="302" width="580" height="32" rx="4" fill="none" stroke="#1d4ed8" strokeWidth="1.3" />
        <rect className="gb-fill-1" x="201" y="303" width="578" height="30" rx="3" fill="#060f1e" />
        <rect className="gb-fill-1" x="214" y="313" width="140" height="9" rx="3" fill="#1e3a6a" opacity="0.9" />
        <rect className="gb-type-cursor gb-fill-1" x="362" y="311" width="1.5" height="13" fill="#60a5fa" />
        {/* Field 2 */}
        <rect className="gb-field-2" x="200" y="345" width="280" height="32" rx="4" fill="none" stroke="#1e3a6a" strokeWidth="1.1" />
        <rect className="gb-fill-2" x="201" y="346" width="278" height="30" rx="3" fill="#060f1e" />
        <rect className="gb-fill-2" x="214" y="356" width="90" height="9" rx="3" fill="#1e3a6a" opacity="0.7" />
        <rect className="gb-field-2" x="500" y="345" width="280" height="32" rx="4" fill="none" stroke="#1e3a6a" strokeWidth="1.1" />
        <rect className="gb-fill-2" x="501" y="346" width="278" height="30" rx="3" fill="#060f1e" />
        <rect className="gb-fill-2" x="514" y="356" width="110" height="9" rx="3" fill="#1e3a6a" opacity="0.7" />
        {/* Field 3 */}
        <rect className="gb-field-3" x="200" y="388" width="580" height="32" rx="4" fill="none" stroke="#1e3a6a" strokeWidth="1.1" />
        <rect className="gb-fill-3" x="201" y="389" width="578" height="30" rx="3" fill="#060f1e" />
        <rect className="gb-fill-3" x="214" y="399" width="200" height="9" rx="3" fill="#1e3a6a" opacity="0.7" />
        {/* Field 4 - dropdowns */}
        <rect className="gb-field-4" x="200" y="431" width="280" height="32" rx="4" fill="none" stroke="#1e3a6a" strokeWidth="1.1" />
        <rect className="gb-fill-4" x="201" y="432" width="278" height="30" rx="3" fill="#060f1e" />
        <rect className="gb-fill-4" x="214" y="442" width="80" height="9" rx="3" fill="#1e3a6a" opacity="0.7" />
        <polyline className="gb-fill-4" points="454,441 460,447 466,441" fill="none" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
        <rect className="gb-field-4" x="500" y="431" width="280" height="32" rx="4" fill="none" stroke="#1e3a6a" strokeWidth="1.1" />
        <rect className="gb-fill-4" x="501" y="432" width="278" height="30" rx="3" fill="#060f1e" />
        <rect className="gb-fill-4" x="514" y="442" width="60" height="9" rx="3" fill="#1e3a6a" opacity="0.7" />
        <polyline className="gb-fill-4" points="754,441 760,447 766,441" fill="none" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
        {/* Field 5 - textarea */}
        <rect className="gb-field-5" x="200" y="474" width="580" height="60" rx="4" fill="none" stroke="#1e3a6a" strokeWidth="1.1" />
        <rect className="gb-fill-5" x="201" y="475" width="578" height="58" rx="3" fill="#060f1e" />
        <rect className="gb-fill-5" x="214" y="485" width="300" height="9" rx="3" fill="#1e3a6a" opacity="0.6" />
        <rect className="gb-fill-5" x="214" y="499" width="220" height="9" rx="3" fill="#1e3a6a" opacity="0.4" />
        <rect className="gb-fill-5" x="214" y="513" width="160" height="9" rx="3" fill="#1e3a6a" opacity="0.25" />
        {/* Submit button */}
        <rect className="gb-submit-btn" x="560" y="548" width="200" height="40" rx="5" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect className="gb-btn-rect gb-btn-fill" x="561" y="549" width="198" height="38" rx="4" fill="#0d1e35" />
        <rect className="gb-btn-fill" x="580" y="562" width="110" height="10" rx="4" fill="#3b82f6" opacity="0.7" />
        <rect className="gb-btn-fill" x="560" y="548" width="200" height="40" rx="5" fill="#3b82f6" filter="url(#gb-fBlurSoft)" opacity="0.12" />
        {/* Scrollbar */}
        <rect className="gb-fill-1" x="808" y="263" width="6" height="400" rx="3" fill="#0d1e35" />
        <rect className="gb-fill-2" x="808" y="290" width="6" height="80" rx="3" fill="#1e3a6a" opacity="0.6" />
        {/* Progress bar */}
        <rect className="gb-fill-1" x="160" y="260" width="280" height="2" rx="1" fill="#3b82f6" opacity="0.7" />

        {/* Robot cursor trail */}
        <g className="gb-trail-1">
          <circle r="5" fill="#3b82f6" filter="url(#gb-fCursorGlow)" opacity="0.4">
            <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.16s" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        <g className="gb-trail-2">
          <circle r="3" fill="#60a5fa" opacity="0.22">
            <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.22s" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        <g className="gb-trail-3">
          <circle r="2" fill="#93c5fd" opacity="0.12">
            <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.28s" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Robot outer glow */}
        <circle r="24" fill="#3b82f6" filter="url(#gb-fCursorGlow)" opacity="0.2">
          <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
        </circle>
        {/* Antenna */}
        <line x1="0" y1="-18" x2="0" y2="-26" stroke="#60a5fa" strokeWidth="1.4" strokeLinecap="round">
          <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
        </line>
        <circle cx="0" cy="-26" r="3" fill="#93c5fd">
          <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
          <animate attributeName="r" values="2.5;4;2.5" dur="1.1s" repeatCount="indefinite" />
          <animate attributeName="fill" values="#93c5fd;#ffffff;#93c5fd" dur="1.1s" repeatCount="indefinite" />
        </circle>
        {/* Robot head */}
        <rect x="-16" y="-18" width="32" height="30" rx="7" fill="#091a2e" stroke="#3b82f6" strokeWidth="2">
          <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
        </rect>
        <rect x="-13" y="-15" width="26" height="24" rx="5" fill="#0d2240" opacity="0.8">
          <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
        </rect>
        {/* Eyes */}
        {[{cx: -6, delay: "0s"}, {cx: 6, delay: "0.4s"}].map((eye) => (
          <g key={eye.cx}>
            <circle cx={eye.cx} cy="-5" r="5.5" fill="#061020" stroke="#1d4ed8" strokeWidth="1">
              <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
            </circle>
            <circle cx={eye.cx} cy="-5" r="3.5" fill="#3b82f6">
              <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
              <animate attributeName="opacity" values="0.85;1;0.85" dur="1.6s" begin={eye.delay} repeatCount="indefinite" />
            </circle>
            <circle cx={eye.cx} cy="-5" r="1.5" fill="#e0f2fe">
              <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
            </circle>
          </g>
        ))}
        {/* Mouth */}
        <rect x="-11" y="5" width="22" height="6" rx="3" fill="#061020" stroke="#1d4ed8" strokeWidth="0.8">
          <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
        </rect>
        {/* Mouth LEDs */}
        {[-6, 0, 6].map((cx, i) => (
          <circle key={cx} cx={cx} cy="8" r="1.8" fill="#3b82f6" opacity="0.9">
            <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
            <animate attributeName="opacity" values="0.4;1;0.4" dur="0.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Ear bolts */}
        {[-20, 15].map(x => (
          <rect key={x} x={x} y="-8" width="5" height="10" rx="2" fill="#091a2e" stroke="#1d4ed8" strokeWidth="1">
            <animateMotion path="M232,286 L340,286 L340,326 L340,366 L340,406 L340,446 L380,490 L232,286" begin="1.1s" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.15;0.30;0.45;0.60;0.75;0.90;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
          </rect>
        ))}

        {/* Pipeline connections */}
        {/* Segment: browser exit -> node 1 */}
        <path className="gb-pipe-line gb-breathe" d="M820,390 L900,390 L980,390" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" opacity="0.5" filter="url(#gb-fBlurSoft)" />
        <path className="gb-pipe-line" d="M820,390 L900,390 L980,390" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <path className="gb-pipe-line" d="M820,390 L900,390 L980,390" fill="none" stroke="#bfdbfe" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
        {/* Segment 1->2 */}
        <path className="gb-pipe-line gb-breathe" d="M980,390 L1100,390 L1100,300" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" filter="url(#gb-fBlurSoft)" />
        <path className="gb-pipe-line" d="M980,390 L1100,390 L1100,300" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="gb-pipe-line" d="M980,390 L1100,390 L1100,300" fill="none" stroke="#bfdbfe" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        {/* Segment 2->3 */}
        <path className="gb-pipe-line gb-breathe" d="M1100,300 L1240,300 L1240,390" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" filter="url(#gb-fBlurSoft)" />
        <path className="gb-pipe-line" d="M1100,300 L1240,300 L1240,390" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="gb-pipe-line" d="M1100,300 L1240,300 L1240,390" fill="none" stroke="#bfdbfe" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        {/* Segment 3->out */}
        <path className="gb-pipe-line gb-breathe" d="M1240,390 L1400,390 L1400,560" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" filter="url(#gb-fBlurSoft)" />
        <path className="gb-pipe-line" d="M1240,390 L1400,390 L1400,560" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="gb-pipe-line" d="M1240,390 L1400,390 L1400,560" fill="none" stroke="#bfdbfe" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        {/* Elbow dots */}
        <circle className="gb-node-1" cx="1100" cy="390" r="4" fill="#60a5fa" opacity="0.8" />
        <circle className="gb-node-2" cx="1240" cy="300" r="4" fill="#60a5fa" opacity="0.8" />
        <circle className="gb-node-3" cx="1240" cy="390" r="4" fill="#60a5fa" opacity="0.8" />

        {/* Node 1: Parse */}
        <g className="gb-node-1">
          <circle cx="980" cy="390" r="60" fill="url(#gb-nodeHalo)" filter="url(#gb-fBlurHard)" opacity="0.35" />
          <circle className="gb-ripple-n1" cx="980" cy="390" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.3" />
          <circle cx="980" cy="390" r="20" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
          <line x1="970" y1="382" x2="990" y2="382" stroke="#3b82f6" strokeWidth="1.2" />
          <line x1="970" y1="390" x2="990" y2="390" stroke="#3b82f6" strokeWidth="1.2" />
          <line x1="970" y1="398" x2="990" y2="398" stroke="#3b82f6" strokeWidth="1.2" />
          <line x1="975" y1="378" x2="975" y2="402" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
          <line x1="985" y1="378" x2="985" y2="402" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
          <circle cx="980" cy="390" r="5" fill="#0d1e35" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="980" cy="390" r="2.5" fill="#93c5fd" />
        </g>

        {/* Node 2: Transform */}
        <g className="gb-node-2">
          <circle cx="1100" cy="300" r="55" fill="url(#gb-nodeHalo)" filter="url(#gb-fBlurHard)" opacity="0.4" />
          <circle className="gb-ripple-n2" cx="1100" cy="300" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.3" />
          <circle cx="1100" cy="300" r="22" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
          <path d="M1090,295 L1098,295 L1098,291 L1106,297 L1098,303 L1098,299 L1090,299 Z" fill="none" stroke="#3b82f6" strokeWidth="1.2" strokeLinejoin="round" />
          <circle cx="1100" cy="300" r="5" fill="#0d1e35" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="1100" cy="300" r="2.5" fill="#93c5fd" />
        </g>

        {/* Node 3: Structure */}
        <g className="gb-node-3">
          <circle cx="1240" cy="390" r="55" fill="url(#gb-nodeHalo)" filter="url(#gb-fBlurHard)" opacity="0.4" />
          <circle className="gb-ripple-n3" cx="1240" cy="390" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.3" />
          <circle cx="1240" cy="390" r="22" fill="none" stroke="#1d4ed8" strokeWidth="1.2" />
          <rect x="1231" y="382" width="6" height="16" rx="1.5" fill="none" stroke="#3b82f6" strokeWidth="1.1" />
          <rect x="1240" y="385" width="6" height="13" rx="1.5" fill="none" stroke="#3b82f6" strokeWidth="1.1" />
          <rect x="1249" y="379" width="6" height="19" rx="1.5" fill="none" stroke="#3b82f6" strokeWidth="1.1" />
          <circle cx="1240" cy="390" r="5" fill="#0d1e35" stroke="#60a5fa" strokeWidth="1" />
          <circle cx="1240" cy="390" r="2.5" fill="#93c5fd" />
        </g>

        {/* Output Node - Lead Card */}
        <g className="gb-node-out">
          <circle cx="1400" cy="560" r="100" fill="url(#gb-outHalo)" filter="url(#gb-fBlurHard)" opacity="0.45" />
          <circle className="gb-ripple-out" cx="1400" cy="560" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="1310" y="490" width="190" height="140" rx="10" fill="#080f1a" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="1310" y="490" width="190" height="10" rx="5" fill="#3b82f6" opacity="0.8" />
          <rect x="1310" y="496" width="190" height="14" fill="#091d38" />
          <rect x="1310" y="510" width="190" height="1" fill="#1e3a6a" opacity="0.5" />
          {/* Data rows */}
          {[{y: 524, w1: 90, w2: 44, op: 0.9}, {y: 545, w1: 70, w2: 36, op: 0.7}, {y: 566, w1: 82, w2: 50, op: 0.6}, {y: 587, w1: 60, w2: 28, op: 0.5}].map(row => (
            <g key={row.y}>
              <circle cx="1328" cy={row.y} r="5" fill="#3b82f6" opacity={row.op} />
              <rect x="1342" y={row.y - 5} width={row.w1} height="8" rx="3" fill="#1e3a6a" />
              <rect x="1440" y={row.y - 5} width={row.w2} height="8" rx="3" fill="#0d2040" opacity={row.op - 0.2} />
            </g>
          ))}
          <rect x="1310" y="604" width="190" height="1" fill="#1e3a6a" opacity="0.4" />
          <circle cx="1328" cy="618" r="4" fill="#22c55e" opacity="0.85" />
          <rect x="1342" y="613" width="50" height="8" rx="3" fill="#1e3a6a" opacity="0.5" />
          <circle cx="1470" cy="618" r="9" fill="none" stroke="#3b82f6" strokeWidth="1.2" />
          <polyline points="1466,618 1469,621 1475,615" fill="none" stroke="#60a5fa" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* Traveling orb */}
        <circle r="16" fill="url(#gb-orbGrad)" filter="url(#gb-fOrbGlow)" className="gb-orb-glow">
          <animateMotion path="M820,390 L980,390 L1100,390 L1100,300 L1240,300 L1240,390 L1400,390 L1400,560" begin="3.0s" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
        </circle>
        <circle r="4" fill="#e8f4ff" className="gb-orb-core">
          <animateMotion path="M820,390 L980,390 L1100,390 L1100,300 L1240,300 L1240,390 L1400,390 L1400,560" begin="3.0s" dur="3.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
        </circle>

        {/* Browser exit pip */}
        <g className="gb-node-1">
          <circle cx="820" cy="390" r="5" fill="#60a5fa" />
          <circle cx="820" cy="390" r="5" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.8" />
        </g>
      </svg>
    </>
  );
}
