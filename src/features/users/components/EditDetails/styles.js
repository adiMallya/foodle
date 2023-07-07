import { styled } from "styled-components";
import { FLEX } from "src/styles";

const EditForm = styled.form`
    ${FLEX("flex", "center", null, "column")};
    height: fit-content;
`;

const AvatarUploadButton = styled.div`
    position: absolute;
     label{
        ${FLEX("flex", "center")};
        margin: 0;
        font-size: ${({ theme }) => theme.font.sm};
        cursor: pointer;
        z-index: ${({ theme }) => theme.z[6]};
     }
     input{
        visibility: hidden;
        position: absolute;
     }
`;

const AvatarPicker = styled.div`
    ${FLEX("flex", "flex-start", "center", null, "wrap")};
    gap: 1rem;
    padding: 0.625rem;

    span:hover{
        border: 2px solid ${({ theme }) => theme.color.primary};
    }
`;

const Container = styled.div`
    ${FLEX("flex", "flex-start", "center", "column")};
    margin-top: 0.625rem;
`;

const InputGroup = styled.div`
    width: 100%;
    margin: 0.125rem 0;
    ${FLEX("flex", "center", "flex-end")};
    color: ${({ theme }) => theme.font.primary};
`;

export { EditForm, AvatarUploadButton, AvatarPicker, Container, InputGroup };