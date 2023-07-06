import Image from "next/image";
import styled from "styled-components";


const DudePerfectLogo = styled(Image)`
  width: 50px;
  height: 50px;
`;

const PewdiepieLogo = styled(Image)`
  width: 50px;
  height: 50px;
`;

const MrBeastLogo = styled(Image)`
  width: 77px;
  height: 54px;
`;
const WbLogo = styled(Image)`
  width: 50px;
  height: 62px;
`;

const NetflixLogo = styled(Image)`
  width: 94px;
  height: 25px;
`;

const PixarLogo = styled(Image)`
  width: 130px;
  height: 25px;
`;

const PickypicksLogo = styled(Image)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;

const Title = styled.h6`
  ${(props) => props.theme.typography.getHeading({ level: 6 })}
  color: ${(props) => props.theme.colors.titleDark};
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  & > *:hover {
    transition: all 0.2s;
    transform: scale(1.15) translateY(-5px);
  }
`;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  min-height: 237px;
  padding: 50px 100px 60px 100px;
  background-color: #fafafa;
  text-align: center;

  ${Title} {
    margin-bottom: 35px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 195px;
    padding: 40px 100px;
    ${LogoWrapper} {
      justify-content: center;
      gap: 40px;
    }
    ${DudePerfectLogo} {
      width: 40px;
      height: 40px;
    }
    ${PewdiepieLogo} {
      width: 40px;
      height: 40px;
    }
    ${MrBeastLogo} {
      width: 63px;
      height: 44px;
    }
    ${WbLogo} {
      width: 40px;
      height: 50px;
    }
    ${NetflixLogo} {
      width: 80px;
      height: 21px;
    }
    ${PickypicksLogo} {
      width: 42px;
      height: 42px;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-height: 250px;
    padding: 30px 16px 40px 16px;

    ${Title} {
      ${(props) =>
        props.theme.typography.getSubtitle({ level: 2, weight: "medium" })};
      font-weight: 600;
      margin-bottom: 30px;
    }
    ${LogoWrapper} {
      justify-content: center;
      gap: 34px;
    }
  }
`;

const Trust = {
  Wrapper,
  Title,
  LogoWrapper,
  DudePerfectLogo,
  PewdiepieLogo,
  MrBeastLogo,
  WbLogo,
  NetflixLogo,
  PixarLogo,
  PickypicksLogo
}

export default Trust;