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
      <defs>
        <linearGradient id="aviationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="projectGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Orbiting circles */}
      <circle cx="60" cy="60" r="35" stroke="url(#aviationGradient)" strokeWidth="1" opacity="0.2" className="orbit-ring" />
      
      {/* Airplane */}
      <g filter="url(#projectGlow)" className="airplane-icon">
        <path
          d="M 60 35 L 65 50 L 80 48 L 65 52 L 70 65 L 62 60 L 54 65 L 59 52 L 44 48 L 59 50 Z"
          fill="url(#aviationGradient)"
        />
        <circle cx="80" cy="30" r="2" fill="#a855f7" className="flight-dot" />
      </g>

      {/* Credit card */}
      <g filter="url(#projectGlow)" className="card-icon">
        <rect x="30" y="70" width="35" height="22" rx="3" fill="url(#aviationGradient)" opacity="0.9" />
        <rect x="30" y="73" width="35" height="5" fill="rgba(255,255,255,0.3)" />
        <rect x="33" y="82" width="15" height="3" rx="1" fill="rgba(255,255,255,0.5)" />
        <rect x="33" y="87" width="8" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
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
      <defs>
        <linearGradient id="ufoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>

      {/* Stars */}
      <circle cx="25" cy="25" r="1.5" fill="#c084fc" className="twinkle-star-1" />
      <circle cx="90" cy="30" r="1" fill="#a855f7" className="twinkle-star-2" />
      <circle cx="80" cy="85" r="1.5" fill="#667eea" className="twinkle-star-3" />

      {/* UFO */}
      <g className="ufo-float">
        <ellipse cx="60" cy="50" rx="25" ry="8" fill="url(#ufoGradient)" opacity="0.8" />
        <ellipse cx="60" cy="45" rx="15" ry="10" fill="url(#ufoGradient)" />
        <circle cx="55" cy="45" r="2" fill="rgba(255,255,255,0.6)" />
        <circle cx="60" cy="43" r="2" fill="rgba(255,255,255,0.8)" />
        <circle cx="65" cy="45" r="2" fill="rgba(255,255,255,0.6)" />
        
        {/* Light beam */}
        <path
          d="M 50 52 L 45 80 L 75 80 L 70 52 Z"
          fill="url(#ufoGradient)"
          opacity="0.2"
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
      <defs>
        <linearGradient id="zenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#11998e" />
          <stop offset="100%" stopColor="#38ef7d" />
        </linearGradient>
      </defs>

      {/* Ripples */}
      <circle cx="60" cy="60" r="15" stroke="url(#zenGradient)" strokeWidth="1" opacity="0.4" className="ripple-1" />
      <circle cx="60" cy="60" r="25" stroke="url(#zenGradient)" strokeWidth="1" opacity="0.3" className="ripple-2" />
      <circle cx="60" cy="60" r="35" stroke="url(#zenGradient)" strokeWidth="1" opacity="0.2" className="ripple-3" />

      {/* Meditation pose */}
      <g className="meditation-icon">
        <circle cx="60" cy="45" r="8" fill="url(#zenGradient)" />
        <path
          d="M 60 55 L 60 75 M 60 60 L 50 70 M 60 60 L 70 70 M 50 75 L 45 80 M 70 75 L 75 80"
          stroke="url(#zenGradient)"
          strokeWidth="3"
          strokeLinecap="round"
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
      <defs>
        <linearGradient id="bleDeviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#11998e" />
          <stop offset="100%" stopColor="#38ef7d" />
        </linearGradient>
      </defs>

      {/* Signal waves */}
      <path
        d="M 75 50 Q 80 60 75 70"
        stroke="url(#bleDeviceGradient)"
        strokeWidth="2"
        opacity="0.6"
        className="signal-wave-1"
      />
      <path
        d="M 82 45 Q 90 60 82 75"
        stroke="url(#bleDeviceGradient)"
        strokeWidth="2"
        opacity="0.4"
        className="signal-wave-2"
      />

      {/* Bluetooth symbol */}
      <g className="bt-device-icon">
        <path
          d="M 60 35 L 60 85 L 75 70 L 60 55 L 75 40 L 60 25 L 60 85"
          stroke="url(#bleDeviceGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line x1="60" y1="55" x2="45" y2="70" stroke="url(#bleDeviceGradient)" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="65" x2="45" y2="50" stroke="url(#bleDeviceGradient)" strokeWidth="3" strokeLinecap="round" />
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
      <defs>
        <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f093fb" />
          <stop offset="100%" stopColor="#f5576c" />
        </linearGradient>
      </defs>

      {/* Phone */}
      <g className="phone-icon">
        <rect x="40" y="25" width="40" height="70" rx="5" fill="url(#mobileGradient)" opacity="0.2" stroke="url(#mobileGradient)" strokeWidth="2" />
        <rect x="43" y="30" width="34" height="55" rx="2" fill="rgba(255,255,255,0.1)" />
        <circle cx="60" cy="90" r="3" fill="url(#mobileGradient)" />
        
        {/* UI elements */}
        <rect x="48" y="35" width="24" height="3" rx="1.5" fill="url(#mobileGradient)" opacity="0.6" />
        <rect x="48" y="42" width="18" height="2" rx="1" fill="url(#mobileGradient)" opacity="0.4" />
        <rect x="48" y="47" width="20" height="2" rx="1" fill="url(#mobileGradient)" opacity="0.4" />
        
        {/* Notification dot */}
        <circle cx="70" cy="36" r="2" fill="#f5576c" className="notification-pulse" />
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
      <defs>
        <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>
      </defs>

      {/* Code brackets */}
      <g className="code-icon">
        <path
          d="M 35 40 L 25 60 L 35 80"
          stroke="url(#defaultGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 85 40 L 95 60 L 85 80"
          stroke="url(#defaultGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="65" y1="40" x2="55" y2="80" stroke="url(#defaultGradient)" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

