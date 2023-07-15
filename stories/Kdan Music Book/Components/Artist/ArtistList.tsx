import List from "@/stories/Kdan Music Book/Components/List";
import { ArtistItem } from ".";
import { SimplifiedArtistObject } from "@/stories/Kdan Music Book/types";

export interface ArtistListProps {
  artists: SimplifiedArtistObject[];
}

const ArtistList = ({ artists }: ArtistListProps) => {
  if (artists) {
    return (
      <List chunkSize={10}>
        {artists.map((artist) => (
          <ArtistItem key={artist.id} artist={artist} />
        ))}
      </List>
    );
  }
};

export default ArtistList;
