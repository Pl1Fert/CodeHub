import * as yup from "yup";

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, "Username must contain at least 1 character")
        .max(100, "Username must contain maximum 100 characters")
        .required("Username is required!"),
    email: yup.string().email("Please enter a valid email format!").required("Email is required!"),
    password: yup
        .string()
        .min(1, "Password must contain at least 1 character")
        .max(128, "Password must contain maximum 128 characters")
        .required("Password is required!"),
});
