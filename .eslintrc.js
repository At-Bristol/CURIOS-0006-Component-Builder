module.exports = {
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
        "mocha":   true
    },  
    "extends": [
        "airbnb-base", "plugin:react/recommended",
    ],
    "rules": {
        "class-methods-use-this": 0,
        "semi":["error", "never"],
        "no-confusing-arrow":0.
    }
};