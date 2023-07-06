import styled from "styled-components";

const Title = styled.h4`
  ${props => props.theme.typography.getHeading({level: 5})};
  font-weight: 900;
  opacity: 0.7;
  color: white;
`

const Page = {
  Title,
}

export default Page;