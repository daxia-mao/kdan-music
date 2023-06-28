import React from 'react'
import styled from 'styled-components'
import Button from './Button'
interface PlanProps {}

const PlanButton = styled(Button)`
  border: 2px solid ${props => props.theme.colors.pureWhite};
`
const ButtonWrapper = styled.div``
const PlanPrice = styled.h6`
  display: block;
  ${props => props.theme.typography.getSubtitle({level: 1, weight: 'semibold'})};
  color: ${props => props.theme.colors.pureWhite};

`
const PlanDescription = styled.h6`
  display: block;
  ${props => props.theme.typography.getSubtitle({level: 2, weight: 'medium'})};
  color: ${props => props.theme.colors.titleLight};
`
const PlanName = styled.h4`
  display: block;
  ${props => props.theme.typography.getHeading({level: 4})};
  color: ${props => props.theme.colors.pureWhite};
`
const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 334px;
  height: 345px;
  padding: 26px 34px;

  border: 1px solid ${props => props.theme.colors.deepBlueSaturation};
  border-radius: 12px;
  text-align: left;

  &:nth-child(2) {
    background-color: #1B4BFF;
    border: none;
  }
`
const PlanItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`
const Caption = styled.p`
  display: block;
  ${props => props.theme.typography.getCaption({level: 1, weight: 'medium'})};
  color: ${props => props.theme.colors.titleLight};

`
const Title = styled.h3`
  display: block;
  ${props => props.theme.typography.getHeading({level: 3})};
  color: ${props => props.theme.colors.pureWhite};
`
const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.deepBlue};
  text-align: center;

  /* Width, Height */
  width: 100%;
  min-height: 696px;

  /* Padding */
  padding: 60px 100px;

  /* Margin */
  ${Title} {
    margin-bottom: 13px;
  }
  ${Caption}:first-of-type {
    margin-bottom: 43px;
  }
  ${PlanItemWrapper} {
    margin-bottom: 39px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
    /* Width, Height */
    width: 100%;
    min-height: 625px;

    /* Padding */
    padding: 60px 0px;

    /* Margin */
    ${Title} {
      margin-bottom: 12px;
    }
    ${Caption}:first-of-type {
      margin-bottom: 40px;
    }
    ${PlanItemWrapper} {
      margin-bottom: 30px;
    }

    /* OTHER */
    ${Title} {
      ${props => props.theme.typography.getHeading({level: 4})};
    }
    ${PlanItem} {
      width: 280px;
      height: 310px;
    }
    ${PlanName} {
      ${props => props.theme.typography.getHeading({level: 5})};
    }
    ${PlanDescription} {
      ${props => props.theme.typography.getSubtitle({level: 3, weight: 'medium'})};
    }
    ${PlanPrice} {
      ${props => props.theme.typography.getSubtitle({level: 2, weight: 'semibold'})};
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
    /* Width, Height */
    width: 100%;
    min-height: 886px;

    /* Padding */
    padding: 50px 16px;

    /* Margin */
    ${Title} {
      margin-bottom: 8px;
    }
    ${Caption}:first-of-type {
      margin-bottom: 40px;
    }
    ${PlanItemWrapper} {
      margin-bottom: 24px;
    }

    /* OTHER */
    ${Title} {
      ${props => props.theme.typography.getHeading({level: 5})};
    }
    ${PlanItemWrapper} {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    ${PlanItem} {
      max-width: 287px;
      max-height: 280px;
    }
    ${PlanName} {
      ${props => props.theme.typography.getHeading({level: 6})};
    }
    ${PlanDescription} {
      ${props => props.theme.typography.getSubtitle({level: 3, weight: 'medium'})};
    }
    ${PlanPrice} {
      ${props => props.theme.typography.getSubtitle({level: 2, weight: 'semibold'})};
    }
    ${Caption} {
      ${props => props.theme.typography.getCaption({level: 2, weight: 'medium'})};
    }
  }
`

function Plan({}: PlanProps) {
  return (
    <PlanWrapper>
      <Title>選擇你的服務方案！</Title>
      <Caption>找到適合你的方案</Caption>
      <PlanItemWrapper>
        <PlanItem>
          <PlanName>基礎</PlanName>
          <PlanDescription>其實和高級版並沒有差別</PlanDescription>
          <PlanPrice>完全免費</PlanPrice>
          <ButtonWrapper>
            <PlanButton variant='primary' size='large'>即刻啟程</PlanButton>
          </ButtonWrapper>
        </PlanItem>
        <PlanItem>
          <PlanName>高級</PlanName>
          <PlanDescription>其實和基礎版一樣</PlanDescription>
          <PlanPrice>也是，完全免費</PlanPrice>
          <ButtonWrapper>
            <PlanButton variant='secondary' size='large'>即刻啟程</PlanButton>
          </ButtonWrapper>
        </PlanItem>
      </PlanItemWrapper>
      <Caption>你知道嗎:「在非洲，每六十秒，就有一分鐘過去」，所以趕緊啟程吧</Caption>
    </PlanWrapper>
  )
}

export default Plan