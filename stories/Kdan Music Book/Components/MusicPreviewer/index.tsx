import React from "react";
import { useState, useEffect, useRef } from "react";
import S from "@/stories/Kdan Music Book/Components/MusicPreviewer/MusicPreviewer.styled";
import { TrackObject } from "@/stories/Kdan Music Book/types";
import Link from "next/link";
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
      const audioCurrentTime = audioRef.current.currentTime;
      setCurrentTime(Math.floor(audioCurrentTime));
    }
  };

  const handleLoaded = () => {
    if (audioRef.current) {
      const audioDuration = audioRef.current.duration;
      setTotalTime(Math.floor(audioDuration));
    }
  };

  const handleEnded = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  return (
    <S.Wrapper>
      <audio
        ref={audioRef}
        src={track?.preview_url || ""}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
        onEnded={handleEnded}
      />
      <S.AudioBtnWrapper>
        <S.AudioBtn onClick={() => setIsPlaying((prev) => !prev)}>
          {isPlaying ? <S.PauseIcon /> : <S.PlayIcon />}
        </S.AudioBtn>
      </S.AudioBtnWrapper>

      <S.TrackInfo>
        <Link href={`/track/${track.id}`} className="hover:underline">
          <S.TrackName>{track.name}</S.TrackName>
        </Link>
        <S.TrackDuration>
          0:{currentTime} / 0:{totalTime}
        </S.TrackDuration>
      </S.TrackInfo>

      <S.ArtistWrapper>
        {track.artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/artist/${artist.id}`}
            className="hover:underline"
          >
            <S.ArtistName>{artist.name}</S.ArtistName>
          </Link>
        ))}
      </S.ArtistWrapper>

      <S.AlbumWrapper>
        <S.AlbumName>
          <Link href={`/album/${track.album.id}`} className="hover:underline">
            {track ? track.album.name : "載入中"}
          </Link>
        </S.AlbumName>
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
