import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema, registerSchema } from "../../validators";

import styles from "./loginPage.module.scss";

export const LoginPage = () => {
    const {
        register: loginFormRegister,
        handleSubmit: handleLoginFormSubmit,
        formState: {
            errors: loginFormErrors,
            isDirty: isLoginFormDirty,
            isValid: isLoginFormValid,
        },
    } = useForm({ mode: "onBlur", resolver: yupResolver(loginSchema) });
    const {
        register: registerFormRegister,
        handleSubmit: handleRegisterFormSubmit,
        formState: {
            errors: registerFormErrors,
            isDirty: isRegisterFormDirty,
            isValid: isRegisterFormValid,
        },
    } = useForm({ mode: "onBlur", resolver: yupResolver(registerSchema) });

    const onLoginSubmit = (data) => {
        console.log(data);
    };

    const onRegisterSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className={styles.loginPage}>
            <div className={styles.container}>
                <div className={`${styles.formContainer} + ${styles.loginContainer}`}>
                    <form key={1} onSubmit={handleLoginFormSubmit(onLoginSubmit)}>
                        <label className={styles.label}>
                            Email:
                            <input
                                type="email"
                                placeholder="Please enter your email"
                                {...loginFormRegister("email")}
                            />
                        </label>
                        <div className={styles.error}>
                            {loginFormErrors?.email && (
                                <p>{loginFormErrors?.email?.message || "Error!"}</p>
                            )}
                        </div>
                        <label className={styles.label}>
                            Password:
                            <input
                                type="password"
                                placeholder="Please enter your password"
                                {...loginFormRegister("password")}
                            />
                        </label>
                        <div className={styles.error}>
                            {loginFormErrors?.password && (
                                <p>{loginFormErrors?.password?.message || "Error!"}</p>
                            )}
                        </div>

                        <input type="submit" disabled={!isLoginFormDirty || !isLoginFormValid} />
                    </form>
                </div>
                <div className={`${styles.formContainer} + ${styles.registerContainer}`}>
                    <form key={1} onSubmit={handleRegisterFormSubmit(onRegisterSubmit)}>
                        <label className={styles.label}>
                            {" "}
                            Nickname:
                            <input
                                type="text"
                                placeholder="Please enter your nickname"
                                {...registerFormRegister("nickname")}
                            />
                        </label>
                        <div className={styles.error}>
                            {registerFormErrors?.nickname && (
                                <p>{registerFormErrors?.nickname?.message || "Error!"}</p>
                            )}
                        </div>
                        <label className={styles.label}>
                            Email:
                            <input
                                type="email"
                                placeholder="Please enter your email"
                                {...registerFormRegister("email")}
                            />
                        </label>
                        <div className={styles.error}>
                            {registerFormErrors?.email && (
                                <p>{registerFormErrors?.email?.message || "Error!"}</p>
                            )}
                        </div>
                        <label className={styles.label}>
                            Password:
                            <input
                                type="password"
                                placeholder="Please enter your password"
                                {...registerFormRegister("password")}
                            />
                        </label>
                        <div className={styles.error}>
                            {registerFormErrors?.password && (
                                <p>{registerFormErrors?.password?.message || "Error!"}</p>
                            )}
                        </div>

                        <input
                            type="submit"
                            disabled={!isRegisterFormValid || !isRegisterFormDirty}
                        />
                    </form>
                </div>
                <div className={styles.overlayContainer}>
                    <div className={`${styles.overlayPanel} + ${styles.overlayLeft}`}></div>
                    <div className={`${styles.overlayPanel} + ${styles.overlayRight}`}></div>
                </div>
            </div>
        </section>
    );
};
