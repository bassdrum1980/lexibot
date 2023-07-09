import '../index.scss';

const IconLogoCardsXL = ({ width = 40, height = 40 }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="var(--logo300)"
      d="M18 18.238c0-.684.606-1.238 1.353-1.238h7.294c.747 0 1.353.554 1.353 1.238v10.524c0 .684-.606 1.238-1.353 1.238h-7.294C18.606 30 18 29.446 18 28.762V18.238Z"
    />
    <path
      fill="var(--logo200)"
      d="M15 15.238c0-.684.606-1.238 1.353-1.238h7.294c.747 0 1.353.554 1.353 1.238v10.524c0 .684-.606 1.238-1.353 1.238h-7.294C15.606 27 15 26.446 15 25.762V15.238Z"
    />
    <path
      fill="var(--logo100)"
      d="M12 12.238c0-.684.606-1.238 1.353-1.238h7.294c.747 0 1.353.554 1.353 1.238v10.524c0 .684-.606 1.238-1.353 1.238h-7.294C12.606 24 12 23.446 12 22.762V12.238Z"
    />
  </svg>
);

export default IconLogoCardsXL;
