import '../index.scss';

const IconSearch = ({ width = 32, height = 32, fill = 'var(--gray1000)' }) => (
  <svg
    className="icon"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 6.5C10.5294 6.5 6.5 10.5294 6.5 15.5C6.5 20.4706 10.5294 24.5 15.5 24.5C18.3411 24.5 20.8748 23.1835 22.5242 21.1273L27.2133 24.4096C27.4395 24.568 27.7513 24.513 27.9096 24.2867C28.068 24.0605 28.013 23.7487 27.7867 23.5904L23.1058 20.3137C23.9887 18.9216 24.5 17.2705 24.5 15.5C24.5 10.5294 20.4706 6.5 15.5 6.5ZM7.5 15.5C7.5 11.0817 11.0817 7.5 15.5 7.5C19.9183 7.5 23.5 11.0817 23.5 15.5C23.5 19.9183 19.9183 23.5 15.5 23.5C11.0817 23.5 7.5 19.9183 7.5 15.5Z"
      fill={fill}
    />
  </svg>
);

export default IconSearch;
