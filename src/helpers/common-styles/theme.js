export const theme = Object.freeze({
  palette: {
    primary: '#111111',
    secondary: '#111321',
    triadic: '#ffffff',
    accent: '#F59256',
    hoverAccent: '#FF6101',
    translucent: '#11111199',
    link: '#3091EB',
    border: 'rgba(245, 146, 86, 0.5)',
  },
  backgrounds: {
    primary: '#FDF7F2',
    secondary: '#FFFFFF',
    gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
    backdrop: 'rgba(17, 17, 17, 0.6)',
    whiteTranslucent: 'rgba(255, 255, 255, 0.6);',
  },
  fonts: {
    primary: "'Manrope', sans-serif",
    logo: "'Poppins', sans-serif",
  },
  screens: {
    mobile: '320px',
    toTablet: '767px',
    tablet: '768px',
    toDesktop: '1279px',
    desktop: '1280px',
  },
  shadows: {
    primary: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    card: '7px 4px 14px rgba(49, 21, 4, 0.07)',
  },
  animations: {
    transform: 'scale(1.05)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
