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
        <S.Brand>
          <S.NavPill>Yumspot</S.NavPill>
        </S.Brand>
        <li>
          <S.Navlink
            to="/"
            style={({ isActive }) => (isActive ? S.activeStyle : null)}
          >
            <S.NavIcon icon={faHouse} />
            <S.NavPill>Home</S.NavPill>
          </S.Navlink>
        </li>
        <li>
          <S.Navlink
            to="/explore"
            style={({ isActive }) => (isActive ? S.activeStyle : null)}
          >
            <S.NavIcon icon={faCompass} />
            <S.NavPill>Explore</S.NavPill>
          </S.Navlink>
        </li>
        <li>
          <S.Navlink
            to="/saved"
            style={({ isActive }) => (isActive ? S.activeStyle : null)}
          >
            <S.NavIcon icon={faBookmark} />
            <S.NavPill>Saved</S.NavPill>
          </S.Navlink>
        </li>
      </S.NavLinks>
      <S.NavLinks>
        <li>
          <S.Navlink
            to="/profile"
            style={({ isActive }) => (isActive ? S.activeStyle : null)}
          >
            <S.NavIcon icon={faUserCircle} />
            <S.NavPill>@{authUser?.username}</S.NavPill>
          </S.Navlink>
        </li>
      </S.NavLinks>
    </S.SidebarContainer>
  );
};

export { Sidebar };
