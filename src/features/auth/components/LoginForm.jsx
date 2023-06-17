import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RowCenter, Button } from "src/components/atoms";
import { useAuthContext } from "src/contexts";
import { loginService } from "src/features/auth";
import * as S from "../authStyle";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authToken, authDispatch } = useAuthContext();

  const [formData, setFormData] = useState({ username: "", password: "" });

  const loginHandler = (event) => {
    const { username, password } = formData;
    event.preventDefault();
    loginService(username, password, authDispatch);
  };

  const loginAsGuest = () => {
    setFormData({
      username: "amallya",
      password: "P@ssw0rd",
    });
  };

  useEffect(() => {
    authToken &&
      navigate(location?.state?.from?.pathname || "/", { replace: true });
  }, [authToken]);

  return (
    <RowCenter>
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
            required
          />
          <S.FormInput
            placeholder="Enter Password"
            type="password"
            onChange={(e) =>
              setFormData((form) => ({ ...form, password: e.target.value }))
            }
            required
            showVisibility
          />
          <Button type="submit" size="lg" fullwidth="true" aria-label="Log In">
            Log In
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="primaryOutline"
            fullwidth="true"
            aria-label="Log In"
            onClick={loginAsGuest}
          >
            Log In as Guest
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
    </RowCenter>
  );
}

export { LoginForm };