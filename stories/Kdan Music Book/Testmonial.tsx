import React from 'react'
import styled from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import DoubleQuotesIconSrc from './assets/Testmonials/DoubleQuotesIcon.svg'

interface TestmonialProps {
  testmonialText: string;
  avatarSrc: StaticImageData;
  userName: string;
  userJobTitle: string;
}

const DoubleQuotesIcon = styled(Image)``
const UserJobTitle = styled.p`
  display: block;
  ${props => props.theme.typography.getCaption({level: 3, weight: 'medium'})};
  color: ${props => props.theme.colors.descriptionLight};

`
const UserName = styled.p`
  display: block;
  ${props => props.theme.typography.getSubtitle({level: 2, weight: 'semibold'})};
  color: ${props => props.theme.colors.titleDark};

`
const AvatarImg = styled(Image)`
  width: 100%;
  height: 100%;
`
const AvatarWrapper = styled.div`
  min-width: 70px;
  min-height: 70px;
  border-radius: 50%;
  overflow: hidden;
`
const Text = styled.p`
  min-height: 72px;
  max-height: 72px;
  display: block;
  ${props => props.theme.typography.getCaption({level: 3, weight: 'medium'})};
  color: ${props => props.theme.colors.descriptionDark};
  overflow: auto;
`
const TestmonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 305px;
  min-height: 322px;
  max-width: 305px;
  max-height: 322px;
  padding: 20px 20px 30px 20px;
  position: relative;
  border: 1px solid ${props => props.theme.colors.titleLight};
  border-radius: 8px;
  text-align: center;

  ${DoubleQuotesIcon} {
    margin-bottom: 18px;
  }
  ${Text} {
    margin-bottom: 25px;
  }
  ${AvatarWrapper} {
    margin-bottom: 10px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
    min-width: 287px;
    min-height: 333px;
    max-width: 287px;
    max-height: 333px;
  }
`
export function Testmonial({ testmonialText, avatarSrc, userName, userJobTitle }: TestmonialProps) {

  return (
    <TestmonialWrapper>
      <DoubleQuotesIcon src={DoubleQuotesIconSrc} alt='DoubleQuotes Icon' />
      <Text>
        {testmonialText}
      </Text>
      <AvatarWrapper>
        <AvatarImg src={avatarSrc} alt='Avatar Image' quality={100}/>
      </AvatarWrapper>
      <UserName>{userName}</UserName>
      <UserJobTitle>{userJobTitle}</UserJobTitle>
    </TestmonialWrapper>
  )
}

export type { TestmonialProps }
export default Testmonial