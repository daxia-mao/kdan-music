import React from "react";
import LogoSrc from "@/stories/Kdan Music Book/assets/Navbar/NavLogo.svg";
import S from "./index.styled";

type FooterProps = {};

function Footer({}: FooterProps) {
  return (
    <S.Wrapper>
      <S.CompanyInfo>
        <S.Logo src={LogoSrc} alt="Company Logo" />
        <S.Description>
          凱鈿音樂是一個用於練習前端相關技術的專案。
        </S.Description>
        <S.CopyRight>Kdan Music ©2023, All rights reserved</S.CopyRight>
      </S.CompanyInfo>
      <S.LinksWrapper>
        <S.LinkTitle>產品</S.LinkTitle>
        <S.LinkItem href={"#"}>搜尋音樂</S.LinkItem>
        <S.LinkItem href={"#"}>價格</S.LinkItem>
        <S.LinkItem href={"#"}>問與答</S.LinkItem>
        <S.LinkItem href={"#"}>其他</S.LinkItem>
      </S.LinksWrapper>

      <S.LinksWrapper>
        <S.LinkTitle>公司</S.LinkTitle>
        <S.LinkItem href={"#"}>部落格</S.LinkItem>
        <S.LinkItem href={"#"}>關於我們</S.LinkItem>
        <S.LinkItem href={"#"}>幫助</S.LinkItem>
        <S.LinkItem href={"#"}>加入團隊</S.LinkItem>
      </S.LinksWrapper>

      <S.LinksWrapper>
        <S.LinkTitle>社交媒體</S.LinkTitle>
        <S.LinkItem href={"#"}>Twitter</S.LinkItem>
        <S.LinkItem href={"#"}>Instagram</S.LinkItem>
        <S.LinkItem href={"#"}>YouTube</S.LinkItem>
        <S.LinkItem href={"#"}>Facebook</S.LinkItem>
      </S.LinksWrapper>
    </S.Wrapper>
  );
}

export default Footer;
