import styled from "styled-components";

const SearchInput = styled.input`
  width: 100%;
  ${(props) =>
    props.theme.typography.getCaption({ level: 2, weight: "medium" })};
  color: ${(props) => props.theme.colors.descriptionDark};
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.descriptionDark};
  }
`;
const Wrapper = styled.form`
  width: 100%;
`;

export default {
  Wrapper,
  SearchInput,
};
