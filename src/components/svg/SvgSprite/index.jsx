import ReactSvgSprite from 'react-svg-sprite';

const SvgSprite = () => (
  <ReactSvgSprite
    symbols={[{
      name: 'search',
      svg: [
        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 6.5C10.5294 6.5 6.5 10.5294 6.5 15.5C6.5 20.4706 10.5294 24.5 15.5 24.5C18.3411 24.5 20.8748 23.1835 22.5242 21.1273L27.2133 24.4096C27.4395 24.568 27.7513 24.513 27.9096 24.2867C28.068 24.0605 28.013 23.7487 27.7867 23.5904L23.1058 20.3137C23.9887 18.9216 24.5 17.2705 24.5 15.5C24.5 10.5294 20.4706 6.5 15.5 6.5ZM7.5 15.5C7.5 11.0817 11.0817 7.5 15.5 7.5C19.9183 7.5 23.5 11.0817 23.5 15.5C23.5 19.9183 19.9183 23.5 15.5 23.5C11.0817 23.5 7.5 19.9183 7.5 15.5Z" />',
        '</svg>',
      ].join(''),
    },
    {
      name: 'mic',
      svg: [
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1V1Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M12 19V23" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M8 23H16" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '</svg>',
      ].join(''),
    },
    {
      name: 'mic-off',
      svg: [
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<g clip-path="url(#clip0_355_2642)">',
        '<path d="M1 1L23 23" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M15 9.34009V4.00009C15.0007 3.25612 14.725 2.53841 14.2264 1.98629C13.7277 1.43417 13.0417 1.08703 12.3015 1.01227C11.5613 0.937497 10.8197 1.14043 10.2207 1.58168C9.62172 2.02293 9.20805 2.671 9.06 3.40009M9 9.00009V12.0001C9.00052 12.5931 9.17675 13.1726 9.50643 13.6654C9.83611 14.1583 10.3045 14.5424 10.8523 14.7692C11.4002 14.9961 12.0029 15.0555 12.5845 14.94C13.1661 14.8244 13.7005 14.5391 14.12 14.1201L9 9.00009Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M17.0002 16.95C16.024 17.9464 14.7723 18.6285 13.4058 18.9086C12.0393 19.1887 10.6202 19.0542 9.33068 18.5223C8.04115 17.9903 6.93995 17.0853 6.16836 15.9232C5.39677 14.761 4.98998 13.3949 5.00019 12V10M19.0002 10V12C18.9998 12.4124 18.963 12.824 18.8902 13.23" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M12 19V23" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '<path d="M8 23H16" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        '</g>',
        '<defs><clipPath id="clip0_355_2642"><rect width="24" height="24" fill="white"/>',
        '</clipPath></defs>',
        '</svg>',
      ].join(''),
    }]}
  />
);

export default SvgSprite;
