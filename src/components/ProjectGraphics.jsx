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
      {/* Orbiting circles */}
      <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="1" opacity="0.15" className="orbit-ring" />
      
      {/* Airplane - side view */}
      <g className="airplane-icon">
        {/* Main fuselage body */}
        <ellipse cx="55" cy="40" rx="22" ry="6" fill="currentColor" />
        
        {/* Cockpit/nose */}
        <path d="M 75 40 L 82 38 L 82 42 L 75 40 Z" fill="currentColor" />
        
        {/* Main wings */}
        <path d="M 50 40 L 45 28 L 60 28 L 60 40 Z" fill="currentColor" opacity="0.7" />
        <path d="M 50 40 L 45 52 L 60 52 L 60 40 Z" fill="currentColor" opacity="0.7" />
        
        {/* Tail */}
        <path d="M 33 40 L 28 32 L 35 36 Z" fill="currentColor" />
        
        {/* Windows */}
        <circle cx="58" cy="40" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="64" cy="40" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="70" cy="40" r="1.5" fill="currentColor" opacity="0.3" />
        
        {/* Flight trail */}
        <circle cx="20" cy="40" r="1.5" fill="currentColor" opacity="0.3" className="flight-dot" />
        <circle cx="15" cy="40" r="1" fill="currentColor" opacity="0.2" className="flight-dot" />
      </g>

      {/* Credit card */}
      <g className="card-icon">
        <rect x="35" y="65" width="40" height="25" rx="3" fill="currentColor" opacity="0.8" />
        <rect x="35" y="68" width="40" height="6" fill="currentColor" opacity="0.3" />
        <rect x="38" y="78" width="18" height="3" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="38" y="83" width="10" height="2" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="62" y="83" width="10" height="4" rx="1" fill="currentColor" opacity="0.3" />
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
      {/* Stars */}
      <circle cx="25" cy="25" r="1.5" fill="currentColor" opacity="0.5" className="twinkle-star-1" />
      <circle cx="90" cy="30" r="1" fill="currentColor" opacity="0.4" className="twinkle-star-2" />
      <circle cx="80" cy="85" r="1.5" fill="currentColor" opacity="0.5" className="twinkle-star-3" />

      {/* UFO */}
      <g className="ufo-float">
        <ellipse cx="60" cy="50" rx="25" ry="8" fill="currentColor" opacity="0.7" />
        <ellipse cx="60" cy="45" rx="15" ry="10" fill="currentColor" />
        <circle cx="55" cy="45" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="60" cy="43" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="65" cy="45" r="2" fill="currentColor" opacity="0.4" />
        
        {/* Light beam */}
        <path
          d="M 50 52 L 45 80 L 75 80 L 70 52 Z"
          fill="currentColor"
          opacity="0.15"
          className="ufo-beam"
        />
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
      {/* Ripples */}
      <circle cx="60" cy="60" r="15" stroke="currentColor" strokeWidth="1" opacity="0.3" className="ripple-1" />
      <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="1" opacity="0.2" className="ripple-2" />
      <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="1" opacity="0.15" className="ripple-3" />

      {/* Meditation pose */}
      <g className="meditation-icon">
        <circle cx="60" cy="45" r="8" fill="currentColor" />
        <path
          d="M 60 55 L 60 75 M 60 60 L 50 70 M 60 60 L 70 70 M 50 75 L 45 80 M 70 75 L 75 80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
        />
      </g>
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
      {/* Signal waves */}
      <path
        d="M 75 50 Q 80 60 75 70"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
        className="signal-wave-1"
      />
      <path
        d="M 82 45 Q 90 60 82 75"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
        className="signal-wave-2"
      />

      {/* Bluetooth symbol */}
      <g className="bt-device-icon">
        <path
          d="M 60 35 L 60 85 L 75 70 L 60 55 L 75 40 L 60 25 L 60 85"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        <line x1="60" y1="55" x2="45" y2="70" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        <line x1="60" y1="65" x2="45" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      </g>
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
      {/* Phone */}
      <g className="phone-icon">
        <rect x="40" y="25" width="40" height="70" rx="5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
        <rect x="43" y="30" width="34" height="55" rx="2" fill="currentColor" opacity="0.08" />
        <circle cx="60" cy="90" r="3" fill="currentColor" />
        
        {/* UI elements */}
        <rect x="48" y="35" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
        <rect x="48" y="42" width="18" height="2" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="48" y="47" width="20" height="2" rx="1" fill="currentColor" opacity="0.3" />
        
        {/* Notification dot */}
        <circle cx="70" cy="36" r="2" fill="currentColor" opacity="0.6" className="notification-pulse" />
      </g>
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
      {/* Signal tower */}
      <g className="tower-icon">
        <path d="M 60 35 L 55 75 L 65 75 Z" fill="currentColor" />
        <rect x="57" y="75" width="6" height="15" fill="currentColor" opacity="0.7" />
        
        {/* Signal waves */}
        <path d="M 45 45 Q 35 55 45 65" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" className="signal-wave-1" />
        <path d="M 38 40 Q 25 55 38 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" className="signal-wave-2" />
        
        <path d="M 75 45 Q 85 55 75 65" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" className="signal-wave-1" />
        <path d="M 82 40 Q 95 55 82 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" className="signal-wave-2" />
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
      {/* Gaming controller */}
      <g className="controller-icon">
        <rect x="35" y="50" width="50" height="25" rx="12" fill="currentColor" opacity="0.8" />
        
        {/* D-pad */}
        <rect x="43" y="58" width="3" height="10" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="40" y="61" width="9" height="3" rx="1" fill="currentColor" opacity="0.4" />
        
        {/* Buttons */}
        <circle cx="70" cy="60" r="3" fill="currentColor" opacity="0.4" className="button-pulse-1" />
        <circle cx="77" cy="63" r="3" fill="currentColor" opacity="0.3" className="button-pulse-2" />
        
        {/* Handles */}
        <path d="M 35 62 Q 28 68 30 75" stroke="currentColor" strokeWidth="4" strokeLinecap="square" fill="none" />
        <path d="M 85 62 Q 92 68 90 75" stroke="currentColor" strokeWidth="4" strokeLinecap="square" fill="none" />
      </g>
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
      {/* Network nodes */}
      <g className="network-icon">
        <circle cx="60" cy="40" r="5" fill="currentColor" />
        <circle cx="40" cy="65" r="5" fill="currentColor" />
        <circle cx="80" cy="65" r="5" fill="currentColor" />
        <circle cx="60" cy="80" r="5" fill="currentColor" />
        
        {/* Connections */}
        <line x1="60" y1="40" x2="40" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="60" y1="40" x2="80" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="40" y1="65" x2="60" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="80" y1="65" x2="60" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        
        {/* Pulse rings */}
        <circle cx="60" cy="40" r="8" stroke="currentColor" strokeWidth="1" opacity="0.2" className="ripple-1" />
        <circle cx="60" cy="40" r="12" stroke="currentColor" strokeWidth="1" opacity="0.15" className="ripple-2" />
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
      {/* Calendar/Schedule */}
      <g className="calendar-icon">
        <rect x="35" y="35" width="50" height="50" rx="5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
        
        {/* Header */}
        <rect x="35" y="35" width="50" height="10" rx="5" fill="currentColor" opacity="0.5" />
        
        {/* Grid lines */}
        <line x1="35" y1="55" x2="85" y2="55" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="35" y1="65" x2="85" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="35" y1="75" x2="85" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        
        <line x1="52" y1="45" x2="52" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="68" y1="45" x2="68" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        
        {/* Event dots */}
        <circle cx="44" cy="60" r="2" fill="currentColor" className="event-pulse" />
        <circle cx="60" cy="70" r="2" fill="currentColor" className="event-pulse" />
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
      {/* Code brackets */}
      <g className="code-icon">
        <path
          d="M 35 40 L 25 60 L 35 80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M 85 40 L 95 60 L 85 80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <line x1="65" y1="40" x2="55" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      </g>
    </svg>
  );
}

