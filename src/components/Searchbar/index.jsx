import { SearchResults } from "./SearchResults";
import { useUserContext } from "src/contexts";
import { ACTIONS, getSearchedUsers } from "src/utils";

import * as S from "./styles";

const Searchbar = () => {
  const { users, searchValue, userDispatch } = useUserContext();

  const setSearchValue = (e) =>
    userDispatch({ type: ACTIONS.SEARCH, payload: e.target.value });

  const searchHandler = () => {
    const filteredUsers = getSearchedUsers(users, searchValue);
    userDispatch({ type: ACTIONS.SET_RESULTS, payload: filteredUsers });
  };

  return (
    <S.Wrapper>
      <S.SearchInput
        placeholder="Search users..."
        onChange={setSearchValue}
        onKeyDown={searchHandler}
      />
      {searchValue.length ? <SearchResults /> : null}
    </S.Wrapper>
  );
};

export { Searchbar };
