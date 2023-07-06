import styled from "styled-components";
import NextImage from "next/image";

const Title = styled.p`
  ${(props) => props.theme.typography.getHeading({ level: 1 })};
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
`;
const Info = styled.div`
  flex: 1;
  padding: 8px;
  border-radius: 8px;
  opacity: 0.8;
`;
const Image = styled(NextImage)`
  min-height: 240px;
  min-width: 240px;
  max-height: 240px;
  max-width: 240px;
  display: block;
  border-radius: 50%;
`;
const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 64px;
  padding: 24px 64px;
  padding-top: 124px;
  opacity: 0.9;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-top: 104px;

    ${Image} {
      min-height: 200px;
      min-width: 200px;
      max-height: 200px;
      max-width: 200px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    padding-top: 84px;
    ${Image} {
      min-height: 160px;
      min-width: 160px;
      max-height: 160px;
      max-width: 160px;
    }
    ${Info} {
      text-align: center;
    }
    ${Title} {
      ${(props) => props.theme.typography.getHeading({ level: 3 })};
    }
  }
`;

const Header = {
  Wrapper, Title, Image, Info, 
}

export default Header;