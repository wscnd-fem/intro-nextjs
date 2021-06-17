import { roboto, tailwind } from "@theme-ui/presets";

const preset = tailwind;

const theme = {
  ...preset,
  colors: {
    ...preset.colors,
  },
  containers: {
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
    },
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
  },
  styles: {
    ...preset.styles,
  },
  buttons: {
    ...preset.buttons,
    primary: {
      color: preset.colors.background,
      bg: preset.colors.primary,
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: preset.colors.secondary,
      "&:hover": {
        bg: "text",
      },
    },
  },
};

console.dir(theme, { depth: Infinity });

export default theme;
