import { useNavigate } from "react-router-dom";
import { Avatar } from "src/components";

import * as S from "./styles";

const FollowList = ({ followModal, setFollowModal }) => {
  const navigate = useNavigate();
  const { type, list: followList } = followModal;

  return (
    <S.Wrapper>
      {followList?.length > 0 ? (
        followList.map((user) => (
          <S.UserCard
            key={user?._id}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/profile/${user.username}`);
              () => setFollowModal((prev) => !prev);
            }}
          >
            <Avatar user={user} />
            <S.UserDesc>
              <S.UserFullName>
                {user?.firstName + " " + user?.lastName}
              </S.UserFullName>
              <S.UserName>@{user?.username}</S.UserName>
            </S.UserDesc>
          </S.UserCard>
        ))
      ) : (
        <p>No {type}</p>
      )}
    </S.Wrapper>
  );
};

export { FollowList };
