import Head from "next/head";
import { useRouter } from "next/router";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import PlaylistPage from "@/stories/Kdan Music Book/Pages/PlaylistPage";

export default function Playlist() {
  const router = useRouter();
  const playlistId = router.query.playlistId;

  const { data: playlist } = fetchHooks.useGetPlaylist({
    pid: `${playlistId}`,
  });

  if (playlist) {
    return (
      <>
        <Head>
          <title>{playlist.name} - 凱鈿音樂</title>
        </Head>
        <PlaylistPage playlist={playlist} />
      </>
    );
  }
}
