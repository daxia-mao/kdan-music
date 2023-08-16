import { motion } from "framer-motion";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import styled, { css } from "styled-components";

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Dot = styled.div<{ active: boolean }>`
  min-width: 10px;
  min-height: 10px;
  max-width: 10px;
  max-height: 10px;
  border-radius: 50%;
  background-color: #eee;
  transition: all 0.2s;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: ${(props) => props.theme.colors.descriptionLight};
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.descriptionLight};
  }
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  user-select: none;
`;
const IconBaseStyle = css`
  width: 32px;
  height: 32px;
  color: #eee;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    color: ${(props) => props.theme.colors.descriptionLight};
  }
`;
const Prev = styled(RxChevronLeft)`
  ${IconBaseStyle};
`;
const Next = styled(RxChevronRight)`
  ${IconBaseStyle};
`;

const Container = styled(motion.div)`
  display: block;
  width: inherit;
  height: inherit;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: block;
  width: inherit;
  height: inherit;
  overflow: hidden;

  ${Container} {
    margin-bottom: 30px;
  }
`;
export default {
  Wrapper,
  Container,
  Toolbar,
  Prev,
  Next,
  DotWrapper,
  Dot,
};
