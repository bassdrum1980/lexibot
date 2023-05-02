import '../index.scss';

const IconCheck = ({ width = 32, height = 32 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="var(--gray1000)"
      strokeLinecap="round"
      d="m9 17 4.286 4L24 11"
    />
  </svg>
);

export default IconCheck;
