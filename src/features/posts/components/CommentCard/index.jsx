import { useNavigate } from "react-router-dom";

import { Avatar } from "src/components";
import { getPostTime } from "src/utils";
import * as S from "./styles";
import * as PCS from "../PostCard/styles";

const CommentCard = ({ comment }) => {
  const navigate = useNavigate();
  const { _id, comment: commentText, username, createdAt } = comment;

  return (
    <S.CommentWrapper>
      <PCS.PostUser
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/profile/${username}`);
        }}
      >
        <Avatar user={comment} />
      </PCS.PostUser>
      <S.CommentContent>
        <S.CommentHeader>
          <S.CommentDetails>
            <span aria-label="Username">@{username}</span>
            <span>·</span>
            <span aria-label="Date">{getPostTime(createdAt)}</span>
          </S.CommentDetails>
        </S.CommentHeader>
        <p aria-label="comment">{commentText}</p>
      </S.CommentContent>
    </S.CommentWrapper>
  );
};

export { CommentCard };
