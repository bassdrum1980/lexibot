import ReactSvgSprite from 'react-svg-sprite';

const SvgSprite = () => (
  <ReactSvgSprite
    symbols={[{
      name: 'chevron-o',
      svg: [
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<path d="M31.75 16C31.75 24.6985 24.6985 31.75 16 31.75C7.30151 31.75 0.25 24.6985 0.25 16C0.25 7.30151 7.30151 0.25 16 0.25C24.6985 0.25 31.75 7.30151 31.75 16Z" fill="white" stroke="var(--gray400)" stroke-width="0.5"/>',
        '<path d="M14 10L20 16L14 22" stroke="var(--primary1000)" stroke-linecap="round" stroke-linejoin="round"/>',
        '</svg>',
      ].join(''),
    },
    {
      name: 'search',
      svg: [
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 6.5C10.5294 6.5 6.5 10.5294 6.5 15.5C6.5 20.4706 10.5294 24.5 15.5 24.5C18.3411 24.5 20.8748 23.1835 22.5242 21.1273L27.2133 24.4096C27.4395 24.568 27.7513 24.513 27.9096 24.2867C28.068 24.0605 28.013 23.7487 27.7867 23.5904L23.1058 20.3137C23.9887 18.9216 24.5 17.2705 24.5 15.5C24.5 10.5294 20.4706 6.5 15.5 6.5ZM7.5 15.5C7.5 11.0817 11.0817 7.5 15.5 7.5C19.9183 7.5 23.5 11.0817 23.5 15.5C23.5 19.9183 19.9183 23.5 15.5 23.5C11.0817 23.5 7.5 19.9183 7.5 15.5Z" fill="var(--gray1000)" />',
        '</svg>',
      ].join(''),
    }]}
  />
);

export default SvgSprite;
