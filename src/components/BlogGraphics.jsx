export function BluetoothGraphic() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="blog-graphic"
    >
      {/* Background circles */}
      <circle cx="200" cy="150" r="120" stroke="currentColor" strokeWidth="1" opacity="0.15" className="pulse-circle" />
      <circle cx="200" cy="150" r="90" stroke="currentColor" strokeWidth="1" opacity="0.2" className="pulse-circle-2" />
      <circle cx="200" cy="150" r="60" stroke="currentColor" strokeWidth="1" opacity="0.25" className="pulse-circle-3" />

      {/* Bluetooth symbol */}
      <g className="bluetooth-symbol">
        <path
          d="M 200 90 L 200 210 L 250 170 L 200 130 L 250 90 L 200 50 L 200 210"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        <line x1="200" y1="130" x2="150" y2="170" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
        <line x1="200" y1="170" x2="150" y2="130" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
      </g>

      {/* Orbiting dots */}
      <circle cx="280" cy="150" r="4" fill="currentColor" opacity="0.8" className="orbit-dot-1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 150"
          to="360 200 150"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="280" cy="150" r="4" fill="currentColor" opacity="0.6" className="orbit-dot-2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="120 200 150"
          to="480 200 150"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="280" cy="150" r="4" fill="currentColor" opacity="0.4" className="orbit-dot-3">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="240 200 150"
          to="600 200 150"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function TypeDrivenGraphic() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="blog-graphic"
    >
      {/* Background grid */}
      <g opacity="0.08">
        <line x1="0" y1="75" x2="400" y2="75" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="225" x2="400" y2="225" stroke="currentColor" strokeWidth="1" />
        <line x1="100" y1="0" x2="100" y2="300" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="currentColor" strokeWidth="1" />
        <line x1="300" y1="0" x2="300" y2="300" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* Code brackets */}
      <g className="code-brackets">
        <path
          d="M 80 80 L 60 80 L 60 150 L 60 220 L 80 220"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          fill="none"
          className="bracket-left"
        />
        <path
          d="M 320 80 L 340 80 L 340 150 L 340 220 L 320 220"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          fill="none"
          className="bracket-right"
        />
      </g>

      {/* Type symbol <T> */}
      <g>
        <text
          x="200"
          y="170"
          fontSize="80"
          fontWeight="bold"
          fontFamily="monospace"
          fill="currentColor"
          textAnchor="middle"
          className="type-symbol"
        >
          &lt;T&gt;
        </text>
      </g>

      {/* Floating particles */}
      <circle cx="100" cy="100" r="2" fill="currentColor" opacity="0.5" className="float-particle-1" />
      <circle cx="300" cy="200" r="2" fill="currentColor" opacity="0.4" className="float-particle-2" />
      <circle cx="150" cy="230" r="2" fill="currentColor" opacity="0.3" className="float-particle-3" />
      <circle cx="280" cy="120" r="2" fill="currentColor" opacity="0.35" className="float-particle-4" />
    </svg>
  );
}

