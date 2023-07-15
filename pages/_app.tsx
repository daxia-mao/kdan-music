import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "@/stories/Kdan Music Book/theme";
import type { AppProps } from "next/app";
import Navbar from "@/stories/Kdan Music Book/Components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/inter";
import "@fontsource/poppins";
import { Provider } from "react-redux";
import { store } from "@/stories/Kdan Music Book/app/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </Provider>
  );
}
