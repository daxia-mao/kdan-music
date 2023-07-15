import { useColor } from "color-thief-react";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import EmptyAlbumImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyAlbum.png";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiCloseFill, RiHeartLine } from "react-icons/ri";
import { TrackItemProps } from ".";
import Card from "@/stories/Kdan Music Book/styled/Card.styled";
import { makeHsl } from "@/stories/Kdan Music Book/utils";

const IconBaseStyle = css`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const SaveIcon = styled(RiHeartLine)`
  font-size: 26px;
  color: red;
`;

const DisablePlayIcon = styled(RiCloseFill)`
  ${IconBaseStyle};
  min-width: 24px;
  min-height: 24px;
`;
const PauseIcon = styled(FaPause)`
  ${IconBaseStyle};
`;
const PlayIcon = styled(FaPlay)`
  ${IconBaseStyle};
`;
const AudioBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 16px;
  max-height: 16px;
`;
const AudioBtnWrapper = styled.div`
  display: block;
  position: absolute;
  padding: 16px;
  bottom: 30%;
  right: 8%;
  background-color: #eee;
  border-radius: 50%;
`;

function TrackItem({ track }: TrackItemProps) {
  const imageSrc = track.album.images[0].url ?? EmptyAlbumImageSrc;
  const { data: color } = useColor(imageSrc, "hslArray", {
    crossOrigin: "https://i.scdn.co/image/",
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPreviewValid, setIsPreviewValid] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const hsl = color && ([color[0], color[1], color[2]] as unknown as number[]);
  const normalHslColor = makeHsl(hsl, [1, 1, 1]);
  const darkHslColor = makeHsl(hsl, [1, 1, 0.5]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
    if (track.preview_url) {
      setIsPreviewValid(true);
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const handlePlayClick = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <Card.Wrapper style={{ backgroundColor: normalHslColor }}>
      <audio ref={audioRef} src={track.preview_url} />
      <AudioBtnWrapper>
        {isPreviewValid ? (
          <AudioBtn onClick={handlePlayClick} style={{ color: darkHslColor }}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </AudioBtn>
        ) : (
          <AudioBtn style={{ color: darkHslColor }}>
            <DisablePlayIcon />
          </AudioBtn>
        )}
      </AudioBtnWrapper>

      <Card.Image
        src={imageSrc}
        width={160}
        height={160}
        alt={`album ${track.album.name} image`}
      />
      <Card.Info>
        <Card.Title>{track.name}</Card.Title>
        <div className="flex gap-2">
          {track.artists.map((artist, index) => (
            <Card.Subtitle key={index}>
              <Link href={`/artist/${artist.id}`}>{artist.name}</Link>
            </Card.Subtitle>
          ))}
        </div>
        <Card.Type style={{ backgroundColor: darkHslColor }}>曲目</Card.Type>
      </Card.Info>
    </Card.Wrapper>
  );
}

export default TrackItem;
