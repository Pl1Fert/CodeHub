import * as yup from "yup";

export const registerSchema = yup.object().shape({
    nickname: yup
        .string()
        .min(4, "Nickname must contain at least 4 characters")
        .required('Username is required!'),
    email: yup
        .string()
        .email("Please enter a valid email format!")
        .required("Email is required!"),
    password: yup
        .string()
        .min(4, "Password must contain at least 4 characters")
        .required("Password is required!"),
});