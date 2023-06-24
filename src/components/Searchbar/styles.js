import { styled } from "styled-components";
import { Input } from "src/components/atoms";

const Wrapper = styled.div`
    margin-top: 2rem;
    z-index: ${({ theme }) => theme.z[6]};
    position: sticky;
`;

const SearchInput = styled(Input)`
    border-radius: ${({ theme }) => theme.border.roundedXl};
`;

export { Wrapper, SearchInput };