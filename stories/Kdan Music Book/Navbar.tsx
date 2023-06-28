import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import NavLogoSrc from "./assets/Navbar/NavLogo.svg";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
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

const NavLogo = styled(Image)``
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
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };
  return (
    <NavbarWrapper isToggle={isToggle}>
      <Logo>
        <NavLogo src={NavLogoSrc} alt="Navbar Logo"/>
      </Logo>
      <Menu onClick={() => setIsToggle(false)}>
        <MenuItem>
          <Link href={"/"}>主頁</Link>
        </MenuItem>
        <MenuItem>推薦</MenuItem>
        <MenuItem>熱門</MenuItem>
        <MenuItem>個人</MenuItem>
        <Button variant="primary" size="small">
          登入
        </Button>
      </Menu>
      <MenuBackground />
      <ToggleBtn onClick={handleToggle}>
        {isToggle ? <RxCross2 /> : <RxHamburgerMenu />}
      </ToggleBtn>
    </NavbarWrapper>
  );
}

export default Navbar;
