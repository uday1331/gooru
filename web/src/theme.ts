import { theme as defaultTheme } from "@chakra-ui/core";

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    indigo: "#111d5e",
    valentine: "#c70039",
    tiger: "#f37121",
    honey: "#ffbd69",
  },
  fonts: {
    body: "Saira, sans-serif",
    heading: "Saira, serif",
    mono: "Menlo, monospace",
  },
};
