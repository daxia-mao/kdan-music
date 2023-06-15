import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo1 from "./assets/Trust/svg/DudePerfectLogo.svg";
import Logo2 from "./assets/Trust/svg/PewdiepieLogo.svg";
import Logo3 from "./assets/Trust/svg/MrBeastLogo.svg";
import Logo4 from "./assets/Trust/svg/WbLogo.svg";
import Logo5 from "./assets/Trust/svg/NetflixLogo.svg";
import Logo6 from "./assets/Trust/svg/PixarLogo.svg";
import Logo7 from "./assets/Trust/svg/PickyPicksLogo.svg";
type TrustProps = {};

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

const TrustWrapper = styled.div`
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

function Trust({}: TrustProps) {
  return (
    <TrustWrapper>
      <Title>一些用來佔位子的商標</Title>
      <LogoWrapper>
        <DudePerfectLogo src={Logo1} alt="Dude Perfect Logo" />
        <PewdiepieLogo src={Logo2} alt="Pewdiepie Logo" />
        <MrBeastLogo src={Logo3} alt="MrBeast Logo" />
        <WbLogo src={Logo4} alt="Wb Logo" />
        <NetflixLogo src={Logo5} alt="Netflix Logo" />
        <PixarLogo src={Logo6} alt="Pixar Logo" />
        <PickypicksLogo src={Logo7} alt="Pickypicks Logo" />
      </LogoWrapper>
    </TrustWrapper>
  );
}

export default Trust;
