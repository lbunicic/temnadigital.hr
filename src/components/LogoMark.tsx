interface LogoMarkProps {
  animated?: boolean;
}

// SVG version of the ◈ mark; when animated, the outline draws itself on load
function LogoMark({ animated = false }: LogoMarkProps) {
  return (
    <svg
      className={`logo-mark${animated ? ' logo-mark-animated' : ''}`}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="logo-mark-outer"
        d="M12 1.5 L22.5 12 L12 22.5 L1.5 12 Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        pathLength={1}
      />
      <path className="logo-mark-inner" d="M12 7 L17 12 L12 17 L7 12 Z" fill="currentColor" />
    </svg>
  );
}

export default LogoMark;
