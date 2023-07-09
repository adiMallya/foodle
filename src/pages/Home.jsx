import { useEffect } from "react";
import { Loader } from "src/components/atoms";
import { PageLayout } from "src/components";
import { CreatePost, PostCard, Sort, getAllPosts } from "src/features/posts";
import { getAllUsers } from "src/features/users";
import { usePostContext, useAuthContext, useUserContext } from "src/contexts";
import { sortByType } from "src/utils";

import * as S from "./styles";

function Home() {
  const { authUser } = useAuthContext();
  const { users, isLoading: waitForUsers, userDispatch } = useUserContext();
  const {
    posts,
    sortBy,
    isLoading: waitForPosts,
    postDispatch,
  } = usePostContext();

  useEffect(() => {
    getAllUsers(userDispatch);
    getAllPosts(postDispatch);
  }, [users, posts]);

  const currentUser = users.find((user) => user.username === authUser.username);

  const followingUsers = currentUser?.following;

  const postsOfFollowingUsers = posts?.filter((post) =>
    followingUsers?.some(
      (followingUser) => followingUser.username === post.username
    )
  );

  const postsOfCurrentUser = posts?.filter(
    (post) => post?.username === currentUser?.username
  );

  const userFeed = [...postsOfFollowingUsers, ...postsOfCurrentUser];

  const sortedPosts = sortByType(userFeed, sortBy);

  return (
    <PageLayout>
      <S.Wrapper>
        <S.Header>
          <h3>Feed</h3>
        </S.Header>
        <CreatePost />
        <Sort />
        <div>
          {waitForPosts || waitForUsers ? (
            <Loader loading={waitForPosts || waitForUsers} />
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
