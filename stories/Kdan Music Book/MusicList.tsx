import styled, { css } from "styled-components";
import MusicPreviewer from "./MusicPreviewer";
import type { TrackObject } from "./types";
interface MusicListProps {
  tracks: TrackObject[] | undefined;
}

const MusicListWrapper = styled.div<{isLoading?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

function MusicList({ tracks }: MusicListProps) {
  return (
    <MusicListWrapper>
      {tracks &&
        tracks.map((track) => <MusicPreviewer key={track.id} track={track} />)}
    </MusicListWrapper>
  );
}

export default MusicList;
