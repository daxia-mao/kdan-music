import Header from "@/stories/Kdan Music Book/Header";
import MusicPreview from "@/stories/Kdan Music Book/MusicPreview";
import PopularCategories from "@/stories/Kdan Music Book/PopularCategories";
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
      </main>
    </>
  );
}
