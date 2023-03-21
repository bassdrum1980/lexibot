import '../index.scss';

const IconPlusPrimary = ({ width = 32, height = 32 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="16"
      r="15.75"
      fill="#ffffff"
      stroke="var(--primary1000)"
      strokeWidth=".5"
    />
    <path
      stroke="var(--primary1000)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16h16M16 24V8"
    />
  </svg>
);

export default IconPlusPrimary;
