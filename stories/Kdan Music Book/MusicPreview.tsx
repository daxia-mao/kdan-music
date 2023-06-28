import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Tabs, { TabsProps } from "./Tabs";
import MusicList from "./MusicList";
import { fetchHooks } from "./api";

interface MusicPreviewProps {}

const ButtonWrapper = styled.div``;
const TabsWrapper = styled.div``;

const Heading = styled.h4`
  color: ${(props) => props.theme.colors.titleDark};
  ${(props) => props.theme.typography.getHeading({ level: 4 })};
`;
const MusicPreviewWrapper = styled.div`
  padding: 80px 100px 60px 100px;
  ${Heading} {
    text-align: center;
    margin-bottom: 14px;
  }
  ${TabsWrapper} {
    margin-bottom: 20px;
  }
  ${ButtonWrapper} {
    text-align: center;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 50px 60px;
    ${Heading} {
      margin-bottom: 15px;
      ${(props) => props.theme.typography.getHeading({ level: 5 })};
    }
    ${TabsWrapper} {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 50px 16px;
    ${Heading} {
      margin-bottom: 14px;
      ${(props) => props.theme.typography.getHeading({ level: 6 })};
    }
    ${TabsWrapper} {
      margin-bottom: 16px;
    }
  }
`;

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
    <MusicPreviewWrapper>
      <Heading>聽一些音樂吧 :)</Heading>
      <TabsWrapper>
        <Tabs defaultValue={0} items={items} />
      </TabsWrapper>
      <ButtonWrapper>
        <Button variant="secondary" size="small">
          See all music
        </Button>
      </ButtonWrapper>
    </MusicPreviewWrapper>
  );
}
