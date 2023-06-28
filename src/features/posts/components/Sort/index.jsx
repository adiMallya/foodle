import {
  faArrowUpWideShort,
  faArrowTrendUp,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { usePostContext } from "src/contexts";
import { Button, Icon, Dropdown, DropdownOption } from "src/components/atoms";
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
          <Dropdown>
            <DropdownOption
              variant="icon"
              style={{ color: sortBy === "Trending" && "#f59e0b" }}
              type="button"
              onClick={() =>
                postDispatch({ type: ACTIONS.SORT_BY, payload: "Trending" })
              }
            >
              <Icon icon={faArrowTrendUp} title="Trending" />{" "}
              <span aria-label="Trending">Trending</span>
            </DropdownOption>
            <DropdownOption
              variant="icon"
              style={{ color: sortBy === "Latest" && "#f59e0b" }}
              type="button"
              onClick={() =>
                postDispatch({ type: ACTIONS.SORT_BY, payload: "Latest" })
              }
            >
              <Icon icon={faCaretUp} title="Latest" />{" "}
              <span aria-label="Latest">Latest</span>
            </DropdownOption>
            <DropdownOption
              variant="icon"
              style={{ color: sortBy === "Oldest" && "#f59e0b" }}
              type="button"
              onClick={() =>
                postDispatch({ type: ACTIONS.SORT_BY, payload: "Oldest" })
              }
            >
              <Icon icon={faCaretDown} title="Oldest" />{" "}
              <span aria-label="Oldest">Oldest</span>
            </DropdownOption>
          </Dropdown>
        ) : null}
      </S.SortBar>
    </S.SortContainer>
  );
};

export { Sort };
