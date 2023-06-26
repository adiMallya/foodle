import { useEffect } from "react";

import { PageLayout, Loader } from "src/components";
import { PostCard, Sort, getAllPosts } from "src/features/posts";
import { usePostContext, useAuthContext, useUserContext } from "src/contexts";
import { sortByType } from "src/utils";

import * as S from "./styles";

function Home() {
  const { authUser } = useAuthContext();
  const { users } = useUserContext();
  const { posts, isLoading, sortBy, postDispatch } = usePostContext();

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

  const sortedPosts = sortByType(userFeed, sortBy);

  useEffect(() => {
    getAllPosts(postDispatch);
  }, [postDispatch]);

  return (
    <PageLayout>
      <S.Wrapper>
        <Sort />
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
