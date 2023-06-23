import { useNavigate } from "react-router-dom";
import { useAuthContext, useUserContext } from "src/contexts";
import { Button } from "src/components/atoms";
import { Avatar } from "src/components";
import { shuffleArray } from "src/utils";

import * as S from "./styles";

const Suggestions = () => {
  const navigate = useNavigate();
  const { authUser } = useAuthContext();
  const { users } = useUserContext();

  const loggedInUser = users?.find(
    (user) => user.username === authUser.username
  );

  const suggestUsers = users
    ?.filter((user) => user._id !== loggedInUser._id)
    ?.filter(
      (e) => !loggedInUser?.following.some((item) => item._id === e._id)
    );

  return (
    <S.Wrapper>
      <S.ListTitle>You Can Follow</S.ListTitle>
      {suggestUsers.map((user) => (
        <S.UserCard
          key={user?._id}
          onClick={() => navigate(`/profile/${user?.username}`)}
        >
          <Avatar user={user} />
          <S.UserDesc>
            <S.UserFullName>{user?.firstName + user?.lastName}</S.UserFullName>
            <S.UserName>@{user?.username}</S.UserName>
          </S.UserDesc>
          <Button rounded="true" size="sm">
            Follow
          </Button>
        </S.UserCard>
      ))}
    </S.Wrapper>
  );
};

export { Suggestions };
