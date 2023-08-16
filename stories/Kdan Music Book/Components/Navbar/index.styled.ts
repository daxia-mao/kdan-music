import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const MenuIcon = styled(RxHamburgerMenu)``;
const MenuCloseIcon = styled(RxCross2)``;
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
const LogoIcon = styled(Image)``;
const Logo = styled.div`
  margin-right: auto;
`;

const Wrapper = styled.nav<{ isToggle: boolean }>`
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

export default {
  Wrapper,
  Logo,
  LogoIcon,
  Menu,
  MenuIcon,
  MenuCloseIcon,
  MenuBackground,
  MenuItem,
  ToggleBtn,
};
