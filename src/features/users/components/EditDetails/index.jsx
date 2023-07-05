import { useState } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Input, Icon, Button } from "src/components/atoms";
import { Avatar } from "src/components";
import { useUserContext, useAuthContext } from "src/contexts";
import { updateProfile, uploadAvatar } from "src/features/users/userServices";
import { avatarList } from "src/utils";

import * as S from "./styles";
import * as AS from "src/components/Avatar/styles";

const EditDetails = ({ user, setEditModal }) => {
  const { authToken, authDispatch } = useAuthContext();
  const { users, userDispatch } = useUserContext();

  const [editUserData, setEditUserData] = useState(user);

  const inputHandler = (event) => {
    event.stopPropagation();
    const { name, value } = event.target;
    setEditUserData((prev) => ({ ...prev, [name]: value }));
  };

  const submitEditForm = (event) => {
    event.preventDefault();
    updateProfile(authToken, editUserData, authDispatch);
    setEditModal(false);
  };

  return (
    <S.EditForm onSubmit={submitEditForm}>
      <Avatar user={editUserData} size={"md"} />
      <S.AvatarUploadButton>
        <label htmlFor="avatar_upload">
          <Input
            type="file"
            name="profileAvatar"
            id="avatar_upload"
            supportedFileExtensions="image/*"
          />
          <Icon icon={faCamera} title="Upload" />
        </label>
      </S.AvatarUploadButton>
      <S.AvatarPicker>
        {avatarList.map(({ src, label }) => (
          <AS.AvatarWrapper key={label}>
            <AS.AvatarImage
              src={src}
              alt={label}
              aria-label="Avatar"
              onClick={(e) => {
                e.stopPropagation();
                setEditUserData((prev) => ({ ...prev, profileAvatar: src }));
              }}
            />
          </AS.AvatarWrapper>
        ))}
      </S.AvatarPicker>
      <S.Container>
        <S.InputGroup>
          <label htmlFor="fullName" aria-label="Name">
            Name
          </label>
          <Input
            name="fullName"
            id="fullName"
            value={`${user.firstName} ${user.lastName}`}
            aria-readonly="true"
            readOnly
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="username" aria-label="Username">
            Username
          </label>
          <Input
            name="username"
            id="username"
            value={`${user.username}`}
            aria-readonly="true"
            readOnly
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="bio" aria-label="Bio">
            Bio
          </label>
          <Input
            name="bio"
            id="bio"
            value={editUserData.bio}
            onChange={inputHandler}
            isAutoFocus={true}
          />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="website" aria-label="Website">
            Website
          </label>
          <Input
            type="url"
            name="website"
            id="website"
            value={editUserData.website}
            onChange={inputHandler}
          />
        </S.InputGroup>
        <S.InputGroup>
          <Button rounded="true" size="md" type="submit">
            Update
          </Button>
        </S.InputGroup>
      </S.Container>
    </S.EditForm>
  );
};

export { EditDetails };
