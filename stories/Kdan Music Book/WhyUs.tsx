import React from "react";
import styled from "styled-components";
import Image from "next/image";
import CustomerIconSrc from "./assets/WhyUs/customerIcon.svg";
import SoundIconSrc from "./assets/WhyUs/soundIcon.svg";
import RoyaltyIconSrc from "./assets/WhyUs/royaltyIcon.svg";
import BestIconSrc from "./assets/WhyUs/bestIcon.svg";
interface WhyUsProps {}

const ContentDescription = styled.p`
  ${(props) =>
    props.theme.typography.getCaption({ level: 3, weight: "medium" })};
  color: ${(props) => props.theme.colors.descriptionDark};
`;
const ContentTitle = styled.h6`
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 2, weight: "semibold" })};
  color: ${(props) => props.theme.colors.titleDark};
`;
const CustomerIcon = styled(Image)``;
const SoundIcon = styled(Image)``;
const RoyaltyIcon = styled(Image)``;
const BestIcon = styled(Image)``;
const IconWrapper = styled.div``;

const ContentItem = styled.div`
  display: block;
  flex: 0 0 40%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Subtitle = styled.h4`
  display: block;
  ${(props) => props.theme.typography.getHeading({ level: 4 })};
  color: ${(props) => props.theme.colors.titleDark};
`;
const Title = styled.h3`
  display: block;
  ${(props) => props.theme.typography.getCapitalised()};
  color: ${(props) => props.theme.colors.braveYellow};
  font-size: 14px;
  line-height: 14px;
`;
const TitleWrapper = styled.div`
  display: block;
  flex: 0 0 33%;
  width: 100%;
  height: 100%;
`;
const WhyUsWrapper = styled.div`
  display: flex;
  gap: 105px;
  width: 100%;
  min-height: 532px;
  padding: 60px 100px;

  ${Title} {
    margin-bottom: 17px;
  }
  ${IconWrapper} {
    margin-bottom: 20px;
  }
  ${ContentTitle} {
    margin-bottom: 4px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 582px;
    padding: 40px 60px;
    flex-direction: column;
    gap: 40px;

    ${TitleWrapper} {
      text-align: center;
    }
    ${Subtitle} {
      ${(props) => props.theme.typography.getHeading({ level: 5 })};
    }
    ${ContentWrapper} {
      justify-content: space-between;
      gap: 50px;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-height: 929px;
    padding: 50px 16px;
    gap: 47px;

    ${Subtitle} {
      ${(props) => props.theme.typography.getHeading({ level: 6 })};
    }

    ${ContentWrapper} {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      gap: 30px;
    }

    ${ContentItem} {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:nth-child(2) {
        order: 4;
      }
      &:nth-child(3) {
        order: 2;
      }
      &:nth-child(4) {
        order: 3;
      }
    }

    ${ContentTitle} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 3, weight: "semibold" })};
    }
  }
`;

function WhyUs({}: WhyUsProps) {
  return (
    <WhyUsWrapper>
      <TitleWrapper>
        <Title>這個專案是什麼？</Title>
        <Subtitle>一個用於練習前端技術的專案</Subtitle>
      </TitleWrapper>
      <ContentWrapper>
        <ContentItem>
          <IconWrapper>
            <CustomerIcon src={CustomerIconSrc} alt="Customer Icon" />
          </IconWrapper>
          <ContentTitle>目前沒有任何的用戶</ContentTitle>
          <ContentDescription>
            但若你不介意的話，可以當第一位哦。
          </ContentDescription>
        </ContentItem>
        <ContentItem>
          <IconWrapper>
            <SoundIcon src={SoundIconSrc} alt="Sound Icon" />
          </IconWrapper>
          <ContentTitle>所有資源來自 Spotify</ContentTitle>
          <ContentDescription>一個優秀的音樂網站。</ContentDescription>
        </ContentItem>
        <ContentItem>
          <IconWrapper>
            <RoyaltyIcon src={RoyaltyIconSrc} alt="Royalty Icon" />
          </IconWrapper>
          <ContentTitle>完全不用一毛錢</ContentTitle>
          <ContentDescription>尚無打官司的打算。</ContentDescription>
        </ContentItem>
        <ContentItem>
          <IconWrapper>
            <BestIcon src={BestIconSrc} alt="Best Icon" />
          </IconWrapper>
          <ContentTitle>可能無法提供你什麼服務</ContentTitle>
          <ContentDescription>
            但你可以隨意看看，也許你會覺得有意思。
          </ContentDescription>
        </ContentItem>
      </ContentWrapper>
    </WhyUsWrapper>
  );
}

export default WhyUs;
