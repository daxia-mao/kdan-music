import List from "@/stories/Kdan Music Book/Components/List";
import { TrackListProps } from ".";
import TrackItem from "./TrackItem";

const TrackList = ({ tracks }: TrackListProps) => {
  if (tracks) {
    return (
      <List chunkSize={10}>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </List>
    );
  }
};

export default TrackList;
