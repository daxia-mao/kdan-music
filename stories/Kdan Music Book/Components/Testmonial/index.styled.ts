import styled from "styled-components";
import Image from "next/image";

const DoubleQuotesIcon = styled(Image)``;
const UserJobTitle = styled.p`
  display: block;
  ${(props) =>
    props.theme.typography.getCaption({ level: 3, weight: "medium" })};
  color: ${(props) => props.theme.colors.descriptionLight};
`;
const UserName = styled.p`
  display: block;
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 2, weight: "semibold" })};
  color: ${(props) => props.theme.colors.titleDark};
`;
const AvatarImg = styled(Image)`
  width: 100%;
  height: 100%;
`;
const AvatarWrapper = styled.div`
  min-width: 70px;
  min-height: 70px;
  border-radius: 50%;
  overflow: hidden;
`;
const Text = styled.p`
  min-height: 72px;
  max-height: 72px;
  display: block;
  ${(props) =>
    props.theme.typography.getCaption({ level: 3, weight: "medium" })};
  color: ${(props) => props.theme.colors.descriptionDark};
  overflow: auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 305px;
  min-height: 322px;
  max-width: 305px;
  max-height: 322px;
  padding: 20px 20px 30px 20px;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.titleLight};
  border-radius: 8px;
  text-align: center;

  ${DoubleQuotesIcon} {
    margin-bottom: 18px;
  }
  ${Text} {
    margin-bottom: 25px;
  }
  ${AvatarWrapper} {
    margin-bottom: 10px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 287px;
    min-height: 333px;
    max-width: 287px;
    max-height: 333px;
  }
`;

export default {
  Wrapper,
  DoubleQuotesIcon,
  Text,
  AvatarWrapper,
  AvatarImg,
  UserName,
  UserJobTitle,
};
