import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const moveUp = keyframes`
  0% {
    transform: translate3d(-50%, 150%, 0);
  }

  100% {
    transform: translate3d(-50%, -50%, 0);
  }
`;

const CategoryName = styled.p`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: all 0.3s;
  white-space: nowrap;
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 2, weight: "reguler" })};
  color: ${(props) => props.theme.colors.titleLight};
  font-weight: 600;
  z-index: 5;
`;
const CategoryImage = styled(Image)`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: all 0.3s;
`;
const Wrapper = styled(motion.div)`
  display: inline-block;
  position: relative;
  width: 157px;
  height: 117px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    ${CategoryName} {
      display: inline-block;
      animation: ${moveUp} 0.35s ease-out;
    }
    ${CategoryImage} {
      filter: blur(5px);
      transform: translate3d(-50%, -50%, 0) scale(1.05);
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 150px;
    height: 90px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 139px;
    height: 70px;
    ${CategoryName} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 3, weight: "medium" })};
      font-weight: 600;
    }
    ${CategoryImage} {
      top: 65.5%;
    }
  }
`;

export default {
  Wrapper,
  CategoryImage,
  CategoryName,
};
