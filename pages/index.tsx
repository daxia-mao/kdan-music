import Header from "@/stories/Kdan Music Book/Header";
import MusicPreview from "@/stories/Kdan Music Book/MusicPreview";
import Plan from "@/stories/Kdan Music Book/Plan";
import PopularCategories from "@/stories/Kdan Music Book/PopularCategories";
import Testmonials from "@/stories/Kdan Music Book/Testmonials";
import Trust from "@/stories/Kdan Music Book/Trust";
import WhyUs from "@/stories/Kdan Music Book/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>凱鈿音樂</title>
      </Head>
      <main className="w-full">
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
