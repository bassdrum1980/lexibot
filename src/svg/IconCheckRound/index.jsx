import '../index.scss';

const IconCheckRound = ({ width = 32, height = 32, fill = '#fff' }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M35 70c19.33 0 35-15.67 35-35S54.33 0 35 0 0 15.67 0 35s15.67 35 35 35Zm-2.014-25.66a1.189 1.189 0 0 1-1.638 0l-7.349-7.243a1.147 1.147 0 0 1 0-1.614l1.594-1.571a1.134 1.134 0 0 1 1.593 0l5.003 4.886 10.625-10.47a1.134 1.134 0 0 1 1.594 0l1.594 1.57a1.147 1.147 0 0 1 0 1.614L32.986 44.34Z"
      clipRule="evenodd"
    />
  </svg>
);

export default IconCheckRound;
