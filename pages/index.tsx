import Header from "@/stories/Kdan Music Book/Header";
import PopularCategories from "@/stories/Kdan Music Book/PopularCategories";
import Trust from "@/stories/Kdan Music Book/Trust";
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
        <PopularCategories />
      </main>
    </>
  );
}
