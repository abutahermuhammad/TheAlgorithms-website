"use client";
import { IBM_Plex_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1c2834",
    },
    secondary: {
      main: "#00bcb4",
    },
  },
  typography: {
    fontFamily: ibm_plex_sans.style.fontFamily,
  },
});

export default theme;
