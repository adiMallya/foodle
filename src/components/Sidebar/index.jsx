import { useState } from "react";
import {
  faHouse,
  faCirclePlus,
  faCompass,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext, useUserContext } from "src/contexts";
import { Avatar } from "src/components";
import { Modal } from "src/components/atoms";
import { CreatePost } from "src/features/posts";

import * as S from "./styles";
import * as SS from "../Suggestions/styles";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  const { users } = useUserContext();

  const [showModal, setShowModal] = useState(false);

  const currentUser = users?.find(
    (user) => user.username === authUser.username
  );

  return (
    <S.SidebarContainer>
      <S.NavLinks>
        <S.Brand>
          <S.NavPill>foodle</S.NavPill>
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
        <S.CreatePost>
          <S.Navlink to="#" onClick={() => setShowModal((prev) => !prev)}>
            <S.NavIcon icon={faCirclePlus} />
          </S.Navlink>
        </S.CreatePost>
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
          <S.ProfileLink to={`/profile/${currentUser?.username}`}>
            <Avatar user={currentUser} />
            <S.ProfileDesc>
              <SS.UserFullName>
                {currentUser?.firstName + " " + currentUser?.lastName}
              </SS.UserFullName>
              <SS.UserName>@{currentUser?.username}</SS.UserName>
            </S.ProfileDesc>
          </S.ProfileLink>
        </li>
      </S.NavLinks>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <CreatePost />
      </Modal>
    </S.SidebarContainer>
  );
};

export { Sidebar };
