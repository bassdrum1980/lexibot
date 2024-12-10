import '../index.scss';

const IconPause = ({ width = 20, height = 20 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10"
      cy="10"
      r="10"
      fill="#fff"
    />
    <path
      stroke="var(--primary1000)"
      strokeLinecap="round"
      strokeWidth="2"
      d="M8 13V7M12 13V7"
    />
  </svg>
);

export default IconPause;
