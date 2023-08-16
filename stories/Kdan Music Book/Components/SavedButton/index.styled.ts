import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled, { css } from "styled-components";
const IconBase = css`
  min-width: 28px;
  min-height: 28px;
  color: white;
  opacity: 0.7;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 1;
    scale: 1.1;
  }
`;

const UnsavedIcon = styled(AiOutlineStar)`
  ${IconBase}
`;
const SavedIcon = styled(AiFillStar)`
  ${IconBase}
  opacity: 1;
  color: hsl(50, 100%, 65%);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  padding: 5px;
`;

export default {
  Wrapper,
  SavedIcon,
  UnsavedIcon,
};
