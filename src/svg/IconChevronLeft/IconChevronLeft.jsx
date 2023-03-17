import '../index.scss';

const IconChevronLeft = ({ width = 32, height = 32 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="white" />
    <path
      d="M18 10L12 16L18 22"
      stroke="var(--primary1000)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconChevronLeft;
