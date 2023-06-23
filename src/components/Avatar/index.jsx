import { getUserInitials } from "src/utils";
import * as S from "./styles";

const Avatar = ({ user }) => {
  const avatar = user?.profileAvatar;

  const fallback = getUserInitials(user);

  return (
    <S.AvatarWrapper>
      {avatar ? (
        <S.AvatarImage src={avatar} alt={fallback} />
      ) : (
        <S.AvatarText>{fallback}</S.AvatarText>
      )}
    </S.AvatarWrapper>
  );
};

export { Avatar };
