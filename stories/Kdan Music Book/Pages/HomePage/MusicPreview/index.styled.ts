import styled from "styled-components";

const ButtonWrapper = styled.div``;
const TabsWrapper = styled.div``;
const Heading = styled.h4`
  color: ${(props) => props.theme.colors.titleDark};
  ${(props) => props.theme.typography.getHeading({ level: 4 })};
`;
const Wrapper = styled.div`
  padding: 80px 100px 60px 100px;
  ${Heading} {
    text-align: center;
    margin-bottom: 14px;
  }
  ${TabsWrapper} {
    margin-bottom: 20px;
  }
  ${ButtonWrapper} {
    text-align: center;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 50px 60px;
    ${Heading} {
      margin-bottom: 15px;
      ${(props) => props.theme.typography.getHeading({ level: 5 })};
    }
    ${TabsWrapper} {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 50px 16px;
    ${Heading} {
      margin-bottom: 14px;
      ${(props) => props.theme.typography.getHeading({ level: 6 })};
    }
    ${TabsWrapper} {
      margin-bottom: 16px;
    }
  }
`;

export default {
  Wrapper,
  Heading,
  TabsWrapper,
  ButtonWrapper
}