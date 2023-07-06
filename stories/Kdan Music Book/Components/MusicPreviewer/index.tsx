import React from "react";
import { useState, useEffect, useRef } from "react";
import S from "@/stories/Kdan Music Book/Components/MusicPreviewer/MusicPreviewer.styled";
import { TrackObject } from "@/stories/Kdan Music Book/types";
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
    <S.Wrapper>
      <audio
        ref={audioRef}
        src={track?.preview_url || ""}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
      />
      <S.AudioBtnWrapper>
        <S.AudioBtn onClick={() => setIsPlaying((prev) => !prev)}>
          {isPlaying ? <S.PauseIcon /> : <S.PlayIcon />}
        </S.AudioBtn>
      </S.AudioBtnWrapper>

      <S.TrackInfo>
        <S.TrackName>{track ? track.name : "載入中"}</S.TrackName>
        <S.TrackDuration>
          0:{currentTime} / 0:{totalTime}
        </S.TrackDuration>
      </S.TrackInfo>

      <S.ArtistWrapper>
        <S.ArtistName>{track ? track.artists[0].name : "載入中"}</S.ArtistName>
      </S.ArtistWrapper>

      <S.AlbumWrapper>
        <S.AlbumName>{track ? track.album.name : "載入中"}</S.AlbumName>
      </S.AlbumWrapper>

      <S.IconWrapper>
        <S.HeartIcon />
        <S.DownloadIcon />
        <S.MoreIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
}

export default MusicPreviewer;
