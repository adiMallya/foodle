import { useEffect } from "react";
import { Loader } from "src/components/atoms";
import { PageLayout } from "src/components";
import { PostCard } from "src/features/posts";
import { getSavedPosts } from "src/features/users";
import { useAuthContext, useUserContext } from "src/contexts";

import * as S from "./styles";

function Saved() {
  const { authToken } = useAuthContext();
  const { bookmarks, userDispatch, isLoading } = useUserContext();

  useEffect(() => {
    getSavedPosts(authToken, userDispatch);
  }, [authToken, bookmarks]);

  return (
    <PageLayout>
      <S.Wrapper>
        <S.Header>
          <h3>Saved</h3>
        </S.Header>
        <div>
          {isLoading ? (
            <Loader />
          ) : bookmarks.length ? (
            [...bookmarks]
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

export { Saved };
