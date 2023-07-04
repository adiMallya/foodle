import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useUserContext, usePostContext } from "src/contexts";
import { Button, Icon } from "src/components/atoms";
import { PageLayout, Loader } from "src/components";
import { getAllUsers, UserDetails } from "src/features/users";
import * as S from "./styles";

const UserProfile = () => {
  const { userName } = useParams();
  const navigate = useNavigate();

  const { users, userDispatch, isLoading } = useUserContext();
  const { posts } = usePostContext();

  useEffect(() => {
    getAllUsers(userDispatch);
  }, [userName]);

  const currentUser = users?.find((user) => user.username === userName);
  const currentUserPosts = posts?.filter((post) => post.username === userName);

  return (
    <PageLayout>
      {isLoading ? (
        <Loader />
      ) : (
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
        </S.Wrapper>
      )}
    </PageLayout>
  );
};

export { UserProfile };
