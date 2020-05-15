module.exports = {
    env: {
        "browser": true,
        "node": true,
    },
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        'vue',
    ],
    rules: {
        'max-len': ['warn', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        /* Personal preference.
           Especially for HTML, when there's too many elements I find 2-spaces indentation hard to read.

           An argument could be made that, with 4-spaces indentation, things can get a little too long and hard to read
           However, it's a compromise I'm willing to make (at least for now, I can be convinced!) for readability
        */
        "indent": ["warn", 4],
        "vue/html-indent": ["warn", 4],
        "vue/script-indent": ["warn", 4, {
            "baseIndent": 1
        }],

        /* Personal preference.
           I don't think it's unreasonable to have multiple attributes on the same line HTML
           However, as soon as we have multiple lines, I'd rather we only have one attribute per line. Go big or go home?
        */
        "vue/max-attributes-per-line": ["warn", {
            "singleline": 4,
            "multiline": {
                "max": 1,
                "allowFirstLine": true
            }
        }
        ],

        // TODO: Document this lint
        "vue/html-self-closing": ["warn", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            }
        }],
    },
    "overrides": [
        // Fix eslint's indent rule interfering with vue-eslint's script-indent rule
        {
            "files": ["*.vue"],
            "rules": {
                "indent": "off"
            }
        }
    ]
}
