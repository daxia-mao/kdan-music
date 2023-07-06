import List from "@/stories/Kdan Music Book/Components/List";
import { ArtistItem, ArtistListProps } from ".";

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
