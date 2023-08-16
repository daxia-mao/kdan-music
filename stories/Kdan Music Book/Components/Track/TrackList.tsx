import List from "@/stories/Kdan Music Book/Components/List";
import TrackItem from "./TrackItem";
import { TrackObject } from "@/stories/Kdan Music Book/types";

export type TrackListProps = {
  tracks: TrackObject[];
};

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
