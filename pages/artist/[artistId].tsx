import Head from "next/head";
import { useRouter } from "next/router";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import ArtistPage from "@/stories/Kdan Music Book/Pages/ArtistPage";

export default function Artist() {
  const router = useRouter();
  const artistId = router.query.artistId;

  const { data: artist } = fetchHooks.useGetArtistById({
    artistId: `${artistId}`,
  });

  if (artist) {
    return (
      <>
        <Head>
          <title>{artist.name} - 凱鈿音樂</title>
        </Head>
        <ArtistPage artist={artist} />
      </>
    );
  }
}
