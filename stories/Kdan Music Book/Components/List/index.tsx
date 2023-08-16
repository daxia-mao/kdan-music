import { ReactNode, useRef, useState } from "react";
import S from "./index.styled";
interface ItemListProps {
  chunkSize: number;
  children: ReactNode[];
}

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
    <S.Wrapper>
      {resultByChunkCount.map((chunk, index) => (
        <S.ChunkWrapper
          ref={constrainsRef}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          key={index}
        >
          <S.ChunkCotanier drag={"x"} dragConstraints={constrainsRef}>
            {chunk}
          </S.ChunkCotanier>
        </S.ChunkWrapper>
      ))}

      {chunkCount < result.length ? (
        <S.MoreBtn onClick={() => setChunkCount((prev) => prev + 1)}>
          <S.MoreIcon />
        </S.MoreBtn>
      ) : (
        ""
      )}
    </S.Wrapper>
  );
}

export default List;
