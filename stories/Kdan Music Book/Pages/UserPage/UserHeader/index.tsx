import EmptyImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import { UserObject } from "@/stories/Kdan Music Book/types";
import { makeHsl } from "@/stories/Kdan Music Book/utils";
import { usePalette } from "color-thief-react";

export interface ArtistHeaderProps {
  user: UserObject;
}

export default function UserHeader({ user }: ArtistHeaderProps) {
  return (
    <Header.Wrapper>
      <Header.Image src={user.images[1]?.url} alt="user image" width={360} height={360} />
      <Header.Info>
        <Header.Title>{user.display_name}</Header.Title>
      </Header.Info>
    </Header.Wrapper>
  );
}
