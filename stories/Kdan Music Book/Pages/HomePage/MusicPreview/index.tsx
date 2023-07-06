import Button from "@/stories/Kdan Music Book/Components/Button";
import MusicList from "@/stories/Kdan Music Book/Components/MusicList";
import Tabs, { TabsProps } from "@/stories/Kdan Music Book/Components/Tabs";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import React from "react";
import S from "./index.styled";

interface MusicPreviewProps {}

export default function MusicPreview({}: MusicPreviewProps) {
  const { data } = fetchHooks.useGetMusicPreviewPlaylists();
  const playlists = data?.playlists;

  const items: TabsProps["items"] =
    playlists &&
    playlists.map((playlist, index) => {
      const tracks = playlist.map((item) => item.track);
      return {
        id: index,
        label: data.labels[index],
        children: <MusicList tracks={tracks} />,
      };
    });

  return (
    <S.Wrapper>
      <S.Heading>聽一些音樂吧 :)</S.Heading>
      <S.TabsWrapper>
        <Tabs defaultValue={0} items={items} />
      </S.TabsWrapper>
      <S.ButtonWrapper>
        <Button variant="secondary" size="small">
          See all music
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
