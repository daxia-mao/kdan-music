import Head from "next/head";
import { useRouter } from "next/router";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import TrackPage from "@/stories/Kdan Music Book/Pages/TrackPage";

export default function Track() {
  const router = useRouter();
  const trackId = router.query.trackId;

  const { data: track } = fetchHooks.useGetTrackById({
    trackId: `${trackId}`,
  });

  if (track) {
    return (
      <>
        <Head>
          <title>{track.name} - 凱鈿音樂</title>
        </Head>
        <TrackPage track={track} />
      </>
    );
  }
}
