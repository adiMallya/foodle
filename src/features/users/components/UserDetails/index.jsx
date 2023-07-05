import { useState } from "react";
import {
  faArrowRightFromBracket,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext, useUserContext } from "src/contexts";
import { Button, Icon, Modal } from "src/components/atoms";
import { Avatar } from "src/components";
import { ACTIONS } from "src/utils";
import {
  followUser,
  unfollowUser,
  getAllUsers,
  EditDetails,
} from "src/features/users";

import * as S from "./styles";

const UserDetails = ({ currentUser }) => {
  const { authToken, authUser, authDispatch } = useAuthContext();
  const { userDispatch } = useUserContext();

  const [editModal, setEditModal] = useState(false);

  const {
    _id,
    username,
    firstName,
    lastName,
    bio,
    website,
    following,
    followers,
  } = currentUser;

  const alreadyFollowingUser = currentUser?.followers?.some(
    (user) => user.username === authUser.username
  );

  const buttonHandler = (event) => {
    event.stopPropagation();
    const buttonType = event.target.innerText;

    switch (buttonType) {
      case "Edit":
        setEditModal((prev) => !prev);
        return;
      case "Follow":
        followUser(currentUser?._id, authToken, userDispatch);
        getAllUsers(userDispatch);
        return;
      case "Unfollow":
        unfollowUser(currentUser?._id, authToken, userDispatch);
        getAllUsers(userDispatch);
        return;
      default:
        authDispatch({ type: ACTIONS.LOG_OUT });
        return;
    }
  };

  return (
    <S.ProfileWrapper>
      <Avatar user={currentUser} size={"lg"} />
      <S.ProfileSection>
        <S.UserDetail>
          <S.UserDesc>
            <S.UserFullName aria-label="Full Name">
              {firstName + " " + lastName}
            </S.UserFullName>
            <S.UserName aria-label="Username">@{username}</S.UserName>
          </S.UserDesc>
          {(website || bio) && (
            <S.UserBio>
              {bio && <p aria-label="Bio">{bio}</p>}
              {website && (
                <S.UserWebsite
                  aria-label="Website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon={faLink} title="Link" />
                  {website.slice(8)}
                </S.UserWebsite>
              )}
            </S.UserBio>
          )}
          <S.UserPresence>
            <div aria-label="Following">
              <span>{following.length}</span>
              <span>Following</span>
            </div>
            <div aria-label="Followers">
              <span>{followers.length}</span>
              <span>Followers</span>
            </div>
          </S.UserPresence>
        </S.UserDetail>
        <S.UserAction onClick={buttonHandler}>
          {_id === authUser._id ? (
            <>
              <Button variant="primaryOutline" aria-label="Edit">
                Edit
              </Button>
              <Button variant="icon">
                <S.LogOutIcon icon={faArrowRightFromBracket} title="Log Out" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="primaryOutline" aria-label="Unfollow">
                {alreadyFollowingUser ? "Unfollow" : "Follow"}
              </Button>
            </>
          )}
        </S.UserAction>
      </S.ProfileSection>
      <Modal showModal={editModal} closeModal={() => setEditModal(false)}>
        <EditDetails user={currentUser} setEditModal={setEditModal} />
      </Modal>
    </S.ProfileWrapper>
  );
};

export { UserDetails };
