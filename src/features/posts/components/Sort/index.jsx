import {
  faArrowUpWideShort,
  faArrowTrendUp,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { usePostContext } from "src/contexts";
import { Button, Icon } from "src/components/atoms";
import { ACTIONS } from "src/utils";

import * as S from "./styles";
import { useState } from "react";

const Sort = () => {
  const { sortBy, postDispatch } = usePostContext();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <S.SortContainer>
      <span aria-label="Sort Type">{sortBy} Yums</span>
      <S.SortBar>
        <Button
          variant="icon"
          aria-label="Sort"
          type="button"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <Icon icon={faArrowUpWideShort} title="Sort" />
        </Button>
        {showDropdown ? (
          <S.SortDropdown>
            <S.SortOption
              variant="icon"
              style={{ color: sortBy === "Trending" && "#f59e0b" }}
              type="button"
              onClick={() =>
                postDispatch({ type: ACTIONS.SORT_BY, payload: "Trending" })
              }
            >
              <Icon icon={faArrowTrendUp} /> <span>Trending</span>
            </S.SortOption>
            <S.SortOption
              variant="icon"
              style={{ color: sortBy === "Latest" && "#f59e0b" }}
              type="button"
              onClick={() =>
                postDispatch({ type: ACTIONS.SORT_BY, payload: "Latest" })
              }
            >
              <Icon icon={faCaretUp} /> <span>Latest</span>
            </S.SortOption>
            <S.SortOption
              variant="icon"
              style={{ color: sortBy === "Oldest" && "#f59e0b" }}
              type="button"
              onClick={() =>
                postDispatch({ type: ACTIONS.SORT_BY, payload: "Oldest" })
              }
            >
              <Icon icon={faCaretDown} /> <span>Oldest</span>
            </S.SortOption>
          </S.SortDropdown>
        ) : null}
      </S.SortBar>
    </S.SortContainer>
  );
};

export { Sort };
