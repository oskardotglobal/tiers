import defaults from "npm:@antfu/eslint-config"

export default defaults(
    {
        stylistic: {
            indent: 4,
            quotes: "double",
        },
    },
    {
        files: ["tiers.js"],
        ignores: ["**/*"],
    },
)
