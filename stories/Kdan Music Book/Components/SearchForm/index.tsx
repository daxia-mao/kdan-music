import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
interface SearchFormProps {}

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
const SearchFormWrapper = styled.form`
  width: 100%;
`;
function SearchForm({}: SearchFormProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event: FormEvent) => {
    router.push(`/search/${searchQuery}`);
    event.preventDefault();
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <SearchInput
        value={searchQuery}
        type="text"
        placeholder="搜尋..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </SearchFormWrapper>
  );
}

export default SearchForm;
