import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { RiHeartLine, RiDownloadLine, RiMoreLine } from "react-icons/ri";
import type { TrackObject } from "./types";

const HeartIcon = styled(RiHeartLine)``;
const DownloadIcon = styled(RiDownloadLine)``;
const MoreIcon = styled(RiMoreLine)``;
const ArtistWrapper = styled.div`
  flex: 1;
  margin-left: 24px;
  overflow: hidden;
`;
const AlbumWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;
const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20px;

  & > * {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.colors.descriptionDark};
    cursor: pointer;
  }
  & > *:hover {
    color: pink;
  }
`;
const TrackInfo = styled.div`
  flex: 1.2;
  margin-left: 24px;
  overflow: hidden;
`;
const AudioBtnWrapper = styled.div`
  flex: 0 0 5%;
  display: flex;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
const TrackName = styled.p`
  color: ${(props) => props.theme.colors.titleDark};
  white-space: nowrap;
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 3, weight: "medium" })}
`;

const TrackDuration = styled.p`
  color: ${(props) => props.theme.colors.descriptionDark};
  ${(props) => props.theme.typography.getLabel({ level: 3, weight: "reguler" })}
`;
const ArtistName = styled.div`
  color: ${(props) => props.theme.colors.descriptionDark};
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
`;
const AlbumName = styled.div`
  color: ${(props) => props.theme.colors.descriptionDark};
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
`;

const AudioIcon = styled.span`
  display: flex;
  width: 14px;
  height: 20px;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 51%;
  color: #0432df;
  transform: translateX(-50%) translateY(-50%);
`;
const AudioBtn = styled.button`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: relative;
  background-color: #cdd6f9;
`;
const MusicPreviewerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 68px;
  padding: 12px;
  background-color: white;
  box-shadow: 0 1px #eee;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #eeeb;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 56px;

    ${AlbumWrapper} {
      display: none;
    }
    ${TrackName} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
    }

    ${ArtistName} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-height: 60px;

    ${ArtistWrapper} {
      display: none;
    }

    ${IconWrapper} ${HeartIcon} {
      display: none;
    }

    ${IconWrapper} > * > * {
      width: 20px;
      height: 20px;
    }

    ${TrackName} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
    }

    ${ArtistName} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
    }
  }
`;
interface MusicPreviewProps {
  track: TrackObject;
}

function MusicPreviewer({ track }: MusicPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const audioDuration = audioRef.current.currentTime;
      setCurrentTime(Math.floor(audioDuration));
    }
  };
  const handleLoaded = () => {
    if (audioRef.current) {
      const audioDuration = audioRef.current.duration;
      setTotalTime(Math.floor(audioDuration));
    }
  };

  return (
    <MusicPreviewerWrapper>
      <audio
        ref={audioRef}
        src={track?.preview_url || ""}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
      />
      <AudioBtnWrapper>
        <AudioBtn onClick={() => setIsPlaying((prev) => !prev)}>
          {isPlaying ? (
            <AudioIcon>
              <FaPause />
            </AudioIcon>
          ) : (
            <AudioIcon>
              <FaPlay />
            </AudioIcon>
          )}
        </AudioBtn>
      </AudioBtnWrapper>

      <TrackInfo>
        <TrackName>{track ? track.name : "載入中"}</TrackName>
        <TrackDuration>
          0:{currentTime} / 0:{totalTime}
        </TrackDuration>
      </TrackInfo>

      <ArtistWrapper>
        <ArtistName>{track ? track.artists[0].name : "載入中"}</ArtistName>
      </ArtistWrapper>

      <AlbumWrapper>
        <AlbumName>{track ? track.album.name : "載入中"}</AlbumName>
      </AlbumWrapper>

      <IconWrapper>
        <HeartIcon />
        <DownloadIcon />
        <MoreIcon />
      </IconWrapper>
    </MusicPreviewerWrapper>
  );
}

export default MusicPreviewer;
