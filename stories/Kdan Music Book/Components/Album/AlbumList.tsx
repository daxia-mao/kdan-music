import AlbumItem from "@/stories/Kdan Music Book/Components/Album/AlbumItem";
import List from "@/stories/Kdan Music Book/Components/List";
import { SimplifiedAlbumObject } from "@/stories/Kdan Music Book/types";

export type AlbumListProps = {
  albums: SimplifiedAlbumObject[];
};

const AlbumList = ({ albums }: AlbumListProps) => {
  if (albums) {
    return (
      <List chunkSize={10}>
        {albums.map((album) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </List>
    );
  }
};

export default AlbumList;
