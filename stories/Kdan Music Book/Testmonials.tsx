import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Testmonial from './Testmonial';
import TestmonialInfo from './assets/Testmonials/testmonialInfo';
import Carousel from './Carousel';
import { useAnimate, useInView, stagger } from 'framer-motion';

interface TestmonialsProps {}

const TestmonialsWidth = {
  desktop: 305 * 3 + 30 * 2,
  tablet: 305 * 2 + 30 * 1,
  mobile: 288
}

const TestmonialWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 100%;
`
const CarouselWrapper = styled.div`
  display: block;
  min-width: ${TestmonialsWidth.desktop}px;
  max-width: ${TestmonialsWidth.desktop}px;

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
    min-width: ${TestmonialsWidth.tablet}px;
    max-width: ${TestmonialsWidth.tablet}px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
    min-width: ${TestmonialsWidth.mobile}px;
    max-width: ${TestmonialsWidth.mobile}px;
  }
`

const Title = styled.h3`
  ${props => props.theme.typography.getCapitalised()};
  color: ${props => props.theme.colors.braveYellow};
  text-align: center;
`
const Subtitle = styled.h5`
  ${props => props.theme.typography.getHeading({level: 5})};
  color: ${props => props.theme.colors.titleDark};
  text-align: center;

`
const TestmonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 135px;

  ${Title} {
    margin-bottom: 20px;
  }
  ${Subtitle} {
    margin-bottom: 50px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}){
    padding: 60px 65px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}){
    ${Subtitle} {
      margin-bottom: 40px;
      ${props => props.theme.typography.getHeading({level: 6})};
    }
  }
`
function Testmonials({}: TestmonialsProps) {
  const [width, setWidth] = useState(0);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const handleResize = () => {
    const width = window.innerWidth;
    setWidth(width);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    animate("*", {opacity: [0, 1], scale: [0.8, 1]}, {duration: 0.3 ,delay: stagger(0.05)})    
  }, [isInView])

  return (
    <TestmonialsWrapper ref={scope}>
      <Title>
        感言
      </Title>
      <Subtitle>
        聆聽他們使用上的體驗
      </Subtitle>
      <CarouselWrapper>
        <Carousel>
          <TestmonialWrapper>
            <Testmonial {...TestmonialInfo[0]} />
            <Testmonial {...TestmonialInfo[1]} />
            <Testmonial {...TestmonialInfo[2]} />
          </TestmonialWrapper>
          <TestmonialWrapper>
            <Testmonial {...TestmonialInfo[3]} />
            <Testmonial {...TestmonialInfo[4]} />
            <Testmonial {...TestmonialInfo[5]} />
          </TestmonialWrapper>
          <TestmonialWrapper>
            <Testmonial {...TestmonialInfo[6]} />
            <Testmonial {...TestmonialInfo[7]} />
            <Testmonial {...TestmonialInfo[8]} />
          </TestmonialWrapper>
        </Carousel>
      </CarouselWrapper>
    </TestmonialsWrapper>
  )
}

export default Testmonials