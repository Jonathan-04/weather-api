export function LucideCalendarDays(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <path d="M16 2v4M8 2v4m-5 4h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
      </g>
    </svg>
  );
}
