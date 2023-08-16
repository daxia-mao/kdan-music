import { useAppSelector } from "@/stories/Kdan Music Book/app/hooks";
import Header from "@/stories/Kdan Music Book/styled/Page.Header.styled";
import emptyImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";

export interface ArtistHeaderProps {}

export default function UserHeader({}: ArtistHeaderProps) {
  const userProfile = useAppSelector((state) => state.userReducer.user.profile);
  if (userProfile) {
    return (
      <Header.Wrapper>
        <Header.Image
          src={userProfile.images[1]?.url || emptyImageSrc}
          alt="user image"
          width={360}
          height={360}
        />
        <Header.Info>
          <Header.Title>{userProfile.display_name}</Header.Title>
        </Header.Info>
      </Header.Wrapper>
    );
  }
}
