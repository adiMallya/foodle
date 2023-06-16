import { styled } from "styled-components";

import { FLEX } from "src/styles";

const RowWrapper = styled.div`
    ${FLEX()}
`;

const RowCenter = styled(RowWrapper)`
    ${FLEX("center")}
`;

const ColumnWrapper = styled.div`
    ${FLEX("flex", null, null, "column")}
`;

const ColumnCenter = styled.div`
    ${FLEX("flex", "center", "center", "column")}
`;

export { RowWrapper, RowCenter, ColumnWrapper, ColumnCenter };