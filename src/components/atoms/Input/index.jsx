import { useState } from "react";
import { Icon, Button } from "src/components/atoms";
import * as S from "./styles";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  type = "text",
  name,
  placeholder,
  required = false,
  isAutoFocus = false,
  isDisabled = false,
  defaultValue,
  onChange,
  value,
  pattern,
  supportedFileExtensions,
  maxLength,
  autoComplete,
  onFocus,
  showVisibility,
  inputLabel,
  max,
  min,
  id,
  inputMode = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.BaseInputContainer>
      {inputLabel ? <S.BaseInputLabel>{inputLabel}</S.BaseInputLabel> : null}
      <S.BaseInput
        id={id}
        type={showPassword ? "text" : type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoFocus={isAutoFocus}
        disabled={isDisabled}
        onChange={onChange}
        value={value}
        accept={supportedFileExtensions}
        pattern={pattern}
        maxLength={maxLength}
        onFocus={onFocus}
        autoComplete={autoComplete}
        max={max}
        min={min}
        defaultValue={defaultValue}
        inputMode={inputMode}
      />
      {showVisibility ? (
        <S.BaseInputPasswordVisibility>
          <Button variant="icon" onClick={() => setShowPassword(!showPassword)}>
            <Icon icon={showPassword ? faEyeSlash : faEye} />
          </Button>
        </S.BaseInputPasswordVisibility>
      ) : null}
    </S.BaseInputContainer>
  );
};

export { Input };
