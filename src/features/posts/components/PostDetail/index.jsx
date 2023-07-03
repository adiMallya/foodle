import { useEffect } from "react";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { Icon, Button } from "src/components/atoms";
import { PageLayout, Loader } from "src/components";
import { usePostContext } from "src/contexts";
import { ACTIONS } from "src/utils";
import { getSinglePost, PostCard, CommentCard } from "src/features/posts";

import { Wrapper, Header } from "src/pages/styles";

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { singlePost, postDispatch, isLoading } = usePostContext();

  useEffect(() => {
    getSinglePost(postId, postDispatch);
    return () => postDispatch({ type: ACTIONS.SET_SINGLE_POST, payload: {} });
  }, [postId, postDispatch]);

  return (
    <PageLayout>
      <Wrapper>
        <Header align="left">
          <Button
            variant="icon"
            aria-label="Back button"
            type="button"
            onClick={() => navigate(-1)}
          >
            <Icon icon={faArrowLeftLong} title="Back" />
          </Button>
          <h3>Post</h3>
        </Header>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            singlePost?._id && (
              <PostCard key={singlePost?._id} post={singlePost} />
            )
          )}
        </div>
        {singlePost?.comments?.length &&
          [...singlePost.comments].map((comment) => (
            <CommentCard key={comment?._id} comment={comment} />
          ))}
      </Wrapper>
    </PageLayout>
  );
}

export { PostDetail };
