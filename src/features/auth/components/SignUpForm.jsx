import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "src/components/atoms";
import { useAuthContext } from "src/contexts";
import { useSignUp } from "src/features/auth";
import { ACTIONS } from "src/utils";

import * as S from "../authStyle";

function SignUpForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const { authToken, error, authDispatch } = useAuthContext();
  const { setFormData, signUpHandler } = useSignUp();

  useEffect(() => {
    authToken &&
      navigate(location?.state?.from?.pathname || "/", { replace: true });
  }, [authToken]);

  return (
    <div style={{ display: "flex" }}>
      <S.FormWrapper>
        <S.FormHeader>
          <h2 aria-label="Sign Up">Sign Up</h2>
        </S.FormHeader>
        <S.Form onSubmit={signUpHandler} noValidate>
          <S.InputGroup>
            <S.FormInput
              placeholder="Enter First name"
              onChange={(e) =>
                setFormData((form) => ({ ...form, firstName: e.target.value }))
              }
              isAutoFocus={true}
              required
              onFocus={() => authDispatch({ type: ACTIONS.RESET_ERROR })}
              showError={error?.firstName}
            />
            <S.FormInput
              placeholder="Enter Last name"
              onChange={(e) =>
                setFormData((form) => ({ ...form, lastName: e.target.value }))
              }
              onFocus={() => authDispatch({ type: ACTIONS.RESET_ERROR })}
              showError={error?.lastName}
            />
          </S.InputGroup>
          <S.FormInput
            placeholder="Enter Username"
            onChange={(e) =>
              setFormData((form) => ({ ...form, username: e.target.value }))
            }
            onFocus={() => authDispatch({ type: ACTIONS.RESET_ERROR })}
            showError={error?.username}
          />
          <S.FormInput
            placeholder="Enter Password"
            type="password"
            onChange={(e) =>
              setFormData((form) => ({ ...form, password: e.target.value }))
            }
            showVisibility
            onFocus={() => authDispatch({ type: ACTIONS.RESET_ERROR })}
            showError={error?.password}
          />
          <S.FormInput
            placeholder="Confirm your Password"
            type="password"
            onChange={(e) =>
              setFormData((form) => ({
                ...form,
                confirmPassword: e.target.value,
              }))
            }
            showVisibility
            onFocus={() => authDispatch({ type: ACTIONS.RESET_ERROR })}
            showError={error?.confirmPassword || error?.mismatch}
          />
          <Button type="submit" size="lg" fullwidth="true" aria-label="Sign Up">
            Sign Up
          </Button>
        </S.Form>
        <S.FormFooter>
          Already have an account ?{" "}
          <Button
            variant="primaryLink"
            aria-label="Log In"
            onClick={() => navigate("/login")}
          >
            {" "}
            Log In.{" "}
          </Button>
        </S.FormFooter>
      </S.FormWrapper>
    </div>
  );
}

export { SignUpForm };
