import { useEffect } from "react";

import { PageLayout, Loader } from "src/components";
import { PostCard } from "src/features/posts";
import { getSavedPosts } from "src/features/users";
import { useAuthContext, useUserContext } from "src/contexts";

import * as S from "./styles";

function Saved() {
  const { authToken } = useAuthContext();
  const { bookmarks, userDispatch, isLoading } = useUserContext();

  useEffect(() => {
    getSavedPosts(authToken, userDispatch);
  }, [userDispatch, authToken]);

  return (
    <PageLayout>
      <S.Wrapper>
        <S.Header>
          <h3>Saved Posts</h3>
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
              <p>You Have Not Saved Any Post</p>
            </S.NoData>
          )}
        </div>
      </S.Wrapper>
    </PageLayout>
  );
}

export { Saved };
