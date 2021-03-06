import { theme as defaultTheme } from "@chakra-ui/core";

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    amaranth: {
      100: "#FCECEE",
      200: "#F8CFD5",
      300: "#F3B2BC",
      400: "#EB7889",
      500: "#E23E57",
      600: "#CB384E",
      700: "#882534",
      800: "#661C27",
      900: "#44131A",
    },
    camelot: {
      100: "#F3EAED",
      200: "#E1CBD3",
      300: "#CFACB8",
      400: "#AC6E83",
      500: "#88304E",
      600: "#7A2B46",
      700: "#521D2F",
      800: "#3D1623",
      900: "#290E17",
    },
    voodoo: {
      100: "#EEE9ED",
      200: "#D4C9D1",
      300: "#BAA8B5",
      400: "#86667E",
      500: "#522546",
      600: "#4A213F",
      700: "#31162A",
      800: "#251120",
      900: "#190B15",
    },
    revolver: {
      100: "#EAE8EC",
      200: "#CCC7CF",
      300: "#ADA5B2",
      400: "#6F6179",
      500: "#311D3F",
      600: "#2C1A39",
      700: "#1D1126",
      800: "#160D1C",
      900: "#0F0913",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Open Sans, serif",
    mono: "Menlo, monospace",
  },
};
