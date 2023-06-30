import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  faEllipsis,
  faHeart as filledHeart,
  faBookmark as filledBookmark,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faBookmark as regularBookmark,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-hot-toast";
import { useAuthContext, useUserContext, usePostContext } from "src/contexts";
import { Icon, Button } from "src/components/atoms";
import { Avatar } from "src/components";
import { likePost, dislikePost, PostOptions } from "src/features/posts";
import { addToSavedPosts, removeSavedPost } from "src/features/users";
import { getPostTime, isLikedByUser, isSavedByUser } from "src/utils";
import { useClickOutside } from "src/hooks/useClickOutside";

import * as S from "./styles";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { authToken, authUser } = useAuthContext();
  const { posts, postDispatch } = usePostContext();
  const { users, bookmarks, userDispatch } = useUserContext();

  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef();

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

  const shareBtnHandler = (event) => {
    event.stopPropagation();
    navigator.clipboard.writeText(
      `https://yumspot.vercel.app/post/${currentPost._id}`
    );
    toast.success("Link Copied. Start Sharing!", {
      iconTheme: { color: "#f59e0b" },
    });
  };

  useClickOutside(dropdownRef, () => setShowDropdown(false));

  return (
    <S.PostContainer>
      <S.PostUser
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${_id}`);
        }}
      >
        <Avatar user={currentUser} />
      </S.PostUser>

      <S.PostSection>
        <S.PostHeader ref={dropdownRef}>
          <S.PostDetails>
            <span aria-label="Username">@{username}</span>
            <span>·</span>
            <span aria-label="Date">{getPostTime(createdAt)}</span>
          </S.PostDetails>
          <S.MoreOptions
            aria-label="Options"
            role="button"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <Icon icon={faEllipsis} title={"More options"} />
            {showDropdown && <PostOptions postId={_id} />}
          </S.MoreOptions>
        </S.PostHeader>
        <S.PostContent onClick={() => navigate(`/post/${_id}`)}>
          {content}
        </S.PostContent>
        {mediaURL ? (
          <S.PostMedia>
            <img src={mediaURL} alt={`post_${_id}`} />
          </S.PostMedia>
        ) : null}
        <S.UserActions>
          <div>
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
              {likes?.likeCount > 0 && (
                <span aria-label="Like Count">{likes?.likeCount}</span>
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
          </div>
          <div>
            <Button
              variant="icon"
              size="sm"
              aria-label="Share"
              onClick={shareBtnHandler}
            >
              <S.BookmarkIcon icon={faShare} title="Share" />
            </Button>
          </div>
        </S.UserActions>
      </S.PostSection>
    </S.PostContainer>
  );
};

export { PostCard };
