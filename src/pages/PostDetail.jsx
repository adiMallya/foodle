import { useEffect } from "react";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { Icon, Button } from "src/components/atoms";
import { PageLayout, Loader } from "src/components";
import { usePostContext } from "src/contexts";
import { ACTIONS } from "src/utils";
import { getSinglePost, PostCard } from "src/features/posts";

import * as S from "./styles";

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { singlePost, postDispatch, isLoading } = usePostContext();

  useEffect(() => {
    postDispatch({ type: ACTIONS.SET_LOADING, payload: true });
    getSinglePost(postId, postDispatch);
  }, [postId]);

  return (
    <PageLayout>
      <S.Wrapper>
        <S.PostHeader>
          <Button
            variant="icon"
            aria-label="Back button"
            type="button"
            onClick={() => navigate(-1)}
          >
            <Icon icon={faArrowLeftLong} title="Back" />
          </Button>
          <h3>Post</h3>
        </S.PostHeader>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <PostCard key={singlePost?._id} post={singlePost} />
          )}
        </div>
      </S.Wrapper>
    </PageLayout>
  );
}

export { PostDetail };
