"use client";

export default function ChurchIllustration() {
  /* ── data arrays for .map() ── */
  const hGridLines = Array.from({ length: 19 }, (_, i) => (i + 1) * 50);
  const vGridLines = Array.from({ length: 33 }, (_, i) => (i + 1) * 50);
  const hFineLines = Array.from({ length: 37 }, (_, i) => (i + 1) * 25).filter(v => v % 50 !== 0);
  const vFineLines = Array.from({ length: 65 }, (_, i) => (i + 1) * 25).filter(v => v % 50 !== 0);

  const connections: [number, number, number, number, string][] = [
    /* c0  steeple top    */ [800, 95, 800, 195, "ch-c0"],
    /* c1  steeple mid    */ [800, 195, 800, 278, "ch-c1"],
    /* c2  roof left      */ [800, 278, 628, 348, "ch-c2"],
    /* c3  roof right     */ [800, 278, 972, 348, "ch-c3"],
    /* c4  eave left      */ [628, 348, 484, 372, "ch-c4"],
    /* c5  eave right     */ [972, 348, 1116, 372, "ch-c5"],
    /* c6  wall UL        */ [484, 372, 484, 518, "ch-c6"],
    /* c7  wall UR        */ [1116, 372, 1116, 518, "ch-c7"],
    /* c8  wall LL        */ [484, 518, 484, 652, "ch-c8"],
    /* c9  wall LR        */ [1116, 518, 1116, 652, "ch-c9"],
    /* c10 found L        */ [484, 652, 378, 658, "ch-c10"],
    /* c11 found R        */ [1116, 652, 1222, 658, "ch-c11"],
    /* c12 cross L        */ [752, 195, 800, 195, "ch-c12"],
    /* c13 cross R        */ [848, 195, 800, 195, "ch-c13"],
    /* c14 hub→door       */ [800, 492, 800, 614, "ch-c14"],
    /* c15 hub→winL       */ [800, 492, 634, 492, "ch-c15"],
    /* c16 hub→winR       */ [800, 492, 966, 492, "ch-c16"],
    /* c17 hub→eaveL      */ [800, 492, 484, 372, "ch-c17"],
    /* c18 hub→eaveR      */ [800, 492, 1116, 372, "ch-c18"],
    /* c19 hub→roofL      */ [800, 492, 628, 348, "ch-c19"],
    /* c20 hub→roofR      */ [800, 492, 972, 348, "ch-c20"],
    /* c21 hub→peak       */ [800, 492, 800, 278, "ch-c21"],
    /* c22 hub→wallML     */ [800, 492, 484, 518, "ch-c22"],
    /* c23 hub→wallMR     */ [800, 492, 1116, 518, "ch-c23"],
    /* c24 hub→baseL      */ [800, 492, 484, 652, "ch-c24"],
    /* c25 hub→baseR      */ [800, 492, 1116, 652, "ch-c25"],
  ];

  const nodes: { id: string; cx: number; cy: number; cls: string; grad: string; r: number; rGlow: number; ringCls?: string }[] = [
    { id: "n0",  cx: 800,  cy: 492, cls: "ch-n0",  grad: "ch-hubGlow",    r: 5,   rGlow: 18, ringCls: "ch-ring-hub" },
    { id: "n1",  cx: 800,  cy: 95,  cls: "ch-n1",  grad: "ch-tealGlow",   r: 4,   rGlow: 14, ringCls: "ch-ring-tip" },
    { id: "n2",  cx: 800,  cy: 195, cls: "ch-n2",  grad: "ch-activeGlow", r: 3.5, rGlow: 12 },
    { id: "n3",  cx: 800,  cy: 278, cls: "ch-n3",  grad: "ch-activeGlow", r: 3.5, rGlow: 12 },
    { id: "n4",  cx: 752,  cy: 195, cls: "ch-n4",  grad: "ch-dimGlow",    r: 2.5, rGlow: 8 },
    { id: "n5",  cx: 848,  cy: 195, cls: "ch-n5",  grad: "ch-dimGlow",    r: 2.5, rGlow: 8 },
    { id: "n6",  cx: 628,  cy: 348, cls: "ch-n6",  grad: "ch-tealGlow",   r: 3,   rGlow: 10 },
    { id: "n7",  cx: 972,  cy: 348, cls: "ch-n7",  grad: "ch-tealGlow",   r: 3,   rGlow: 10 },
    { id: "n8",  cx: 484,  cy: 372, cls: "ch-n8",  grad: "ch-activeGlow", r: 3.5, rGlow: 12, ringCls: "ch-ring-eaveL" },
    { id: "n9",  cx: 1116, cy: 372, cls: "ch-n9",  grad: "ch-activeGlow", r: 3.5, rGlow: 12, ringCls: "ch-ring-eaveR" },
    { id: "n10", cx: 484,  cy: 518, cls: "ch-n10", grad: "ch-activeGlow", r: 3,   rGlow: 10 },
    { id: "n11", cx: 1116, cy: 518, cls: "ch-n11", grad: "ch-activeGlow", r: 3,   rGlow: 10 },
    { id: "n12", cx: 484,  cy: 652, cls: "ch-n12", grad: "ch-tealGlow",   r: 3.5, rGlow: 12, ringCls: "ch-ring-baseL" },
    { id: "n13", cx: 1116, cy: 652, cls: "ch-n13", grad: "ch-tealGlow",   r: 3.5, rGlow: 12, ringCls: "ch-ring-baseR" },
    { id: "n14", cx: 378,  cy: 658, cls: "ch-n14", grad: "ch-dimGlow",    r: 2.5, rGlow: 8 },
    { id: "n15", cx: 1222, cy: 658, cls: "ch-n15", grad: "ch-dimGlow",    r: 2.5, rGlow: 8 },
    { id: "n16", cx: 634,  cy: 492, cls: "ch-n16", grad: "ch-activeGlow", r: 3,   rGlow: 10 },
    { id: "n17", cx: 966,  cy: 492, cls: "ch-n17", grad: "ch-activeGlow", r: 3,   rGlow: 10 },
    { id: "n18", cx: 800,  cy: 614, cls: "ch-n18", grad: "ch-tealGlow",   r: 3,   rGlow: 10 },
  ];

  return (
    <>
      <style jsx>{`
        /* ── grid ── */
        .ch-grid-line { stroke: #151f28; stroke-width: 0.4; }
        .ch-grid-fine { stroke: #111820; stroke-width: 0.2; }

        /* ── keyframes ── */
        @keyframes ch-draw { to { stroke-dashoffset: 0; } }
        @keyframes ch-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ch-node-ring {
          0%   { r: 0;  opacity: .55; }
          80%  { r: 24; opacity: 0;   }
          100% { r: 24; opacity: 0;   }
        }
        @keyframes ch-shimmer   { from { opacity: .32; } to { opacity: .68; } }
        @keyframes ch-shimmer-b { from { opacity: .22; } to { opacity: .50; } }
        @keyframes ch-shimmer-c { from { opacity: .18; } to { opacity: .40; } }
        @keyframes ch-scan {
          0%   { transform: translateY(0);     opacity: 0;     }
          4%   { opacity: 0.04; }
          96%  { opacity: 0.02; }
          100% { transform: translateY(900px); opacity: 0;     }
        }
        @keyframes ch-orb-vis {
          0%, 1%   { opacity: 0;    }
          5%, 90%  { opacity: 0.38; }
          100%     { opacity: 0;    }
        }
        @keyframes ch-orb-vis-core {
          0%, 1%   { opacity: 0; }
          5%, 90%  { opacity: 1; }
          100%     { opacity: 0; }
        }

        /* ── connections (outline) ── */
        .ch-c0  { stroke-dasharray: 102; stroke-dashoffset: 102; animation: ch-draw .5s  ease-out .08s forwards; }
        .ch-c1  { stroke-dasharray: 84;  stroke-dashoffset: 84;  animation: ch-draw .5s  ease-out .18s forwards; }
        .ch-c2,
        .ch-c3  { stroke-dasharray: 390; stroke-dashoffset: 390; animation: ch-draw .7s  ease-out .28s forwards; }
        .ch-c4,
        .ch-c5  { stroke-dasharray: 162; stroke-dashoffset: 162; animation: ch-draw .5s  ease-out .62s forwards; }
        .ch-c6,
        .ch-c7  { stroke-dasharray: 148; stroke-dashoffset: 148; animation: ch-draw .45s ease-out .82s forwards; }
        .ch-c8,
        .ch-c9  { stroke-dasharray: 136; stroke-dashoffset: 136; animation: ch-draw .45s ease-out 1.0s forwards; }
        .ch-c10,
        .ch-c11 { stroke-dasharray: 108; stroke-dashoffset: 108; animation: ch-draw .4s  ease-out 1.18s forwards; }
        .ch-c12,
        .ch-c13 { stroke-dasharray: 50;  stroke-dashoffset: 50;  animation: ch-draw .35s ease-out .22s forwards; }
        .ch-c14 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: ch-draw .8s  ease-out 1.35s forwards; }
        .ch-c15,
        .ch-c16 { stroke-dasharray: 305; stroke-dashoffset: 305; animation: ch-draw .7s  ease-out 1.42s forwards; }
        .ch-c17,
        .ch-c18 { stroke-dasharray: 405; stroke-dashoffset: 405; animation: ch-draw .8s  ease-out 1.50s forwards; }
        .ch-c19,
        .ch-c20 { stroke-dasharray: 170; stroke-dashoffset: 170; animation: ch-draw .5s  ease-out 1.60s forwards; }
        .ch-c21 { stroke-dasharray: 125; stroke-dashoffset: 125; animation: ch-draw .4s  ease-out 1.68s forwards; }
        .ch-c22,
        .ch-c23 { stroke-dasharray: 212; stroke-dashoffset: 212; animation: ch-draw .55s ease-out 1.76s forwards; }
        .ch-c24,
        .ch-c25 { stroke-dasharray: 344; stroke-dashoffset: 344; animation: ch-draw .65s ease-out 1.84s forwards; }

        /* ── nodes (fade in) ── */
        .ch-n0  { opacity: 0; animation: ch-fade-in .35s ease-out 1.40s forwards; }
        .ch-n1  { opacity: 0; animation: ch-fade-in .30s ease-out  .10s forwards; }
        .ch-n2  { opacity: 0; animation: ch-fade-in .30s ease-out  .20s forwards; }
        .ch-n3  { opacity: 0; animation: ch-fade-in .30s ease-out  .30s forwards; }
        .ch-n4  { opacity: 0; animation: ch-fade-in .25s ease-out  .24s forwards; }
        .ch-n5  { opacity: 0; animation: ch-fade-in .25s ease-out  .24s forwards; }
        .ch-n6  { opacity: 0; animation: ch-fade-in .30s ease-out  .64s forwards; }
        .ch-n7  { opacity: 0; animation: ch-fade-in .30s ease-out  .64s forwards; }
        .ch-n8  { opacity: 0; animation: ch-fade-in .30s ease-out  .84s forwards; }
        .ch-n9  { opacity: 0; animation: ch-fade-in .30s ease-out  .84s forwards; }
        .ch-n10 { opacity: 0; animation: ch-fade-in .30s ease-out 1.02s forwards; }
        .ch-n11 { opacity: 0; animation: ch-fade-in .30s ease-out 1.02s forwards; }
        .ch-n12 { opacity: 0; animation: ch-fade-in .30s ease-out 1.20s forwards; }
        .ch-n13 { opacity: 0; animation: ch-fade-in .30s ease-out 1.20s forwards; }
        .ch-n14 { opacity: 0; animation: ch-fade-in .25s ease-out 1.20s forwards; }
        .ch-n15 { opacity: 0; animation: ch-fade-in .25s ease-out 1.20s forwards; }
        .ch-n16 { opacity: 0; animation: ch-fade-in .30s ease-out 1.44s forwards; }
        .ch-n17 { opacity: 0; animation: ch-fade-in .30s ease-out 1.44s forwards; }
        .ch-n18 { opacity: 0; animation: ch-fade-in .30s ease-out 1.37s forwards; }

        /* ── pulse rings ── */
        .ch-ring-hub   { animation: ch-node-ring 3.2s ease-out 1.6s infinite; }
        .ch-ring-tip   { animation: ch-node-ring 4.0s ease-out 2.2s infinite; }
        .ch-ring-eaveL { animation: ch-node-ring 4.4s ease-out 2.8s infinite; }
        .ch-ring-eaveR { animation: ch-node-ring 4.4s ease-out 3.4s infinite; }
        .ch-ring-baseL { animation: ch-node-ring 3.8s ease-out 3.0s infinite; }
        .ch-ring-baseR { animation: ch-node-ring 3.8s ease-out 3.7s infinite; }

        /* ── shimmer ── */
        .ch-shim-a { animation: ch-shimmer   3.8s ease-in-out infinite alternate; }
        .ch-shim-b { animation: ch-shimmer-b 4.8s ease-in-out .8s infinite alternate; }
        .ch-shim-c { animation: ch-shimmer-c 5.2s ease-in-out 1.4s infinite alternate; }

        /* ── scan line ── */
        .ch-scan { animation: ch-scan 12s linear 2s infinite; }

        /* ── orb ── */
        .ch-orb-glow { animation: ch-orb-vis      12s ease-in-out 2.0s infinite; }
        .ch-orb-core { animation: ch-orb-vis-core  12s ease-in-out 2.0s infinite; }
      `}</style>

      <svg
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ display: "block" }}
      >
        <defs>
          {/* ── Gradients ── */}
          <linearGradient id="ch-bgMain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0c1922" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </linearGradient>
          <radialGradient id="ch-bgWarm" cx="50%" cy="48%" r="55%">
            <stop offset="0%" stopColor="#0f1e2a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0f1e2a" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ch-hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#67e8f9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ch-activeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="1" />
            <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ch-tealGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#99f6e4" stopOpacity="1" />
            <stop offset="40%" stopColor="#2dd4bf" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ch-dimGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ch-orbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>

          {/* ── Filters ── */}
          <filter id="ch-fBlurHard"><feGaussianBlur stdDeviation="24" /></filter>
          <filter id="ch-fBlurMed"><feGaussianBlur stdDeviation="12" /></filter>
          <filter id="ch-fBlurSoft"><feGaussianBlur stdDeviation="5" /></filter>
          <filter id="ch-fBlurXS"><feGaussianBlur stdDeviation="2.5" /></filter>
          <filter id="ch-fOrbGlow"><feGaussianBlur stdDeviation="8" /></filter>
        </defs>

        {/* ══════════ 1. BACKGROUND ══════════ */}
        <rect width="1600" height="900" fill="url(#ch-bgMain)" />
        <rect width="1600" height="900" fill="url(#ch-bgWarm)" />

        {/* ══════════ 2. GRID ══════════ */}
        <g>
          {hGridLines.map(y => (
            <line key={`gh${y}`} x1="0" y1={y} x2="1600" y2={y} className="ch-grid-line" />
          ))}
          {vGridLines.map(x => (
            <line key={`gv${x}`} x1={x} y1="0" x2={x} y2="900" className="ch-grid-line" />
          ))}
          {hFineLines.map(y => (
            <line key={`gfh${y}`} x1="0" y1={y} x2="1600" y2={y} className="ch-grid-fine" />
          ))}
          {vFineLines.map(x => (
            <line key={`gfv${x}`} x1={x} y1="0" x2={x} y2="900" className="ch-grid-fine" />
          ))}
        </g>

        {/* ══════════ 3. SCAN LINE ══════════ */}
        <rect className="ch-scan" x="0" y="0" width="1600" height="2" fill="#38bdf8" opacity="0" />

        {/* ══════════ 4. CONNECTIONS ══════════ */}
        {/* Glow pass (blurred, dimmer) */}
        <g filter="url(#ch-fBlurSoft)" opacity="0.45">
          {connections.map(([x1, y1, x2, y2, cls]) => (
            <line
              key={`glow-${cls}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              className={`${cls} ch-shim-b`}
              stroke="#38bdf8"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </g>

        {/* Core pass (crisp) */}
        <g>
          {connections.map(([x1, y1, x2, y2, cls]) => (
            <line
              key={`core-${cls}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              className={`${cls} ch-shim-a`}
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </g>

        {/* Shimmer-C pass (extra soft glow on outline only c0-c13) */}
        <g filter="url(#ch-fBlurMed)" opacity="0.22">
          {connections.slice(0, 14).map(([x1, y1, x2, y2, cls]) => (
            <line
              key={`shimc-${cls}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              className={`${cls} ch-shim-c`}
              stroke="#67e8f9"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </g>

        {/* ══════════ 5. NODES ══════════ */}
        {nodes.map((n) => (
          <g key={n.id} className={n.cls}>
            {/* Outer glow */}
            <circle
              cx={n.cx} cy={n.cy} r={n.rGlow}
              fill={`url(#${n.grad})`}
              filter="url(#ch-fBlurXS)"
              opacity="0.6"
            />
            {/* Mid glow */}
            <circle
              cx={n.cx} cy={n.cy} r={n.rGlow * 0.7}
              fill={`url(#${n.grad})`}
              opacity="0.5"
            />
            {/* Core dot */}
            <circle
              cx={n.cx} cy={n.cy} r={n.r}
              fill={n.id === "n0" ? "#e0f7ff" : n.grad.includes("teal") ? "#99f6e4" : n.grad.includes("dim") ? "#60a5fa" : "#93c5fd"}
              opacity="0.95"
            />
            {/* Pulse ring */}
            {n.ringCls && (
              <circle
                cx={n.cx} cy={n.cy} r="0"
                fill="none"
                stroke={n.grad.includes("hub") ? "#67e8f9" : n.grad.includes("teal") ? "#2dd4bf" : "#3b82f6"}
                strokeWidth="1.5"
                className={n.ringCls}
                opacity="0"
              />
            )}
          </g>
        ))}

        {/* Hub extra glow layers (n0 is brightest) */}
        <g className="ch-n0">
          <circle cx="800" cy="492" r="28" fill="url(#ch-hubGlow)" filter="url(#ch-fBlurHard)" opacity="0.3" />
          <circle cx="800" cy="492" r="10" fill="#ffffff" opacity="0.7" filter="url(#ch-fBlurXS)" />
        </g>

        {/* ══════════ 6. ORB ══════════ */}
        <g>
          {/* Glow circle */}
          <circle r="14" fill="url(#ch-orbGrad)" filter="url(#ch-fOrbGlow)" className="ch-orb-glow" opacity="0">
            <animateMotion
              path="M484,652 C620,560 710,525 800,492 L800,278 L800,95"
              begin="2.0s"
              dur="2.5s"
              repeatCount="indefinite"
              fill="freeze"
            />
          </circle>
          {/* Core circle */}
          <circle r="3.5" fill="#e0f7ff" className="ch-orb-core" opacity="0">
            <animateMotion
              path="M484,652 C620,560 710,525 800,492 L800,278 L800,95"
              begin="2.0s"
              dur="2.5s"
              repeatCount="indefinite"
              fill="freeze"
            />
          </circle>
        </g>
      </svg>
    </>
  );
}
