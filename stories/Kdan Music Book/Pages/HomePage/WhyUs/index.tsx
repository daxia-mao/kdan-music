import React from "react";
import CustomerIconSrc from "@/stories/Kdan Music Book/assets/WhyUs/customerIcon.svg";
import SoundIconSrc from "@/stories/Kdan Music Book/assets/WhyUs/soundIcon.svg";
import RoyaltyIconSrc from "@/stories/Kdan Music Book/assets/WhyUs/royaltyIcon.svg";
import BestIconSrc from "@/stories/Kdan Music Book/assets/WhyUs/bestIcon.svg";
import S from "./index.styled";
interface WhyUsProps {}

function WhyUs({}: WhyUsProps) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>這個專案是什麼？</S.Title>
        <S.Subtitle>一個用於練習前端技術的專案</S.Subtitle>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.ContentItem>
          <S.IconWrapper>
            <S.CustomerIcon src={CustomerIconSrc} alt="Customer Icon" />
          </S.IconWrapper>
          <S.ContentTitle>目前沒有任何的用戶</S.ContentTitle>
          <S.ContentDescription>
            但若你不介意的話，可以當第一位哦。
          </S.ContentDescription>
        </S.ContentItem>
        <S.ContentItem>
          <S.IconWrapper>
            <S.SoundIcon src={SoundIconSrc} alt="Sound Icon" />
          </S.IconWrapper>
          <S.ContentTitle>所有資源來自 Spotify</S.ContentTitle>
          <S.ContentDescription>一個優秀的音樂網站。</S.ContentDescription>
        </S.ContentItem>
        <S.ContentItem>
          <S.IconWrapper>
            <S.RoyaltyIcon src={RoyaltyIconSrc} alt="Royalty Icon" />
          </S.IconWrapper>
          <S.ContentTitle>完全不用一毛錢</S.ContentTitle>
          <S.ContentDescription>尚無打官司的打算。</S.ContentDescription>
        </S.ContentItem>
        <S.ContentItem>
          <S.IconWrapper>
            <S.BestIcon src={BestIconSrc} alt="Best Icon" />
          </S.IconWrapper>
          <S.ContentTitle>可能無法提供你什麼服務</S.ContentTitle>
          <S.ContentDescription>
            但你可以隨意看看，也許你會覺得有意思。
          </S.ContentDescription>
        </S.ContentItem>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default WhyUs;
