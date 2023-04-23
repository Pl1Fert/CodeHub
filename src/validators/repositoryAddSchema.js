import * as yup from "yup";

export const repositoryAddSchema = yup.object().shape({
    repositoryName: yup
        .string()
        .min(1, "Repository name must contain at least 1 character")
        .max(50, "Repository name must contain maximum 50 characters")
        .required("Repository name is required!"),
});
