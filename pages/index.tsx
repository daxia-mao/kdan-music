import {
  Header,
  Trust,
  MusicPreview,
  PopularCategories,
  WhyUs,
  Plan,
  Testmonials,
} from "@/stories/Kdan Music Book/Pages/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>凱鈿音樂</title>
      </Head>
      <main className="w-full overflow-hidden">
        <Header />
        <Trust />
        <MusicPreview />
        <PopularCategories />
        <WhyUs />
        <Plan />
        <Testmonials />
      </main>
    </>
  );
}
