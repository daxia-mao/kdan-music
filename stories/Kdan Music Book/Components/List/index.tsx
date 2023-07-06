import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { RiMoreLine } from "react-icons/ri";
import styled from "styled-components";

interface ItemListProps {
  chunkSize: number;
  children: ReactNode[];
}
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
const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const chunkNode = (size: number, list: ReactNode[]) => {
  if (list) {
    let result = [];
    for (let i = 0; i < list.length; i += size) {
      result.push(list.slice(i, i + size));
    }
    return result;
  }
  return list;
};

function List({ chunkSize = 10, children }: ItemListProps) {
  const [chunkCount, setChunkCount] = useState(1);
  const result = chunkNode(chunkSize, children);
  const resultByChunkCount = result.slice(0, chunkCount);
  const constrainsRef = useRef<HTMLDivElement>(null);

  return (
    <ItemListWrapper>
      {resultByChunkCount.map((chunk, index) => (
        <ChunkWrapper
          ref={constrainsRef}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          key={index}
        >
          <ChunkCotanier drag={"x"} dragConstraints={constrainsRef}>
            {chunk}
          </ChunkCotanier>
        </ChunkWrapper>
      ))}

      {(chunkCount < result.length) ? (
        <MoreBtn onClick={() => setChunkCount((prev) => prev + 1)}>
          <MoreIcon />
        </MoreBtn>
      ) : (
        ""
      )}
    </ItemListWrapper>
  );
}

export default List;
