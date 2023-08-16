import { motion } from "framer-motion";
import { RiMoreLine } from "react-icons/ri";
import styled from "styled-components";

const MoreIcon = styled(RiMoreLine)`
  display: inline-block;
  font-size: 32px;
  color: white;
  opacity: 0.6;
  transition: all 0.2s;
`;
const MoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;

  &:hover ${MoreIcon} {
    opacity: 1;
  }
  &:active ${MoreIcon} {
    opacity: 0.6;
  }
`;
const ChunkCotanier = styled(motion.div)`
  display: flex;
  gap: 12px;
`;
const ChunkWrapper = styled(motion.div)`
  display: flex;
  max-width: fit-content;
  overflow: hidden;
  border-radius: 8px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default {
  Wrapper,
  ChunkWrapper,
  ChunkCotanier,
  MoreBtn,
  MoreIcon,
};
