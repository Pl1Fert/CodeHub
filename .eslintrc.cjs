module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    globals: {
        JSX: true,
    },
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["import", "jsx-a11y", "react"],
    rules: {
        "react/prop-types": "off",
        "no-unused-vars": ["warn", { vars: "all", args: "none" }],
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],
                "newlines-between": "always-and-inside-groups",
            },
        ],
    },
};
