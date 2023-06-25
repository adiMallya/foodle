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
import { useUserContext, usePostContext } from "src/contexts";
import { Icon, Button } from "src/components/atoms";
import { Avatar } from "src/components";
import { getPostTime } from "src/utils";

import * as S from "./styles";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { posts } = usePostContext();
  const { users } = useUserContext();

  const currentPost = posts?.find((dbPosts) => dbPosts._id === post?._id);
  const { _id, username, content, mediaURL, createdAt, likes, comments } =
    currentPost;

  const currentUser = users?.find((user) => user.username === username);

  return (
    <S.PostContainer onClick={() => navigate(`/post/${_id}`)}>
      <S.PostUser onClick={() => navigate(`/profile/${_id}`)}>
        <Avatar user={currentUser} />
      </S.PostUser>

      <S.PostSection>
        <S.PostHeader>
          <S.PostDetails>
            <span onClick={() => navigate(`/profile/${_id}`)}>@{username}</span>
            <span>·</span>
            <span>{getPostTime(createdAt)}</span>
          </S.PostDetails>
          <Button variant="icon">
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
            <Button variant="icon" size="sm">
              <S.LikeIcon
                icon={likes.likeCount > 0 ? filledHeart : regularHeart}
              />
            </Button>
            {likes.likeCount > 0 && <span>{likes.likeCount}</span>}
          </div>
          <div>
            <Button variant="icon" size="sm">
              <Icon icon={faMessage} />
            </Button>
            {comments?.length > 0 && <span>{comments?.length}</span>}
          </div>
          <div>
            <Button variant="icon" size="sm">
              <S.BookmarkIcon icon={regularBookmark} />
            </Button>
          </div>
        </S.UserActions>
      </S.PostSection>
    </S.PostContainer>
  );
};

export { PostCard };
