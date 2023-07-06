import React, { useEffect, useState } from "react";
import { useAnimate, useInView, stagger } from "framer-motion";
import Carousel from "@/stories/Kdan Music Book/Components/Carousel";
import Testmonial from "@/stories/Kdan Music Book/Components/Testmonial";
import TestmonialInfo from "@/stories/Kdan Music Book/assets/Testmonials/testmonialInfo";
import S from "./index.styled";
interface TestmonialsProps {}

function Testmonials({}: TestmonialsProps) {
  const [width, setWidth] = useState(0);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  const handleResize = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    animate(
      "*",
      { opacity: [0, 1], scale: [0.8, 1] },
      { duration: 0.3, delay: stagger(0.05) }
    );
  }, [isInView]);

  return (
    <S.Wrapper ref={scope}>
      <S.Title>感言</S.Title>
      <S.Subtitle>聆聽他們使用上的體驗</S.Subtitle>
      <S.CarouselWrapper>
        <Carousel>
          <S.TestmonialWrapper>
            <Testmonial {...TestmonialInfo[0]} />
            <Testmonial {...TestmonialInfo[1]} />
            <Testmonial {...TestmonialInfo[2]} />
          </S.TestmonialWrapper>
          <S.TestmonialWrapper>
            <Testmonial {...TestmonialInfo[3]} />
            <Testmonial {...TestmonialInfo[4]} />
            <Testmonial {...TestmonialInfo[5]} />
          </S.TestmonialWrapper>
          <S.TestmonialWrapper>
            <Testmonial {...TestmonialInfo[6]} />
            <Testmonial {...TestmonialInfo[7]} />
            <Testmonial {...TestmonialInfo[8]} />
          </S.TestmonialWrapper>
        </Carousel>
      </S.CarouselWrapper>
    </S.Wrapper>
  );
}

export default Testmonials;
