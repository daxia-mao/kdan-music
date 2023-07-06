import styled from "styled-components";
import Image from "next/image";

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
const Wrapper = styled.div`
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

export default {
  Wrapper,
  TitleWrapper,
  Title,
  Subtitle,
  ContentWrapper,
  ContentItem,
  IconWrapper,
  CustomerIcon,
  ContentTitle,
  ContentDescription,
  RoyaltyIcon,
  BestIcon,
  SoundIcon,
};
