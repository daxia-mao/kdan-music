import React, { ReactNode, useEffect, useState } from "react";
import { Variants, useAnimate } from "framer-motion";
import S from "./index.styled";
interface CarouselProps {
  children: ReactNode;
}

const CarouselAnimation: Variants = {
  next: {
    x: [100, 0],
    opacity: [0, 1],
    scale: [0.9, 0.9, 1],
    transition: {
      duration: 0.4,
    },
  },
  prev: {
    x: [-100, 0],
    opacity: [0, 1],
    scale: [0.9, 0.9, 1],
    transition: {
      duration: 0.4,
    },
  },
  current: {
    opacity: [0, 1],
    scale: [0.9, 0.9, 1],
    transition: {
      duration: 0.4,
    },
  },
};

function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [containerRef, animate] = useAnimate();
  const handlePrev = () => {
    animate(containerRef.current, CarouselAnimation["prev"]);
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    animate(containerRef.current, CarouselAnimation["next"]);
    if (currentIndex === length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < index) {
        animate(containerRef.current, CarouselAnimation["next"]);
      } else if (prevIndex > index) {
        animate(containerRef.current, CarouselAnimation["prev"]);
      } else {
        animate(containerRef.current, CarouselAnimation["current"]);
      }
      return index;
    });
  };

  useEffect(() => {
    const length = React.Children.count(children);
    setLength(length);
  }, []);

  return (
    <S.Wrapper>
      <S.Container ref={containerRef}>
        {React.Children.toArray(children)[currentIndex]}
      </S.Container>
      <S.Toolbar>
        <S.Prev onClick={handlePrev} />
        <S.DotWrapper>
          {[...Array(length)].map((_, index) => (
            <S.Dot
              active={index === currentIndex}
              key={index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </S.DotWrapper>
        <S.Next onClick={handleNext} />
      </S.Toolbar>
    </S.Wrapper>
  );
}

export default Carousel;
