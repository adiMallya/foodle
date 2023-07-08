import { styled } from "styled-components";
import { Button } from "src/components/atoms";
import { FLEX } from "src/styles";

const CreatePostContainer = styled.div`
    ${FLEX("flex", "flex-start", "space-between")};
    gap: 1rem;
    width: 100%;
    padding: 0.625rem;
    background-color: ${({ theme }) => theme.bgColor.secondary};
`;

const PostContent = styled.form`
    ${FLEX("flex", "flex-start", null, "column")};
    gap: 1rem;
    width: 100%;
    padding: 0.625rem;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: fit-content;
    padding: 0.25rem;

    background-color: inherit;
    outline: none;
    border: none;
    border-radius: ${({ theme }) => theme.border.roundedLg};
    resize: none;

    font-family: sans-serif;
    color: ${({ theme }) => theme.font.primary};
    word-break: break-all ;
    &:focus-within{
        border: transparent;
    }
    ::placeholder{
        color: ${({ theme }) => theme.font.secondary};
    }
`;

const PostMedia = styled.div`
    width: 250px;
    height: 250px;

    margin: 0.125rem 0;
    position: relative;
    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const RemoveButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
`;

const CreatePostActions = styled.div`
    ${FLEX("flex", "center", "space-between")};

    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.border.solid};

    div:first-of-type {
        ${FLEX("flex")};
        gap: 1rem;
    }
`;

const MediaUploadButton = styled.div`
     label{
        ${FLEX("flex", "center")};
        margin: 0;
        font-size: ${({ theme }) => theme.font.lg};
        cursor: pointer;
     }
     input{
        visibility: hidden;
        position: absolute;
     }
`;

const CharCount = styled.div`
    color: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.font.sm};

    span {
        color: ${({ theme }) => theme.color.primary};
        font-weight: ${({ theme }) => theme.font.semibold};
    }
`;

export { CreatePostContainer, PostContent, PostMedia, RemoveButton, TextArea, CreatePostActions, MediaUploadButton, CharCount };