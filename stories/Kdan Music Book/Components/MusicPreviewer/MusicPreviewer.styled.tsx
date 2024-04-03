import styled, { css } from "styled-components";
import { RiDownloadLine, RiHeartLine, RiMoreLine } from "react-icons/ri";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayIcon = styled(FaPlay)`
  display: inline-block;
  margin-left: 2px;
`;
const PauseIcon = styled(FaPause)``;
const HeartIcon = styled(RiHeartLine)``;
const DownloadIcon = styled(RiDownloadLine)``;
const MoreIcon = styled(RiMoreLine)``;
const ArtistWrapper = styled.div`
  display: flex;
  gap: 6px;
  overflow: hidden;
  flex: 1;
  margin-left: 24px;
`;
const AlbumWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  margin-left: 24px;
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
    opacity: 0.7;
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
  white-space: nowrap;
  &:hover {
    transform: scale(1.05);
  }
`;
const TrackName = styled.p`
  color: ${(props) => props.theme.colors.titleDark};
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 3, weight: "medium" })}
`;

const TrackDuration = styled.p`
  color: ${(props) => props.theme.colors.descriptionDark};
  ${(props) => props.theme.typography.getLabel({ level: 3, weight: "reguler" })}
`;
const ArtistName = styled.div`
  white-space: nowrap;
  color: ${(props) => props.theme.colors.descriptionDark};
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
`;
const AlbumName = styled.div`
  color: ${(props) => props.theme.colors.descriptionDark};
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
`;

const AudioBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0432df;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: relative;
  background-color: #cdd6f9;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 68px;
  padding: 12px;
  background-color: white;
  box-shadow: 0 1px #eee;
  transition: all 0.3s;
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

const MusicPreviewer = {
  Wrapper,
  AudioBtnWrapper,
  AudioBtn,
  PlayIcon,
  PauseIcon,
  TrackInfo,
  TrackName,
  TrackDuration,
  ArtistWrapper,
  ArtistName,
  AlbumWrapper,
  AlbumName,
  IconWrapper,
  HeartIcon,
  DownloadIcon,
  MoreIcon,
};

export default MusicPreviewer;
