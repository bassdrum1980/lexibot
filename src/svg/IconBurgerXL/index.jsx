import '../index.scss';

const IconBurgerXL = ({ width = 40, height = 40, color }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color ? color : 'var(--gray1000)'}
      fillRule="evenodd"
      d="M11 16a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H12Z"
      clipRule="evenodd"
    />
  </svg>
);

export default IconBurgerXL;
