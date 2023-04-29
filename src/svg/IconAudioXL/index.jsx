import '../index.scss';

const IconAudioXL = ({ width = 40, height = 40 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      r="19.75"
      fill="#fff"
      stroke="var(--gray400)"
      strokeWidth=".5"
    />
    <path
      stroke="var(--gray1000)"
      strokeLinejoin="round"
      d="M23.853 20.19c-.453.41-.85.96-.97 1.634l-.08.44a1.5 1.5 0 0 1-1.476 1.236h-2.654a1.5 1.5 0 0 1-1.476-1.235l-.08-.44c-.12-.674-.517-1.225-.97-1.635-1.022-.925-1.647-2.208-1.647-3.619 0-2.766 2.427-5.071 5.5-5.071s5.5 2.305 5.5 5.071c0 1.411-.625 2.693-1.647 3.619Z"
    />
    <path
      stroke="var(--gray1000)"
      strokeLinecap="round"
      strokeWidth=".75"
      d="M18.001 25.25h4M18.001 26.75h4M18.751 28.25h2.5"
    />

    <circle
      cx="20"
      cy="20"
      r="19.75"
      fill="#fff"
      stroke="var(--gray400)"
      strokeWidth=".5"
    />
    <path
      stroke="var(--gray1000)"
      strokeLinecap="round"
      strokeWidth=".75"
      d="M26 17.5v6M28 22v-3M24 18.5v4"
    />
    <path
      stroke="var(--gray1000)"
      d="M20.703 14.576a.5.5 0 0 1 .797.403v10.042a.5.5 0 0 1-.797.402l-4.142-3.052a1.5 1.5 0 0 0-.89-.292H14a.5.5 0 0 1-.5-.5V18.42a.5.5 0 0 1 .5-.5h1.671a1.5 1.5 0 0 0 .89-.292l4.142-3.053Z"
    />
  </svg>
);

export default IconAudioXL;
