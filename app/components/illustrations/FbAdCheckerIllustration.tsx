"use client";

export default function FbAdCheckerIllustration() {
  /* ── data for .map() loops ── */
  const gridMajorV = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500];
  const gridMajorH = [100,200,300,400,500,600,700,800];
  const gridMinorV = [150,250,350,450,550,650,750,850,950,1050,1150,1250,1350,1450];
  const gridMinorH = [150,250,350,450,550,650,750,850];

  /* spreadsheet data rows: y-offset, cell widths */
  const dataRows = [
    { y: 344, w: [56,60,48,52] },
    { y: 400, w: [48,52,60,44] },
    { y: 450, w: [60,44,52,56] },
    { y: 506, w: [52,56,44,60] },
    { y: 562, w: [44,48,56,48] },
  ];
  /* partial row 6 */
  const partialRow = { y: 600, w: [50,46,54,42] };

  /* flow line y positions */
  const flowYs = [344, 400, 450, 506, 562];
  // flowDelays handled in CSS classes fb-flow-1 through fb-flow-5

  /* output row configs */
  const outRows = [
    { i:1, type:'green' },
    { i:2, type:'green' },
    { i:3, type:'dim'   },
    { i:4, type:'orange' },
    { i:5, type:'green' },
    { i:6, type:'orange' },
    { i:7, type:'dim'   },
  ];
  // outDelays and outLineDelays handled in CSS classes fb-out-r1..r7 and fb-out-line-1..7

  /* circuit trace paths (12 around processor at 800,450) */
  const circuitTraces = [
    { d:"M832,426 Q870,410 900,400", cl:'fb-tk-a', da:'12 6' },
    { d:"M820,418 Q850,390 880,370", cl:'fb-tk-b', da:'8 10' },
    { d:"M810,416 Q820,380 830,350", cl:'fb-tk-a', da:'6 8' },
    { d:"M796,416 Q790,380 785,350", cl:'fb-tk-b', da:'10 6' },
    { d:"M784,418 Q760,390 740,370", cl:'fb-tk-a', da:'8 8' },
    { d:"M772,426 Q740,410 710,400", cl:'fb-tk-b', da:'12 8' },
    { d:"M772,474 Q740,490 710,500", cl:'fb-tk-a', da:'10 8' },
    { d:"M784,482 Q760,510 740,530", cl:'fb-tk-b', da:'6 10' },
    { d:"M796,484 Q790,520 785,550", cl:'fb-tk-a', da:'8 6' },
    { d:"M810,484 Q820,520 830,550", cl:'fb-tk-b', da:'12 6' },
    { d:"M820,482 Q850,510 880,530", cl:'fb-tk-a', da:'10 10' },
    { d:"M832,474 Q870,490 900,500", cl:'fb-tk-b', da:'8 8' },
  ];
  /* trace endpoint dots */
  const traceDots = [
    [900,400],[880,370],[830,350],[785,350],[740,370],[710,400],
    [710,500],[740,530],[785,550],[830,550],[880,530],[900,500],
  ];

  /* hex points for inner processor hex */
  const hexPoints = "800,422 824,436 824,464 800,478 776,464 776,436";

  /* cardinal ticks around processor */
  const cardinalTicks = [
    { x1:800, y1:380, x2:800, y2:392 },
    { x1:800, y1:508, x2:800, y2:520 },
    { x1:738, y1:450, x2:750, y2:450 },
    { x1:850, y1:450, x2:862, y2:450 },
  ];

  /* column divider x positions in the spreadsheet */
  const colDivXs = [176, 276, 356];
  /* header pill positions */
  const headerPills = [
    { x:108, w:50 }, { x:192, w:66 }, { x:292, w:46 }, { x:370, w:60 },
  ];

  /* fan-out line end y positions (7 output rows) */
  const fanOutYs = [326, 360, 394, 428, 462, 496, 530];

  return (
    <>
      <style jsx>{`
        @keyframes fb-draw { to { stroke-dashoffset: 0; } }
        @keyframes fb-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fb-line-breathe { from { opacity: 0.45; } to { opacity: 0.9; } }
        @keyframes fb-proc-pulse { 0% { r: 24; opacity: 0.55; } 80% { r: 62; opacity: 0; } 100% { r: 62; opacity: 0; } }
        @keyframes fb-orbit-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fb-orbit-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes fb-tick-fwd { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -80; } }
        @keyframes fb-tick-rev { from { stroke-dashoffset: 0; } to { stroke-dashoffset: 80; } }
        @keyframes fb-scan { 0% { transform: translateY(0); opacity: 0; } 4% { opacity: 0.04; } 96% { opacity: 0.02; } 100% { transform: translateY(900px); opacity: 0; } }
        @keyframes fb-flicker-a { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.85; } }

        .fb-grid-line { stroke: #1a2a3a; stroke-width: 0.5; }
        .fb-grid-fine { stroke: #141e28; stroke-width: 0.25; }
        .fb-sheet-body { opacity: 0; animation: fb-fade-in 0.4s ease-out 0.1s forwards; }
        .fb-sheet-rows { opacity: 0; animation: fb-fade-in 0.3s ease-out 0.4s forwards; }
        .fb-flow-1 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: fb-draw 0.5s ease-out 0.55s forwards; }
        .fb-flow-2 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: fb-draw 0.5s ease-out 0.65s forwards; }
        .fb-flow-3 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: fb-draw 0.5s ease-out 0.75s forwards; }
        .fb-flow-4 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: fb-draw 0.5s ease-out 0.85s forwards; }
        .fb-flow-5 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: fb-draw 0.5s ease-out 0.95s forwards; }
        .fb-breathe { animation: fb-line-breathe 3s ease-in-out 1.2s infinite alternate; }
        .fb-proc-node { opacity: 0; animation: fb-fade-in 0.5s ease-out 1.0s forwards; }
        .fb-proc-ring-1 { animation: fb-proc-pulse 2.8s ease-out 1.1s infinite; }
        .fb-proc-ring-2 { animation: fb-proc-pulse 2.8s ease-out 1.8s infinite; }
        .fb-orbit-cw { animation: fb-orbit-cw 14s linear infinite; transform-origin: 800px 450px; }
        .fb-orbit-ccw { animation: fb-orbit-ccw 20s linear infinite; transform-origin: 800px 450px; }
        .fb-tk-a { animation: fb-tick-fwd 4s linear infinite; }
        .fb-tk-b { animation: fb-tick-rev 5s linear infinite; }
        .fb-out-frame { opacity: 0; animation: fb-fade-in 0.4s ease-out 1.5s forwards; }
        .fb-out-r1 { opacity: 0; animation: fb-fade-in 0.25s ease-out 1.60s forwards; }
        .fb-out-r2 { opacity: 0; animation: fb-fade-in 0.25s ease-out 1.72s forwards; }
        .fb-out-r3 { opacity: 0; animation: fb-fade-in 0.25s ease-out 1.84s forwards; }
        .fb-out-r4 { opacity: 0; animation: fb-fade-in 0.25s ease-out 1.96s forwards; }
        .fb-out-r5 { opacity: 0; animation: fb-fade-in 0.25s ease-out 2.08s forwards; }
        .fb-out-r6 { opacity: 0; animation: fb-fade-in 0.25s ease-out 2.20s forwards; }
        .fb-out-r7 { opacity: 0; animation: fb-fade-in 0.25s ease-out 2.32s forwards; }
        .fb-out-line-1 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: fb-draw 0.4s ease-out 1.55s forwards; }
        .fb-out-line-2 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: fb-draw 0.4s ease-out 1.67s forwards; }
        .fb-out-line-3 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: fb-draw 0.4s ease-out 1.79s forwards; }
        .fb-out-line-4 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: fb-draw 0.4s ease-out 1.91s forwards; }
        .fb-out-line-5 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: fb-draw 0.4s ease-out 2.03s forwards; }
        .fb-out-line-6 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: fb-draw 0.4s ease-out 2.15s forwards; }
        .fb-out-line-7 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: fb-draw 0.4s ease-out 2.27s forwards; }
        .fb-scan { animation: fb-scan 10s linear 2s infinite; }
        .fb-flicker-a { animation: fb-flicker-a 3.2s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ display: 'block' }}>
        <defs>
          {/* ── gradients ── */}
          <radialGradient id="fb-bgMain" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#0c1520" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </radialGradient>
          <radialGradient id="fb-procGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="1" />
            <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fb-sheetHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fb-outHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fb-orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fb-rowGreen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="fb-rowRed" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="fb-rowDim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.02" />
          </linearGradient>

          {/* ── filters ── */}
          <filter id="fb-fBlurHard"><feGaussianBlur stdDeviation="22" /></filter>
          <filter id="fb-fBlurMed"><feGaussianBlur stdDeviation="10" /></filter>
          <filter id="fb-fBlurSoft"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="fb-fBlurXS"><feGaussianBlur stdDeviation="2" /></filter>
          <filter id="fb-fOrbGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* ── background ── */}
        <rect width="1600" height="900" fill="url(#fb-bgMain)" />

        {/* ── grid ── */}
        <g className="fb-grid-line">
          {gridMajorV.map(x => <line key={`gv${x}`} x1={x} y1="0" x2={x} y2="900" />)}
          {gridMajorH.map(y => <line key={`gh${y}`} x1="0" y1={y} x2="1600" y2={y} />)}
        </g>
        <g className="fb-grid-fine">
          {gridMinorV.map(x => <line key={`fv${x}`} x1={x} y1="0" x2={x} y2="900" />)}
          {gridMinorH.map(y => <line key={`fh${y}`} x1="0" y1={y} x2="1600" y2={y} />)}
        </g>

        {/* scan line */}
        <rect className="fb-scan" x="0" y="0" width="1600" height="1.5" fill="#3b82f6" />

        {/* ═══════════════════════════════════════════
            CSV / SPREADSHEET  (centered ~250, 450)
           ═══════════════════════════════════════════ */}
        {/* halo */}
        <circle cx="270" cy="450" r="170" fill="url(#fb-sheetHalo)" filter="url(#fb-fBlurHard)" opacity="0.45" className="fb-sheet-body" />

        {/* sheet body with dog-ear */}
        <g className="fb-sheet-body">
          <path d="M90,278 L412,278 L448,314 L448,622 L90,622 Z" fill="#080f1a" stroke="#1d4ed8" strokeWidth="1.4" strokeLinejoin="round" />
          {/* fold corner triangle */}
          <path d="M412,278 L412,314 L448,314" fill="#0d1e35" stroke="#1d4ed8" strokeWidth="1" strokeLinejoin="round" />
          {/* top glow edge */}
          <rect x="90" y="278" width="322" height="2" rx="1" fill="#3b82f6" opacity="0.55" />
          {/* corner dots */}
          <circle cx="104" cy="292" r="3" fill="#1d4ed8" opacity="0.6" />
          <circle cx="434" cy="328" r="3" fill="#1d4ed8" opacity="0.6" />
          <circle cx="104" cy="608" r="3" fill="#1d4ed8" opacity="0.4" />
          <circle cx="434" cy="608" r="3" fill="#1d4ed8" opacity="0.4" />
        </g>

        {/* header row */}
        <g className="fb-sheet-body">
          <rect x="90" y="278" width="358" height="38" fill="#0d1e35" />
          {/* header pills */}
          {headerPills.map((p, i) => (
            <rect key={`hp${i}`} x={p.x} y="290" width={p.w} height="12" rx="3" fill="#1d4ed8" opacity="0.35" />
          ))}
          {/* column dividers */}
          {colDivXs.map(x => (
            <line key={`cd${x}`} x1={x} y1="278" x2={x} y2="622" stroke="#1d4ed8" strokeWidth="0.5" opacity="0.2" />
          ))}
        </g>

        {/* data rows */}
        <g className="fb-sheet-rows">
          {dataRows.map((row, ri) => {
            const ry = row.y;
            const cellXs = [108, 192, 292, 370];
            return (
              <g key={`dr${ri}`}>
                <rect x="90" y={ry} width="358" height="46" fill={ri % 2 === 0 ? '#080f1a' : '#0a1322'} fillOpacity="0.6" />
                <line x1="90" y1={ry + 46} x2="448" y2={ry + 46} stroke="#1d4ed8" strokeWidth="0.3" opacity="0.15" />
                {row.w.map((w, ci) => (
                  <rect key={`dc${ri}${ci}`} x={cellXs[ci]} y={ry + 16} width={w} height="10" rx="2" fill="#1e3a5f" opacity="0.6" />
                ))}
              </g>
            );
          })}
          {/* partial row 6 */}
          <g>
            <rect x="90" y={partialRow.y} width="358" height="22" fill="#080f1a" fillOpacity="0.3" />
            {partialRow.w.map((w, ci) => (
              <rect key={`pr${ci}`} x={[108,192,292,370][ci]} y={partialRow.y + 6} width={w} height="10" rx="2" fill="#1e3a5f" opacity="0.3" />
            ))}
          </g>
        </g>

        {/* upload arrow above sheet */}
        <g className="fb-sheet-body" opacity="0.5">
          <line x1="270" y1="240" x2="270" y2="268" stroke="#60a5fa" strokeWidth="1.2" />
          <polyline points="260,252 270,240 280,252" fill="none" stroke="#60a5fa" strokeWidth="1.2" strokeLinejoin="round" />
          <line x1="250" y1="268" x2="290" y2="268" stroke="#60a5fa" strokeWidth="1" />
        </g>

        {/* ═══════════════════════════════════════════
            5 FLOW LINES  (sheet -> processor)
           ═══════════════════════════════════════════ */}
        {flowYs.map((fy, i) => {
          const cls = `fb-flow-${i + 1}`;
          const d = `M448,${fy} C 520,${fy} 620,450 740,450`;
          return (
            <g key={`fl${i}`}>
              {/* glow pass */}
              <path d={d} fill="none" stroke="#3b82f6" strokeWidth="5" opacity="0.2"
                filter="url(#fb-fBlurSoft)" className={`${cls} fb-breathe`} />
              {/* core line */}
              <path d={d} fill="none" stroke="#3b82f6" strokeWidth="1.5" className={cls} />
              {/* highlight */}
              <path d={d} fill="none" stroke="#93c5fd" strokeWidth="0.5" opacity="0.7" className={cls} />
              {/* entry pip */}
              <circle cx="448" cy={fy} r="3" fill="#3b82f6" opacity="0.8" className="fb-sheet-rows" />
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════
            PROCESSOR NODE  (800, 450)
           ═══════════════════════════════════════════ */}
        <g className="fb-proc-node">
          {/* halo circles */}
          <circle cx="800" cy="450" r="120" fill="url(#fb-procGlow)" filter="url(#fb-fBlurHard)" opacity="0.5" />
          <circle cx="800" cy="450" r="80" fill="url(#fb-procGlow)" filter="url(#fb-fBlurMed)" opacity="0.35" />

          {/* pulse rings */}
          <circle cx="800" cy="450" r="24" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.55" className="fb-proc-ring-1" />
          <circle cx="800" cy="450" r="24" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.55" className="fb-proc-ring-2" />

          {/* circuit traces */}
          {circuitTraces.map((t, i) => (
            <path key={`ct${i}`} d={t.d} fill="none" stroke="#1d4ed8" strokeWidth="1"
              strokeDasharray={t.da} opacity="0.5" className={t.cl} />
          ))}
          {/* trace endpoint dots */}
          {traceDots.map(([cx, cy], i) => (
            <circle key={`td${i}`} cx={cx} cy={cy} r="2.5" fill="#1d4ed8" opacity="0.6" />
          ))}

          {/* orbit rings */}
          <circle cx="800" cy="450" r="88" fill="none" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.25" className="fb-orbit-cw" strokeDasharray="8 12" />
          <circle cx="800" cy="450" r="72" fill="none" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.2" className="fb-orbit-ccw" strokeDasharray="6 10" />

          {/* node body */}
          <circle cx="800" cy="450" r="65" fill="#080f1a" stroke="#1d4ed8" strokeWidth="1.2" />
          <circle cx="800" cy="450" r="50" fill="none" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.4" />
          <circle cx="800" cy="450" r="28" fill="#0d1e35" stroke="#3b82f6" strokeWidth="1" />

          {/* inner hex */}
          <polygon points={hexPoints} fill="none" stroke="#60a5fa" strokeWidth="0.8" opacity="0.6" />

          {/* core dots */}
          <circle cx="800" cy="450" r="6" fill="#3b82f6" opacity="0.9" className="fb-flicker-a" />
          <circle cx="800" cy="450" r="3.5" fill="#93c5fd" opacity="0.95" />
          <circle cx="800" cy="450" r="1.8" fill="#ffffff" />

          {/* cardinal ticks */}
          {cardinalTicks.map((t, i) => (
            <line key={`ck${i}`} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#3b82f6" strokeWidth="1.2" opacity="0.5" />
          ))}
        </g>

        {/* ═══════════════════════════════════════════
            OUTPUT PANEL  (centered ~1320, 450)
           ═══════════════════════════════════════════ */}
        {/* halo */}
        <circle cx="1310" cy="450" r="170" fill="url(#fb-outHalo)" filter="url(#fb-fBlurHard)" opacity="0.4" className="fb-out-frame" />

        {/* panel frame */}
        <g className="fb-out-frame">
          <rect x="1090" y="278" width="440" height="344" rx="10" fill="#080f1a" stroke="#1d4ed8" strokeWidth="1.4" />
          {/* header bar */}
          <rect x="1090" y="278" width="440" height="28" rx="10" fill="#0d1e35" />
          <rect x="1090" y="296" width="440" height="10" fill="#0d1e35" />
          {/* header dots */}
          <circle cx="1110" cy="292" r="3.5" fill="#1d4ed8" opacity="0.6" />
          <circle cx="1124" cy="292" r="3.5" fill="#334155" opacity="0.4" />
          <circle cx="1138" cy="292" r="3.5" fill="#334155" opacity="0.4" />
          {/* top glow */}
          <rect x="1090" y="278" width="440" height="2" rx="1" fill="#3b82f6" opacity="0.5" />
        </g>

        {/* 7 fan-out lines from processor to output rows */}
        {fanOutYs.map((fy, i) => {
          const cls = `fb-out-line-${i + 1}`;
          const d = `M865,450 C 940,450 1020,${fy} 1090,${fy}`;
          return (
            <g key={`fol${i}`}>
              <path d={d} fill="none" stroke="#3b82f6" strokeWidth="4" opacity="0.15"
                filter="url(#fb-fBlurSoft)" className={cls} />
              <path d={d} fill="none" stroke="#3b82f6" strokeWidth="1.2" className={cls} />
              <path d={d} fill="none" stroke="#93c5fd" strokeWidth="0.4" opacity="0.6" className={cls} />
            </g>
          );
        })}

        {/* 7 output rows */}
        {outRows.map(({ i, type }, idx) => {
          const rowY = 278 + 28 + (idx * 44) + 4;   // after header, 44px per row, 4px gap
          const rowH = 38;
          const cls = `fb-out-r${i}`;

          const gradId = type === 'green' ? 'fb-rowGreen' : type === 'orange' ? 'fb-rowRed' : 'fb-rowDim';
          const dotColor = type === 'green' ? '#22c55e' : type === 'orange' ? '#f97316' : '#334155';
          const accentColor = type === 'green' ? '#22c55e' : type === 'orange' ? '#f97316' : '#334155';
          const dotInner = type === 'dim' ? '#1e293b' : (type === 'green' ? '#166534' : '#9a3412');

          return (
            <g key={`or${i}`} className={cls}>
              {/* row background */}
              <rect x="1094" y={rowY} width="432" height={rowH} rx="4" fill={`url(#${gradId})`} />
              {/* data bars */}
              <rect x="1120" y={rowY + 10} width={60 + (idx % 3) * 12} height="8" rx="2" fill="#1e3a5f" opacity="0.5" />
              <rect x="1120" y={rowY + 22} width={40 + (idx % 4) * 8} height="6" rx="2" fill="#1e3a5f" opacity="0.3" />
              <rect x={1220 + (idx % 3) * 10} y={rowY + 10} width={50 + (idx % 2) * 14} height="8" rx="2" fill="#1e3a5f" opacity="0.45" />
              {/* status dot */}
              <circle cx="1496" cy={rowY + rowH / 2} r="7" fill={dotColor} opacity="0.85" />
              <circle cx="1496" cy={rowY + rowH / 2} r="3.5" fill={dotInner} opacity="0.8" />
              {/* left accent bar */}
              <rect x="1094" y={rowY + 4} width="3" height={rowH - 8} rx="1.5" fill={accentColor} opacity="0.6" />
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════
            TRAVELING ORB
           ═══════════════════════════════════════════ */}
        {/* glow orb */}
        <circle r="16" fill="url(#fb-orbGrad)" filter="url(#fb-fOrbGlow)">
          <animateMotion
            path="M448,450 L740,450 L865,450 C 940,450 1000,450 1090,450"
            begin="1.8s" dur="2.5s" repeatCount="indefinite" fill="freeze"
          />
          <animate attributeName="opacity" values="0;0;0.38;0.38;0" dur="12s" repeatCount="indefinite" begin="1.8s" />
        </circle>
        {/* core orb */}
        <circle r="4" fill="#ffffff">
          <animateMotion
            path="M448,450 L740,450 L865,450 C 940,450 1000,450 1090,450"
            begin="1.8s" dur="2.5s" repeatCount="indefinite" fill="freeze"
          />
          <animate attributeName="opacity" values="0;0;1;1;0" dur="12s" repeatCount="indefinite" begin="1.8s" />
        </circle>
      </svg>
    </>
  );
}
