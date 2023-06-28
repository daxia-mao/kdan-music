import React from "react";
import HeaderBgSrc from "./assets/Header/headerbg.png";
import S from "./styled/Header.styled";

type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <S.Wrapper>
      <S.BackgroundImageBox>
        <S.BackgroundImage alt={"background image"} src={HeaderBgSrc} />
      </S.BackgroundImageBox>
      <S.ContentBox>
        <S.Heading>歡迎來到凱鈿音樂</S.Heading>
        <S.Subtitle>「沒有熱情，就不可能創造出任何真正的藝術作品。」</S.Subtitle>
        <S.SearchBarWrapper>
          <S.SearchBar>
            <S.SearchIcon />
            <S.SearchInput type="text" placeholder="搜尋音樂" />
          </S.SearchBar>
          <S.KeywordTip>
            試一些關鍵詞：流行、嘻哈、五月天、周杰倫等
          </S.KeywordTip>
        </S.SearchBarWrapper>
        <S.Caption>
          所有資源來自 <a href="#">Spotify API</a>, 參考該{" "}
          <a href="#">Figma Design</a> 打造而成。
        </S.Caption>
      </S.ContentBox>
    </S.Wrapper>
  );
}

export default Header;
