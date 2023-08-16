import { PlaylistList } from "@/stories/Kdan Music Book/Components/Playlist";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { CategoryObject } from "@/stories/Kdan Music Book/types";

type CategoryContentProps = {
  category: CategoryObject;
};

function CategoryContent({ category }: CategoryContentProps) {
  const { data: playlists } = fetchHooks.useGetPlaylistsByCategoryId({
    categoryId: category.id,
    limit: 50,
  });
  if (playlists) {
    console.log(playlists);
    return (
      <Page.Section>
        <Page.Title>{category.name} 中的合輯</Page.Title>
        <PlaylistList playlists={playlists} />
      </Page.Section>
    );
  }
}

export default CategoryContent;
