import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useUserContext, usePostContext } from "src/contexts";
import { Button, Icon, Loader } from "src/components/atoms";
import { PageLayout } from "src/components";
import { getAllUsers, UserDetails } from "src/features/users";
import { getAllPosts, PostCard } from "src/features/posts";
import * as S from "./styles";

const UserProfile = () => {
  const { userName } = useParams();
  const navigate = useNavigate();

  const { users, userDispatch } = useUserContext();
  const { posts, postDispatch, isLoading } = usePostContext();

  const currentUser = users?.find((user) => user.username === userName);
  const currentUserPosts = posts?.filter((post) => post.username === userName);

  useEffect(() => {
    getAllPosts(postDispatch);
    getAllUsers(userDispatch);
  }, [userName, users, posts]);

  return (
    <PageLayout>
      <S.Wrapper>
        <S.Header align="left">
          <Button
            variant="icon"
            aria-label="Back button"
            type="button"
            onClick={() => navigate(-1)}
          >
            <Icon icon={faArrowLeftLong} title="Back" />
          </Button>
          <div>
            <h3>
              {currentUser?.firstName + " " + currentUser?.lastName || ""}
            </h3>
          </div>
        </S.Header>
        {currentUser ? <UserDetails currentUser={currentUser} /> : null}
        {isLoading ? (
          <Loader />
        ) : currentUserPosts?.length ? (
          [...currentUserPosts]
            .reverse()
            .map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <S.NoData>
            <p>No Posts</p>
          </S.NoData>
        )}
      </S.Wrapper>
    </PageLayout>
  );
};

export { UserProfile };
