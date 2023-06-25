import { useEffect } from "react";

import { PageLayout, Loader } from "src/components";
import { PostCard, getAllPosts } from "src/features/posts";
import { usePostContext, useAuthContext, useUserContext } from "src/contexts";
import * as S from "./styles";

function Home() {
  const { authUser } = useAuthContext();
  const { users } = useUserContext();
  const { posts, isLoading, postDispatch } = usePostContext();

  const currentUser = users?.find(
    (user) => user.username === authUser.username
  );

  const followingUsers = currentUser?.following;

  const postsOfCurrentUser = posts?.filter(
    (post) => post.username === currentUser.username
  );

  var postsOfFollowingUsers = posts?.filter((post) =>
    followingUsers?.some(
      (followingUser) => followingUser.username === post.username
    )
  );

  const userFeed = [...postsOfFollowingUsers, ...postsOfCurrentUser];

  const sortedPosts = userFeed;

  useEffect(() => {
    getAllPosts(postDispatch);
  }, [postDispatch]);

  return (
    <PageLayout>
      <S.Wrapper>
        <div>
          {isLoading ? (
            <Loader />
          ) : sortedPosts?.length ? (
            [...sortedPosts]
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

export { Home };
