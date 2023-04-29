import '../index.scss';

const IconClock = ({ width = 32, height = 32, fill = '#fff' }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M24 16a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm1 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9.5-6a.5.5 0 0 0-1 0v5.965c0 .501.25.97.668 1.248l2.555 1.703a.5.5 0 0 0 .554-.832l-2.554-1.703a.5.5 0 0 1-.223-.416V10Z"
      clipRule="evenodd"
    />
  </svg>
);

export default IconClock;
