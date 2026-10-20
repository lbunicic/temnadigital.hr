// Animated, abstract app screens for NDA projects: they show what the app does without client details.
// Monochrome (currentColor + opacity) so they follow the theme. SMIL animations are paused/played by
// useSvgGraphics (class "project-graphic"), so the first frame doubles as the static/reduced-motion state.
// Phone scenes use a 160×340 viewBox; tablet and browser scenes use wider canvases.

const EASE = '.45 0 .55 1';

interface SceneProps {
  children: React.ReactNode;
  width: number;
  height: number;
  label: string;
}

function Scene({ children, width, height, label }: SceneProps) {
  return (
    <svg
      className="project-graphic screen-scene"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMin slice"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

function StatusBar({ width = 160 }: { width?: number }) {
  return (
    <g fill="currentColor">
      <rect x="14" y="9" width="18" height="5" rx="2.5" opacity="0.5" />
      <rect x={width - 34} y="10" width="3" height="4" rx="1" opacity="0.5" />
      <rect x={width - 29} y="9" width="3" height="5" rx="1" opacity="0.5" />
      <rect x={width - 22} y="9" width="9" height="5" rx="1.5" opacity="0.5" />
    </g>
  );
}

function Lines({ x, y, widths, gap = 7 }: { x: number; y: number; widths: number[]; gap?: number }) {
  return (
    <g fill="currentColor">
      {widths.map((width, i) => (
        <rect key={i} x={x} y={y + i * gap} width={width} height={i === 0 ? 4 : 3} rx="1.5" opacity={i === 0 ? 0.55 : 0.2} />
      ))}
    </g>
  );
}

/* TruthSeeker: premises flow through an inference rule into a live-evaluated conclusion */
export function TruthSeekerScene() {
  return (
    <Scene width={320} height={178} label="Visual logic canvas with premises, an inference rule, and a conclusion">
      <rect width="54" height="178" fill="currentColor" fillOpacity="0.035" />
      <line x1="54" y1="0" x2="54" y2="178" stroke="currentColor" strokeOpacity="0.12" />
      <rect x="12" y="13" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.58" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(11 ${38 + i * 25})`}>
          <rect width="32" height="18" rx="5" fill="currentColor" fillOpacity={i === 1 ? 0.12 : 0.045} stroke="currentColor" strokeOpacity={i === 1 ? 0.35 : 0.08} />
          <circle cx="9" cy="9" r="3" fill="currentColor" opacity={i === 1 ? 0.75 : 0.25} />
          <rect x="16" y="7" width={10 - (i % 2) * 3} height="3" rx="1.5" fill="currentColor" opacity="0.35" />
        </g>
      ))}
      <rect x="11" y="154" width="32" height="3" rx="1.5" fill="currentColor" opacity="0.15" />

      <g stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" fill="none">
        <path d="M126 51 C151 51 151 75 174 75" />
        <path d="M126 119 C151 119 151 85 174 85" />
        <path d="M214 80 C239 80 239 80 258 80" />
      </g>

      {[
        { path: 'M126 51 C151 51 151 75 174 75', begin: '0s' },
        { path: 'M126 119 C151 119 151 85 174 85', begin: '.65s' },
        { path: 'M214 80 C239 80 239 80 258 80', begin: '1.3s' },
      ].map(({ path, begin }) => (
        <circle key={path} r="2.4" fill="currentColor" opacity="0.85">
          <animateMotion path={path} dur="2.4s" begin={begin} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin={begin} repeatCount="indefinite" />
        </circle>
      ))}

      {[
        { x: 72, y: 34, badge: 'P', title: 38, value: 'TRUE' },
        { x: 72, y: 102, badge: 'Q', title: 46, value: 'TRUE' },
      ].map((node, i) => (
        <g key={node.badge} transform={`translate(${node.x} ${node.y})`}>
          <rect width="54" height="34" rx="7" fill="var(--bg-card)" stroke="currentColor" strokeOpacity="0.28" />
          <rect width="16" height="34" rx="7" fill="currentColor" fillOpacity="0.1" />
          <text x="8" y="21" fill="currentColor" fontSize="8" fontWeight="700" textAnchor="middle">{node.badge}</text>
          <rect x="23" y="9" width={node.title} height="3" rx="1.5" fill="currentColor" opacity="0.45" />
          <rect x="23" y="19" width="19" height="3" rx="1.5" fill="currentColor" opacity="0.16" />
          <circle cx="47" cy="27" r="2.5" fill="currentColor" opacity="0.62">
            <animate attributeName="opacity" values=".3;.9;.3" dur="2.4s" begin={`${i * 0.65}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      <g transform="translate(174 60)">
        <rect width="40" height="40" rx="9" fill="var(--bg-card)" stroke="currentColor" strokeOpacity="0.4" />
        <text x="20" y="22" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle">∧</text>
        <rect x="12" y="29" width="16" height="2.5" rx="1.25" fill="currentColor" opacity="0.22" />
        <animate attributeName="opacity" values=".7;1;.7" dur="2.4s" repeatCount="indefinite" />
      </g>

      <g transform="translate(258 60)">
        <rect width="50" height="40" rx="9" fill="currentColor" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.62" />
        <text x="9" y="23" fill="currentColor" fontSize="8" fontWeight="700" textAnchor="middle">C</text>
        <rect x="18" y="10" width="23" height="3" rx="1.5" fill="currentColor" opacity="0.55" />
        <rect x="18" y="20" width="17" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
        <path d="M37 30 l3 3 l6 -7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
          <animate attributeName="stroke-dashoffset" values="100;100;0;0" keyTimes="0;.5;.62;1" dur="2.4s" repeatCount="indefinite" />
        </path>
      </g>

      <g transform="translate(70 153)">
        <rect width="238" height="16" rx="5" fill="currentColor" fillOpacity="0.035" stroke="currentColor" strokeOpacity="0.08" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${8 + i * 66} 5)`}>
            <circle cx="3" cy="3" r="3" fill="currentColor" opacity={i === 0 ? 0.62 : 0.18} />
            <rect x="10" y="1.5" width={32 + i * 4} height="3" rx="1.5" fill="currentColor" opacity={i === 0 ? 0.42 : 0.16} />
          </g>
        ))}
      </g>
    </Scene>
  );
}

/* Mindfulness: breathing wireframe sphere (SceneKit nod) with inhale/exhale cues and session progress */
export function MindfulnessScene() {
  const breathe = { dur: '8s', repeatCount: 'indefinite', calcMode: 'spline', keyTimes: '0;.5;1', keySplines: `${EASE};${EASE}` };
  return (
    <Scene width={160} height={340} label="Breathing exercise with an animated 3D sphere">
      <StatusBar />
      <Lines x={20} y={34} widths={[60, 88]} gap={10} />

      <g transform="translate(80 150)">
        <circle r="52" fill="currentColor" opacity="0.05">
          <animate attributeName="r" values="50;66;50" {...breathe} />
        </circle>
        <circle r="58" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
        <circle
          r="58"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="22 100"
          transform="rotate(-90)"
        >
          <animate attributeName="stroke-dasharray" values="22 100;100 0" dur="16s" repeatCount="indefinite" />
        </circle>

        <g>
          <animateTransform attributeName="transform" type="scale" values="0.82;1;0.82" {...breathe} />
          <circle r="34" stroke="currentColor" strokeOpacity="0.75" />
          <ellipse rx="34" ry="9" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
          <ellipse cy="-17" rx="29.5" ry="7.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />
          <ellipse cy="17" rx="29.5" ry="7.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.8" />
          {[0, 1.5, 3, 4.5].map((offset) => (
            <ellipse key={offset} rx="34" ry="34" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8">
              <animate attributeName="rx" values="34;0;34" dur="6s" begin={`-${offset}s`} repeatCount="indefinite" />
            </ellipse>
          ))}
        </g>

        <g fill="currentColor">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite" />
          <circle cy="-46" r="2" opacity="0.8" />
          <circle cx="40" cy="23" r="1.4" opacity="0.5" />
          <circle cx="-39" cy="25" r="1.2" opacity="0.4" />
        </g>
      </g>

      <g fill="currentColor" fontSize="12" fontWeight="600" textAnchor="middle" letterSpacing="0.04em">
        <text x="80" y="240">
          Inhale
          <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;.45;.5;.95;1" dur="8s" repeatCount="indefinite" />
        </text>
        <text x="80" y="240" opacity="0">
          Exhale
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.45;.5;.95;1" dur="8s" repeatCount="indefinite" />
        </text>
      </g>
      <rect x="56" y="250" width="48" height="3" rx="1.5" fill="currentColor" opacity="0.2" />

      <rect x="16" y="272" width="128" height="46" rx="10" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
      <circle cx="35" cy="295" r="10" stroke="currentColor" strokeOpacity="0.7" />
      <path d="M32 290 L40 295 L32 300 Z" fill="currentColor" opacity="0.8" />
      <Lines x={52} y={286} widths={[58, 38]} gap={9} />
      <rect x="52" y="305" width="80" height="2" rx="1" fill="currentColor" opacity="0.15" />
      <rect x="52" y="305" width="22" height="2" rx="1" fill="currentColor" opacity="0.75">
        <animate attributeName="width" values="22;80" dur="16s" repeatCount="indefinite" />
      </rect>
    </Scene>
  );
}

/* BLE SDK: device pulses, packets over the link, a command queue and an OTA firmware update */
export function BleSdkScene() {
  return (
    <Scene width={160} height={340} label="Bluetooth device sync with command queue and firmware update">
      <StatusBar />

      <rect x="16" y="30" width="128" height="72" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx="45" cy="66" r="20" stroke="currentColor" strokeOpacity="0">
          <animate attributeName="r" values="20;42" dur="3s" begin={`${i}s`} repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.45;0" dur="3s" begin={`${i}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <rect x="28" y="45" width="34" height="42" rx="9" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.75" />
      <path
        d="M32 68 h6 l3 -8 l4 15 l3 -11 l2 4 h8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={100}
        strokeDasharray="100 100"
      >
        <animate attributeName="stroke-dashoffset" values="100;0;0;-100" keyTimes="0;.45;.6;1" dur="2.4s" repeatCount="indefinite" />
      </path>
      <Lines x={72} y={50} widths={[52, 36]} gap={10} />
      <rect x="72" y="74" width="44" height="11" rx="5.5" fill="currentColor" opacity="0.1" />
      <circle cx="79" cy="79.5" r="2" fill="currentColor">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <rect x="85" y="78" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.4" />

      <line x1="80" y1="104" x2="80" y2="138" stroke="currentColor" strokeOpacity="0.2" strokeDasharray="2 3" />
      {[0, 0.6].map((begin) => (
        <circle key={begin} r="2.2" fill="currentColor">
          <animateMotion path="M80 104 V138" dur="1.2s" begin={`${begin}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <circle r="1.6" fill="currentColor" opacity="0.5">
        <animateMotion path="M80 138 V104" dur="1.8s" repeatCount="indefinite" />
      </circle>

      <rect x="16" y="140" width="128" height="80" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
      <rect x="28" y="149" width="50" height="4" rx="2" fill="currentColor" opacity="0.55" />
      <clipPath id="scene-ble-queue">
        <rect x="24" y="158" width="112" height="56" />
      </clipPath>
      <g clipPath="url(#scene-ble-queue)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -14" dur="1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines={EASE} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <rect x="28" y={161 + i * 14} width="104" height="10" rx="5" fill="currentColor" opacity="0.09" />
              <circle cx="34" cy={166 + i * 14} r="2" fill="currentColor" opacity="0.45" />
              <rect x="40" y={164.5 + i * 14} width={i % 2 ? 46 : 62} height="3" rx="1.5" fill="currentColor" opacity="0.3" />
            </g>
          ))}
        </g>
      </g>
      <rect x="27.5" y="160.5" width="105" height="11" rx="5.5" stroke="currentColor" strokeOpacity="0.7">
        <animate attributeName="stroke-opacity" values="0.7;0.25;0.7" dur="1.4s" repeatCount="indefinite" />
      </rect>

      <rect x="16" y="228" width="128" height="92" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
      <rect x="28" y="240" width="14" height="14" rx="3" stroke="currentColor" strokeOpacity="0.6" />
      <path d="M31 237 v3 M35 237 v3 M39 237 v3 M31 254 v3 M35 254 v3 M39 254 v3" stroke="currentColor" strokeOpacity="0.4" />
      <Lines x={50} y={241} widths={[52, 34]} gap={8} />
      <rect x="28" y="264" width="104" height="5" rx="2.5" fill="currentColor" opacity="0.12" />
      <rect x="28" y="264" width="0" height="5" rx="2.5" fill="currentColor" opacity="0.8">
        <animate attributeName="width" values="0;104;104;0" keyTimes="0;.7;.95;1" dur="6s" repeatCount="indefinite" />
      </rect>
      {[0, 1, 2].map((i) => {
        const done = 0.18 + i * 0.25;
        return (
          <g key={i}>
            <circle cx="33" cy={283 + i * 12} r="4" stroke="currentColor" strokeOpacity="0.35" />
            <path d={`M31 ${283 + i * 12} l1.5 1.5 l3 -3`} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0">
              <animate attributeName="opacity" values="0;0;1;1;0" keyTimes={`0;${done};${done + 0.03};.95;1`} dur="6s" repeatCount="indefinite" />
            </path>
            <rect x="42" y={281.5 + i * 12} width={[54, 64, 44][i]} height="3" rx="1.5" fill="currentColor" opacity="0.3" />
          </g>
        );
      })}
    </Scene>
  );
}

/* Gaming arena (iPad): day picker, station grid with live bookings, time slots and a Book action */
export function GamingArenaScene() {
  const cols = 7;
  const rows = 5;
  const booked = new Set([2, 5, 9, 16, 22, 30]);
  const live = [
    { index: 11, at: 0.12 },
    { index: 19, at: 0.32 },
    { index: 26, at: 0.52 },
    { index: 3, at: 0.72 },
  ];
  const seat = (index: number) => ({ x: 18 + (index % cols) * 30, y: 82 + Math.floor(index / cols) * 24 });
  const path = [8, 11, 19, 26, 3, 8].map(seat);

  return (
    <Scene width={240} height={280} label="Station reservation grid with live bookings">
      <StatusBar width={240} />
      <path d="M20 26 l-4 4 l4 4" stroke="currentColor" strokeOpacity="0.5" strokeLinecap="round" />
      <rect x="30" y="27" width="70" height="5" rx="2.5" fill="currentColor" opacity="0.55" />
      <circle cx="220" cy="30" r="6" fill="currentColor" opacity="0.15" />

      {Array.from({ length: 7 }, (_, i) => (
        <g key={i}>
          <rect x={16 + i * 30} y="44" width="24" height="28" rx="7" fill="currentColor" opacity="0.06" />
          <rect x={22 + i * 30} y="51" width="12" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
          <rect x={23 + i * 30} y="59" width="10" height="6" rx="2" fill="currentColor" opacity="0.5" />
        </g>
      ))}
      <rect x="16" y="44" width="24" height="28" rx="7" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.8">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;60 0;60 0;120 0;120 0;0 0"
          keyTimes="0;.25;.33;.58;.66;.92;1"
          dur="9s"
          repeatCount="indefinite"
        />
      </rect>

      {Array.from({ length: cols * rows }, (_, i) => {
        const { x, y } = seat(i);
        const liveSeat = live.find((l) => l.index === i);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="22"
            height="16"
            rx="4"
            fill="currentColor"
            fillOpacity={booked.has(i) ? 0.55 : 0}
            stroke="currentColor"
            strokeOpacity={booked.has(i) ? 0 : 0.25}
          >
            {liveSeat && (
              <animate
                attributeName="fill-opacity"
                values="0;0;0.55;0.55;0"
                keyTimes={`0;${liveSeat.at};${liveSeat.at + 0.04};.95;1`}
                dur="9s"
                repeatCount="indefinite"
              />
            )}
          </rect>
        );
      })}
      <rect x={path[0].x - 3} y={path[0].y - 3} width="28" height="22" rx="6" stroke="currentColor" strokeWidth="1.5">
        <animateTransform
          attributeName="transform"
          type="translate"
          values={path.map((p) => `${p.x - path[0].x} ${p.y - path[0].y}`).join(';')}
          keyTimes="0;.1;.3;.5;.7;1"
          dur="9s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines={Array(5).fill(EASE).join(';')}
        />
      </rect>

      <rect x="0" y="208" width="240" height="72" fill="currentColor" opacity="0.05" />
      <line x1="0" y1="208" x2="240" y2="208" stroke="currentColor" strokeOpacity="0.12" />
      {Array.from({ length: 6 }, (_, i) => (
        <rect key={i} x={16 + i * 36} y="220" width="30" height="12" rx="6" fill="currentColor" opacity="0.08" />
      ))}
      <rect x="16" y="220" width="30" height="12" rx="6" fill="currentColor" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="36 0;36 0;108 0;108 0;36 0" keyTimes="0;.3;.4;.85;1" dur="9s" repeatCount="indefinite" />
      </rect>
      <Lines x={16} y={248} widths={[44, 30]} gap={10} />
      <g transform="translate(187 255)">
        <g>
          <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="1.8s" repeatCount="indefinite" />
          <rect x="-37" y="-11" width="74" height="22" rx="11" stroke="currentColor" strokeOpacity="0.85" fill="currentColor" fillOpacity="0.1" />
          <text x="0" y="3.5" textAnchor="middle" fontSize="9" fontWeight="600" fill="currentColor">
            Book
          </text>
        </g>
      </g>
    </Scene>
  );
}

/* Telecom: server-driven UI, a schema pushes layout down to tier cards that hydrate from skeletons */
export function TelecomScene() {
  const cards = [80, 150, 220];
  return (
    <Scene width={160} height={340} label="Server-driven subscription tier screens">
      <StatusBar />
      <g fill="currentColor">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={112 + i * 4} y={14 - i * 1.5} width="2.5" height={2 + i * 1.5} rx="0.8" opacity="0.6">
            <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
          </rect>
        ))}
      </g>

      <rect x="56" y="30" width="48" height="22" rx="7" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.5" />
      <text x="80" y="45" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="currentColor" opacity="0.8">
        {'{ }'}
      </text>
      <path d="M80 52 V62 H8 V250" stroke="currentColor" strokeOpacity="0.15" />
      {cards.map((y) => (
        <path key={y} d={`M8 ${y + 30} H16`} stroke="currentColor" strokeOpacity="0.15" />
      ))}
      {cards.map((y, i) => (
        <circle key={y} r="2" fill="currentColor">
          <animateMotion path={`M80 52 V62 H8 V${y + 30} H16`} dur="1.4s" begin={`${0.4 + i * 0.8}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="1.4s" begin={`${0.4 + i * 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {cards.map((y, i) => {
        const on = 0.12 + i * 0.1;
        const timing = { keyTimes: `0;${on};${on + 0.05};.9;.95;1`, dur: '9s', repeatCount: 'indefinite' };
        const selected = 0.45 + i * 0.15;
        return (
          <g key={y}>
            <rect x="16" y={y} width="128" height="60" rx="11" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1">
              <animate
                attributeName="stroke-opacity"
                values="0.1;0.1;0.75;0.75;0.1;0.1"
                keyTimes={`0;${selected};${selected + 0.03};${selected + 0.13};${selected + 0.15};1`}
                dur="9s"
                repeatCount="indefinite"
              />
            </rect>
            <g fill="currentColor">
              <animate attributeName="opacity" values="1;1;0;0;1;1" {...timing} />
              <rect x="28" y={y + 12} width="40" height="5" rx="2.5" opacity="0.12" />
              <rect x="28" y={y + 26} width="96" height="3" rx="1.5" opacity="0.08" />
              <rect x="28" y={y + 34} width="76" height="3" rx="1.5" opacity="0.08" />
              <rect x="28" y={y + 44} width="54" height="3" rx="1.5" opacity="0.08" />
            </g>
            <g fill="currentColor" opacity="0">
              <animate attributeName="opacity" values="0;0;1;1;0;0" {...timing} />
              <rect x="28" y={y + 12} width={[34, 40, 30][i]} height="5" rx="2.5" opacity="0.8" />
              <rect x="104" y={y + 10} width="28" height="11" rx="3" opacity="0.85" />
              <circle cx="31" cy={y + 30} r="2" opacity="0.5" />
              <rect x="37" y={y + 28.5} width={[62, 70, 78][i]} height="3" rx="1.5" opacity="0.35" />
              <circle cx="31" cy={y + 40} r="2" opacity="0.5" />
              <rect x="37" y={y + 38.5} width={[44, 56, 66][i]} height="3" rx="1.5" opacity="0.35" />
              {i > 0 && (
                <>
                  <circle cx="31" cy={y + 50} r="2" opacity="0.5" />
                  <rect x="37" y={y + 48.5} width={i === 2 ? 52 : 38} height="3" rx="1.5" opacity="0.35" />
                </>
              )}
            </g>
          </g>
        );
      })}
      <rect x="16" y="292" width="128" height="26" rx="13" stroke="currentColor" strokeOpacity="0.7" />
      <rect x="58" y="303.5" width="44" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
    </Scene>
  );
}

/* Smart lab (IoT): live gauge, scrolling sensor chart, sensor statuses and a push notification */
export function SmartLabScene() {
  const wave = 'l8 -6 l8 10 l8 -14 l8 8 l8 -4 l8 12 l8 -6';
  const chartPath = `M24 220 ${wave} ${wave} ${wave}`;
  const gaugeTiming = {
    dur: '9s',
    repeatCount: 'indefinite',
    calcMode: 'spline',
    keyTimes: '0;.33;.66;1',
    keySplines: `${EASE};${EASE};${EASE}`,
  };
  return (
    <Scene width={160} height={340} label="Lab sensor monitoring with live readings and alerts">
      <StatusBar />
      <Lines x={20} y={36} widths={[64, 44]} gap={10} />

      <rect x="16" y="58" width="128" height="104" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
      <path d="M40 132 A40 40 0 0 1 120 132" stroke="currentColor" strokeOpacity="0.12" strokeWidth="6" strokeLinecap="round" />
      <path d="M40 132 A40 40 0 0 1 120 132" stroke="currentColor" strokeWidth="6" strokeLinecap="round" pathLength={100} strokeDasharray="55 100">
        <animate attributeName="stroke-dasharray" values="55 100;70 100;48 100;55 100" {...gaugeTiming} />
      </path>
      <line x1="80" y1="132" x2="80" y2="100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform="rotate(9 80 132)">
        <animateTransform attributeName="transform" type="rotate" values="9 80 132;36 80 132;-4 80 132;9 80 132" {...gaugeTiming} />
      </line>
      <circle cx="80" cy="132" r="3" fill="currentColor" />
      <g fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor">
        {['21.8°', '24.1°', '20.9°'].map((value, i) => (
          <text key={value} x="80" y="153" opacity={i === 0 ? 1 : 0}>
            {value}
            <animate
              attributeName="opacity"
              values={['1;0;0;1', '0;1;0;0', '0;0;1;0'][i]}
              keyTimes="0;.33;.66;1"
              calcMode="discrete"
              dur="9s"
              repeatCount="indefinite"
            />
          </text>
        ))}
      </g>

      <rect x="16" y="172" width="128" height="80" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
      {[196, 214, 232].map((y) => (
        <line key={y} x1="24" y1={y} x2="136" y2={y} stroke="currentColor" strokeOpacity="0.07" />
      ))}
      <clipPath id="scene-iot-chart">
        <rect x="24" y="184" width="112" height="60" />
      </clipPath>
      <g clipPath="url(#scene-iot-chart)">
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0;-56 0" dur="3s" repeatCount="indefinite" />
          <path d={`${chartPath} V250 H24 Z`} fill="currentColor" opacity="0.06" />
          <path d={chartPath} stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </g>
      </g>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="26" cy={270 + i * 20} r="5" fill="currentColor" opacity="0.1" />
          <rect x="38" y={268.5 + i * 20} width={[62, 48, 56][i]} height="3" rx="1.5" fill="currentColor" opacity="0.35" />
          <circle cx="136" cy={270 + i * 20} r="2.5" fill="currentColor">
            <animate attributeName="opacity" values="1;0.25;1" dur={i === 1 ? '0.8s' : '2.4s'} begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      <g transform="translate(0 -60)">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 -60;0 -60;0 0;0 0;0 -60;0 -60"
          keyTimes="0;.5;.56;.88;.94;1"
          dur="9s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines={`0 0 1 1;.2 .8 .2 1;0 0 1 1;.6 0 .8 .2;0 0 1 1`}
        />
        <rect x="12" y="8" width="136" height="34" rx="10" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.25" />
        <path d="M27 31 h10 M28 30 v-5 a4 4 0 0 1 8 0 v5 M31 33 h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <Lines x={46} y={17} widths={[56, 80]} gap={9} />
      </g>
    </Scene>
  );
}

/* HSKIKI26 conference: day tabs, a session timeline with a moving "now" line, molecule motif */
export function ConferenceScene() {
  const cards = [98, 144, 190, 236, 282];
  const start = 96;
  const travel = 230;
  return (
    <Scene width={160} height={340} label="Conference schedule with the current session highlighted">
      <StatusBar />
      <g transform="translate(30 44)">
        <g stroke="currentColor" strokeOpacity="0.6">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
          <path d="M0 -10 L8.7 -5 L8.7 5 L0 10 L-8.7 5 L-8.7 -5 Z" />
          <path d="M0 -10 V-16 M8.7 5 L13.9 8 M-8.7 5 L-13.9 8" strokeOpacity="0.35" />
          <circle cy="-17" r="1.5" fill="currentColor" />
          <circle cx="14.7" cy="8.5" r="1.5" fill="currentColor" />
          <circle cx="-14.7" cy="8.5" r="1.5" fill="currentColor" />
        </g>
      </g>
      <Lines x={52} y={38} widths={[72, 48]} gap={10} />

      {[0, 1, 2].map((i) => (
        <rect key={i} x={16 + i * 46} y="66" width="38" height="16" rx="8" fill="currentColor" opacity="0.07" />
      ))}
      <rect x="16" y="66" width="38" height="16" rx="8" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.8">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;46 0;46 0;0 0"
          keyTimes="0;.45;.5;.95;1"
          dur="12s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines={`0 0 1 1;${EASE};0 0 1 1;${EASE}`}
        />
      </rect>

      <line x1="34" y1={start} x2="34" y2="326" stroke="currentColor" strokeOpacity="0.15" />
      {cards.map((y, i) => {
        const center = (y + 19 - start) / travel;
        const from = Math.max(0, center - 0.1);
        const to = Math.min(1, center + 0.1);
        return (
          <g key={y}>
            <rect x="12" y={y + 4} width="14" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
            <circle cx="34" cy={y + 6} r="2.5" fill="currentColor" opacity="0.35" />
            <rect x="44" y={y} width="100" height="38" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.08">
              <animate
                attributeName="stroke-opacity"
                values="0.08;0.08;0.75;0.08;0.08"
                keyTimes={`0;${from.toFixed(3)};${center.toFixed(3)};${to.toFixed(3)};1`}
                dur="12s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                values="0.05;0.05;0.12;0.05;0.05"
                keyTimes={`0;${from.toFixed(3)};${center.toFixed(3)};${to.toFixed(3)};1`}
                dur="12s"
                repeatCount="indefinite"
              />
            </rect>
            <circle cx="56" cy={y + 25} r="5" fill="currentColor" opacity="0.15" />
            <Lines x={54} y={y + 8} widths={[[64, 52, 70, 46, 58][i]]} />
            <rect x="66" y={y + 23.5} width={[40, 52, 34, 48, 38][i]} height="3" rx="1.5" fill="currentColor" opacity="0.2" />
            {i === 1 && (
              <path d={`M134 ${y + 7} l2 4 h4.5 l-3.6 2.7 l1.4 4.3 l-4.3 -2.7 l-4.3 2.7 l1.4 -4.3 l-3.6 -2.7 h4.5 Z`} stroke="currentColor" strokeOpacity="0.7" fill="currentColor" fillOpacity="0">
                <animate attributeName="fill-opacity" values="0;0;0.8;0.8" keyTimes="0;.3;.32;1" dur="12s" repeatCount="indefinite" />
              </path>
            )}
          </g>
        );
      })}
      <g>
        <animateTransform attributeName="transform" type="translate" values={`0 0;0 ${travel}`} dur="12s" repeatCount="indefinite" />
        <line x1="30" y1={start} x2="148" y2={start} stroke="currentColor" strokeOpacity="0.5" strokeDasharray="2 3" />
        <circle cx="34" cy={start} r="3.5" fill="currentColor" />
      </g>
    </Scene>
  );
}
