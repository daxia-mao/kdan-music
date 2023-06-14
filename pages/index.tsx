import Button from "@/stories/Kdan Music Book/Button";
import theme from "@/stories/Kdan Music Book/theme";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>凱鈿音樂</title>
      </Head>
      <main className="w-full">
        <ThemeProvider theme={theme}>
          <Button variant="primary" size="large">
            Primary Button
          </Button>
        </ThemeProvider>
      </main>
    </>
  )
}
