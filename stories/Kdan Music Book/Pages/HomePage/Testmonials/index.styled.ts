import styled from "styled-components";

const TestmonialsWidth = {
  desktop: 305 * 3 + 30 * 2,
  tablet: 305 * 2 + 30 * 1,
  mobile: 288,
};

const TestmonialWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 100%;
`;
const CarouselWrapper = styled.div`
  display: block;
  min-width: ${TestmonialsWidth.desktop}px;
  max-width: ${TestmonialsWidth.desktop}px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-width: ${TestmonialsWidth.tablet}px;
    max-width: ${TestmonialsWidth.tablet}px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: ${TestmonialsWidth.mobile}px;
    max-width: ${TestmonialsWidth.mobile}px;
  }
`;

const Title = styled.h3`
  ${(props) => props.theme.typography.getCapitalised()};
  color: ${(props) => props.theme.colors.braveYellow};
  text-align: center;
`;
const Subtitle = styled.h5`
  ${(props) => props.theme.typography.getHeading({ level: 5 })};
  color: ${(props) => props.theme.colors.titleDark};
  text-align: center;
`;
const Wrapper = styled.div`
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

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 60px 65px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    ${Subtitle} {
      margin-bottom: 40px;
      ${(props) => props.theme.typography.getHeading({ level: 6 })};
    }
  }
`;

export default {
  Wrapper,
  Title,
  Subtitle,
  CarouselWrapper,
  TestmonialWrapper,
};
