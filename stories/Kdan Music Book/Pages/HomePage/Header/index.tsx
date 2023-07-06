import React from "react";
import HeaderBgSrc from "@/stories/Kdan Music Book/assets/Header/headerbg.png";
import S from "@/stories/Kdan Music Book/Pages/HomePage/Header/index.styled";
import Link from "next/link";
import SearchForm from "@/stories/Kdan Music Book/Components/SearchForm";

type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <S.Wrapper>
      <S.BackgroundImageBox>
        <S.BackgroundImage alt={"background image"} src={HeaderBgSrc} />
      </S.BackgroundImageBox>
      <S.ContentBox>
        <S.Heading>歡迎來到凱鈿音樂</S.Heading>
        <S.Subtitle>
          「沒有熱情，就不可能創造出任何真正的藝術作品。」
        </S.Subtitle>
        <S.SearchBarWrapper>
          <S.SearchBar>
            <S.SearchIcon />
            <SearchForm />
          </S.SearchBar>
          <S.KeywordTip>
            試一些關鍵詞：流行、嘻哈、五月天、周杰倫等
          </S.KeywordTip>
        </S.SearchBarWrapper>
        <S.Caption>
          所有資源來自{" "}
          <Link href="https://developer.spotify.com/documentation/web-api">
            Spotify API
          </Link>
          , 參考該 <a href="#">Figma Design</a> 打造而成。
        </S.Caption>
      </S.ContentBox>
    </S.Wrapper>
  );
}

export default Header;
