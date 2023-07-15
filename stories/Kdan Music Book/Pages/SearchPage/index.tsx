import React from "react";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import styled from "styled-components";
import Page from "@/stories/Kdan Music Book/styled/Page.styled";
import { AlbumList } from "@/stories/Kdan Music Book/Components/Album";
import { TrackList } from "@/stories/Kdan Music Book/Components/Track";
import { ArtistList } from "@/stories/Kdan Music Book/Components/Artist";
import { PlaylistObject, SearchObject, SimplifiedAlbumObject, SimplifiedArtistObject, TrackObject } from "@/stories/Kdan Music Book/types";
import { PlaylistList } from "@/stories/Kdan Music Book/Components/Playlist";

const SearchPageWithHooks = () => {
  const { data: searchResult } = fetchHooks.useGetSearchItems({
    q: "Amazaroshi",
    limit: 10,
  });

  if (searchResult) {
    return <SearchPage query={"...."} searchItems={searchResult} />;
  }
};

type SearchPageProps = {
  query: string;
  searchItems: SearchObject;
};

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

const ResultForPlaylists = ({ playlists }: { playlists: PlaylistObject[] }) => {
  return (
    playlists.length > 0 && (
      <div className="flex flex-col gap-4">
        <Page.Title>合輯</Page.Title>
        <PlaylistList playlists={playlists} />
      </div>
    )
  );
};

const SearchPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  width: 100%;
  min-height: 100vh;
  background-color: #22223b;
`;

export function SearchPage({ query, searchItems }: SearchPageProps) {
  return (
    <SearchPageWrapper>
      <Header.Wrapper>
        <div className="w-full text-center ">
          <Header.Title>"{query}" 的搜尋結果</Header.Title>
        </div>
      </Header.Wrapper>
      {searchItems.tracks && <ResultForTracks tracks={searchItems.tracks} />}
      {searchItems.artists && (
        <ResultForArtists artists={searchItems.artists} />
      )}
      {searchItems.albums && <ResultForAlbums albums={searchItems.albums} />}
      {searchItems.playlists && (
        <ResultForPlaylists playlists={searchItems.playlists} />
      )}
    </SearchPageWrapper>
  );
}

export default SearchPage;
export { SearchPageWithHooks };
