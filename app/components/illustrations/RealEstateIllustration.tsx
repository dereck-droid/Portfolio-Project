"use client";

export default function RealEstateIllustration() {
  return (
    <div className="relative w-full aspect-video bg-[#0d0d0d] overflow-hidden">
      <style jsx>{`
        .grid-line { stroke: #1a2a3a; stroke-width: 0.5; }
        .grid-fine { stroke: #141e28; stroke-width: 0.25; }
        @keyframes re-pulse {
          0%   { r: 6;  opacity: 0.85; }
          70%  { r: 28; opacity: 0; }
          100% { r: 28; opacity: 0; }
        }
        .re-ring1 { animation: re-pulse 2.6s ease-out 0s infinite; }
        .re-ring2 { animation: re-pulse 2.6s ease-out 0.7s infinite; }
        @keyframes re-draw { to { stroke-dashoffset: 0; } }
        .re-line-crm {
          stroke-dasharray: 480; stroke-dashoffset: 480;
          animation: re-draw 0.4s cubic-bezier(0.25,0,0.1,1) 0.4s forwards;
        }
        .re-line-crm-hi {
          stroke-dasharray: 480; stroke-dashoffset: 480;
          animation: re-draw 0.4s cubic-bezier(0.25,0,0.1,1) 0.42s forwards;
        }
        .re-line-contact {
          stroke-dasharray: 545; stroke-dashoffset: 545;
          animation: re-draw 0.45s cubic-bezier(0.25,0,0.1,1) 0.55s forwards;
        }
        .re-line-contact-hi {
          stroke-dasharray: 545; stroke-dashoffset: 545;
          animation: re-draw 0.45s cubic-bezier(0.25,0,0.1,1) 0.57s forwards;
        }
        @keyframes re-line-breathe { from { opacity: 0.55; } to { opacity: 1.0; } }
        .re-breathe { animation: re-line-breathe 2.5s ease-in-out 0.9s infinite alternate; }
        .re-crm-group     { opacity: 0; animation: re-fade-in 0.4s ease-out 0.82s forwards; }
        .re-contact-group { opacity: 0; animation: re-fade-in 0.4s ease-out 0.98s forwards; }
        @keyframes re-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes re-ripple {
          0%   { r: 6;  opacity: 0.7; }
          80%  { r: 55; opacity: 0; }
          100% { r: 55; opacity: 0; }
        }
        .re-ripple-crm     { animation: re-ripple 2.2s ease-out 0.85s infinite; }
        .re-ripple-contact { animation: re-ripple 2.2s ease-out 1.0s infinite; }
        .re-elbow { opacity: 0; }
        .re-elbow-1 { animation: re-fade-in 0.2s ease-out 0.62s forwards; }
        .re-elbow-2 { animation: re-fade-in 0.2s ease-out 0.78s forwards; }
        @keyframes re-flicker { from { opacity: 0.10; } to { opacity: 0.25; } }
        .re-ambient { animation: re-flicker 4s ease-in-out infinite alternate; }
        @keyframes re-scan {
          0%   { transform: translateY(0);     opacity: 0; }
          4%   { opacity: 0.05; }
          96%  { opacity: 0.025; }
          100% { transform: translateY(900px); opacity: 0; }
        }
        .re-scan { animation: re-scan 9s linear 1s infinite; }
      `}</style>
      <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="re-bgGlow" cx="53%" cy="48%" r="58%">
            <stop offset="0%" stopColor="#0d1e30"/>
            <stop offset="100%" stopColor="#0d0d0d"/>
          </radialGradient>
          <radialGradient id="re-originHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="1"/>
            <stop offset="45%" stopColor="#3b82f6" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="re-endHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="re-orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
            <stop offset="30%" stopColor="#93c5fd" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
          </radialGradient>
          <filter id="re-fBlurHard"><feGaussianBlur stdDeviation="18"/></filter>
          <filter id="re-fBlurSoft"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="re-fOrbGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="7"/>
          </filter>
        </defs>
        <rect width="1600" height="900" fill="url(#re-bgGlow)"/>
        {/* Grid */}
        <g className="grid-line">
          {[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500].map(x=>(
            <line key={`gv${x}`} x1={x} y1="0" x2={x} y2="900"/>
          ))}
          {[100,200,300,400,500,600,700,800].map(y=>(
            <line key={`gh${y}`} x1="0" y1={y} x2="1600" y2={y}/>
          ))}
        </g>
        <g className="grid-fine">
          {[150,250,350,450,550,650,750,850,950,1050,1150,1250,1350,1450].map(x=>(
            <line key={`gfv${x}`} x1={x} y1="0" x2={x} y2="900"/>
          ))}
          {[150,250,350,450,550,650,750,850].map(y=>(
            <line key={`gfh${y}`} x1="0" y1={y} x2="1600" y2={y}/>
          ))}
        </g>
        {/* Ambient dots */}
        <g className="re-ambient">
          <circle cx="200" cy="150" r="1.5" fill="#2a4a6a"/>
          <circle cx="1400" cy="200" r="1.5" fill="#2a4a6a"/>
          <circle cx="700" cy="100" r="1.5" fill="#2a4a6a"/>
          <circle cx="300" cy="750" r="1.5" fill="#2a4a6a"/>
          <circle cx="1100" cy="780" r="1.5" fill="#2a4a6a"/>
          <circle cx="150" cy="500" r="1.5" fill="#2a4a6a"/>
          <circle cx="1450" cy="650" r="1.5" fill="#2a4a6a"/>
          <circle cx="950" cy="820" r="1.2" fill="#1e3a52"/>
          <circle cx="500" cy="200" r="1.2" fill="#1e3a52"/>
          <circle cx="1300" cy="550" r="1.2" fill="#1e3a52"/>
        </g>
        {/* Scan line */}
        <rect className="re-scan" x="0" y="0" width="1600" height="1.5" fill="#3b82f6"/>
        {/* Signal lines */}
        <path className="re-line-crm re-breathe" d="M848,432 L1120,432 L1216,270" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#re-fBlurSoft)" opacity="0.7"/>
        <path className="re-line-crm" d="M848,432 L1120,432 L1216,270" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="re-line-crm-hi" d="M848,432 L1120,432 L1216,270" fill="none" stroke="#bfdbfe" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <path className="re-line-contact re-breathe" d="M848,432 L580,432 L400,612" fill="none" stroke="#1d4ed8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#re-fBlurSoft)" opacity="0.7"/>
        <path className="re-line-contact" d="M848,432 L580,432 L400,612" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="re-line-contact-hi" d="M848,432 L580,432 L400,612" fill="none" stroke="#bfdbfe" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        {/* Elbow dots */}
        <circle className="re-elbow re-elbow-1" cx="1120" cy="432" r="4" fill="#60a5fa"/>
        <circle className="re-elbow re-elbow-2" cx="580" cy="432" r="4" fill="#60a5fa"/>
        {/* Orb */}
        <circle r="16" fill="url(#re-orbGrad)" filter="url(#re-fOrbGlow)">
          <animateMotion path="M400,612 L580,432 L848,432 L1120,432 L1216,270" begin="1.4s" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
          <animate attributeName="opacity" values="0;0;0.4;0.4;0" keyTimes="0;0.001;0.06;0.94;1" dur="12s" begin="1.4s" repeatCount="indefinite"/>
        </circle>
        <circle r="4" fill="#e8f4ff">
          <animateMotion path="M400,612 L580,432 L848,432 L1120,432 L1216,270" begin="1.4s" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.001;0.05;0.95;1" dur="12s" begin="1.4s" repeatCount="indefinite"/>
        </circle>
        {/* Origin point */}
        <circle cx="848" cy="432" r="100" fill="url(#re-originHalo)" filter="url(#re-fBlurHard)" opacity="0.35"/>
        <circle className="re-ring1" cx="848" cy="432" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.4"/>
        <circle className="re-ring2" cx="848" cy="432" r="6" fill="none" stroke="#93c5fd" strokeWidth="0.9"/>
        <circle cx="848" cy="432" r="10" fill="#1d4ed8" filter="url(#re-fBlurSoft)" opacity="0.8"/>
        <circle cx="848" cy="432" r="5" fill="#f0f9ff"/>
        <circle cx="848" cy="432" r="2.5" fill="#93c5fd"/>
        <line x1="848" y1="415" x2="848" y2="423" stroke="#60a5fa" strokeWidth="1.1" opacity="0.7"/>
        <line x1="848" y1="441" x2="848" y2="449" stroke="#60a5fa" strokeWidth="1.1" opacity="0.7"/>
        <line x1="831" y1="432" x2="839" y2="432" stroke="#60a5fa" strokeWidth="1.1" opacity="0.7"/>
        <line x1="857" y1="432" x2="865" y2="432" stroke="#60a5fa" strokeWidth="1.1" opacity="0.7"/>
        {/* CRM Database Node */}
        <g className="re-crm-group">
          <circle cx="1250" cy="210" r="110" fill="url(#re-endHalo)" filter="url(#re-fBlurHard)" opacity="0.55"/>
          <circle className="re-ripple-crm" cx="1250" cy="210" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
          <ellipse cx="1250" cy="310" rx="80" ry="25" fill="#091524" stroke="#1d4ed8" strokeWidth="1.4"/>
          <rect x="1170" y="185" width="160" height="125" fill="#091524"/>
          <line x1="1170" y1="185" x2="1170" y2="310" stroke="#1d4ed8" strokeWidth="1.4"/>
          <line x1="1330" y1="185" x2="1330" y2="310" stroke="#1d4ed8" strokeWidth="1.4"/>
          <line x1="1170" y1="218" x2="1330" y2="218" stroke="#1e3a6a" strokeWidth="1.2"/>
          <line x1="1170" y1="248" x2="1330" y2="248" stroke="#1e3a6a" strokeWidth="1.2"/>
          <line x1="1170" y1="278" x2="1330" y2="278" stroke="#1e3a6a" strokeWidth="1.2"/>
          <circle cx="1188" cy="233" r="5" fill="#3b82f6" opacity="0.85"/>
          <rect x="1202" y="229" width="60" height="8" rx="4" fill="#1e3a6a"/>
          <circle cx="1188" cy="263" r="5" fill="#1d4ed8" opacity="0.55"/>
          <rect x="1202" y="259" width="46" height="8" rx="4" fill="#152236"/>
          <circle cx="1188" cy="293" r="5" fill="#1d4ed8" opacity="0.45"/>
          <rect x="1202" y="289" width="52" height="8" rx="4" fill="#152236"/>
          <ellipse cx="1250" cy="185" rx="80" ry="25" fill="#0d2040" stroke="#3b82f6" strokeWidth="1.8"/>
          <ellipse cx="1250" cy="185" rx="80" ry="25" fill="none" stroke="#93c5fd" strokeWidth="0.7" opacity="0.6"/>
          <circle cx="1250" cy="185" r="8" fill="#93c5fd" filter="url(#re-fBlurSoft)" opacity="0.6"/>
          <circle cx="1250" cy="185" r="5" fill="#e0f2fe"/>
        </g>
        {/* Contact Card Node */}
        <g className="re-contact-group">
          <circle cx="370" cy="660" r="120" fill="url(#re-endHalo)" filter="url(#re-fBlurHard)" opacity="0.5"/>
          <circle className="re-ripple-contact" cx="370" cy="660" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="265" y="586" width="210" height="148" rx="12" fill="#091524" stroke="#1d4ed8" strokeWidth="1.6"/>
          <rect x="265" y="586" width="210" height="9" rx="5" fill="#3b82f6" opacity="0.8"/>
          <circle cx="316" cy="638" r="30" fill="#0d2040" stroke="#1d4ed8" strokeWidth="1.2"/>
          <circle cx="316" cy="630" r="12" fill="#1e3a6a"/>
          <path d="M291,660 Q316,650 341,660" fill="none" stroke="#1e3a6a" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="358" y="604" width="96" height="10" rx="5" fill="#1e3a6a"/>
          <rect x="358" y="622" width="70" height="8" rx="4" fill="#152236"/>
          <rect x="358" y="638" width="82" height="8" rx="4" fill="#152236"/>
          <rect x="358" y="654" width="58" height="8" rx="4" fill="#152236"/>
          <rect x="265" y="676" width="210" height="1" fill="#1e3a6a" opacity="0.5"/>
          <circle cx="290" cy="694" r="6" fill="#1d4ed8" opacity="0.6"/>
          <circle cx="310" cy="694" r="6" fill="#1d4ed8" opacity="0.4"/>
          <rect x="330" y="689" width="60" height="10" rx="5" fill="#1d4ed8" opacity="0.35"/>
          <circle cx="462" cy="598" r="9" fill="#60a5fa"/>
          <circle cx="462" cy="598" r="5" fill="#dbeafe"/>
          <circle cx="462" cy="598" r="9" fill="none" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6"/>
        </g>
      </svg>
    </div>
  );
}
