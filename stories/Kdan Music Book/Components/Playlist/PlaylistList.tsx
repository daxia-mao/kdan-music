import List from "@/stories/Kdan Music Book/Components/List";
import PlaylistItem from "@/stories/Kdan Music Book/Components/Playlist/PlaylistItem";
import { PlaylistObject } from "@/stories/Kdan Music Book/types";

export interface ArtistListProps {
  playlists: PlaylistObject[];
}

const PlaylistList = ({ playlists }: ArtistListProps) => {
  if (playlists) {
    return (
      <List chunkSize={10}>
        {playlists.map(
          (playlist) =>
            playlist && <PlaylistItem key={playlist.id} playlist={playlist} />
        )}
      </List>
    );
  }
};

export default PlaylistList;
