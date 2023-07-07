import { useNavigate } from "react-router-dom";
import { useAuthContext, useUserContext } from "src/contexts";
import { Button } from "src/components/atoms";
import { Avatar } from "src/components";
import { followUser, getAllUsers } from "src/features/users";

import * as S from "./styles";

const Suggestions = () => {
  const navigate = useNavigate();
  const { authToken, authUser, authDispatch } = useAuthContext();
  const { users, userDispatch } = useUserContext();

  const currentUser = users?.find(
    (user) => user.username === authUser.username
  );

  const suggestUsers = users
    ?.filter((user) => user.username !== currentUser?.username)
    ?.filter(
      (e) =>
        !currentUser?.following.find((item) => item.username === e.username)
    );

  const followBtnHandler = (userId) => {
    followUser(userId, authToken, authDispatch);
    getAllUsers(userDispatch);
  };

  return (
    <>
      {suggestUsers.length ? (
        <S.Wrapper>
          <S.ListTitle>You Can Follow</S.ListTitle>
          {suggestUsers.map((user) => (
            <S.UserCard key={user?._id}>
              <Avatar
                user={user}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/profile/${user?.username}`);
                }}
              />
              <S.UserDesc>
                <S.UserFullName>
                  {user?.firstName + " " + user?.lastName}
                </S.UserFullName>
                <S.UserName>@{user?.username}</S.UserName>
              </S.UserDesc>
              <Button
                rounded="true"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  followBtnHandler(user?._id);
                }}
              >
                Follow
              </Button>
            </S.UserCard>
          ))}
        </S.Wrapper>
      ) : null}
    </>
  );
};

export { Suggestions };
