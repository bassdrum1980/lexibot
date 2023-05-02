import '../index.scss';

const IconDots = ({ width = 32, height = 32 }) => (
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
      fill="#fff"
      stroke="var(--gray400)"
      strokeWidth=".5"
    />
    <circle cx="11.333" cy="16" r="1" fill="var(--gray1000)" />
    <circle cx="16" cy="16" r="1" fill="var(--gray1000)" />
    <circle cx="20.667" cy="16" r="1" fill="var(--gray1000)" />
  </svg>
);

export default IconDots;
