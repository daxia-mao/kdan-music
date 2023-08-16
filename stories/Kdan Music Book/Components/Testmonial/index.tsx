import React from "react";
import { StaticImageData } from "next/image";
import DoubleQuotesIconSrc from "@/stories/Kdan Music Book/assets/Testmonials/DoubleQuotesIcon.svg";
import S from "./index.styled";
interface TestmonialProps {
  testmonialText: string;
  avatarSrc: StaticImageData;
  userName: string;
  userJobTitle: string;
}

export function Testmonial({
  testmonialText,
  avatarSrc,
  userName,
  userJobTitle,
}: TestmonialProps) {
  return (
    <S.Wrapper>
      <S.DoubleQuotesIcon src={DoubleQuotesIconSrc} alt="DoubleQuotes Icon" />
      <S.Text>{testmonialText}</S.Text>
      <S.AvatarWrapper>
        <S.AvatarImg src={avatarSrc} alt="Avatar Image" quality={100} />
      </S.AvatarWrapper>
      <S.UserName>{userName}</S.UserName>
      <S.UserJobTitle>{userJobTitle}</S.UserJobTitle>
    </S.Wrapper>
  );
}

export type { TestmonialProps };
export default Testmonial;
