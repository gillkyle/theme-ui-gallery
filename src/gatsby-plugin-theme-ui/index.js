import prism from "@theme-ui/prism/presets/theme-ui"
import { alpha, darken } from "@theme-ui/color"
import nightOwl from "@theme-ui/prism/presets/night-owl.json"

export default {
  useCustomProperties: true,
  initialColorMode: "light",
  colors: {
    primary: "#0F609B", // primary.2
    // primarys: [
    //   "#003E6B",
    //   "#0A558C",
    //   "#0F609B",
    //   "#186FAF",
    //   "#2680C2",
    //   "#4098D7",
    //   "#62B0E8",
    //   "#84C5F4",
    //   "#B6E0FE",
    //   "#DCEEFB",
    // ],
    secondary: "#CB6E17", // secondary.2
    // secondarys: [
    //   "#8D2B0B",
    //   "#B44D12",
    //   "#CB6E17",
    //   "#DE911D",
    //   "#F0B429",
    //   "#F7C948",
    //   "#FADB5F",
    //   "#FCE588",
    //   "#FFF3C4",
    //   "#FFFBEA",
    // ],
    text: "#102A43", // neutrals.0
    background: "#ffffff",
    soft: "#f3f7f9",
    border: "#EDF2F7",
    grayPrimary: "#9fa4a9", // neutrals.2
    graySecondary: "#aab3bb", // neutrals.6
    translucent: "rgba(35,116,175,0.35)",
    // neutrals: [
    //   "#102A43",
    //   "#243B53",
    //   "#334E68",
    //   "#486581",
    //   "#627D98",
    //   "#829AB1",
    //   "#9FB3C8",
    //   "#BCCCDC",
    //   "#D9E2EC",
    //   "#F0F4F8",
    // ],
    modes: {
      dark: {
        text: "#ffffff",
        background: "#060606",
        primary: "#71abe6",
        secondary: "#dcb219",
        soft: "#121519",
        border: "#373737",
        grayPrimary: "#687b8e",
        graySecondary: "#969a9e",
        translucent: "rgba(49,148,220,0.35)",
      },
      swiss: {
        text: "#3e4652",
        background: "#fffbf7",
        primary: "hsl(10, 80%, 50%)",
        secondary: "hsl(10, 60%, 50%)",
        soft: "#fdf9f3",
        border: "#f9e8d2",
        grayPrimary: "#687b8e", // neutrals.2
        graySecondary: "#aab3bb", // neutrals.6
        translucent: "rgba(202,127,102,0.35)",
      },
      deep: {
        text: "hsl(210, 50%, 96%)",
        background: "#161617",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        soft: "#1e202d",
        border: "#554E68",
        grayPrimary: "#c2d3e4",
        graySecondary: "#969a9e",
        translucent: "rgba(184,81,222,0.35)",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
  },
  fontSizes: [12, 14, 16, 20, 24, 36],
  fontWeights: {
    regular: 400,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: [0, 2, 4, 8],
  space: [0, 4, 8, 16, 32, 64],
  sizes: {
    sidebar: 256,
    container: 768,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "text.heading",
      fontSize: [32, 36],
      fontWeight: "heading",
      letterSpacing: "-0.03em",
      mt: 3,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      fontWeight: "bold",
      cursor: "pointer",
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary",
    },
    ghost: {
      color: "text",
      bg: alpha("primary", 0.1),
      "&:hover": {
        bg: alpha("primary", 0.2),
      },
    },
    black: {
      fontWeight: "bold",
      color: "background",
      bg: "text",
      "&:hover, &:focus": {
        bg: "primary",
      },
    },
  },
  links: {
    button: {
      display: "inline-block",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: 2,
      p: 3,
      color: "background",
      bg: "text",
      borderRadius: 6,
      "&:hover, &:focus": {
        color: "background",
        bg: "primary",
      },
    },
    nav: {
      display: "block",
      width: "100%",
      px: 2,
      py: 2,
      color: "inherit",
      textDecoration: "none",
      fontSize: 1,
      fontWeight: "bold",
      bg: "transparent",
      transitionProperty: "background-color",
      transitionTimingFunction: "ease-out",
      transitionDuration: ".2s",
      borderRadius: 2,
      "&:hover": {
        bg: "soft",
      },
      "&.active": {
        color: "primary",
        bg: "soft",
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "border",
      boxShadow: "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",
      "&:focus": {
        borderColor: "primary",
        boxShadow: theme => `0 0 0 3px rgba(35,116,175,0.35)`, // rgba(35,116,175,0.35)
        outline: "none",
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
    h1: {
      variant: "text.display",
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 3,
    },
    h5: {
      variant: "text.heading",
      fontSize: 2,
    },
    h6: {
      variant: "text.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      color: `background`,
      p: 3,
      bg: "#334E68",
      overflow: "auto",
      code: {
        color: "inherit",
        ...nightOwl,
      },
      variant: "prism",
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
      ...nightOwl,
      bg: "#334E68",
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: darken("soft", 0.1),
      borderRadius: `2`,
      p: 1,
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      [["th", "td"]]: {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "border",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "border",
    },
    xray: {
      "*": {
        outline: "1px solid rgba(0, 192, 255, .25)",
      },
    },
    navlink: {
      display: "inline-block",
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus": {
        color: "primary",
      },
    },
  },
  prism,
}
