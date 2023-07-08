import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "src/components/atoms";
import { useAuthContext } from "src/contexts";
import { loginService } from "src/features/auth";
import { ACTIONS } from "src/utils";
import * as S from "../authStyle";

function LoginForm() {
  const navigate = useNavigate();
  const { authToken, authDispatch, error } = useAuthContext();

  const [formData, setFormData] = useState({ username: "", password: "" });

  const loginHandler = (event) => {
    const { username, password } = formData;
    event.preventDefault();
    if (username === "" || password === "") {
      authDispatch({
        type: ACTIONS.SET_ERROR,
        payload: {
          type: username === "" ? "username" : "password",
          msg: "Please fill required fields.",
        },
      });
    } else {
      loginService(username, password, authDispatch);
    }
  };

  const loginAsGuest = () => {
    setFormData((form) => ({
      username: "amallya",
      password: "P@ssw0rd",
    }));
  };

  useEffect(() => {
    authToken && navigate("/", { replace: true });
  }, [authToken]);

  return (
    <div style={{ display: "flex" }}>
      <S.FormWrapper>
        <S.FormHeader>
          <h1 aria-label="Yumspot">Yumspot!</h1>
          <p aria-label="slogan">Spotlighting yum, one post at a time</p>
        </S.FormHeader>
        <S.Form onSubmit={loginHandler}>
          <S.FormInput
            placeholder="Enter Username"
            onChange={(e) =>
              setFormData((form) => ({ ...form, username: e.target.value }))
            }
            isAutoFocus={true}
            onFocus={() => authDispatch({ type: ACTIONS.RESET_ERROR })}
            showError={error?.username}
            value={formData.username}
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
            value={formData.password}
          />
          <Button type="submit" size="md" fullwidth="true" aria-label="Log In">
            Log In
          </Button>
          <Button
            type="button"
            size="md"
            variant="primaryOutline"
            fullwidth="true"
            aria-label="Log In"
            onClick={loginAsGuest}
          >
            Fill Test Credentials
          </Button>
        </S.Form>
        <S.FormFooter>
          New here ?{" "}
          <Button
            variant="primaryLink"
            aria-label="Sign Up"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Sign Up.{" "}
          </Button>
        </S.FormFooter>
      </S.FormWrapper>
    </div>
  );
}

export { LoginForm };
