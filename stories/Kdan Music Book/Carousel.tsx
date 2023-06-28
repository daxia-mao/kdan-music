import React, { ReactNode, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx'
import { Variants, motion, useAnimate } from 'framer-motion';

interface CarouselProps {
  children: ReactNode;
}

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Dot = styled.div<{ active: boolean }>`
  min-width: 10px;
  min-height: 10px;
  max-width: 10px;
  max-height: 10px;
  border-radius: 50%;
  background-color: #eee;
  transition: all 0.2s;
  cursor: pointer;

  ${({active}) => active && css`
    background-color: ${props => props.theme.colors.descriptionLight};
  `}

  &:hover {
    background-color: ${props => props.theme.colors.descriptionLight};
  }
`

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  user-select: none;
`
const IconBaseStyle = css`
  width: 32px;
  height: 32px;
  color: #EEE;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    color: ${props => props.theme.colors.descriptionLight};
  }
`
const PrevIcon = styled(RxChevronLeft)`
  ${IconBaseStyle};
`
const NextIcon = styled(RxChevronRight)`
  ${IconBaseStyle};
`

const CarouselContainer = styled(motion.div)`
  display: block;
  width: inherit;
  height: inherit;
  overflow: hidden;
`

const CarouselWrapper = styled.div`
  display: block;
  width: inherit;
  height: inherit;
  overflow: hidden;

  ${CarouselContainer} {
    margin-bottom: 30px;
  }
`

const CarouselAnimation: Variants = {
  'next': {
    x: [100, 0],
    opacity: [0, 1],
    scale: [0.9, 0.9, 1],
    transition: {
      duration: 0.4
    }
  },
  'prev': {
    x: [-100, 0],
    opacity: [0, 1],
    scale: [0.9, 0.9, 1],
    transition: {
      duration: 0.4
    }
  },
  'current': {
    opacity: [0, 1],
    scale: [0.9, 0.9, 1],
    transition: {
      duration: 0.4
    }
  }
}


function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [containerRef, animate] = useAnimate();
  const handlePrev = () => {
    animate(containerRef.current, CarouselAnimation['prev']);
    if(currentIndex === 0) {
      setCurrentIndex(length - 1);
      return;
    }
    setCurrentIndex(prev => prev - 1);
  }
  const handleNext = () => {
    animate(containerRef.current, CarouselAnimation['next']);
    if(currentIndex === length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(prev => prev + 1);
  }
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(prevIndex => {
      if(prevIndex < index) {
        animate(containerRef.current, CarouselAnimation['next']);
      }
      else if(prevIndex > index){
        animate(containerRef.current, CarouselAnimation['prev']);
      }
      else {
        animate(containerRef.current, CarouselAnimation['current']);
      }
      return index;
    });
  }

  useEffect(() => {
    const length = React.Children.count(children);
    setLength(length);

  }, []);
  
  return (
    <CarouselWrapper>
      <CarouselContainer ref={containerRef}>
        { React.Children.toArray(children)[currentIndex] }
      </CarouselContainer>
      <ToolbarWrapper>
        <PrevIcon onClick={handlePrev}/>
        <DotWrapper>
          {[...Array(length)].map((_, index) => 
            (<Dot active={index === currentIndex} key={index} onClick={() => handleDotClick(index)}/>))}
        </DotWrapper>
        <NextIcon onClick={handleNext}/>
      </ToolbarWrapper>
    </CarouselWrapper>
  )
}

export default Carousel