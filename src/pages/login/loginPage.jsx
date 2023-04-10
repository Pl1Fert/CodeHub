import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { loginSchema, registerSchema } from "../../validators";
import { register, login } from "../../redux/slices/authSlice";
import { APP_ROUTES } from "../../constants";
import { getUser } from "../../redux/slices/userSlice";

import styles from "./loginPage.module.scss";

export const LoginPage = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const {
        register: loginFormRegister,
        handleSubmit: handleLoginFormSubmit,
        reset: resetLoginForm,
        formState: {
            errors: loginFormErrors,
            isDirty: isLoginFormDirty,
            isValid: isLoginFormValid,
        },
    } = useForm({ mode: "onBlur", resolver: yupResolver(loginSchema) });
    const {
        register: registerFormRegister,
        handleSubmit: handleRegisterFormSubmit,
        reset: resetRegisterForm,
        formState: {
            errors: registerFormErrors,
            isDirty: isRegisterFormDirty,
            isValid: isRegisterFormValid,
        },
    } = useForm({ mode: "onBlur", resolver: yupResolver(registerSchema) });

    const onLoginSubmit = (data) => {
        dispatch(login(data))
            .then(() => {
                dispatch(getUser());
            })
            .then(() => {
                navigate(APP_ROUTES.HOME_PAGE);
            });
        resetAllForms();
    };

    const onRegisterSubmit = (data) => {
        dispatch(register(data));
        resetAllForms();
    };

    const resetAllForms = () => {
        resetRegisterForm();
        resetLoginForm();
    };

    const onPanelButtonClick = () => {
        setIsRightPanelActive((prev) => !prev);
        resetAllForms();
    };

    if (auth.isLoggedIn) return <Navigate to={APP_ROUTES.HOME} replace />;

    return (
        <section className={styles.loginPage}>
            <div
                className={
                    isRightPanelActive
                        ? `${styles.container} + ${styles.rightPanelActive}`
                        : `${styles.container}`
                }>
                <div className={`${styles.formContainer} + ${styles.loginContainer}`}>
                    <form key={1} onSubmit={handleLoginFormSubmit(onLoginSubmit)}>
                        <h1 className={styles.title}>Sign In</h1>
                        <input
                            type="email"
                            placeholder="Please enter your email"
                            className={styles.input}
                            {...loginFormRegister("email")}
                        />
                        <div className={styles.error}>
                            {loginFormErrors?.email && (
                                <p>{loginFormErrors?.email?.message || "Error!"}</p>
                            )}
                        </div>
                        <input
                            type="password"
                            placeholder="Please enter your password"
                            className={styles.input}
                            {...loginFormRegister("password")}
                        />
                        <div className={styles.error}>
                            {loginFormErrors?.password && (
                                <p>{loginFormErrors?.password?.message || "Error!"}</p>
                            )}
                        </div>
                        <input
                            type="submit"
                            className={styles.submit}
                            disabled={!isLoginFormDirty || !isLoginFormValid}
                            value="sign in"
                        />
                    </form>
                </div>
                <div className={`${styles.formContainer} + ${styles.registerContainer}`}>
                    <form key={2} onSubmit={handleRegisterFormSubmit(onRegisterSubmit)}>
                        <h1 className={styles.title}>Create Account</h1>
                        <input
                            type="text"
                            placeholder="Please enter your username"
                            className={styles.input}
                            {...registerFormRegister("username")}
                        />
                        <div className={styles.error}>
                            {registerFormErrors?.username && (
                                <p>{registerFormErrors?.username?.message || "Error!"}</p>
                            )}
                        </div>
                        <input
                            type="email"
                            placeholder="Please enter your email"
                            className={styles.input}
                            {...registerFormRegister("email")}
                        />
                        <div className={styles.error}>
                            {registerFormErrors?.email && (
                                <p>{registerFormErrors?.email?.message || "Error!"}</p>
                            )}
                        </div>
                        <input
                            type="password"
                            placeholder="Please enter your password"
                            className={styles.input}
                            {...registerFormRegister("password")}
                        />
                        <div className={styles.error}>
                            {registerFormErrors?.password && (
                                <p>{registerFormErrors?.password?.message || "Error!"}</p>
                            )}
                        </div>
                        {/* TODO: need to clear after panel button click */}
                        {auth.message !== "" && (
                            <p className={styles.errorMessage}>
                                {auth.message.charAt(0).toUpperCase() + auth.message.slice(1)}
                            </p>
                        )}
                        <input
                            type="submit"
                            className={styles.submit}
                            disabled={!isRegisterFormValid || !isRegisterFormDirty}
                            value="sign up"
                        />
                    </form>
                </div>
                <div className={styles.overlayContainer}>
                    <div className={styles.overlay}>
                        <div className={`${styles.overlayPanel} + ${styles.overlayLeft}`}>
                            <h1 className={styles.title}>Welcome Back!</h1>
                            <p className={styles.text}>
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                type="button"
                                className={styles.overlayButton}
                                onClick={onPanelButtonClick}>
                                sign in
                            </button>
                        </div>
                        <div className={`${styles.overlayPanel} + ${styles.overlayRight}`}>
                            <h1 className={styles.title}>Hello, Friend!</h1>
                            <p className={styles.text}>
                                Enter your personal details and start journey with us
                            </p>
                            <button
                                type="button"
                                className={styles.overlayButton}
                                onClick={onPanelButtonClick}>
                                sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
