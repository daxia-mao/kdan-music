import React from "react";
import S from "@/stories/Kdan Music Book/Pages/HomePage/Trust/Trust.styled";
import Logo1 from "@/stories/Kdan Music Book/assets/Trust/svg/DudePerfectLogo.svg";
import Logo2 from "@/stories/Kdan Music Book/assets/Trust/svg/PewdiepieLogo.svg";
import Logo3 from "@/stories/Kdan Music Book/assets/Trust/svg/MrBeastLogo.svg";
import Logo4 from "@/stories/Kdan Music Book/assets/Trust/svg/WbLogo.svg";
import Logo5 from "@/stories/Kdan Music Book/assets/Trust/svg/NetflixLogo.svg";
import Logo6 from "@/stories/Kdan Music Book/assets/Trust/svg/PixarLogo.svg";
import Logo7 from "@/stories/Kdan Music Book/assets/Trust/svg/PickyPicksLogo.svg";

type TrustProps = {};
function Trust({ }: TrustProps) {
  return (
    <S.Wrapper>
      <S.Title>一些用來佔位子的商標</S.Title>
      <S.LogoWrapper>
        <S.DudePerfectLogo src={Logo1} alt="Dude Perfect Logo" />
        <S.PewdiepieLogo src={Logo2} alt="Pewdiepie Logo" />
        <S.MrBeastLogo src={Logo3} alt="MrBeast Logo" />
        <S.WbLogo src={Logo4} alt="Wb Logo" />
        <S.NetflixLogo src={Logo5} alt="Netflix Logo" />
        <S.PixarLogo src={Logo6} alt="Pixar Logo" />
        <S.PickypicksLogo src={Logo7} alt="Pickypicks Logo" />
      </S.LogoWrapper>
    </S.Wrapper>
  );
}
export default Trust;
