import '../index.scss';

const IconCheckXXLRound = ({ width = 70, height = 70 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="35"
      cy="35"
      r="35"
      fill="url(#a)"
      opacity=".1"
    />
    <path
      fill="url(#b)"
      d="M48.197 24.837a1.063 1.063 0 0 0-1.554 0L29.047 42.834l-5.717-5.847a1.063 1.063 0 0 0-1.527.027 1.123 1.123 0 0 0 0 1.535l6.48 6.628a1.063 1.063 0 0 0 1.527 0l18.36-18.778c.43-.424.441-1.123.027-1.562Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1="23.707"
        x2="28.656"
        y1="0"
        y2="70.738"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE32ED" />
        <stop
          offset="1"
          stopColor="#B31CE8"
        />
      </linearGradient>
      <linearGradient
        id="b"
        x1="30.644"
        x2="31.801"
        y1="24.5"
        y2="45.762"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE32ED" />
        <stop
          offset="1"
          stopColor="#B31CE8"
        />
      </linearGradient>
    </defs>
  </svg>
);

export default IconCheckXXLRound;
