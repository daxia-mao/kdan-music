import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import S from "./index.styled";
interface SearchFormProps {}

function SearchForm({}: SearchFormProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event: FormEvent) => {
    router.push(`/search/${searchQuery}`);
    event.preventDefault();
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.SearchInput
        value={searchQuery}
        type="text"
        placeholder="搜尋..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </S.Wrapper>
  );
}

export default SearchForm;
