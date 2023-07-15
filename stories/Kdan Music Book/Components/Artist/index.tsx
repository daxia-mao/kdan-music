import ArtistItem from "@/stories/Kdan Music Book/Components/Artist/ArtistItem";
import ArtistList from "@/stories/Kdan Music Book/Components/Artist/ArtistList";
import { fetchHooks } from "@/stories/Kdan Music Book/api";

const ArtistItemWithHooks = () => {
  const { data: artist, error } = fetchHooks.useGetArtistById({
    artistId: "64tJ2EAv1R6UaZqc4iOCyj",
  });

  if (artist) {
    return <ArtistItem artist={artist} />;
  }
};

const ArtistListWithHooks = () => {
  const { data: relatedArtists } = fetchHooks.useGetRelatedArtistsById({
    artistId: "0bdfiayQAKewqEvaU6rXCv",
  });

  if (relatedArtists) {
    return <ArtistList artists={relatedArtists} />;
  }
};

export { ArtistItem, ArtistList, ArtistItemWithHooks, ArtistListWithHooks };
