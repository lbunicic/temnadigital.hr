export function AviationPaymentGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Radar circles */}
      <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="1" opacity="0.15" className="orbit-ring" />
      <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
      
      {/* Crosshair */}
      <line x1="60" y1="15" x2="60" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="60" y1="90" x2="60" y2="105" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="15" y1="60" x2="30" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="90" y1="60" x2="105" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2" />

      {/* Airplane - more geometric */}
      <g className="airplane-icon">
        {/* Main fuselage */}
        <rect x="35" y="37" width="30" height="6" fill="currentColor" />
        
        {/* Cockpit */}
        <polygon points="65,40 72,38 72,42" fill="currentColor" />
        
        {/* Wings with stripes */}
        <rect x="45" y="28" width="15" height="2" fill="currentColor" opacity="0.8" />
        <rect x="47" y="30" width="13" height="2" fill="currentColor" opacity="0.6" />
        <rect x="49" y="32" width="11" height="2" fill="currentColor" opacity="0.4" />
        
        <rect x="45" y="48" width="15" height="2" fill="currentColor" opacity="0.8" />
        <rect x="47" y="46" width="13" height="2" fill="currentColor" opacity="0.6" />
        <rect x="49" y="44" width="11" height="2" fill="currentColor" opacity="0.4" />
        
        {/* Tail */}
        <polygon points="35,40 30,33 35,37" fill="currentColor" />
        
        {/* Speed lines */}
        <line x1="20" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.3">
          <animate attributeName="x1" from="20" to="30" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;0" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="18" y1="42" x2="28" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.3">
          <animate attributeName="x1" from="18" to="28" dur="1s" begin="0.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.3;0" dur="1s" begin="0.2s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Credit card with chip pattern */}
      <g className="card-icon">
        <rect x="35" y="70" width="40" height="25" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="35" y="73" width="40" height="4" fill="currentColor" opacity="0.8" />
        
        {/* Chip pattern */}
        <rect x="40" y="80" width="8" height="8" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="44" y1="80" x2="44" y2="88" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="84" x2="48" y2="84" stroke="currentColor" strokeWidth="1" />
        
        {/* Card number dots */}
        <circle cx="54" cy="84" r="1" fill="currentColor" />
        <circle cx="58" cy="84" r="1" fill="currentColor" />
        <circle cx="62" cy="84" r="1" fill="currentColor" />
        <circle cx="66" cy="84" r="1" fill="currentColor" />
        
        {/* Signal waves from card */}
        <path d="M 78 75 Q 82 78 82 82 Q 82 86 78 89" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 80 73 Q 85 78 85 82 Q 85 86 80 91" stroke="currentColor" strokeWidth="1" opacity="0.2" fill="none">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

export function UFOGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Star field with constellation */}
      <circle cx="25" cy="25" r="1.5" fill="currentColor" opacity="0.5" className="twinkle-star-1" />
      <circle cx="90" cy="30" r="1" fill="currentColor" opacity="0.4" className="twinkle-star-2" />
      <circle cx="80" cy="85" r="1.5" fill="currentColor" opacity="0.5" className="twinkle-star-3" />
      <circle cx="35" cy="80" r="1" fill="currentColor" opacity="0.4" className="twinkle-star-1" />
      <circle cx="95" cy="70" r="1" fill="currentColor" opacity="0.3" className="twinkle-star-2" />
      
      {/* Constellation lines */}
      <line x1="25" y1="25" x2="35" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <line x1="90" y1="30" x2="95" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

      {/* UFO with geometric design */}
      <g className="ufo-float">
        {/* Dome with segments */}
        <path d="M 45 45 Q 60 35 75 45" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="60" y1="35" x2="60" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="52" y1="38" x2="68" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        
        {/* Main body */}
        <ellipse cx="60" cy="50" rx="25" ry="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
        
        {/* Windows/lights */}
        <circle cx="50" cy="48" r="2" fill="currentColor" />
        <circle cx="60" cy="48" r="2" fill="currentColor" />
        <circle cx="70" cy="48" r="2" fill="currentColor" />
        
        {/* Underside details */}
        <rect x="48" y="54" width="3" height="4" fill="currentColor" opacity="0.6" />
        <rect x="58" y="54" width="3" height="4" fill="currentColor" opacity="0.6" />
        <rect x="68" y="54" width="3" height="4" fill="currentColor" opacity="0.6" />
        
        {/* Scanning beam pattern */}
        <path d="M 50 58 L 45 85 L 48 85 L 52 58" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="2 2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 58 58 L 53 85 L 67 85 L 62 58" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" strokeDasharray="2 2">
          <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </path>
        <path d="M 68 58 L 72 85 L 75 85 L 70 58" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="2 2">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </path>
        
        {/* Target reticle in beam */}
        <circle cx="60" cy="90" r="5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="60" y1="87" x2="60" y2="93" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="57" y1="90" x2="63" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  );
}

export function MindfulnessGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Animated ripples with varying patterns */}
      <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="1" opacity="0.3" className="ripple-1" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="1" opacity="0.2" className="ripple-2" />
      <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="1" opacity="0.15" className="ripple-3" strokeDasharray="5 5" />
      <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="2 2">
        <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.15;0.1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Lotus petals */}
      <g opacity="0.2">
        <ellipse cx="60" cy="95" rx="8" ry="15" fill="currentColor" />
        <ellipse cx="60" cy="95" rx="8" ry="15" fill="currentColor" transform="rotate(60 60 95)" />
        <ellipse cx="60" cy="95" rx="8" ry="15" fill="currentColor" transform="rotate(120 60 95)" />
        <ellipse cx="60" cy="95" rx="8" ry="15" fill="currentColor" transform="rotate(180 60 95)" />
        <ellipse cx="60" cy="95" rx="8" ry="15" fill="currentColor" transform="rotate(240 60 95)" />
        <ellipse cx="60" cy="95" rx="8" ry="15" fill="currentColor" transform="rotate(300 60 95)" />
      </g>

      {/* Meditation figure with breath visualization */}
      <g className="meditation-icon">
        {/* Head */}
        <circle cx="60" cy="45" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Body and limbs */}
        <path
          d="M 60 53 L 60 73 M 60 58 L 50 68 M 60 58 L 70 68 M 50 73 L 45 78 M 70 73 L 75 78"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Breath indicators */}
        <path d="M 52 45 Q 45 45 40 40" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none">
          <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite" />
          <animate attributeName="d" 
            values="M 52 45 Q 45 45 40 40; M 52 45 Q 42 45 35 37; M 52 45 Q 45 45 40 40" 
            dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M 68 45 Q 75 45 80 40" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none">
          <animate attributeName="opacity" values="0;0.5;0" dur="4s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="d" 
            values="M 68 45 Q 75 45 80 40; M 68 45 Q 78 45 85 37; M 68 45 Q 75 45 80 40" 
            dur="4s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Energy particles */}
      <circle cx="40" cy="30" r="1.5" fill="currentColor" opacity="0.4">
        <animate attributeName="cy" values="30;25;30" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="35" r="1.5" fill="currentColor" opacity="0.4">
        <animate attributeName="cy" values="35;30;35" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function BluetoothDeviceGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Medical cross background */}
      <line x1="60" y1="15" x2="60" y2="45" stroke="currentColor" strokeWidth="8" opacity="0.1" />
      <line x1="45" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="8" opacity="0.1" />

      {/* Signal waves - animated */}
      <path d="M 75 50 Q 80 60 75 70" stroke="currentColor" strokeWidth="2" opacity="0.4" fill="none">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M 82 45 Q 90 60 82 75" stroke="currentColor" strokeWidth="2" opacity="0.3" fill="none">
        <animate attributeName="opacity" values="0.15;0.5;0.15" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </path>
      <path d="M 89 40 Q 98 60 89 80" stroke="currentColor" strokeWidth="2" opacity="0.2" fill="none">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </path>

      {/* Device frame */}
      <rect x="35" y="50" width="40" height="60" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="35" y="50" width="40" height="60" rx="8" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.05" />
      
      {/* Screen */}
      <rect x="40" y="55" width="30" height="45" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />

      {/* Bluetooth symbol on device */}
      <g transform="translate(0, 5)">
        <path
          d="M 55 65 L 55 95 L 65 88 L 55 80 L 65 72 L 55 65 L 55 95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        <line x1="55" y1="80" x2="48" y2="87" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        <line x1="55" y1="80" x2="48" y2="73" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      </g>

      {/* Connection indicator */}
      <circle cx="55" cy="107" r="2" fill="currentColor">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Data transfer particles */}
      <circle cx="75" cy="60" r="1.5" fill="currentColor" opacity="0.5">
        <animate attributeName="cx" values="75;60;45" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.7;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="70" r="1.5" fill="currentColor" opacity="0.5">
        <animate attributeName="cx" values="75;60;45" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function MobileAppGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Phone with detailed UI */}
      <g className="phone-icon">
        {/* Device frame */}
        <rect x="40" y="20" width="40" height="75" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="40" y="20" width="40" height="75" rx="6" fill="currentColor" opacity="0.05" />
        
        {/* Notch */}
        <rect x="52" y="20" width="16" height="4" rx="2" fill="currentColor" />
        
        {/* Screen */}
        <rect x="43" y="27" width="34" height="60" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        
        {/* Status bar */}
        <rect x="46" y="30" width="28" height="2" fill="currentColor" opacity="0.3" />
        
        {/* App cards with animation */}
        <g>
          <rect x="46" y="36" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.35;0.2" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="48" y="38" width="10" height="2" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="48" y="42" width="16" height="1.5" rx="0.5" fill="currentColor" opacity="0.3" />
          <rect x="48" y="45" width="12" height="1.5" rx="0.5" fill="currentColor" opacity="0.3" />
        </g>
        
        <g>
          <rect x="46" y="51" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.15">
            <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </rect>
          <rect x="48" y="53" width="10" height="2" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="48" y="57" width="16" height="1.5" rx="0.5" fill="currentColor" opacity="0.3" />
          <rect x="48" y="60" width="12" height="1.5" rx="0.5" fill="currentColor" opacity="0.3" />
        </g>
        
        <g>
          <rect x="46" y="66" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3s" begin="1s" repeatCount="indefinite" />
          </rect>
          <rect x="48" y="68" width="10" height="2" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="48" y="72" width="16" height="1.5" rx="0.5" fill="currentColor" opacity="0.3" />
          <rect x="48" y="75" width="12" height="1.5" rx="0.5" fill="currentColor" opacity="0.3" />
        </g>
        
        {/* Home indicator */}
        <rect x="54" y="91" width="12" height="2" rx="1" fill="currentColor" opacity="0.4" />
        
        {/* Notification badge */}
        <circle cx="72" cy="37" r="3" fill="currentColor" opacity="0.8" className="notification-pulse">
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="72" y="39" fontSize="5" fill="currentColor" textAnchor="middle" fontWeight="bold" opacity="0.3">3</text>
      </g>
      
      {/* Touch interaction ripples */}
      <circle cx="60" cy="60" r="8" stroke="currentColor" strokeWidth="1" opacity="0" fill="none">
        <animate attributeName="r" values="0;15;25" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.2;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function TelecomGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Tower structure with lattice */}
      <g className="tower-icon">
        {/* Main tower body */}
        <path d="M 60 30 L 55 80 L 65 80 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
        
        {/* Lattice structure */}
        <line x1="58" y1="40" x2="62" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="57" y1="50" x2="63" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="56" y1="60" x2="64" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="56" y1="70" x2="64" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        
        {/* Cross bracing */}
        <line x1="60" y1="35" x2="56" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="60" y1="35" x2="64" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="58" y1="55" x2="62" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        
        {/* Base */}
        <rect x="54" y="80" width="12" height="15" fill="currentColor" opacity="0.6" />
        <rect x="52" y="95" width="16" height="3" fill="currentColor" />
        
        {/* Antenna top */}
        <line x1="60" y1="20" x2="60" y2="30" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="20" r="2" fill="currentColor" />
        <line x1="56" y1="22" x2="64" y2="22" stroke="currentColor" strokeWidth="1" />
        <line x1="57" y1="25" x2="63" y2="25" stroke="currentColor" strokeWidth="1" />
        
        {/* Animated signal waves - left */}
        <path d="M 45 45 Q 35 55 45 65" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 38 40 Q 25 55 38 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </path>
        <path d="M 32 35 Q 15 55 32 75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </path>
        
        {/* Animated signal waves - right */}
        <path d="M 75 45 Q 85 55 75 65" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 82 40 Q 95 55 82 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </path>
        <path d="M 88 35 Q 105 55 88 75" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </path>
        
        {/* Signal strength indicator */}
        <rect x="15" y="90" width="3" height="5" fill="currentColor" opacity="0.5" />
        <rect x="20" y="87" width="3" height="8" fill="currentColor" opacity="0.6" />
        <rect x="25" y="84" width="3" height="11" fill="currentColor" opacity="0.7" />
        <rect x="30" y="81" width="3" height="14" fill="currentColor" opacity="0.8" />
      </g>
    </svg>
  );
}

export function GamingArenaGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Esports arena seats */}
      <g opacity="0.15">
        <rect x="20" y="30" width="80" height="3" fill="currentColor" />
        <rect x="22" y="35" width="76" height="3" fill="currentColor" />
        <rect x="24" y="40" width="72" height="3" fill="currentColor" />
      </g>

      {/* Gaming controller */}
      <g className="controller-icon">
        {/* Main body */}
        <rect x="35" y="55" width="50" height="25" rx="12" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
        
        {/* D-pad with detail */}
        <rect x="43" y="63" width="3" height="10" rx="1" fill="currentColor" />
        <rect x="40" y="66" width="9" height="3" rx="1" fill="currentColor" />
        <circle cx="44.5" cy="67.5" r="1" fill="currentColor" opacity="0.5" />
        
        {/* ABXY buttons */}
        <circle cx="68" cy="63" r="3" stroke="currentColor" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="73" cy="68" r="3" stroke="currentColor" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="63" cy="68" r="3" stroke="currentColor" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="68" cy="73" r="3" stroke="currentColor" strokeWidth="1.5" fill="none">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.9s" repeatCount="indefinite" />
        </circle>
        
        {/* Button labels */}
        <text x="68" y="65" fontSize="4" fill="currentColor" textAnchor="middle" fontWeight="bold">A</text>
        <text x="73" y="70" fontSize="4" fill="currentColor" textAnchor="middle" fontWeight="bold">B</text>
        <text x="63" y="70" fontSize="4" fill="currentColor" textAnchor="middle" fontWeight="bold">X</text>
        <text x="68" y="75" fontSize="4" fill="currentColor" textAnchor="middle" fontWeight="bold">Y</text>
        
        {/* Triggers/shoulders */}
        <rect x="40" y="52" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
        <rect x="72" y="52" width="8" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
        
        {/* Handles */}
        <path d="M 35 67 Q 28 73 30 82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 85 67 Q 92 73 90 82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
        
        {/* Grips */}
        <line x1="30" y1="75" x2="32" y2="77" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="30" y1="78" x2="32" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="88" y1="75" x2="90" y2="77" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="88" y1="78" x2="90" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </g>
      
      {/* Gaming HUD elements */}
      <rect x="15" y="85" width="30" height="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
      <rect x="15" y="85" width="20" height="3" fill="currentColor" opacity="0.5">
        <animate attributeName="width" values="20;25;20" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="15" y="83" fontSize="4" fill="currentColor" opacity="0.5">HP</text>
      
      {/* Score */}
      <text x="85" y="88" fontSize="6" fill="currentColor" fontFamily="monospace" fontWeight="bold">9999</text>
    </svg>
  );
}

export function IoTGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Central hub */}
      <g className="network-icon">
        {/* Connection lines with data flow */}
        <line x1="60" y1="40" x2="40" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" from="0" to="5" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="60" y1="40" x2="80" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" from="0" to="5" dur="1s" begin="0.2s" repeatCount="indefinite" />
        </line>
        <line x1="40" y1="65" x2="60" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" from="0" to="5" dur="1s" begin="0.4s" repeatCount="indefinite" />
        </line>
        <line x1="80" y1="65" x2="60" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" from="0" to="5" dur="1s" begin="0.6s" repeatCount="indefinite" />
        </line>
        <line x1="40" y1="65" x2="80" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
        
        {/* Device nodes */}
        <g>
          <circle cx="60" cy="40" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
          <rect x="57" y="37" width="6" height="6" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="60" cy="40" r="10" stroke="currentColor" strokeWidth="1" opacity="0.2">
            <animate attributeName="r" values="10;13;10" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.3;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Sensor nodes */}
        <g>
          <circle cx="40" cy="65" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
          <line x1="38" y1="65" x2="42" y2="65" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="63" x2="40" y2="67" stroke="currentColor" strokeWidth="1" />
        </g>
        
        <g>
          <circle cx="80" cy="65" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
          <path d="M 78 63 L 80 65 L 82 63" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="80" y1="65" x2="80" y2="67" stroke="currentColor" strokeWidth="1" />
        </g>
        
        <g>
          <circle cx="60" cy="80" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.5" />
          <rect x="58" y="78" width="4" height="4" stroke="currentColor" strokeWidth="1" fill="none" />
        </g>
        
        {/* Peripheral devices */}
        <circle cx="25" cy="50" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
        <line x1="25" y1="50" x2="35" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="1 1" />
        
        <circle cx="95" cy="50" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
        <line x1="95" y1="50" x2="85" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="1 1" />
        
        <circle cx="30" cy="85" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
        <line x1="30" y1="85" x2="40" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="1 1" />
        
        <circle cx="90" cy="85" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.3" />
        <line x1="90" y1="85" x2="80" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="1 1" />
        
        {/* Data packets */}
        <circle cx="50" cy="52" r="2" fill="currentColor" opacity="0.6">
          <animateMotion path="M 0 0 L -10 13" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

export function ConferenceGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Conference badge lanyard */}
      <line x1="60" y1="20" x2="60" y2="35" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeDasharray="2 2" />
      <circle cx="60" cy="20" r="3" fill="currentColor" opacity="0.4" />

      {/* Calendar/Schedule */}
      <g className="calendar-icon">
        {/* Main calendar */}
        <rect x="35" y="35" width="50" height="55" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="35" y="35" width="50" height="55" rx="5" fill="currentColor" opacity="0.05" />
        
        {/* Binding rings */}
        <circle cx="45" cy="35" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.4" />
        <circle cx="60" cy="35" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.4" />
        <circle cx="75" cy="35" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.4" />
        
        {/* Header bar */}
        <rect x="35" y="38" width="50" height="8" fill="currentColor" opacity="0.6" />
        <text x="60" y="44" fontSize="5" fill="currentColor" textAnchor="middle" fontWeight="bold" opacity="0.3">DEC</text>
        
        {/* Grid */}
        <line x1="35" y1="56" x2="85" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="35" y1="66" x2="85" y2="66" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="35" y1="76" x2="85" y2="76" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        
        <line x1="52" y1="46" x2="52" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="68" y1="46" x2="68" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        
        {/* Days */}
        <text x="44" y="53" fontSize="4" fill="currentColor" textAnchor="middle" opacity="0.4">M</text>
        <text x="60" y="53" fontSize="4" fill="currentColor" textAnchor="middle" opacity="0.4">T</text>
        <text x="76" y="53" fontSize="4" fill="currentColor" textAnchor="middle" opacity="0.4">W</text>
        
        {/* Event markers with animation */}
        <circle cx="44" cy="61" r="3" fill="currentColor" opacity="0.5" className="event-pulse">
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <rect x="57" y="58" width="6" height="6" fill="currentColor" opacity="0.4" />
        <polygon points="76,58 73,64 79,64" fill="currentColor" opacity="0.4" />
        
        <circle cx="44" cy="71" r="2" fill="currentColor" opacity="0.3" />
        <rect x="58" y="69" width="4" height="4" fill="currentColor" opacity="0.3" />
        
        {/* Highlighted event */}
        <rect x="57" y="78" width="13" height="8" rx="2" fill="currentColor" opacity="0.7">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
        </rect>
        <line x1="59" y1="80" x2="67" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="59" y1="82" x2="65" y2="82" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="59" y1="84" x2="66" y2="84" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </g>
      
      {/* Time indicator */}
      <g opacity="0.4">
        <circle cx="25" cy="70" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="25" y1="70" x2="25" y2="65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="70" x2="28" y2="72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function DefaultProjectGraphic() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="project-graphic"
    >
      {/* Terminal window */}
      <rect x="20" y="25" width="80" height="70" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="20" y="25" width="80" height="70" rx="5" fill="currentColor" opacity="0.05" />
      
      {/* Window controls */}
      <circle cx="28" cy="33" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="36" cy="33" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="44" cy="33" r="2" fill="currentColor" opacity="0.4" />
      
      {/* Title bar */}
      <rect x="20" y="25" width="80" height="14" rx="5" fill="currentColor" opacity="0.2" />
      <line x1="20" y1="39" x2="100" y2="39" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      
      {/* Code brackets with shadow effect */}
      <g className="code-icon">
        {/* Shadow brackets */}
        <path
          d="M 37 50 L 27 65 L 37 80"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          opacity="0.2"
        />
        <path
          d="M 83 50 L 93 65 L 83 80"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          opacity="0.2"
        />
        
        {/* Main brackets */}
        <path
          d="M 35 48 L 25 65 L 35 82"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M 85 48 L 95 65 L 85 82"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        
        {/* Slash */}
        <line x1="68" y1="48" x2="52" y2="82" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        
        {/* Code lines */}
        <line x1="30" y1="55" x2="45" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
        <line x1="33" y1="60" x2="48" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
        <line x1="30" y1="70" x2="43" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
        <line x1="33" y1="75" x2="45" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
        
        <line x1="75" y1="55" x2="90" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
        <line x1="72" y1="60" x2="87" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
        <line x1="77" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
        <line x1="75" y1="75" x2="87" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeLinecap="square" />
      </g>
      
      {/* Cursor blink */}
      <rect x="48" y="87" width="2" height="6" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0;0.6" dur="1s" repeatCount="indefinite" />
      </rect>
      
      {/* Typing indicator */}
      <circle cx="30" cy="90" r="1.5" fill="currentColor" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="36" cy="90" r="1.5" fill="currentColor" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="42" cy="90" r="1.5" fill="currentColor" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

