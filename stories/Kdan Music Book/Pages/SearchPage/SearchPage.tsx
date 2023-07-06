import React from "react";
import { SearchPageProps } from ".";
import { AlbumList } from "@/stories/Kdan Music Book/Components/Album";
import { ArtistList } from "@/stories/Kdan Music Book/Components/Artist";
import { TrackList } from "@/stories/Kdan Music Book/Components/Track";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { SimplifiedArtistObject, TrackObject, SimplifiedAlbumObject } from "@/stories/Kdan Music Book/types";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";

const ResultForArtists = ({
  artists,
}: {
  artists: SimplifiedArtistObject[];
}) => {
  return (
    artists.length > 0 && (
      <div className="flex flex-col gap-4">
        <Page.Title>藝人</Page.Title>
        <ArtistList artists={artists} />
      </div>
    )
  );
};
const ResultForTracks = ({ tracks }: { tracks: TrackObject[] }) => {
  return (
    tracks.length > 0 && (
      <div className="flex flex-col gap-4">
        <Page.Title>曲目</Page.Title>
        <TrackList tracks={tracks} />
      </div>
    )
  );
};
const ResultForAlbums = ({ albums }: { albums: SimplifiedAlbumObject[] }) => {
  return (
    albums.length > 0 && (
      <div className="flex flex-col gap-4">
        <Page.Title>專輯</Page.Title>
        <AlbumList albums={albums} />
      </div>
    )
  );
};

export function SearchPage({ query, searchItems }: SearchPageProps) {
  return (
    <main className="bg-gray-800 w-full p-8 flex flex-col gap-6 min-h-screen">
      <Header.Wrapper>
        <Header.Title>"{query}" 的搜尋結果</Header.Title>
      </Header.Wrapper>
      {searchItems.tracks && <ResultForTracks tracks={searchItems.tracks} />}
      {searchItems.artists && (
        <ResultForArtists artists={searchItems.artists} />
      )}
      {searchItems.albums && <ResultForAlbums albums={searchItems.albums} />}
    </main>
  );
}
