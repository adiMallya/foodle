import { ClipLoader, BeatLoader } from "react-spinners";
import * as S from "./styles";

const Loader = ({ type, size, loading }) => {
  if (type === "beats") {
    return (
      <BeatLoader
        loading={loading}
        size={size}
        color="#fbbf24"
        aria-label="Loading spinner"
      />
    );
  }

  return (
    <S.LoaderWrapper>
      <ClipLoader
        loading={loading}
        size={size}
        color="#fbbf24"
        aria-label="Loading spinner"
      />
    </S.LoaderWrapper>
  );
};

export { Loader };
