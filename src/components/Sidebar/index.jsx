import {
  faHouse,
  faCompass,
  faBookmark,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "src/contexts";

import * as S from "./styles";

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <S.SidebarContainer>
      <S.NavLinks>
        <li>
          <S.NavLink to="/"></S.NavLink>
        </li>
        <li>
          <S.NavLink to="/">
            <S.NavIcon icon={faHouse} />
            <S.NavPill>Home</S.NavPill>
          </S.NavLink>
        </li>
        <li>
          <S.NavLink to="/explore">
            <S.NavIcon icon={faCompass} />
            <S.NavPill>Explore</S.NavPill>
          </S.NavLink>
        </li>
        <li>
          <S.NavLink to="/saved">
            <S.NavIcon icon={faBookmark} />
            <S.NavPill>Saved</S.NavPill>
          </S.NavLink>
        </li>
      </S.NavLinks>
      <S.NavLinks>
        <S.NavLink to="/profile">
          <S.NavIcon icon={faUserCircle} />
          <S.NavPill>@{authUser?.username}</S.NavPill>
        </S.NavLink>
      </S.NavLinks>
    </S.SidebarContainer>
  );
};

export { Sidebar };
