import AlbumItem from "@/stories/Kdan Music Book/Components/Album/AlbumItem";
import AlbumList from "@/stories/Kdan Music Book/Components/Album/AlbumList";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { SimplifiedAlbumObject } from "@/stories/Kdan Music Book/types";

export type AlbumProps = {
  album: SimplifiedAlbumObject;
};

export type AlbumListProps = {
  albums: SimplifiedAlbumObject[];
};

function AlbumItemWithHooks() {
  const { data: album } = fetchHooks.useGetAlbumById({
    albumId: "3CcrISxzIwT6ZGplop5E5c",
  });

  if (album) {
    return <AlbumItem album={album} />;
  }
}
function AlbumListWithHooks() {
  const { data: albums } = fetchHooks.useGetAlbumsByArtist({
    artistId: "6xErgeZYatiaQ36SB5bvi8",
    limit: 20,
    include_groups: ["album"],
  });

  if (albums) {
    return <AlbumList albums={albums} />;
  }
}
export { AlbumItem, AlbumList, AlbumItemWithHooks, AlbumListWithHooks };
