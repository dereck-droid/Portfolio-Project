"use client";

export default function MusicTeacherIllustration() {
  return (
    <div className="relative w-full aspect-video bg-[#0d0d0d] overflow-hidden">
      <style jsx>{`
        .grid-line { stroke: #1a2a3a; stroke-width: 0.5; }
        .grid-fine { stroke: #141e28; stroke-width: 0.25; }
        @keyframes mt-crawl-fwd  { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -60; } }
        @keyframes mt-crawl-rev  { from { stroke-dashoffset: 0; } to { stroke-dashoffset:  60; } }
        @keyframes mt-crawl-fwd2 { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -40; } }
        .mt-sp-a { animation: mt-crawl-fwd  4.2s linear infinite; }
        .mt-sp-b { animation: mt-crawl-rev  5.1s linear infinite; }
        .mt-sp-c { animation: mt-crawl-fwd2 3.7s linear infinite; }
        .mt-sp-d { animation: mt-crawl-fwd  6.0s linear infinite; }
        .mt-sp-e { animation: mt-crawl-rev  4.8s linear infinite; }
        @keyframes mt-flicker-a { 0%,100%{opacity:.70} 40%{opacity:.95} 70%{opacity:.45} }
        @keyframes mt-flicker-b { 0%,100%{opacity:.45} 30%{opacity:.75} 65%{opacity:.30} }
        @keyframes mt-flicker-c { 0%,100%{opacity:.60} 50%{opacity:.30} 80%{opacity:.85} }
        .mt-fc-a { animation: mt-flicker-a 3.1s ease-in-out infinite; }
        .mt-fc-b { animation: mt-flicker-b 4.3s ease-in-out infinite; }
        .mt-fc-c { animation: mt-flicker-c 2.7s ease-in-out infinite; }
        @keyframes mt-draw-stream { to { stroke-dashoffset: 0; } }
        .mt-stream-1 { stroke-dasharray:520; stroke-dashoffset:520; animation: mt-draw-stream .70s ease-out .30s forwards; }
        .mt-stream-2 { stroke-dasharray:480; stroke-dashoffset:480; animation: mt-draw-stream .65s ease-out .45s forwards; }
        .mt-stream-3 { stroke-dasharray:440; stroke-dashoffset:440; animation: mt-draw-stream .60s ease-out .55s forwards; }
        .mt-stream-4 { stroke-dasharray:500; stroke-dashoffset:500; animation: mt-draw-stream .65s ease-out .50s forwards; }
        .mt-stream-5 { stroke-dasharray:460; stroke-dashoffset:460; animation: mt-draw-stream .60s ease-out .60s forwards; }
        .mt-stream-out { stroke-dasharray:320; stroke-dashoffset:320; animation: mt-draw-stream .55s ease-out .70s forwards; }
        @keyframes mt-line-breathe { from{opacity:.5} to{opacity:.95} }
        .mt-breathe { animation: mt-line-breathe 3s ease-in-out 1s infinite alternate; }
        .mt-dash-group { opacity:0; animation: mt-fade-in .5s ease-out 1.0s forwards; }
        .mt-row-1 { opacity:0; animation: mt-fade-in .3s ease-out 1.15s forwards; }
        .mt-row-2 { opacity:0; animation: mt-fade-in .3s ease-out 1.30s forwards; }
        .mt-row-3 { opacity:0; animation: mt-fade-in .3s ease-out 1.45s forwards; }
        .mt-row-4 { opacity:0; animation: mt-fade-in .3s ease-out 1.60s forwards; }
        .mt-row-5 { opacity:0; animation: mt-fade-in .3s ease-out 1.75s forwards; }
        @keyframes mt-fade-in { from{opacity:0} to{opacity:1} }
        .mt-funnel-node { opacity:0; animation: mt-fade-in .3s ease-out .9s forwards; }
        @keyframes mt-ripple { 0%{r:6;opacity:.6} 80%{r:40;opacity:0} 100%{r:40;opacity:0} }
        .mt-funnel-ripple { animation: mt-ripple 2.4s ease-out 1.1s infinite; }
        @keyframes mt-scan {
          0%  { transform:translateY(0); opacity:0; }
          4%  { opacity:.04; }
          96% { opacity:.02; }
          100%{ transform:translateY(900px); opacity:0; }
        }
        .mt-scan { animation: mt-scan 10s linear 1.5s infinite; }
        @keyframes mt-warm-pulse { 0%,100%{opacity:.09} 50%{opacity:.15} }
        .mt-warm-glow { animation: mt-warm-pulse 5s ease-in-out infinite; }
      `}</style>
      <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <radialGradient id="mt-bgMain" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#0e1820"/>
            <stop offset="100%" stopColor="#0d0d0d"/>
          </radialGradient>
          <radialGradient id="mt-warmLeft" cx="23%" cy="50%" r="36%">
            <stop offset="0%" stopColor="#3d2208" stopOpacity="1"/>
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="mt-coolRight" cx="82%" cy="50%" r="30%">
            <stop offset="0%" stopColor="#0d1e30" stopOpacity="1"/>
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="mt-chaosHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity=".55"/>
            <stop offset="100%" stopColor="#b45309" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="mt-blueHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity=".7"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="mt-dashHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity=".5"/>
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="mt-orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
            <stop offset="30%" stopColor="#93c5fd" stopOpacity=".9"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
          </radialGradient>
          <filter id="mt-fBlurHard"><feGaussianBlur stdDeviation="20"/></filter>
          <filter id="mt-fBlurMed"><feGaussianBlur stdDeviation="10"/></filter>
          <filter id="mt-fBlurSoft"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="mt-fOrbGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="7"/>
          </filter>
        </defs>
        {/* Backgrounds */}
        <rect width="1600" height="900" fill="url(#mt-bgMain)"/>
        <rect width="1600" height="900" fill="url(#mt-warmLeft)" className="mt-warm-glow"/>
        <rect width="1600" height="900" fill="url(#mt-coolRight)"/>
        {/* Grid */}
        <g className="grid-line">
          {[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500].map(x=>(
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="900"/>
          ))}
          {[100,200,300,400,500,600,700,800].map(y=>(
            <line key={`h${y}`} x1="0" y1={y} x2="1600" y2={y}/>
          ))}
        </g>
        <g className="grid-fine">
          {[150,250,350,450,550,650,750,850,950,1050,1150,1250,1350,1450].map(x=>(
            <line key={`fv${x}`} x1={x} y1="0" x2={x} y2="900"/>
          ))}
          {[150,250,350,450,550,650,750,850].map(y=>(
            <line key={`fh${y}`} x1="0" y1={y} x2="1600" y2={y}/>
          ))}
        </g>
        {/* Scan line */}
        <rect className="mt-scan" x="0" y="0" width="1600" height="1.5" fill="#3b82f6"/>
        {/* Chaos cluster - spaghetti wires */}
        <g fill="none" strokeLinecap="round">
          <path className="mt-sp-a" d="M120,200 C 280,150 380,320 460,260" stroke="#f97316" strokeWidth="1.4" strokeDasharray="10 6" opacity=".55"/>
          <path className="mt-sp-b" d="M460,260 C 360,400 180,340 80,420" stroke="#fb923c" strokeWidth="1.3" strokeDasharray="8 7" opacity=".50"/>
          <path className="mt-sp-c" d="M300,140 C 200,300 350,380 260,380" stroke="#f97316" strokeWidth="1.2" strokeDasharray="12 5" opacity=".50"/>
          <path className="mt-sp-d" d="M80,420 C 200,460 340,420 420,480" stroke="#fb923c" strokeWidth="1.4" strokeDasharray="9 6" opacity=".55"/>
          <path className="mt-sp-e" d="M260,380 C 300,500 200,560 150,580" stroke="#f97316" strokeWidth="1.3" strokeDasharray="7 8" opacity=".50"/>
          <path className="mt-sp-b" d="M120,200 C 80,360 160,480 150,580" stroke="#fb923c" strokeWidth="1.1" strokeDasharray="6 9" opacity=".40"/>
          <path className="mt-sp-c" d="M300,140 C 440,240 460,400 420,480" stroke="#f97316" strokeWidth="1.0" strokeDasharray="11 5" opacity=".40"/>
          <path className="mt-sp-a" d="M460,260 C 480,420 420,540 490,350" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="8 6" opacity=".45"/>
          <path className="mt-sp-d" d="M150,580 C 240,640 310,660 320,640" stroke="#f97316" strokeWidth="1.1" strokeDasharray="10 7" opacity=".45"/>
          <path className="mt-sp-e" d="M320,640 C 400,680 460,720 380,760" stroke="#fb923c" strokeWidth="1.0" strokeDasharray="7 8" opacity=".40"/>
          <path className="mt-sp-c" d="M260,380 C 340,300 420,200 300,140" stroke="#f97316" strokeWidth="0.8" strokeDasharray="5 10" opacity=".30"/>
          <path className="mt-sp-a" d="M80,420 C 180,320 260,220 120,200" stroke="#fb923c" strokeWidth="0.8" strokeDasharray="6 9" opacity=".28"/>
          <path className="mt-sp-b" d="M420,480 C 380,580 320,620 320,640" stroke="#f97316" strokeWidth="0.9" strokeDasharray="9 6" opacity=".32"/>
          <path className="mt-sp-d" d="M490,350 C 460,480 400,580 380,760" stroke="#fb923c" strokeWidth="0.8" strokeDasharray="8 8" opacity=".28"/>
          <path className="mt-sp-e" d="M150,580 C 300,520 420,340 460,260" stroke="#f97316" strokeWidth="0.7" strokeDasharray="5 10" opacity=".25"/>
          <path className="mt-sp-c" d="M200,720 C 280,660 340,600 420,480" stroke="#fb923c" strokeWidth="0.8" strokeDasharray="7 8" opacity=".28"/>
          <path className="mt-sp-a" d="M380,760 C 300,680 200,640 80,420" stroke="#f97316" strokeWidth="0.7" strokeDasharray="6 10" opacity=".22"/>
          <path className="mt-sp-b" d="M120,200 C 320,260 380,480 520,600" stroke="#fb923c" strokeWidth="0.9" strokeDasharray="10 6" opacity=".30"/>
          <path className="mt-sp-c" d="M490,350 C 300,300 160,400 80,420" stroke="#f97316" strokeWidth="0.8" strokeDasharray="8 7" opacity=".28"/>
        </g>
        {/* Chaos node dots */}
        <g>
          <circle className="mt-fc-a" cx="120" cy="200" r="7" fill="#f97316" opacity=".80"/>
          <circle cx="120" cy="200" r="18" fill="url(#mt-chaosHalo)" filter="url(#mt-fBlurSoft)" opacity=".5" className="mt-fc-a"/>
          <circle className="mt-fc-b" cx="300" cy="140" r="6" fill="#fb923c" opacity=".70"/>
          <circle cx="300" cy="140" r="15" fill="url(#mt-chaosHalo)" filter="url(#mt-fBlurSoft)" opacity=".4" className="mt-fc-b"/>
          <circle className="mt-fc-c" cx="460" cy="260" r="7" fill="#f97316" opacity=".75"/>
          <circle cx="460" cy="260" r="16" fill="url(#mt-chaosHalo)" filter="url(#mt-fBlurSoft)" opacity=".45" className="mt-fc-c"/>
          <circle className="mt-fc-a" cx="80" cy="420" r="6" fill="#fb923c" opacity=".70"/>
          <circle cx="80" cy="420" r="14" fill="url(#mt-chaosHalo)" filter="url(#mt-fBlurSoft)" opacity=".4" className="mt-fc-a"/>
          <circle className="mt-fc-b" cx="260" cy="380" r="8" fill="#f97316" opacity=".80"/>
          <circle cx="260" cy="380" r="20" fill="url(#mt-chaosHalo)" filter="url(#mt-fBlurMed)" opacity=".4" className="mt-fc-b"/>
          <circle className="mt-fc-c" cx="420" cy="480" r="7" fill="#fb923c" opacity=".75"/>
          <circle cx="420" cy="480" r="16" fill="url(#mt-chaosHalo)" filter="url(#mt-fBlurSoft)" opacity=".4" className="mt-fc-c"/>
          <circle className="mt-fc-a" cx="150" cy="580" r="6" fill="#f97316" opacity=".65"/>
          <circle className="mt-fc-b" cx="320" cy="640" r="7" fill="#fb923c" opacity=".70"/>
          <circle className="mt-fc-c" cx="490" cy="350" r="6" fill="#f97316" opacity=".65"/>
          <circle className="mt-fc-a" cx="200" cy="720" r="5" fill="#fb923c" opacity=".55"/>
          <circle className="mt-fc-b" cx="380" cy="760" r="5" fill="#f97316" opacity=".50"/>
          <circle className="mt-fc-c" cx="520" cy="600" r="5" fill="#fb923c" opacity=".55"/>
          <circle className="mt-fc-b" cx="190" cy="310" r="2.5" fill="#fb923c" opacity=".40"/>
          <circle className="mt-fc-c" cx="370" cy="220" r="2.5" fill="#f97316" opacity=".35"/>
          <circle className="mt-fc-a" cx="220" cy="500" r="3" fill="#fb923c" opacity=".38"/>
          <circle className="mt-fc-b" cx="410" cy="680" r="2.5" fill="#f97316" opacity=".32"/>
          <circle className="mt-fc-c" cx="100" cy="660" r="2" fill="#fb923c" opacity=".30"/>
          <circle className="mt-fc-a" cx="350" cy="440" r="2" fill="#f97316" opacity=".32"/>
        </g>
        {/* Convergence streams */}
        <path className="mt-stream-1 mt-breathe" d="M120,200 C 400,200 620,340 830,450" fill="none" stroke="#3b82f6" strokeWidth="6" opacity=".22" filter="url(#mt-fBlurSoft)"/>
        <path className="mt-stream-2 mt-breathe" d="M80,420 C 340,400 600,430 830,450" fill="none" stroke="#3b82f6" strokeWidth="6" opacity=".22" filter="url(#mt-fBlurSoft)"/>
        <path className="mt-stream-3 mt-breathe" d="M320,640 C 490,610 660,540 830,450" fill="none" stroke="#3b82f6" strokeWidth="6" opacity=".22" filter="url(#mt-fBlurSoft)"/>
        <path className="mt-stream-4 mt-breathe" d="M490,350 C 620,370 720,410 830,450" fill="none" stroke="#3b82f6" strokeWidth="5" opacity=".20" filter="url(#mt-fBlurSoft)"/>
        <path className="mt-stream-5 mt-breathe" d="M420,480 C 560,490 700,470 830,450" fill="none" stroke="#3b82f6" strokeWidth="5" opacity=".20" filter="url(#mt-fBlurSoft)"/>
        <path className="mt-stream-1" d="M120,200 C 400,200 620,340 830,450" fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round"/>
        <path className="mt-stream-1" d="M120,200 C 400,200 620,340 830,450" fill="none" stroke="#bfdbfe" strokeWidth="0.5" strokeLinecap="round" opacity=".7"/>
        <path className="mt-stream-2" d="M80,420 C 340,400 600,430 830,450" fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round"/>
        <path className="mt-stream-2" d="M80,420 C 340,400 600,430 830,450" fill="none" stroke="#bfdbfe" strokeWidth="0.5" strokeLinecap="round" opacity=".7"/>
        <path className="mt-stream-3" d="M320,640 C 490,610 660,540 830,450" fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round"/>
        <path className="mt-stream-3" d="M320,640 C 490,610 660,540 830,450" fill="none" stroke="#bfdbfe" strokeWidth="0.5" strokeLinecap="round" opacity=".7"/>
        <path className="mt-stream-4" d="M490,350 C 620,370 720,410 830,450" fill="none" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round"/>
        <path className="mt-stream-5" d="M420,480 C 560,490 700,470 830,450" fill="none" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round"/>
        {/* Output stream */}
        <path className="mt-stream-out mt-breathe" d="M830,450 L1130,450" fill="none" stroke="#3b82f6" strokeWidth="7" opacity=".28" filter="url(#mt-fBlurSoft)"/>
        <path className="mt-stream-out" d="M830,450 L1130,450" fill="none" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round"/>
        <path className="mt-stream-out" d="M830,450 L1130,450" fill="none" stroke="#bfdbfe" strokeWidth="0.7" strokeLinecap="round" opacity=".8"/>
        {/* Funnel node */}
        <g className="mt-funnel-node">
          <circle cx="830" cy="450" r="70" fill="url(#mt-blueHalo)" filter="url(#mt-fBlurHard)" opacity=".4"/>
          <circle className="mt-funnel-ripple" cx="830" cy="450" r="6" fill="none" stroke="#3b82f6" strokeWidth="1.3"/>
          <circle cx="830" cy="450" r="18" fill="none" stroke="#1d4ed8" strokeWidth="1.2"/>
          <circle cx="830" cy="450" r="11" fill="#0d1e30" stroke="#3b82f6" strokeWidth="1.4"/>
          <circle cx="830" cy="450" r="12" fill="#1d4ed8" filter="url(#mt-fBlurSoft)" opacity=".6"/>
          <circle cx="830" cy="450" r="5" fill="#e0f2fe"/>
          <circle cx="830" cy="450" r="2.5" fill="#ffffff"/>
          <line x1="830" y1="432" x2="830" y2="440" stroke="#60a5fa" strokeWidth="1" opacity=".6"/>
          <line x1="830" y1="460" x2="830" y2="468" stroke="#60a5fa" strokeWidth="1" opacity=".6"/>
          <line x1="812" y1="450" x2="820" y2="450" stroke="#60a5fa" strokeWidth="1" opacity=".6"/>
          <line x1="840" y1="450" x2="848" y2="450" stroke="#60a5fa" strokeWidth="1" opacity=".6"/>
        </g>
        {/* Dashboard */}
        <g className="mt-dash-group">
          <rect x="1100" y="220" width="440" height="460" rx="20" fill="url(#mt-dashHalo)" filter="url(#mt-fBlurHard)" opacity=".35"/>
          <rect x="1130" y="248" width="380" height="404" rx="10" fill="#080f1a" stroke="#1d4ed8" strokeWidth="1.5"/>
          <rect x="1130" y="248" width="380" height="42" rx="10" fill="#0d1e35"/>
          <rect x="1130" y="270" width="380" height="20" fill="#0d1e35"/>
          <rect x="1130" y="289" width="380" height="1.5" fill="#3b82f6" opacity=".5"/>
          <circle cx="1155" cy="269" r="5" fill="#1d4ed8" opacity=".7"/>
          <circle cx="1173" cy="269" r="5" fill="#1d4ed8" opacity=".5"/>
          <circle cx="1191" cy="269" r="5" fill="#1d4ed8" opacity=".35"/>
          <rect x="1210" y="264" width="90" height="8" rx="4" fill="#1e3a6a" opacity=".7"/>
        </g>
        {/* Dashboard rows */}
        <g className="mt-row-1">
          <rect x="1148" y="308" width="344" height="44" rx="5" fill="#0a1628" stroke="#1a3050" strokeWidth=".8"/>
          <circle cx="1168" cy="330" r="8" fill="#3b82f6" opacity=".85"/>
          <rect x="1186" y="323" width="100" height="8" rx="4" fill="#1e3a6a"/>
          <rect x="1186" y="337" width="68" height="6" rx="3" fill="#152236"/>
          <rect x="1330" y="323" width="50" height="8" rx="4" fill="#1e3a6a" opacity=".6"/>
          <rect x="1390" y="323" width="30" height="8" rx="4" fill="#1d4ed8" opacity=".5"/>
          <circle cx="1468" cy="330" r="6" fill="#22c55e" opacity=".75"/>
        </g>
        <g className="mt-row-2">
          <rect x="1148" y="362" width="344" height="44" rx="5" fill="#0a1628" stroke="#1a3050" strokeWidth=".8"/>
          <circle cx="1168" cy="384" r="8" fill="#3b82f6" opacity=".65"/>
          <rect x="1186" y="377" width="84" height="8" rx="4" fill="#1e3a6a"/>
          <rect x="1186" y="391" width="56" height="6" rx="3" fill="#152236"/>
          <rect x="1330" y="377" width="60" height="8" rx="4" fill="#1e3a6a" opacity=".6"/>
          <rect x="1400" y="377" width="28" height="8" rx="4" fill="#1d4ed8" opacity=".45"/>
          <circle cx="1468" cy="384" r="6" fill="#22c55e" opacity=".60"/>
        </g>
        <g className="mt-row-3">
          <rect x="1148" y="416" width="344" height="44" rx="5" fill="#0a1628" stroke="#1a3050" strokeWidth=".8"/>
          <circle cx="1168" cy="438" r="8" fill="#3b82f6" opacity=".75"/>
          <rect x="1186" y="431" width="112" height="8" rx="4" fill="#1e3a6a"/>
          <rect x="1186" y="445" width="76" height="6" rx="3" fill="#152236"/>
          <rect x="1330" y="431" width="44" height="8" rx="4" fill="#1e3a6a" opacity=".6"/>
          <rect x="1384" y="431" width="36" height="8" rx="4" fill="#1d4ed8" opacity=".5"/>
          <circle cx="1468" cy="438" r="6" fill="#f59e0b" opacity=".65"/>
        </g>
        <g className="mt-row-4">
          <rect x="1148" y="470" width="344" height="44" rx="5" fill="#0a1628" stroke="#1a3050" strokeWidth=".8"/>
          <circle cx="1168" cy="492" r="8" fill="#3b82f6" opacity=".55"/>
          <rect x="1186" y="485" width="92" height="8" rx="4" fill="#1e3a6a"/>
          <rect x="1186" y="499" width="62" height="6" rx="3" fill="#152236"/>
          <rect x="1330" y="485" width="55" height="8" rx="4" fill="#1e3a6a" opacity=".6"/>
          <rect x="1395" y="485" width="25" height="8" rx="4" fill="#1d4ed8" opacity=".4"/>
          <circle cx="1468" cy="492" r="6" fill="#22c55e" opacity=".55"/>
        </g>
        <g className="mt-row-5">
          <rect x="1148" y="524" width="344" height="44" rx="5" fill="#0a1628" stroke="#1a3050" strokeWidth=".8"/>
          <circle cx="1168" cy="546" r="8" fill="#3b82f6" opacity=".70"/>
          <rect x="1186" y="539" width="78" height="8" rx="4" fill="#1e3a6a"/>
          <rect x="1186" y="553" width="52" height="6" rx="3" fill="#152236"/>
          <rect x="1330" y="539" width="65" height="8" rx="4" fill="#1e3a6a" opacity=".6"/>
          <rect x="1405" y="539" width="22" height="8" rx="4" fill="#1d4ed8" opacity=".4"/>
          <circle cx="1468" cy="546" r="6" fill="#22c55e" opacity=".70"/>
          <rect x="1148" y="580" width="344" height="1.5" fill="#1e3a6a" opacity=".5"/>
          <rect x="1148" y="592" width="344" height="46" rx="5" fill="#0a1628" stroke="#1a3050" strokeWidth=".8"/>
          <polyline points="1165,620 1185,610 1205,618 1228,604 1248,614 1268,600 1288,608 1308,596 1328,606" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="1328" cy="596" r="3" fill="#60a5fa"/>
          <rect x="1360" y="604" width="18" height="28" rx="2" fill="#1d4ed8" opacity=".5"/>
          <rect x="1384" y="610" width="18" height="22" rx="2" fill="#3b82f6" opacity=".6"/>
          <rect x="1408" y="600" width="18" height="32" rx="2" fill="#3b82f6" opacity=".75"/>
          <rect x="1432" y="607" width="18" height="25" rx="2" fill="#60a5fa" opacity=".6"/>
          <rect x="1456" y="612" width="18" height="20" rx="2" fill="#1d4ed8" opacity=".45"/>
        </g>
        {/* Connection pip */}
        <g className="mt-row-1">
          <circle cx="1130" cy="450" r="5" fill="#60a5fa"/>
          <circle cx="1130" cy="450" r="5" fill="none" stroke="#3b82f6" strokeWidth="1" opacity=".8"/>
        </g>
        {/* Orb */}
        <circle r="16" fill="url(#mt-orbGrad)" filter="url(#mt-fOrbGlow)">
          <animateMotion path="M80,420 C 340,400 600,430 830,450 L1130,450" begin="1.6s" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
          <animate attributeName="opacity" values="0;0;0.38;0.38;0" keyTimes="0;0.001;0.06;0.94;1" dur="12s" begin="1.6s" repeatCount="indefinite"/>
        </circle>
        <circle r="4" fill="#e8f4ff">
          <animateMotion path="M80,420 C 340,400 600,430 830,450 L1130,450" begin="1.6s" dur="2.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.42 0 0.58 1"/>
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.001;0.05;0.95;1" dur="12s" begin="1.6s" repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  );
}
