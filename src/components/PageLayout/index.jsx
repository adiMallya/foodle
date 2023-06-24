import { Sidebar, Suggestions, Searchbar } from "src/components";
import * as S from "./styles";

const PageLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.AsideLeft>
        <Sidebar />
      </S.AsideLeft>
      <S.Main>{children}</S.Main>
      <S.AsideRight>
        <Searchbar />
        <Suggestions />
      </S.AsideRight>
    </S.Wrapper>
  );
};

export { PageLayout };
