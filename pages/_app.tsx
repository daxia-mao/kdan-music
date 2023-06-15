import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "@/stories/Kdan Music Book/theme";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
