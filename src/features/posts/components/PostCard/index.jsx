import { useNavigate } from "react-router-dom";
import {
  faEllipsis,
  faHeart as filledHeart,
  faBookmark as filledBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faBookmark as regularBookmark,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { useAuthContext, useUserContext, usePostContext } from "src/contexts";
import { Icon, Button } from "src/components/atoms";
import { Avatar } from "src/components";
import { likePost, dislikePost } from "src/features/posts";
import { addToSavedPosts, removeSavedPost } from "src/features/users";
import { getPostTime, isLikedByUser, isSavedByUser } from "src/utils";

import * as S from "./styles";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { authToken, authUser } = useAuthContext();
  const { posts, postDispatch } = usePostContext();
  const { users, bookmarks, userDispatch } = useUserContext();

  const currentPost = posts?.find((dbPosts) => dbPosts._id === post?._id);
  const { _id, username, content, mediaURL, createdAt, likes, comments } =
    currentPost;

  const currentUser = users?.find(
    (user) => user.username === currentPost.username
  );

  const likeBtnHandler = (event) => {
    event.stopPropagation();
    isLikedByUser(currentPost, authUser.username)
      ? dislikePost(authToken, currentPost._id, postDispatch)
      : likePost(authToken, currentPost._id, postDispatch);
  };

  const saveBtnHandler = (event) => {
    event.stopPropagation();
    isSavedByUser(bookmarks, currentPost._id)
      ? removeSavedPost(currentPost._id, authToken, userDispatch)
      : addToSavedPosts(currentPost._id, authToken, userDispatch);
  };

  return (
    <S.PostContainer onClick={() => navigate(`/post/${_id}`)}>
      <S.PostUser
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${_id}`);
        }}
      >
        <Avatar user={currentUser} />
      </S.PostUser>

      <S.PostSection>
        <S.PostHeader>
          <S.PostDetails>
            <span aria-label="Username">@{username}</span>
            <span>·</span>
            <span aria-label="Date">{getPostTime(createdAt)}</span>
          </S.PostDetails>
          <Button variant="icon" aria-label="Options">
            <Icon icon={faEllipsis} title={"More options"} />
          </Button>
        </S.PostHeader>
        <S.PostContent>{content}</S.PostContent>
        {mediaURL ? (
          <S.PostMedia>
            <img src={mediaURL} alt={`post_${_id}`} />
          </S.PostMedia>
        ) : null}
        <S.UserActions>
          <div>
            <Button
              variant="icon"
              size="sm"
              aria-label="Like"
              onClick={likeBtnHandler}
            >
              <S.LikeIcon
                icon={
                  isLikedByUser(currentPost, authUser.username)
                    ? filledHeart
                    : regularHeart
                }
                title="Like"
              />
            </Button>
            {likes.likeCount > 0 && (
              <span aria-label="Like Count">{likes.likeCount}</span>
            )}
          </div>
          <div>
            <Button variant="icon" size="sm" aria-label="Comment">
              <Icon icon={faMessage} title="Comment" />
            </Button>
            {comments?.length > 0 && (
              <span aria-label="Comment Count">{comments?.length}</span>
            )}
          </div>
          <div>
            <Button
              variant="icon"
              size="sm"
              aria-label="Save"
              onClick={saveBtnHandler}
            >
              <S.BookmarkIcon
                icon={
                  isSavedByUser(bookmarks, currentPost._id)
                    ? filledBookmark
                    : regularBookmark
                }
                title="Save"
              />
            </Button>
          </div>
        </S.UserActions>
      </S.PostSection>
    </S.PostContainer>
  );
};

export { PostCard };
