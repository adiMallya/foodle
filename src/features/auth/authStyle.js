import { styled } from "styled-components";
import { FLEX, device } from "src/styles";
import { RowWrapper, ColumnCenter, Input } from "src/components/atoms";

const FormWrapper = styled(ColumnCenter)`
    margin: 2rem auto;
    padding: 2rem 4rem;
    min-width: 20rem;
    gap: 2rem;
    color: ${({ theme }) => theme.font.primary};
    
    @media ${device.md}{
        box-shadow: ${({ theme }) => theme.bgColor.secondary} 0px 4px 12px;
        border-radius: ${({ theme }) => theme.border.rounded};
    }
`;

const FormHeader = styled(ColumnCenter)`
    > h1{
        font-family: system-ui;
        font-style: italic;
        color: ${({ theme }) => theme.color.primary}
    }
    > p {
        color: ${({ theme }) => theme.font.secondary}
    }
`;

const FormFooter = styled.p`
    color: ${({ theme }) => theme.font.primary};
`;

const Form = styled.form`
    width: 100%;
    margin-top: 0.75rem;
    ${FLEX("flex", null, null, "column")};
    gap: 2rem;
`;

const FormInput = styled(Input)`
    > input:focus {
        border: 1.5px solid ${({ theme }) => theme.color.primary};
    }
`;

const InputGroup = styled(RowWrapper)`
    gap: 0.625rem;
`;

export { FormWrapper, FormHeader, FormFooter, Form, FormInput, InputGroup };