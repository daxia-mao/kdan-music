import { IoIosSearch } from "react-icons/io";
import styled, { keyframes } from "styled-components";
import NextImage from "next/image";

const Caption = styled.p`
  ${(props) =>
    props.theme.typography.getCaption({ level: 3, weight: "medium" })};
  color: ${(props) => props.theme.colors.titleLight};

  a {
    text-decoration: underline;
  }
`;

const KeywordTip = styled.p`
  text-align: left;
  ${(props) =>
    props.theme.typography.getCaption({ level: 3, weight: "reguler" })};
  color: ${(props) => props.theme.colors.titleLight};
`;

const SearchInput = styled.input`
  width: 100%;
  ${(props) =>
    props.theme.typography.getCaption({ level: 2, weight: "medium" })};

  color: ${(props) => props.theme.colors.descriptionDark};
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.descriptionDark};
  }
`;

const SearchIcon = styled(IoIosSearch)`
  color: #4f5261;
  width: 24px;
  height: 24px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 20px;
  background-color: ${(props) => props.theme.colors.titleLight};
  border-radius: 8px;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Subtitle = styled.h6`
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 1, weight: "medium" })};
  color: ${(props) => props.theme.colors.descriptionLight};
`;

const Heading = styled.h3`
  ${(props) => props.theme.typography.getHeading({ level: 3 })};
  color: ${(props) => props.theme.colors.titleLight};
`;

const fade = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) scale(0.5);
    opacity: 0;
  }
  80% {
    transform: translate3d(-50%, -50%, 0) scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  text-align: center;
  animation: ${fade} 1s ease-in-out;
`;

const BackgroundImage = styled(NextImage)`
  min-width: 1244px;
  min-height: 650px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
`;

const BackgroundImageBox = styled.div`
  width: 100%;
  height: 100%;
  z-index: -10;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 620px;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${ContentBox} {
    padding: 0 275px;
  }
  ${Heading} {
    margin-bottom: 16px;
  }
  ${Subtitle} {
    margin-bottom: 50px;
  }
  ${SearchBarWrapper} {
    max-width: 600px;
    margin-bottom: 50px;
  }
  ${SearchBar} {
    margin-bottom: 10px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    ${ContentBox} {
      padding: 0 60px;
    }
    ${Subtitle} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 2, weight: "medium" })};
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    ${ContentBox} {
      padding: 0 16px;
    }
    ${Heading} {
      ${(props) => props.theme.typography.getHeading({ level: 6 })};
    }
    ${Subtitle} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 3, weight: "medium" })};
      font-weight: 600;
    }
    ${SearchBarWrapper} {
      /* max-width: 300px; */
    }
    ${SearchBar} {
      padding: 8px 14px;
      margin-bottom: 14px;
    }
  }
`;

const HeaderStyled = {
  Wrapper,
  BackgroundImageBox,
  BackgroundImage,
  ContentBox,
  Heading,
  Subtitle,
  SearchBarWrapper,
  SearchBar,
  SearchIcon,
  SearchInput,
  KeywordTip,
  Caption,
};

export default HeaderStyled;