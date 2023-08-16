import Head from "next/head";
import { useRouter } from "next/router";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import AlbumPage from "@/stories/Kdan Music Book/Pages/AlbumPage";

export default function Album() {
  const router = useRouter();
  const albumId = router.query.albumId;

  const { data: album } = fetchHooks.useGetAlbumById({
    albumId: `${albumId}`,
  });

  if (album) {
    return (
      <>
        <Head>
          <title>{album.name} - 凱鈿音樂</title>
        </Head>
        <AlbumPage album={album} />
      </>
    );
  }
}
