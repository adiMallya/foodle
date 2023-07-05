import { useEffect } from "react";

import { PageLayout, Loader } from "src/components";
import { PostCard, getAllPosts } from "src/features/posts";
import { usePostContext } from "src/contexts";

import * as S from "./styles";

function Explore() {
  const { posts, isLoading, postDispatch } = usePostContext();

  useEffect(() => {
    getAllPosts(postDispatch);
  }, [posts]);

  return (
    <PageLayout>
      <S.Wrapper>
        <S.Header>
          <h3>Explore</h3>
        </S.Header>
        <div>
          {isLoading ? (
            <Loader />
          ) : posts?.length ? (
            [...posts]
              .reverse()
              .map((post) => <PostCard key={post?._id} post={post} />)
          ) : (
            <S.NoData>
              <p>No Posts</p>
            </S.NoData>
          )}
        </div>
      </S.Wrapper>
    </PageLayout>
  );
}

export { Explore };
