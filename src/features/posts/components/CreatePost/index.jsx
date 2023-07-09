import { useRef, useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { usePostContext, useAuthContext } from "src/contexts";
import { createPost, editPost, uploadMedia } from "src/features/posts";
import { Avatar } from "src/components";
import { Button, Icon, Input, Loader } from "src/components/atoms";

import * as S from "./styles";
import * as PCS from "../PostCard/styles";

const CreatePost = ({ editPostData, setShowModal }) => {
  const { authToken, authUser } = useAuthContext();
  const { postDispatch } = usePostContext();

  const [content, setContent] = useState(
    editPostData ? editPostData?.content : ""
  );
  const [postMedia, setPostMedia] = useState({
    imgURL: editPostData?.mediaURL,
    loading: false,
  });

  const createPostRef = useRef();

  const onMediaUpload = async (event) => {
    setPostMedia((prev) => ({ ...prev, loading: true }));
    event.stopPropagation();
    await uploadMedia(event.currentTarget.files[0], setPostMedia);
  };

  const submitPostForm = (event) => {
    event.preventDefault();
    let postData = {};

    if (editPostData) {
      postData = { ...editPostData, content };
      if (postMedia?.imgURL) {
        postData = { ...postData, mediaURL: postMedia.imgURL };
      }
      editPost(authToken, editPostData?._id, postData, postDispatch);
      setPostMedia((prev) => ({ ...prev, imgURL: null, loading: false }));
    } else {
      postData = { content, mediaURL: "" };
      if (postMedia?.imgURL) {
        postData = { ...postData, mediaURL: postMedia.imgURL };
      }
      createPost(authToken, postData, postDispatch);
      setContent("");
      setPostMedia((prev) => ({ ...prev, imgURL: null, loading: false }));
      createPostRef.current.value = "";
    }

    setShowModal && setShowModal(false);
  };

  return (
    <S.CreatePostContainer>
      <PCS.PostUser>
        <Avatar user={authUser} />
      </PCS.PostUser>
      <S.PostContent onSubmit={submitPostForm}>
        <S.TextArea
          ref={createPostRef}
          name="post_content"
          placeholder="Yumm. What's happening?"
          defaultValue={content}
          maxLength={160}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></S.TextArea>
        <Loader loading={postMedia.loading} type="beats" />
        {postMedia.imgURL ? (
          <S.PostMedia>
            <img src={postMedia.imgURL} alt={`post_media`} />
            <S.RemoveButton
              variant="icon"
              size="sm"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPostMedia((prev) => ({ ...prev, imgURL: null }));
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
              <span>{content?.length}</span>/ 160
            </S.CharCount>
            <Button
              size="sm"
              rounded="true"
              type="submit"
              disabled={!content.trim() && !postMedia.imgURL}
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
