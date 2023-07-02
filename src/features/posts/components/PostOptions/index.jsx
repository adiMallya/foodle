import { useState } from "react";
import { Dropdown, DropdownOption, Modal } from "src/components/atoms";
import { useAuthContext, usePostContext } from "src/contexts";
import { deletePost, CreatePost } from "src/features/posts";

const PostOptions = ({ postId }) => {
  const { authToken, authUser } = useAuthContext();
  const { posts, postDispatch } = usePostContext();

  const [showModal, setShowModal] = useState(false);

  const currentPost = posts?.find((post) => post?._id === postId);

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
            <DropdownOption role="button">Unfollow</DropdownOption>
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
