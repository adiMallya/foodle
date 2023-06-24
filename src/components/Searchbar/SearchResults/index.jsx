import { useNavigate } from "react-router-dom";
import { Avatar } from "src/components";
import { useUserContext } from "src/contexts";
import * as SS from "src/components/Suggestions/styles";
import * as S from "./styles";

const SearchResults = () => {
  const navigate = useNavigate();
  const { searchResults } = useUserContext();

  return (
    <S.Results>
      {searchResults.length ? (
        searchResults.map((user, idx) => (
          <S.UserResult
            key={idx}
            onClick={() => navigate(`/profile/${user?.username}`)}
          >
            <Avatar user={user} />
            <SS.UserDesc>
              <SS.UserFullName>
                {user?.firstName + " " + user?.lastName}
              </SS.UserFullName>
              <SS.UserName>@{user?.username}</SS.UserName>
            </SS.UserDesc>
          </S.UserResult>
        ))
      ) : (
        <li>
          <p>No user found.</p>
        </li>
      )}
    </S.Results>
  );
};

export { SearchResults };
