import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  useAppDispatch,
  useAppSelector,
} from "@/stories/Kdan Music Book/app/hooks";
import { deAuth } from "@/stories/Kdan Music Book/features/auth/authSlice";
import SearchForm from "@/stories/Kdan Music Book/Components/SearchForm";
import Button from "@/stories/Kdan Music Book/Components/Button";
import LogoSrc from "@/stories/Kdan Music Book/assets/Navbar/NavLogo.svg";
import emptyImageSrc from "@/stories/Kdan Music Book/assets/Item/emptyArtist.png";
import S from "./index.styled";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const router = useRouter();
  const [isToggle, setIsToggle] = useState(false);
  const authStatus = useAppSelector((state) => state.authReducer.auth.status);
  const userProfile = useAppSelector((state) => state.userReducer.user.profile);
  const dispatch = useAppDispatch();
  const ImageSrc = emptyImageSrc;

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  const userInfo = userProfile && (
    <div className="flex justify-center items-center gap-6">
      <Image
        className="max-h-[48px] max-w-[48px] rounded-full"
        alt={"user image"}
        src={userProfile.images[1]?.url || ImageSrc}
        width={160}
        height={160}
        quality={100}
      />
      <p className="font-extrabold text-md text-white">
        {userProfile.display_name}
      </p>
    </div>
  );

  return (
    <S.Wrapper isToggle={isToggle}>
      <S.Logo>
        <Link href={"/"}>
          <S.LogoIcon src={LogoSrc} alt="Navbar Logo" />
        </Link>
      </S.Logo>
      <S.Menu onClick={() => setIsToggle(false)}>
        <S.MenuItem>
          <Link href={"/"}>主頁</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link href={"/categories"}>類別</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link href={"/user"}>個人</Link>
        </S.MenuItem>
        {authStatus === "success" ? (
          <div className="flex gap-6 items-center">
            {userInfo}
            <Button
              variant="tertiary"
              size="small"
              onClick={() => {
                dispatch(deAuth());
                router.push("/");
              }}
            >
              登出
            </Button>
          </div>
        ) : (
          <Link href={"/api/spotify/login"}>
            <Button variant="primary" size="small">
              登入
            </Button>
          </Link>
        )}
      </S.Menu>
      <S.MenuBackground />
      <S.ToggleBtn onClick={handleToggle}>
        {isToggle ? <S.MenuCloseIcon /> : <S.MenuIcon />}
      </S.ToggleBtn>
    </S.Wrapper>
  );
}

export default Navbar;
