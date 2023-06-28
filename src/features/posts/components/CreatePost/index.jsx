import { useRef, useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { usePostContext, useAuthContext } from "src/contexts";
import { createPost, editPost, uploadMedia } from "src/features/posts";
import { ACTIONS } from "src/utils";
import { Avatar } from "src/components";
import { Button, Icon, Input } from "src/components/atoms";

import * as S from "./styles";
import * as PCS from "../PostCard/styles";

const CreatePost = ({ editPostData }) => {
  const { authToken, authUser } = useAuthContext();
  const { postDispatch } = usePostContext();

  const [content, setContent] = useState(
    editPostData ? editPostData.content : ""
  );
  const [mediaURL, setMediaURL] = useState(editPostData?.mediaURL || "");

  const createPostRef = useRef();

  const onMediaUpload = async (event) => {
    event.preventDefault();
    await uploadMedia(event.target.files[0], setMediaURL);
  };

  const onPostSubmit = (event) => {
    event.preventDefault();
    let postData = {};
    if (editPostData) {
      postData = { ...editPostData, content, mediaURL };
      editPost(authToken, editPostData?._id, postData, postDispatch);
    } else {
      postData = { content, mediaURL };
      createPost(authToken, postData, postDispatch);
    }

    setContent("");
    setMediaURL("");
    createPostRef.current.innerText = "";
  };

  return (
    <S.CreatePostContainer>
      <PCS.PostUser>
        <Avatar user={authUser} />
      </PCS.PostUser>
      <S.PostContent onSubmit={onPostSubmit}>
        <S.TextArea
          ref={createPostRef}
          name="post_content"
          placeholder="Yumm. What's happening?"
          value={editPostData?.content || content}
          maxLength={160}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></S.TextArea>
        {mediaURL ? (
          <S.PostMedia>
            <img src={mediaURL} alt={`post_media`} />
            <S.RemoveButton
              variant="icon"
              size="sm"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMediaURL(null);
              }}
            >
              <Icon icon={faCircleXmark} title="Delete" />
            </S.RemoveButton>
          </S.PostMedia>
        ) : null}
        <S.CreatePostActions>
          <S.MediaUploadButton>
            <label htmlFor="media_upload">
              <Input
                type="file"
                id="media_upload"
                supportedFileExtensions="image/*, video/mp3"
                onChange={onMediaUpload}
              />
              <Icon icon={faImage} title="Upload" />
            </label>
          </S.MediaUploadButton>
          <div style={{ display: "flex", gap: "1rem" }}>
            <S.CharCount aria-label="Characters">
              <span>{content?.length}</span>/ 160{" "}
            </S.CharCount>
            <Button
              size="sm"
              rounded="true"
              type="submit"
              disabled={!content.trim() && !mediaURL}
            >
              {editPostData ? "Update" : "Post"}
            </Button>
          </div>
        </S.CreatePostActions>
      </S.PostContent>
    </S.CreatePostContainer>
  );
};

export { CreatePost };
