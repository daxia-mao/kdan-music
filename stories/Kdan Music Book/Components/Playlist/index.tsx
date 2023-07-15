import PlaylistItem from "@/stories/Kdan Music Book/Components/Playlist/PlaylistItem";
import PlaylistList from "@/stories/Kdan Music Book/Components/Playlist/PlaylistList";
import { fetchHooks } from "@/stories/Kdan Music Book/api";

const PlaylistItemWithHooks = () => {
  const { data: playlist, error } = fetchHooks.useGetPlaylist({
    pid: "37i9dQZEVXbMnZEatlMSiu",
  });

  if (playlist) {
    return <PlaylistItem playlist={playlist} />;
  }
};

const PlaylistListWithHooks = () => {
  const { data: playlists, error } = fetchHooks.useGetFeaturedPlaylists({
    country: 'TW',
    limit: 50,
  });

  if (playlists) {
    return <PlaylistList playlists={playlists} />;
  }
};

export { PlaylistItem, PlaylistItemWithHooks, PlaylistList, PlaylistListWithHooks };
