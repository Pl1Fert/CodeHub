import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email format!").required("Email is required!"),
    password: yup
        .string()
        .min(1, "Password must contain at least 1 character")
        .max(128, "Password must contain maximum 128 characters")
        .required("Password is required!"),
});
