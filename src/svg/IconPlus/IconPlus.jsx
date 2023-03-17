import '../index.scss';

const IconPlus = ({ width = 32, height = 32 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.75 16C31.75 24.6985 24.6985 31.75 16 31.75C7.30151 31.75 0.25 24.6985 0.25 16C0.25 7.30151 7.30151 0.25 16 0.25C24.6985 0.25 31.75 7.30151 31.75 16Z"
      fill="white"
      stroke="var(--gray400)"
      strokeWidth="0.5"
    />
    <path
      d="M8 16H24M16 24L16 8"
      stroke="var(--gray1000)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconPlus;
