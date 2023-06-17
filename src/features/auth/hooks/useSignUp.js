import { useState } from "react";
import { useAuthContext } from "src/contexts";
import { signUpService } from "src/features/auth";
import { ACTIONS } from "src/utils";

const useSignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const { authDispatch } = useAuthContext();

    const validateForm = () => {
        let validationPassed = true;

        if (!new RegExp("^[a-zA-Z]+$").test(formData.firstName)) {
            authDispatch({ type: ACTIONS.SET_ERROR, payload: { type: "firstName", msg: "Please enter a valid name" } });
            validationPassed = false;
        }

        if (!new RegExp("^[a-zA-Z]+$").test(formData.lastName)) {
            authDispatch({ type: ACTIONS.SET_ERROR, payload: { type: "lastName", msg: "Please enter a valid name" } });
            validationPassed = false;
        }

        if (!new RegExp("^[a-z0-9_A-Z]+$").test(formData.username)) {
            authDispatch({
                type: ACTIONS.SET_ERROR,
                payload: { type: "username", msg: "Invalid username(letters, digits, _ only)" }
            });
            validationPassed = false;
        }

        if (!new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}").test(formData.password)) {
            authDispatch({
                type: ACTIONS.SET_ERROR,
                payload: {
                    type: "password",
                    msg: "Should be 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character"
                }
            });
            validationPassed = false;
        }

        if (!new
            RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}").test(formData.confirmPassword)) {
            authDispatch({
                type: ACTIONS.SET_ERROR,
                payload: {
                    type: "confirmPassword",
                    msg: "Should be 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character"
                }
            });
            validationPassed = false;
        }

        if (!(formData.password === formData.confirmPassword)) {
            authDispatch({
                type: ACTIONS.SET_ERROR,
                payload: {
                    type: "mismatch",
                    msg: "Password Mismatch! Please check again."
                }
            });
            validationPassed = false;
        }

        return validationPassed;
    };

    const signUpHandler = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const { confirmPassword, ...rest } = formData;
            signUpService(rest, authDispatch);
        }
    };

    return { formData, setFormData, signUpHandler };
};

export { useSignUp };