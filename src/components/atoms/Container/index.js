import { styled, css } from "styled-components";

import { FLEX } from "src/styles";

const RowWrapper = styled.div`
    ${FLEX("wrap")}
`;

const RowCenter = styled(RowWrapper)`
    ${FLEX("center")}
`;

const ColumnWrapper = styled.div`
    ${FLEX("column")}
`;

const ColumnCenter = styled(ColumnWrapper)`
    ${FLEX("center", "center", "column")}
`;

export { RowWrapper, RowCenter, ColumnWrapper, ColumnCenter };