export const theme = {
  colors: {
    black: "#030303",
    white: " #ffffff",
    accent: "#2F9F7A",
    primaryLight: "#edf2f8",
  },
  fontFamilies: {
    base: "Mulish, sans-serif",
  },
  fontSizes: {
    headingBase: "2.75rem",
    headingMobile: "2rem",
    headingDesktop: "4rem",
  },
  fontWeights: {
    regular: "500",
    regularThicker: "600",
    bold: "800",
  },
  padding: {
    buttonPadding: "1rem 2rem",
  },
  border: {
    buttonBorderRadius: "10px",
  },
  transition: {
    baseTransition: "all 0.3s ease-in-out",
  },
  breakpoints: {
    xs: "450px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "2000px",
  },
  animations: {
    fadeIn: {
      whileInView: { opacity: [0, 1] },
      transition: { duration: 0.5 },
    },
  },
};
