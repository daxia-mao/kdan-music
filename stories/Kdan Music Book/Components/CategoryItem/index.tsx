import React from "react";
import S from "./index.styled";
import Link from "next/link";
interface CategoryItemProps {
  id: string;
  name: string;
  iconSrc: string;
  isLoading?: boolean;
  index?: number;
}

const CategoryItem = ({ id, name, iconSrc, index }: CategoryItemProps) => {
  if (index) {
    return (
      <Link href={`/category/${id}`}>
        <S.Wrapper
          whileInView={{
            opacity: [0, 1],
            x: [-20, 0],
            y: [10, 0],
            rotate: [7, 0],
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.1 }}
        >
          <S.CategoryName>{name}</S.CategoryName>
          <S.CategoryImage
            alt={`category_${name}`}
            src={iconSrc}
            width={256}
            height={256}
          />
        </S.Wrapper>
      </Link>
    );
  } else {
    return (
      <Link href={`/category/${id}`}>
        <S.Wrapper>
          <S.CategoryName>{name}</S.CategoryName>
          <S.CategoryImage
            alt={`category_${name}`}
            src={iconSrc}
            width={256}
            height={256}
          />
        </S.Wrapper>
      </Link>
    );
  }
};

export default CategoryItem;
