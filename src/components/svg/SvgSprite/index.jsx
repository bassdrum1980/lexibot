import ReactSvgSprite from 'react-svg-sprite';

const SvgSprite = () => (
  <ReactSvgSprite
    symbols={[
      {
        name: 'plus',
        svg: [
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<path d="M31.75 16C31.75 24.6985 24.6985 31.75 16 31.75C7.30151 31.75 0.25 24.6985 0.25 16C0.25 7.30151 7.30151 0.25 16 0.25C24.6985 0.25 31.75 7.30151 31.75 16Z" fill="white" stroke="var(--gray400)" stroke-width="0.5"/>',
          '<path d="M8 16H24M16 24L16 8" stroke="var(--gray1000)" stroke-linecap="round" stroke-linejoin="round"/>',
          '</svg>',
        ].join(''),
      },
      {
        name: 'plus-primary',
        svg: [
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<circle cx="16" cy="16" r="15.75" fill="#ffffff" stroke="var(--primary1000)" stroke-width=".5"/>',
          '<path stroke="var(--primary1000)" stroke-linecap="round" stroke-linejoin="round" d="M8 16h16M16 24V8"/>',
          '</svg>',
        ].join(''),
      },
      {
        name: 'star-flame',
        svg: [
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<path d="M15.3678 6.45724C15.5668 5.84759 16.4332 5.84759 16.6322 6.45724L18.5372 12.2935C18.6262 12.5661 18.8814 12.7507 19.1694 12.7507H25.334C25.9779 12.7507 26.2457 13.571 25.7247 13.9478L20.7375 17.5547C20.5045 17.7232 20.407 18.0219 20.496 18.2946L22.4009 24.1308C22.5999 24.7404 21.899 25.2474 21.378 24.8706L16.3907 21.2636C16.1577 21.0951 15.8423 21.0951 15.6093 21.2636L10.622 24.8706C10.101 25.2474 9.40008 24.7404 9.59907 24.1308L11.504 18.2946C11.593 18.0219 11.4955 17.7232 11.2625 17.5547L6.27529 13.9478C5.75432 13.571 6.02207 12.7507 6.66602 12.7507H12.8306C13.1186 12.7507 13.3738 12.5661 13.4628 12.2935L15.3678 6.45724Z" fill="var(--flame1000)"/>',
          '</svg>',
        ].join(''),
      },
      {
        name: 'star',
        svg: [
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<path d="M15.3678 6.45724C15.5668 5.84759 16.4332 5.84759 16.6322 6.45724L18.5372 12.2935C18.6262 12.5661 18.8814 12.7507 19.1694 12.7507H25.334C25.9779 12.7507 26.2457 13.571 25.7247 13.9478L20.7375 17.5547C20.5045 17.7232 20.407 18.0219 20.496 18.2946L22.4009 24.1308C22.5999 24.7404 21.899 25.2474 21.378 24.8706L16.3907 21.2636C16.1577 21.0951 15.8423 21.0951 15.6093 21.2636L10.622 24.8706C10.101 25.2474 9.40008 24.7404 9.59907 24.1308L11.504 18.2946C11.593 18.0219 11.4955 17.7232 11.2625 17.5547L6.27529 13.9478C5.75432 13.571 6.02207 12.7507 6.66602 12.7507H12.8306C13.1186 12.7507 13.3738 12.5661 13.4628 12.2935L15.3678 6.45724Z" fill="var(--gray300)"/>',
          '</svg>',
        ].join(''),
      },
      {
        name: 'chevron-right',
        svg: [
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<path d="M31.75 16C31.75 24.6985 24.6985 31.75 16 31.75C7.30151 31.75 0.25 24.6985 0.25 16C0.25 7.30151 7.30151 0.25 16 0.25C24.6985 0.25 31.75 7.30151 31.75 16Z" fill="white" stroke="var(--gray400)" stroke-width="0.5"/>',
          '<path d="M14 10L20 16L14 22" stroke="var(--gray1000)" stroke-linecap="round" stroke-linejoin="round"/>',
          '</svg>',
        ].join(''),
      },
      {
        name: 'chevron-left',
        svg: [
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<circle cx="16" cy="16" r="16" fill="white"/>',
          '<path d="M18 10L12 16L18 22" stroke="var(--primary1000)" stroke-linecap="round" stroke-linejoin="round"/>',
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
      },
      {
        name: 'check-round',
        svg: [
          '<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<path fill="#fff" fill-rule="evenodd" d="M35 70c19.33 0 35-15.67 35-35S54.33 0 35 0 0 15.67 0 35s15.67 35 35 35Zm-2.014-25.66a1.189 1.189 0 0 1-1.638 0l-7.349-7.243a1.147 1.147 0 0 1 0-1.614l1.594-1.571a1.134 1.134 0 0 1 1.593 0l5.003 4.886 10.625-10.47a1.134 1.134 0 0 1 1.594 0l1.594 1.57a1.147 1.147 0 0 1 0 1.614L32.986 44.34Z" clip-rule="evenodd"/>',
          '</svg>',
        ].join(''),
      },
    ]}
  />
);

export default SvgSprite;
