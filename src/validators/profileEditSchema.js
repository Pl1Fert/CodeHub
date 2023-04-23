import * as yup from "yup";

export const profileEditSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email format!").required("Email is required!"),
    username: yup
        .string()
        .min(1, "Username must contain at least 1 character")
        .max(100, "Username must contain maximum 100 characters")
        .required("Username is required!"),
    id: yup.number().required(),
});
