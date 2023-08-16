import Head from "next/head";
import { useRouter } from "next/router";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import CategoryPage from "@/stories/Kdan Music Book/Pages/CategoryPage";

export default function Category() {
  const router = useRouter();
  const categoryId = router.query.categoryId;

  const { data: category } = fetchHooks.useGetCategory({
    categoryId: categoryId as string,
  });

  if (category) {
    console.log(category.id);
    return (
      <>
        <Head>
          <title>{category.name} - 凱鈿音樂</title>
        </Head>
        <CategoryPage category={category} />
      </>
    );
  }
}
