module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "globals": {
        "JSX": true,
      },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": 'module',
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        'import',
        'jsx-a11y',
        "react"
    ],
    "rules": {
    }
}
