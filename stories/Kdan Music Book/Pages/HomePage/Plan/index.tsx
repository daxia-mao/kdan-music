import React from "react";
import S from "@/stories/Kdan Music Book/Pages/HomePage/Plan/index.styled";
interface PlanProps {}

function Plan({}: PlanProps) {
  return (
    <S.Wrapper>
      <S.Title>選擇你的服務方案！</S.Title>
      <S.Caption>找到適合你的方案</S.Caption>
      <S.PlanItemWrapper>
        <S.PlanItem>
          <S.PlanName>基礎</S.PlanName>
          <S.PlanDescription>其實和高級版並沒有差別</S.PlanDescription>
          <S.PlanPrice>完全免費</S.PlanPrice>
          <S.ButtonWrapper>
            <S.PlanButton variant="primary" size="large">
              即刻啟程
            </S.PlanButton>
          </S.ButtonWrapper>
        </S.PlanItem>
        <S.PlanItem>
          <S.PlanName>高級</S.PlanName>
          <S.PlanDescription>其實和基礎版一樣</S.PlanDescription>
          <S.PlanPrice>也是，完全免費</S.PlanPrice>
          <S.ButtonWrapper>
            <S.PlanButton variant="secondary" size="large">
              即刻啟程
            </S.PlanButton>
          </S.ButtonWrapper>
        </S.PlanItem>
      </S.PlanItemWrapper>
      <S.Caption>
        你知道嗎:「在非洲，每六十秒，就有一分鐘過去」，所以趕緊啟程吧
      </S.Caption>
    </S.Wrapper>
  );
}

export default Plan;
