import { useState } from "react";
import { Dropdown, DropdownOption, Modal } from "src/components/atoms";
import { useAuthContext, usePostContext, useUserContext } from "src/contexts";
import { deletePost, CreatePost } from "src/features/posts";
import { followUser, unfollowUser, getAllUsers } from "src/features/users";

const PostOptions = ({ postId }) => {
  const { authToken, authUser } = useAuthContext();
  const { posts, postDispatch } = usePostContext();
  const { users, userDispatch } = useUserContext();

  const [showModal, setShowModal] = useState(false);

  const currentPost = posts?.find((post) => post?._id === postId);

  const postUser = users.find(
    (user) => user.username === currentPost?.username
  );

  const alreadyFollowingUser = postUser?.followers?.some(
    (user) => user.username === authUser.username
  );

  const selectedOptionHandler = (event) => {
    event.stopPropagation();
    const selectedOption = event.target.innerText;

    switch (selectedOption) {
      case "Edit":
        setShowModal(!showModal);
        return;
      case "Delete":
        deletePost(authToken, currentPost?._id, postDispatch);
        return;
      case "Follow":
        followUser(postUser?._id, authToken, userDispatch);
        getAllUsers(userDispatch);
        return;
      case "Unfollow":
        unfollowUser(postUser?._id, authToken, userDispatch);
        getAllUsers(userDispatch);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <Dropdown onClick={selectedOptionHandler}>
        {authUser?.username === currentPost?.username ? (
          <>
            <DropdownOption role="button" aria-label="Edit">
              Edit
            </DropdownOption>
            <DropdownOption role="button" aria-label="Delete">
              Delete
            </DropdownOption>
          </>
        ) : (
          <>
            <DropdownOption role="button">
              {alreadyFollowingUser ? "Unfollow" : "Follow"}
            </DropdownOption>
          </>
        )}
        <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
          <CreatePost editPostData={currentPost} setShowModal={setShowModal} />
        </Modal>
      </Dropdown>
    </>
  );
};

export { PostOptions };
