import fonts from "./fonts"

const globalStyles = {
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "*": {
      margin: 0,
    },
    body: {
      lineHeight: 1.4,
      "-webkit-font-smoothing": "antialiased",
    },
    "img, picture, video, canvas, svg": {
      display: "block",
      maxWidth: "100%",
    },
    "input, button, textarea, select": {
      font: "inherit",
    },
    "p, h1, h2, h3, h4, h5, h6": {
      overflowWrap: "break-word",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "serif",
      fontWeight: 700,
    },
    "p, input, button, textarea, select": {
      fontFamily: "sans-serif",
      fontSize: "calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)))",
    },
  },
  ...fonts,
}

export default globalStyles
