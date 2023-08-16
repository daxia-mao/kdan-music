import { ArtistList } from "@/stories/Kdan Music Book/Components/Artist";
import { fetchers } from "@/stories/Kdan Music Book/api";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import {
  SimplifiedAlbumObject,
  SimplifiedArtistObject,
} from "@/stories/Kdan Music Book/types";
import React, { useEffect, useState } from "react";

type TracksOfAlbumProps = {
  album: SimplifiedAlbumObject;
};

function AlbumOfArtists({ album }: TracksOfAlbumProps) {
  const [artists, setArtists] = useState<SimplifiedArtistObject[]>();
  useEffect(() => {
    const artistIds = album.artists.map((artist) => artist.id);
    fetchers.fetchArtistsByIds({ artistIds }).then((res) => setArtists(res));
  }, []);
  if (artists) {
    return (
      <Page.Section>
        <Page.Title>演出者</Page.Title>
        <ArtistList artists={artists} />
      </Page.Section>
    );
  }
}

export default AlbumOfArtists;
