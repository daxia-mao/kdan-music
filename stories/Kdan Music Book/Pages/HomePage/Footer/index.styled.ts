import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Logo = styled(Image)``;
const Description = styled.p`
  color: ${(props) => props.theme.colors.descriptionLight};
  ${(props) =>
    props.theme.typography.getCaption({ level: 2, weight: "reguler" })}
`;
const CopyRight = styled.p`
  color: ${(props) => props.theme.colors.descriptionLight};
  ${(props) =>
    props.theme.typography.getCaption({ level: 3, weight: "reguler" })}
`;
const CompanyInfo = styled.div``;
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const LinkTitle = styled.h4`
  color: ${(props) => props.theme.colors.titleLight};
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 2, weight: "semibold" })}
`;
const LinkItem = styled(Link)`
  display: block;
  color: ${(props) => props.theme.colors.descriptionLight};
  ${(props) =>
    props.theme.typography.getCaption({ level: 2, weight: "reguler" })}
`;
const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 100px;
  background-color: ${(props) => props.theme.colors.darkBlue};

  ${CompanyInfo} {
    max-width: 298px;
  }
  ${Description} {
    margin-top: 25px;
  }
  ${CopyRight} {
    margin-top: 30px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    ${CompanyInfo} {
      min-width: 100%;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    ${Description} {
      margin-top: 25px;
      ${(props) =>
        props.theme.typography.getCaption({ level: 3, weight: "reguler" })}
    }
    ${CopyRight} {
      margin-top: 25px;
    }
    ${LinkTitle} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 3, weight: "semibold" })}
    }
    ${LinkItem} {
      ${(props) =>
        props.theme.typography.getCaption({ level: 3, weight: "reguler" })}
    }

    padding: 40px 60px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 50px 16px;
    ${LinksWrapper} {
      min-width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 34px;
    }
  }
`;

export default {
  Wrapper,
  CompanyInfo,
  Logo,
  Description,
  CopyRight,
  LinksWrapper,
  LinkTitle,
  LinkItem,
};
