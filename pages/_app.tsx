import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "@/stories/Kdan Music Book/theme";
import type { AppProps } from "next/app";
import Navbar from "@/stories/Kdan Music Book/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/inter";
import "@fontsource/poppins";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
