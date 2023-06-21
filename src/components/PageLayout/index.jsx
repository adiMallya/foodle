import { Sidebar } from "src/components";
import * as S from "./styles";

const PageLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <S.AsideLeft>
        <Sidebar />
      </S.AsideLeft>
      <S.Main>{children}</S.Main>
      <S.AsideRight>
        <h1>Suggestions</h1>
      </S.AsideRight>
    </S.Wrapper>
  );
};

export { PageLayout };
