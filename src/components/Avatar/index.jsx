import { getUserInitials } from "src/utils";
import * as S from "./styles";

const Avatar = ({ user, size }) => {
  const avatar = user?.profileAvatar;

  const fallback = (user && getUserInitials(user)) || "YM";

  return (
    <S.AvatarWrapper size={size || "sm"}>
      {avatar ? (
        <S.AvatarImage src={avatar} alt={fallback} />
      ) : (
        <S.AvatarText>{fallback}</S.AvatarText>
      )}
    </S.AvatarWrapper>
  );
};

export { Avatar };
