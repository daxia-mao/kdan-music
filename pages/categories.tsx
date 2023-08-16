import CategoriesPage from "@/stories/Kdan Music Book/Pages/CategoriesPage";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Head from "next/head";

export default function Categories() {
  const { data: categories } = fetchHooks.useGetPopularCategories({
    limit: 50,
    country: "JP",
  });
  if (categories) {
    return (
      <>
        <Head>
          <title>所有類別 - 凱鈿音樂</title>
        </Head>
        <CategoriesPage categories={categories} />
      </>
    );
  }
}
