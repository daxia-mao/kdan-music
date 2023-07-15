import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import NavLogoSrc from "@/stories/Kdan Music Book/assets/Navbar/NavLogo.svg";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "@/stories/Kdan Music Book/Components/SearchForm";
import Button from "@/stories/Kdan Music Book/Components/Button";
import {
  useAppDispatch,
  useAppSelector,
} from "@/stories/Kdan Music Book/app/hooks";
import { logout } from "@/stories/Kdan Music Book/features/auth/authSlice";
import { fetchHooks } from "@/stories/Kdan Music Book/api";
import { useRouter } from "next/router";
interface NavbarProps {}

const fade = keyframes`
  0% {
    height: 0%;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
`;

const NavLogo = styled(Image)``;
const ToggleBtn = styled.div`
  font-size: 32px;
  z-index: 200;
  cursor: pointer;
`;
const MenuBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0vh;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;
const MenuItem = styled.li`
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  ${(props) => props.theme.typography.getHeading({ level: 6 })};
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.pureWhite};
`;
const Logo = styled.div`
  margin-right: auto;
`;
interface NavbarWrapperProps {
  isToggle: boolean;
}
const NavbarWrapper = styled.nav<NavbarWrapperProps>`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 100px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
  color: ${(props) => props.theme.colors.titleLight};
  background-color: rgba(3, 11, 38, 1);
  user-select: none;

  ${ToggleBtn} {
    display: none;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 80px;
    padding: 0 60px;
    ${ToggleBtn} {
      display: block;
    }
    ${Menu} {
      display: none;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 60px;
    padding: 0 16px;

    ${ToggleBtn} {
      display: block;
    }
    ${Menu} {
      display: none;
    }
  }

  ${({ isToggle }) =>
    isToggle &&
    css`
      ${Menu} {
        width: 100%;
        height: 100vh;
        display: flex;
        gap: 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 200;
        animation: ${fade} 0.4s ease-in-out;
      }
      ${MenuBackground} {
        width: 100%;
        height: 100vh;
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        background-color: rgba(3, 11, 38, 1);
        z-index: 100;
        opacity: 1;
      }
    `}
`;

function Navbar({}: NavbarProps) {
  const router = useRouter();
  const [isToggle, setIsToggle] = useState(false);
  const isLoign = useAppSelector((state) => state.authReducer.isLogin);
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };
  const { data: userProfile } = fetchHooks.useGetMe();

  const userInfo = userProfile && (
    <div className="flex justify-center items-center gap-6">
      <Image
        className="max-h-[48px] max-w-[48px] rounded-full"
        alt={"user image"}
        src={userProfile.images[1]?.url}
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
    <NavbarWrapper isToggle={isToggle}>
      <Logo>
        <Link href={"/"}>
          <NavLogo src={NavLogoSrc} alt="Navbar Logo" />
        </Link>
      </Logo>
      <Menu>
        <MenuItem>
          <Link href={"/"}>主頁</Link>
        </MenuItem>
        <MenuItem>推薦</MenuItem>
        <MenuItem>類別</MenuItem>
        <MenuItem>
          <Link href={"/user"}>個人</Link>
        </MenuItem>
        <MenuItem className="max-w-[128px]">
          <SearchForm />
        </MenuItem>
        {isLoign ? (
          <div className="flex gap-6 items-center">
            {userInfo}
            <Button
              variant="tertiary"
              size="small"
              onClick={() => {
                dispatch(logout());
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
      </Menu>
      <MenuBackground />
      <ToggleBtn onClick={handleToggle}>
        {isToggle ? <RxCross2 /> : <RxHamburgerMenu />}
      </ToggleBtn>
    </NavbarWrapper>
  );
}

export default Navbar;
