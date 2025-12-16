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
      {/* Scanning radar effect */}
      <g opacity="0.15">
        <line x1="200" y1="150" x2="200" y2="30" stroke="currentColor" strokeWidth="2" className="radar-line">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 150"
            to="360 200 150"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
      </g>

      {/* Concentric hexagons */}
      <polygon points="260,150 230,180 170,180 140,150 170,120 230,120" 
        stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
      <polygon points="280,150 240,195 160,195 120,150 160,105 240,105" 
        stroke="currentColor" strokeWidth="1" opacity="0.15" strokeDasharray="6 6" />

      {/* Bluetooth symbol with hatching */}
      <defs>
        <pattern id="hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      
      <g className="bluetooth-symbol">
        <path
          d="M 200 90 L 200 210 L 250 170 L 200 130 L 250 90 L 200 50 L 200 210"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="url(#hatch)"
        />
        <line x1="200" y1="130" x2="150" y2="170" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
        <line x1="200" y1="170" x2="150" y2="130" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
      </g>

      {/* Signal waves */}
      <path d="M 260 120 Q 280 135 280 150 Q 280 165 260 180" 
        stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M 270 110 Q 295 130 295 150 Q 295 170 270 190" 
        stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </path>
      <path d="M 280 100 Q 310 125 310 150 Q 310 175 280 200" 
        stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </path>

      {/* Data packets */}
      <rect x="120" y="145" width="8" height="10" fill="currentColor" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="160 0"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0;0.6;0" dur="3s" repeatCount="indefinite" />
      </rect>
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

