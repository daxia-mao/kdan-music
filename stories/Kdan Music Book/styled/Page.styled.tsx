import styled from "styled-components";

const Title = styled.h4`
  ${(props) => props.theme.typography.getHeading({ level: 5 })};
  font-weight: 900;
  opacity: 0.7;
  color: white;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

const Wrapper = styled.main`
  display: block;
  width: 100%;
  min-height: 100vh;
  background-color: #22223b;
`;

const Page = {
  Wrapper,
  Title,
  Section,
};

export default Page;
