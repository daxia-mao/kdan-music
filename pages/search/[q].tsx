import Head from "next/head";
import { useRouter } from "next/router";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { SearchPage } from "@/stories/Kdan Music Book/Pages/SearchPage";

export default function Artist() {
  const router = useRouter();
  const query = router.query.q as string;
  const { data: searchResult } = fetchHooks.useGetSearchItems({
    q: query,
    limit: 20,
  });

  if (searchResult) {
    return (
      <>
        <Head>
          <title>&#34;{query}&#34; 的搜尋結果 - 凱鈿音樂</title>
        </Head>
        <SearchPage query={query} searchItems={searchResult} />
      </>
    );
  }
}
